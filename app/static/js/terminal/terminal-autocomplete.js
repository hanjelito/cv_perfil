// Módulo para funcionalidad de autocompletado
export class TerminalAutocomplete {
    constructor(terminal) {
        this.terminal = terminal;
    }
    
    // Generar sugerencias de autocompletado
    generateSuggestions() {
        const terminal = this.terminal;
        
        // Analizar el comando actual
        const args = terminal.command.trim().split(/\s+/);
        
        // Si el comando está vacío, no hay sugerencias
        if (args[0] === "") {
            return [];
        }
        
        // Autocompletado de la primera palabra (comando)
        if (args.length === 1 && !terminal.command.endsWith(" ")) {
            const commandStart = args[0].toLowerCase();
            const commands = ["help", "about", "experience", "education", "projects", "skills", "clear", "theme", "lang", "ls", "cd", "cat"];
            return commands.filter(cmd => cmd.startsWith(commandStart));
        }
        
        // Autocompletado de archivo/directorio para comandos que lo necesitan
        if ((args[0] === "cd" || args[0] === "ls" || args[0] === "cat") && args.length <= 2) {
            let path = args[1] || "";
            
            // Obtener el contenido del directorio actual
            let currentDir;
            let dirPath;
            
            if (path.includes("/") && !path.startsWith("/")) {
                // Manejar rutas relativas con subdirectorios
                const lastSlashIndex = path.lastIndexOf("/");
                const dirPart = path.substring(0, lastSlashIndex + 1);
                path = path.substring(lastSlashIndex + 1);
                dirPath = terminal.fileSystem.getItemFromPath(terminal.currentPath + "/" + dirPart);
            } else if (path.startsWith("/")) {
                // Manejar rutas absolutas
                const lastSlashIndex = path.lastIndexOf("/");
                const dirPart = path.substring(0, lastSlashIndex + 1) || "/";
                path = path.substring(lastSlashIndex + 1);
                dirPath = terminal.fileSystem.getItemFromPath(dirPart);
            } else {
                // Manejar directorio actual
                dirPath = terminal.fileSystem.getItemFromPath(terminal.currentPath);
            }
            
            currentDir = dirPath;
            
            if (!currentDir || currentDir.type !== "folder") {
                return [];
            }
            
            // Filtrar contenido basado en el prefijo de la ruta
            const results = Object.keys(currentDir.contents)
                .filter(name => name.startsWith(path))
                .map(name => {
                    const item = currentDir.contents[name];
                    return item.type === "folder" ? name + "/" : name;
                });
            
            return results;
        }
        
        return [];
    }
    
    // Autocompletar el comando
    complete() {
        const terminal = this.terminal;
        const suggestions = this.generateSuggestions();
        
        if (suggestions.length === 1) {
            // Solo una sugerencia, autocompletar
            const args = terminal.command.trim().split(/\s+/);
            
            if (args.length === 1 && !terminal.command.endsWith(" ")) {
                // Autocompletar comando
                terminal.command = suggestions[0] + " ";
                terminal.cursorPosition = terminal.command.length;
            } else if ((args[0] === "cd" || args[0] === "ls" || args[0] === "cat") && args.length <= 2) {
                // Autocompletar ruta
                const commandPart = args[0] + " ";
                
                let pathPart = args[1] || "";
                
                if (pathPart.includes("/") && !pathPart.startsWith("/")) {
                    // Manejar ruta relativa con subdirectorios
                    const lastSlashIndex = pathPart.lastIndexOf("/");
                    const dirPart = pathPart.substring(0, lastSlashIndex + 1);
                    terminal.command = commandPart + dirPart + suggestions[0];
                } else if (pathPart.startsWith("/")) {
                    // Manejar ruta absoluta
                    const lastSlashIndex = pathPart.lastIndexOf("/");
                    const dirPart = pathPart.substring(0, lastSlashIndex + 1);
                    terminal.command = commandPart + dirPart + suggestions[0];
                } else {
                    // Caso simple
                    terminal.command = commandPart + suggestions[0];
                }
                
                terminal.cursorPosition = terminal.command.length;
            }
            
            terminal.showingSuggestions = false;
            terminal.tabSuggestions = [];
        } else if (suggestions.length > 1) {
            // Múltiples sugerencias, mostrarlas
            terminal.tabSuggestions = suggestions;
            terminal.showingSuggestions = true;
            
            // Encontrar prefijo común si se presiona doble Tab
            const now = Date.now();
            if (now - terminal.lastTabTime < 500) {
                // Encontrar el prefijo común entre todas las sugerencias
                let commonPrefix = suggestions[0];
                for (let i = 1; i < suggestions.length; i++) {
                    let j = 0;
                    while (j < commonPrefix.length && j < suggestions[i].length && 
                           commonPrefix[j] === suggestions[i][j]) {
                        j++;
                    }
                    commonPrefix = commonPrefix.substring(0, j);
                }
                
                // Si tenemos un prefijo común más largo que lo que ya está escrito
                if (commonPrefix.length > 0) {
                    const args = terminal.command.trim().split(/\s+/);
                    
                    if (args.length === 1 && !terminal.command.endsWith(" ")) {
                        // Autocompletar comando con prefijo común
                        terminal.command = commonPrefix;
                        terminal.cursorPosition = terminal.command.length;
                    } else if ((args[0] === "cd" || args[0] === "ls" || args[0] === "cat") && args.length <= 2) {
                        // Autocompletar ruta con prefijo común
                        const commandPart = args[0] + " ";
                        
                        let pathPart = args[1] || "";
                        
                        if (pathPart.includes("/") && !pathPart.startsWith("/")) {
                            // Manejar ruta relativa con subdirectorios
                            const lastSlashIndex = pathPart.lastIndexOf("/");
                            const dirPart = pathPart.substring(0, lastSlashIndex + 1);
                            terminal.command = commandPart + dirPart + commonPrefix;
                        } else if (pathPart.startsWith("/")) {
                            // Manejar ruta absoluta
                            const lastSlashIndex = pathPart.lastIndexOf("/");
                            const dirPart = pathPart.substring(0, lastSlashIndex + 1);
                            terminal.command = commandPart + dirPart + commonPrefix;
                        } else {
                            // Caso simple
                            terminal.command = commandPart + commonPrefix;
                        }
                        
                        terminal.cursorPosition = terminal.command.length;
                    }
                }
            }
            
            terminal.lastTabTime = now;
        }
        
        terminal.renderer.drawInterface();
    }
}