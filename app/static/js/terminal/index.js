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
    }
    
    // Inicializar el terminal
    init() {
        // Configurar eventos
        document.addEventListener("keydown", this.handleKeyDown);
        this.canvas.addEventListener("wheel", this.handleWheel);
        window.addEventListener("resize", this.handleResize);
        
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
}