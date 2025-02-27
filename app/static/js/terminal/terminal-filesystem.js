// Módulo para manejar sistema de archivos virtual
export class TerminalFileSystem {
    constructor(terminal) {
        this.terminal = terminal;
    }
    
    // Obtener directorio o archivo desde una ruta
    getItemFromPath(path) {
        const terminal = this.terminal;
        
        // Manejar rutas absolutas y relativas
        const fullPath = path.startsWith("/") ? path : (terminal.currentPath + "/" + path).replace(/\/+/g, "/");
        
        // Dividir ruta en segmentos
        const segments = fullPath.split("/").filter(Boolean);
        
        // Comenzar desde la raíz
        let current = terminal.directoryStructure["/"];
        
        // Recorrer la ruta
        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i];
            
            // Manejar ".." (subir un directorio)
            if (segment === "..") {
                // Eliminar el último segmento de la ruta
                segments.splice(i - 1, 2);
                i -= 2;
                
                // Si fuimos más allá de la raíz, resetear a raíz
                if (i < -1) {
                    current = terminal.directoryStructure["/"];
                    i = -1;
                } else {
                    // Recalcular desde la raíz
                    current = terminal.directoryStructure["/"];
                    for (let j = 0; j <= i; j++) {
                        current = current.contents[segments[j]];
                    }
                }
            } else if (current.contents && current.contents[segment]) {
                current = current.contents[segment];
            } else {
                return null; // Elemento no encontrado
            }
        }
        
        return current;
    }
    
    // Listar contenido del directorio
    listDirectory(path) {
        const terminal = this.terminal;
        const item = path ? this.getItemFromPath(path) : this.getItemFromPath(terminal.currentPath);
        
        if (!item) {
            terminal.terminalOutput.push(`${terminal.translations[terminal.lang].notFound} ${path}`);
            return;
        }
        
        if (item.type !== "folder") {
            terminal.terminalOutput.push(`${terminal.translations[terminal.lang].notDirectory} ${path}`);
            return;
        }
        
        const contents = Object.keys(item.contents);
        
        if (contents.length === 0) {
            terminal.terminalOutput.push("Directory is empty");
            return;
        }
        
        // Agrupar elementos por tipo (carpetas primero, luego archivos)
        const folders = contents.filter(name => item.contents[name].type === "folder")
            .map(name => `📁 ${name}/`);
        
        const files = contents.filter(name => item.contents[name].type === "file")
            .map(name => `📄 ${name}`);
        
        // Mostrar elementos ordenados
        terminal.terminalOutput.push(...folders, ...files);
    }
    
    // Cambiar directorio actual
    changeDirectory(path) {
        const terminal = this.terminal;
        
        // Manejar casos especiales
        if (path === "/") {
            terminal.currentPath = "/";
            return;
        }
        
        if (path === "..") {
            // Subir un directorio
            const segments = terminal.currentPath.split("/").filter(Boolean);
            segments.pop();
            terminal.currentPath = "/" + segments.join("/");
            return;
        }
        
        // Obtener el directorio destino
        const item = this.getItemFromPath(path);
        
        if (!item) {
            terminal.terminalOutput.push(`${terminal.translations[terminal.lang].notFound} ${path}`);
            return;
        }
        
        if (item.type !== "folder") {
            terminal.terminalOutput.push(`${terminal.translations[terminal.lang].notDirectory} ${path}`);
            return;
        }
        
        // Actualizar la ruta actual
        if (path.startsWith("/")) {
            terminal.currentPath = path;
        } else {
            terminal.currentPath = (terminal.currentPath + "/" + path).replace(/\/+/g, "/");
        }
        
        // Asegurar que la ruta comience con "/"
        if (!terminal.currentPath.startsWith("/")) {
            terminal.currentPath = "/" + terminal.currentPath;
        }
    }
    
    // Mostrar contenido del archivo
    displayFile(path) {
        const terminal = this.terminal;
        const item = this.getItemFromPath(path);
        
        if (!item) {
            terminal.terminalOutput.push(`${terminal.translations[terminal.lang].notFound} ${path}`);
            return;
        }
        
        if (item.type !== "file") {
            terminal.terminalOutput.push(`${terminal.translations[terminal.lang].notFile} ${path}`);
            return;
        }
        
        // Dividir contenido en líneas y añadir a la salida del terminal
        const lines = item.content.split("\n");
        terminal.terminalOutput.push(...lines);
    }
}