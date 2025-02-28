// Módulo para implementar los comandos del terminal
export class TerminalCommands {
    constructor(terminal) {
        this.terminal = terminal;
    }
    
    // Ejecutar un comando
    executeCommand(cmd) {
        const terminal = this.terminal;
        
        // Analizar comando y argumentos
        const args = cmd.trim().split(/\s+/);
        const mainCommand = args[0].toLowerCase();
        
        // Procesar según el comando
        switch (mainCommand) {
            case "help":
                terminal.terminalOutput.push(...terminal.translations[terminal.lang].help);
                break;
                
            case "about":
                // Manejar texto con múltiples líneas
                this.handleMultilineOutput(terminal.translations[terminal.lang].about);
                break;
                
            case "experience":
                // Manejar texto con múltiples líneas
                this.handleMultilineOutput(terminal.translations[terminal.lang].experience);
                break;
                
            case "education":
                // Manejar texto con múltiples líneas
                this.handleMultilineOutput(terminal.translations[terminal.lang].education);
                break;
                
            case "projects":
                // Manejar texto con múltiples líneas
                this.handleMultilineOutput(terminal.translations[terminal.lang].projects);
                break;
                
            case "skills":
                terminal.terminalOutput.push(...terminal.translations[terminal.lang].skills);
                break;
                
            case "clear":
                terminal.terminalOutput = [];
                break;
                
            case "theme":
                this.toggleTheme();
                return;
                
            case "lang":
                this.toggleLanguage();
                return;
                
            case "ls":
                terminal.fileSystem.listDirectory(args[1] || terminal.currentPath);
                break;
                
            case "cd":
                terminal.fileSystem.changeDirectory(args[1] || "/");
                break;
                
            case "cat":
                if (args.length < 2) {
                    terminal.terminalOutput.push("Usage: cat [filename]");
                } else {
                    terminal.fileSystem.displayFile(args[1]);
                }
                break;
                
            default:
                terminal.terminalOutput.push(`${terminal.translations[terminal.lang].unknown} ${mainCommand}`);
        }
        
        terminal.updateScroll(true);
    }
    
    // Manejar texto que puede contener múltiples líneas
    handleMultilineOutput(text) {
        const terminal = this.terminal;
        
        // Si el texto contiene saltos de línea, dividirlo y añadir cada línea
        if (text.includes('\n')) {
            const lines = text.split('\n');
            for (const line of lines) {
                terminal.terminalOutput.push(line);
            }
        } else {
            // Si es una sola línea, añadirla directamente
            terminal.terminalOutput.push(text);
        }
    }
    
    // Alternar entre temas claro y oscuro
    toggleTheme() {
        const terminal = this.terminal;
        terminal.theme = terminal.theme === "dark" ? "light" : "dark";
        document.body.style.backgroundColor = terminal.theme === "dark" ? "#1e1e1e" : "#f4f4f4";
        terminal.renderer.drawInterface();
    }
    
    // Alternar entre inglés y español
    toggleLanguage() {
        const terminal = this.terminal;
        terminal.lang = terminal.lang === "en" ? "es" : "en";
        
        // Mostrar mensaje de bienvenida con efecto typewriter
        const welcomeMessage = terminal.translations[terminal.lang].welcome;
        terminal.effects.startTypewriterEffect(welcomeMessage);
        
        terminal.updateScroll(true);
        terminal.renderer.drawInterface();
    }
}