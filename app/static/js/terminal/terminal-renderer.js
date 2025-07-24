// Módulo encargado del renderizado del terminal
export class TerminalRenderer {
    constructor(terminal) {
        this.terminal = terminal;
    }
    
    // Redimensionar el canvas para ajustarse a la ventana
    resizeCanvas() {
        const devicePixelRatio = window.devicePixelRatio || 1;
        const terminal = this.terminal;
        
        // Establecer el tamaño real del canvas
        terminal.canvas.width = (window.innerWidth - 40) * devicePixelRatio;
        terminal.canvas.height = (window.innerHeight - 40) * devicePixelRatio;
        
        // Establecer el tamaño de visualización del canvas
        terminal.canvas.style.width = `${window.innerWidth - 40}px`;
        terminal.canvas.style.height = `${window.innerHeight - 40}px`;
        
        // Escalar el contexto para tener en cuenta la relación de píxeles del dispositivo
        terminal.ctx.scale(devicePixelRatio, devicePixelRatio);
        
        // Ajustar tamaño de fuente según ancho de pantalla, con límites
        terminal.fontSize = Math.max(12, Math.min(18, window.innerWidth / 80));
        terminal.lineHeight = terminal.fontSize + 8;
        
        // Establecer la fuente con el nuevo tamaño
        terminal.ctx.font = `${terminal.fontSize}px 'Fira Code', monospace`;
        
        // Actualizar la visualización con las nuevas dimensiones
        this.drawInterface();
    }
    
    // Redimensionar canvas específicamente para el teclado móvil
    resizeCanvasForKeyboard(maxHeight) {
        const devicePixelRatio = window.devicePixelRatio || 1;
        const terminal = this.terminal;
        
        // Calcular dimensiones apropiadas
        const canvasWidth = window.innerWidth - 40;
        const canvasHeight = Math.min(maxHeight - 40, window.innerHeight - 40);
        
        // Establecer el tamaño real del canvas manteniendo la proporción
        terminal.canvas.width = canvasWidth * devicePixelRatio;
        terminal.canvas.height = canvasHeight * devicePixelRatio;
        
        // Establecer el tamaño de visualización del canvas
        terminal.canvas.style.width = `${canvasWidth}px`;
        terminal.canvas.style.height = `${canvasHeight}px`;
        
        // Reescalar el contexto correctamente
        terminal.ctx = terminal.canvas.getContext("2d");
        terminal.ctx.scale(devicePixelRatio, devicePixelRatio);
        
        // Mantener el tamaño de fuente
        terminal.fontSize = Math.max(12, Math.min(18, window.innerWidth / 80));
        terminal.lineHeight = terminal.fontSize + 8;
        terminal.ctx.font = `${terminal.fontSize}px 'Fira Code', monospace`;
        
        // Redibujar la interfaz
        this.drawInterface();
    }
    
    // Calcular líneas visibles en el área del terminal
    getVisibleLines() {
        const terminal = this.terminal;
        const terminalHeight = terminal.canvas.height / (window.devicePixelRatio || 1) - 110;
        return Math.floor(terminalHeight / terminal.lineHeight);
    }
    
    // Dibujar la interfaz del terminal
    drawInterface() {
        const terminal = this.terminal;
        const canvasWidth = terminal.canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = terminal.canvas.height / (window.devicePixelRatio || 1);
        
        // Limpiar canvas
        terminal.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        // Configurar colores según tema
        const bgColor = terminal.theme === "dark" ? "#1e1e1e" : "#f4f4f4";
        const headerBgColor = terminal.theme === "dark" ? "#2d2d2d" : "#e4e4e4";
        const mainTextColor = terminal.theme === "dark" ? "#33ff33" : "#333333";
        const headerTextColor = terminal.theme === "dark" ? "#ffffff" : "#333333";
        const promptColor = terminal.theme === "dark" ? "#00ff00" : "#0066cc";
        const suggestionColor = terminal.theme === "dark" ? "#888888" : "#888888";
        
        // Rellenar fondo
        terminal.ctx.fillStyle = bgColor;
        terminal.ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        // Dibujar encabezado
        terminal.ctx.fillStyle = headerBgColor;
        terminal.ctx.fillRect(0, 0, canvasWidth, 50);
        
        // Configurar fuente para encabezado
        terminal.ctx.font = `${terminal.fontSize}px 'Fira Code', monospace`;
        terminal.ctx.fillStyle = headerTextColor;
        
        // Dibujar texto de encabezado (ajustado al tamaño de pantalla)
        const headerText = "👤 Angel Gonzales  📧 jgonzales@peruyoung.com  🌐 github.com/hanjelito";
        
        // Medir y potencialmente truncar el texto del encabezado según ancho del canvas
        const headerWidth = terminal.ctx.measureText(headerText).width;
        let displayHeaderText = headerText;
        
        if (headerWidth > canvasWidth - 20) {
            // Truncar y agregar puntos suspensivos si es demasiado ancho
            let truncatedText = "👤 Angel Gonzales  📧 jgonzales@peruyoung.com";
            if (terminal.ctx.measureText(truncatedText).width > canvasWidth - 20) {
                truncatedText = "👤 Angel Gonzales";
            }
            displayHeaderText = truncatedText;
        }
        
        terminal.ctx.fillText(displayHeaderText, 10, 30);
        
        // Dibujar área del terminal
        terminal.ctx.fillStyle = bgColor;
        terminal.ctx.fillRect(10, 60, canvasWidth - 20, canvasHeight - 70);
        
        // Dibujar contenido del terminal
        const visibleLines = this.getVisibleLines();
        const startLine = terminal.scrollOffset;
        const endLine = Math.min(startLine + visibleLines, terminal.terminalOutput.length);
        
        let y = 80;
        for (let i = startLine; i < endLine; i++) {
            const line = terminal.terminalOutput[i];
            
            // Detectar diferentes tipos de líneas especiales
            const isSkillsLine = (
                // Detectar elementos específicos de la visualización de habilidades
                line.includes('PROGRAMMING LANGUAGES') || 
                line.includes('FRAMEWORKS & LIBRARIES') ||
                line.includes('DATABASES') ||
                line.includes('DEVOPS') ||
                line.includes('LENGUAJES DE PROGRAMACIÓN') ||
                line.includes('FRAMEWORKS Y BIBLIOTECAS') ||
                line.includes('BASES DE DATOS') ||
                line.includes('DEVOPS Y HERRAMIENTAS') ||
                line.includes('Expert') || line.includes('Advanced') || line.includes('Intermediate') ||
                line.includes('Experto') || line.includes('Avanzado') || line.includes('Intermedio') ||
                line.includes('█') || line.includes('▒') ||
                line.includes('┌─') || line.includes('└─') ||
                (line.includes('│') && !line.includes('visitor'))
            );
            
            const isAsciiBanner = (
                line.includes('█') || 
                line.includes('╔') || line.includes('╗') || 
                line.includes('╚') || line.includes('╝') || 
                line.includes('═') || line.includes('║') || 
                line.includes('╦') || line.includes('╩')
            );
            
            // Usar diferentes colores según el tipo de contenido
            if (isSkillsLine) {
                // Color verde brillante para líneas de habilidades
                terminal.ctx.fillStyle = terminal.theme === "dark" ? "#00ff66" : "#00cc66";
            } else if (isAsciiBanner) {
                // Color para el banner ASCII
                terminal.ctx.fillStyle = terminal.theme === "dark" ? "#00ff99" : "#0066cc";
            } else {
                // Color normal para texto regular
                terminal.ctx.fillStyle = terminal.theme === "dark" ? "#33ff33" : "#333333";
            }
            
            // Añadir límite de ancho para evitar desbordamiento
            terminal.ctx.fillText(line, 20, y, canvasWidth - 40);
            y += terminal.lineHeight;
        }
        
        // Dibujar prompt del comando
        terminal.ctx.fillStyle = promptColor;
        const promptText = `visitor@juan-gon:${terminal.currentPath}$ `;
        const promptWidth = terminal.ctx.measureText(promptText).width;
        terminal.ctx.fillText(promptText, 20, y);
        
        // Dibujar comando actual con cursor
        const textBeforeCursor = terminal.command.substring(0, terminal.cursorPosition);
        const textAfterCursor = terminal.command.substring(terminal.cursorPosition);
        const cursorX = 20 + promptWidth + terminal.ctx.measureText(textBeforeCursor).width;
        
        terminal.ctx.fillText(textBeforeCursor, 20 + promptWidth, y);
        
        if (terminal.cursorVisible) {
            terminal.ctx.fillRect(cursorX, y - terminal.fontSize, 2, terminal.fontSize);
        }
        
        terminal.ctx.fillText(textAfterCursor, cursorX, y);
        
        // Dibujar sugerencias de Tab si hay alguna
        if (terminal.showingSuggestions && terminal.tabSuggestions.length > 0) {
            terminal.ctx.fillStyle = suggestionColor;
            terminal.ctx.fillText(
                `${terminal.translations[terminal.lang].suggestions} ${terminal.tabSuggestions.join(', ')}`,
                20,
                y + terminal.lineHeight
            );
        }
    }
}