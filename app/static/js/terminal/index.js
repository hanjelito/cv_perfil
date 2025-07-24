// Punto de entrada principal para el módulo Terminal
import { TerminalRenderer } from './terminal-renderer.js';
import { TerminalCommands } from './terminal-commands.js';
import { TerminalFileSystem } from './terminal-filesystem.js';
import { TerminalAutocomplete } from './terminal-autocomplete.js';
import { TerminalEffects } from './terminal-effects.js';

export class Terminal {
    constructor(canvas, directoryStructure, translations) {
        // Inicializar estado base del terminal
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.directoryStructure = directoryStructure;
        this.translations = translations;
        
        // Input móvil
        this.mobileInput = document.getElementById('mobileInput');
        this.mobileKeyboardBtn = document.getElementById('mobileKeyboardBtn');
        this.isMobile = this.detectMobile();
        this.keyboardVisible = false;
        this.originalViewportHeight = window.innerHeight;
        
        // Estado del terminal
        this.fontSize = 16;
        this.lineHeight = this.fontSize + 8;
        this.terminalOutput = [];
        this.command = "";
        this.commandHistory = [];
        this.historyIndex = -1;
        this.cursorPosition = 0;
        this.cursorVisible = true;
        this.theme = "dark";
        this.lang = "en";
        this.scrollOffset = 0;
        this.currentPath = "/";
        this.tabSuggestions = [];
        this.showingSuggestions = false;
        this.lastTabTime = 0;
        
        // Para el efecto typewriter
        this.typewriterActive = false;
        this.typewriterQueue = [];
        this.typewriterIndex = 0;
        this.typewriterLine = "";
        this.typewriterCallback = null;
        
        // Inicializar módulos
        this.renderer = new TerminalRenderer(this);
        this.commands = new TerminalCommands(this);
        this.fileSystem = new TerminalFileSystem(this);
        this.autocomplete = new TerminalAutocomplete(this);
        this.effects = new TerminalEffects(this);
        
        // Vincular métodos para preservar el contexto 'this'
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleMobileInput = this.handleMobileInput.bind(this);
        this.handleCanvasTouch = this.handleCanvasTouch.bind(this);
    }
    
    // Inicializar el terminal
    init() {
        // Configurar eventos
        document.addEventListener("keydown", this.handleKeyDown);
        this.canvas.addEventListener("wheel", this.handleWheel);
        window.addEventListener("resize", this.handleResize);
        
        // Configurar eventos móviles - siempre configurar para máxima compatibilidad
        this.canvas.addEventListener("touchstart", this.handleCanvasTouch);
        this.canvas.addEventListener("click", this.handleCanvasTouch);
        this.mobileKeyboardBtn.addEventListener("touchstart", this.handleCanvasTouch);
        this.mobileKeyboardBtn.addEventListener("click", this.handleCanvasTouch);
        this.mobileInput.addEventListener("input", this.handleMobileInput);
        this.mobileInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                this.handleMobileEnter();
            }
        });
        
        // Detectar cuando aparece/desaparece el teclado virtual
        this.mobileInput.addEventListener("focus", () => this.handleKeyboardShow());
        this.mobileInput.addEventListener("blur", () => this.handleKeyboardHide());
        
        // Detectar cambios en el viewport para el teclado
        window.addEventListener("resize", () => this.handleViewportChange());
        
        // Iniciar parpadeo del cursor
        this.cursorInterval = setInterval(() => {
            this.cursorVisible = !this.cursorVisible;
            this.renderer.drawInterface();
        }, 500);
        
        // Iniciar con pantalla vacía
        this.terminalOutput = [];
        
        // Mostrar mensaje de bienvenida con efecto typewriter
        const welcomeMessage = this.translations[this.lang].welcome;
        this.effects.startTypewriterEffect(welcomeMessage);
        
        // Renderizado inicial
        this.renderer.resizeCanvas();
    }
    
    // Procesar los comandos ingresados
    processCommand(cmd) {
        if (cmd.trim() === "") return;
        
        // Agregar al historial
        this.commandHistory.unshift(cmd);
        if (this.commandHistory.length > 50) this.commandHistory.pop();
        this.historyIndex = -1;
        
        // Limpiar sugerencias
        this.showingSuggestions = false;
        this.tabSuggestions = [];
        
        // Ejecutar el comando
        this.commands.executeCommand(cmd);
    }
    
    // Manejar eventos de teclado
    handleKeyDown(e) {
        // Prevenir comportamiento por defecto para teclas de control
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "Tab"].includes(e.key)) {
            e.preventDefault();
        }
        
        // Ocultar sugerencias cuando se presiona cualquier tecla que no sea Tab
        if (e.key !== "Tab" && this.showingSuggestions) {
            this.showingSuggestions = false;
            this.tabSuggestions = [];
        }
        
        // Manejar teclas especiales
        switch (e.key) {
            case "Enter":
                // Procesar comando y limpiar entrada
                this.terminalOutput.push(`visitor@cv:${this.currentPath}$ ${this.command}`);
                this.processCommand(this.command);
                this.command = "";
                this.cursorPosition = 0;
                break;
                
            case "Backspace":
                // Eliminar carácter antes del cursor
                if (this.cursorPosition > 0) {
                    this.command = this.command.substring(0, this.cursorPosition - 1) + this.command.substring(this.cursorPosition);
                    this.cursorPosition--;
                }
                break;
                
            case "Delete":
                // Eliminar carácter en la posición del cursor
                if (this.cursorPosition < this.command.length) {
                    this.command = this.command.substring(0, this.cursorPosition) + this.command.substring(this.cursorPosition + 1);
                }
                break;
                
            case "ArrowLeft":
                // Mover cursor a la izquierda
                if (this.cursorPosition > 0) {
                    this.cursorPosition--;
                }
                break;
                
            case "ArrowRight":
                // Mover cursor a la derecha
                if (this.cursorPosition < this.command.length) {
                    this.cursorPosition++;
                }
                break;
                
            case "Home":
                // Mover cursor al inicio
                this.cursorPosition = 0;
                break;
                
            case "End":
                // Mover cursor al final
                this.cursorPosition = this.command.length;
                break;
                
            case "ArrowUp":
                // Navegar historial de comandos (anterior)
                if (this.commandHistory.length > 0 && this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                    this.command = this.commandHistory[this.historyIndex];
                    this.cursorPosition = this.command.length;
                }
                break;
                
            case "ArrowDown":
                // Navegar historial de comandos (siguiente)
                if (this.historyIndex > 0) {
                    this.historyIndex--;
                    this.command = this.commandHistory[this.historyIndex];
                    this.cursorPosition = this.command.length;
                } else if (this.historyIndex === 0) {
                    this.historyIndex = -1;
                    this.command = "";
                    this.cursorPosition = 0;
                }
                break;
                
            case "Tab":
                // Manejar autocompletado
                this.autocomplete.complete();
                return; // Omitir la llamada a drawInterface ya que se maneja en autocomplete
                
            default:
                // Agregar caracteres imprimibles al comando
                if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
                    this.command = this.command.substring(0, this.cursorPosition) + e.key + this.command.substring(this.cursorPosition);
                    this.cursorPosition++;
                }
        }
        
        this.renderer.drawInterface();
    }
    
    // Manejar eventos de rueda del mouse para desplazamiento
    handleWheel(e) {
        const visibleLines = this.renderer.getVisibleLines();
        
        if (e.deltaY < 0) {
            // Desplazar hacia arriba
            if (this.scrollOffset > 0) {
                this.scrollOffset--;
                this.renderer.drawInterface();
            }
        } else if (e.deltaY > 0) {
            // Desplazar hacia abajo
            if (this.scrollOffset < this.terminalOutput.length - visibleLines) {
                this.scrollOffset++;
                this.renderer.drawInterface();
            }
        }
        
        e.preventDefault();
    }
    
    // Manejar cambio de tamaño de ventana
    handleResize() {
        this.renderer.resizeCanvas();
    }
    
    // Actualizar posición de desplazamiento
    updateScroll(forceToBottom = false) {
        const visibleLines = this.renderer.getVisibleLines();
        const isAtBottom = this.scrollOffset === Math.max(0, this.terminalOutput.length - visibleLines);
        
        if (forceToBottom || isAtBottom) {
            this.scrollOffset = Math.max(0, this.terminalOutput.length - visibleLines);
        }
    }
    
    // Detectar si es un dispositivo móvil
    detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
               ('ontouchstart' in window) ||
               (navigator.maxTouchPoints > 0) ||
               (navigator.msMaxTouchPoints > 0);
    }
    
    // Manejar toque en canvas para dispositivos móviles
    handleCanvasTouch(e) {
        console.log('Canvas touched'); // Debug
        
        // No prevenir default para asegurar que funcione
        
        // Enfocar el input oculto para mostrar el teclado virtual
        this.mobileInput.value = this.command;
        
        // Múltiples intentos para activar el teclado
        this.mobileInput.focus();
        
        // Simular un click del usuario
        const focusEvent = new Event('focus', { bubbles: true });
        this.mobileInput.dispatchEvent(focusEvent);
        
        // Forzar el foco con diferentes delays
        setTimeout(() => {
            this.mobileInput.focus();
            this.mobileInput.select();
        }, 0);
        
        setTimeout(() => {
            this.mobileInput.focus();
            if (this.command.length > 0) {
                this.mobileInput.setSelectionRange(this.command.length, this.command.length);
            }
        }, 100);
    }
    
    // Manejar entrada de texto desde el input móvil
    handleMobileInput(e) {
        const newValue = e.target.value;
        
        // Actualizar el comando actual
        this.command = newValue;
        this.cursorPosition = newValue.length;
        
        // Redibujar la interfaz
        this.renderer.drawInterface();
    }
    
    // Manejar Enter en dispositivos móviles
    handleMobileEnter() {
        // Procesar comando
        this.terminalOutput.push(`visitor@cv:${this.currentPath}$ ${this.command}`);
        this.processCommand(this.command);
        
        // Limpiar comando e input
        this.command = "";
        this.cursorPosition = 0;
        this.mobileInput.value = "";
        
        // Mantener el foco para siguiente comando
        setTimeout(() => {
            this.mobileInput.focus();
        }, 100);
        
        this.renderer.drawInterface();
    }
    
    // Manejar cuando aparece el teclado virtual
    handleKeyboardShow() {
        console.log('Keyboard shown');
        this.keyboardVisible = true;
        
        // Ajustar el canvas para dejar espacio al teclado
        setTimeout(() => {
            this.adjustCanvasForKeyboard();
        }, 300); // Delay para que el teclado termine de aparecer
    }
    
    // Manejar cuando desaparece el teclado virtual
    handleKeyboardHide() {
        console.log('Keyboard hidden');
        this.keyboardVisible = false;
        
        // Restaurar el tamaño original del canvas
        setTimeout(() => {
            this.renderer.resizeCanvas();
        }, 300);
    }
    
    // Detectar cambios en el viewport (para teclados virtuales)
    handleViewportChange() {
        if (this.isMobile) {
            const currentHeight = window.innerHeight;
            const heightDifference = this.originalViewportHeight - currentHeight;
            
            // Si la altura se redujo significativamente, probablemente apareció el teclado
            if (heightDifference > 150 && !this.keyboardVisible) {
                this.handleKeyboardShow();
            } else if (heightDifference < 50 && this.keyboardVisible) {
                this.handleKeyboardHide();
            }
        }
    }
    
    // Ajustar canvas para el teclado virtual
    adjustCanvasForKeyboard() {
        const availableHeight = window.innerHeight;
        const maxCanvasHeight = availableHeight - 120; // Espacio para input y padding
        
        // Reducir altura del canvas
        this.canvas.style.maxHeight = maxCanvasHeight + 'px';
        this.canvas.height = Math.min(this.canvas.height, maxCanvasHeight);
        
        // Scroll automático hacia abajo para mostrar la línea de comando
        this.updateScroll(true);
        this.renderer.drawInterface();
        
        // Scroll suave del body para mostrar el área de escritura
        document.body.scrollTop = document.body.scrollHeight;
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
    }
}