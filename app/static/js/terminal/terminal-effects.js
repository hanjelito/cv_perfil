// Módulo para efectos visuales del terminal
export class TerminalEffects {
    constructor(terminal) {
        this.terminal = terminal;
    }
    
    // Iniciar efecto de máquina de escribir
    startTypewriterEffect(lines, callback = null) {
        const terminal = this.terminal;
        
        // Detener cualquier animación typewriter activa
        terminal.typewriterActive = true;
        terminal.typewriterQueue = Array.isArray(lines) ? [...lines] : [lines];
        terminal.typewriterIndex = 0;
        terminal.typewriterLine = "";
        terminal.typewriterCallback = callback;
        
        // Iniciar la animación del primer carácter
        this.typeNextCharacter();
    }
    
    // Escribir el siguiente carácter
    typeNextCharacter() {
        const terminal = this.terminal;
        
        if (!terminal.typewriterActive || terminal.typewriterQueue.length === 0) {
            // La animación ha terminado o se ha detenido
            if (terminal.typewriterCallback) {
                terminal.typewriterCallback();
            }
            return;
        }
        
        const currentLine = terminal.typewriterQueue[0];
        
        if (terminal.typewriterIndex < currentLine.length) {
            // ACELERADO: Escribir múltiples caracteres a la vez para acelerar
            const charsPerFrame = 4; // Aumentado de 1 a 4 caracteres por frame
            
            // Determinar cuántos caracteres agregar (sin exceder el límite)
            const charsToAdd = Math.min(charsPerFrame, currentLine.length - terminal.typewriterIndex);
            terminal.typewriterLine += currentLine.substr(terminal.typewriterIndex, charsToAdd);
            terminal.typewriterIndex += charsToAdd;
            
            // Actualizar la visualización
            if (terminal.terminalOutput.length > 0 && 
                terminal.terminalOutput[terminal.terminalOutput.length - 1] === terminal.typewriterLine.substring(0, terminal.typewriterLine.length - charsToAdd)) {
                terminal.terminalOutput[terminal.terminalOutput.length - 1] = terminal.typewriterLine;
            } else {
                terminal.terminalOutput.push(terminal.typewriterLine);
            }
            
            terminal.updateScroll(true);
            terminal.renderer.drawInterface();
            
            // Programar el siguiente grupo de caracteres con un retraso menor
            const delay = 5; // Reducido de 20-50ms a solo 5ms
            setTimeout(() => this.typeNextCharacter(), delay);
        } else {
            // Línea completada, pasar a la siguiente
            terminal.typewriterQueue.shift();
            terminal.typewriterIndex = 0;
            terminal.typewriterLine = "";
            
            if (terminal.typewriterQueue.length > 0) {
                // ACELERADO: Mostrar las líneas ASCII casi instantáneamente
                if (terminal.typewriterQueue[0].includes('█') || 
                    terminal.typewriterQueue[0].includes('╔') || 
                    terminal.typewriterQueue[0].includes('═')) {
                    setTimeout(() => this.typeNextCharacter(), 1); // Más rápido
                } else {
                    setTimeout(() => this.typeNextCharacter(), 50); // Más rápido
                }
            } else {
                // Todas las líneas completadas
                terminal.typewriterActive = false;
                if (terminal.typewriterCallback) {
                    terminal.typewriterCallback();
                }
            }
        }
    }
}