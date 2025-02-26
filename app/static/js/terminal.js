export class Terminal {
    constructor(canvas, directoryStructure, translations) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.directoryStructure = directoryStructure;
        this.translations = translations;
        
        // Terminal state
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
        
        // Bind event handlers
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }
    
    // Initialize the terminal
    init() {
        // Setup event listeners
        document.addEventListener("keydown", this.handleKeyDown);
        this.canvas.addEventListener("wheel", this.handleWheel);
        window.addEventListener("resize", this.handleResize);
        
        // Start cursor blinking
        this.cursorInterval = setInterval(() => {
            this.cursorVisible = !this.cursorVisible;
            this.drawInterface();
        }, 500);
        
        // Add welcome message
        this.terminalOutput.push(this.translations[this.lang].welcome);
        
        // Initial render
        this.resizeCanvas();
    }
    
    // Resize the canvas to fit the window
    resizeCanvas() {
        const devicePixelRatio = window.devicePixelRatio || 1;
        
        // Set the actual size of the canvas
        this.canvas.width = (window.innerWidth - 40) * devicePixelRatio;
        this.canvas.height = (window.innerHeight - 40) * devicePixelRatio;
        
        // Set the display size of the canvas
        this.canvas.style.width = `${window.innerWidth - 40}px`;
        this.canvas.style.height = `${window.innerHeight - 40}px`;
        
        // Scale the context to account for the device pixel ratio
        this.ctx.scale(devicePixelRatio, devicePixelRatio);
        
        // Adjust font size based on screen width, but with limits
        this.fontSize = Math.max(12, Math.min(18, window.innerWidth / 80));
        this.lineHeight = this.fontSize + 8;
        
        // Set the font with the new size
        this.ctx.font = `${this.fontSize}px 'Fira Code', monospace`;
        
        // Update the display with the new dimensions
        this.drawInterface();
    }
    
    // Calculate visible lines in the terminal area
    getVisibleLines() {
        const terminalHeight = this.canvas.height / (window.devicePixelRatio || 1) - 110;
        return Math.floor(terminalHeight / this.lineHeight);
    }
    
    // Update scroll position
    updateScroll(forceToBottom = false) {
        const visibleLines = this.getVisibleLines();
        const isAtBottom = this.scrollOffset === Math.max(0, this.terminalOutput.length - visibleLines);
        
        if (forceToBottom || isAtBottom) {
            this.scrollOffset = Math.max(0, this.terminalOutput.length - visibleLines);
        }
    }
    
    // Draw the terminal interface
    drawInterface() {
        const canvasWidth = this.canvas.width / (window.devicePixelRatio || 1);
        const canvasHeight = this.canvas.height / (window.devicePixelRatio || 1);
        
        // Clear canvas
        this.ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        // Set colors based on theme
        const bgColor = this.theme === "dark" ? "#1e1e1e" : "#f4f4f4";
        const headerBgColor = this.theme === "dark" ? "#2d2d2d" : "#e4e4e4";
        const mainTextColor = this.theme === "dark" ? "#33ff33" : "#333333";
        const headerTextColor = this.theme === "dark" ? "#ffffff" : "#333333";
        const promptColor = this.theme === "dark" ? "#00ff00" : "#0066cc";
        const suggestionColor = this.theme === "dark" ? "#888888" : "#888888";
        
        // Fill background
        this.ctx.fillStyle = bgColor;
        this.ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        // Draw header
        this.ctx.fillStyle = headerBgColor;
        this.ctx.fillRect(0, 0, canvasWidth, 50);
        
        // Set font for header
        this.ctx.font = `${this.fontSize}px 'Fira Code', monospace`;
        this.ctx.fillStyle = headerTextColor;
        
        // Draw header text (adjusted for screen size)
        const headerText = "👤 Angel Gonzales  📧 jgonzales@peruyoung.com  🌐 github.com/hanjelito";
        
        // Measure and potentially truncate the header text based on canvas width
        const headerWidth = this.ctx.measureText(headerText).width;
        let displayHeaderText = headerText;
        
        if (headerWidth > canvasWidth - 20) {
            // Truncate and add ellipsis if too wide
            let truncatedText = "👤 Angel Gonzales  📧 jgonzales@peruyoung.com";
            if (this.ctx.measureText(truncatedText).width > canvasWidth - 20) {
                truncatedText = "👤 Angel Gonzales";
            }
            displayHeaderText = truncatedText;
        }
        
        this.ctx.fillText(displayHeaderText, 10, 30);
        
        // Draw terminal area
        this.ctx.fillStyle = bgColor;
        this.ctx.fillRect(10, 60, canvasWidth - 20, canvasHeight - 70);
        
        // Draw terminal content
        this.ctx.fillStyle = mainTextColor;
        const visibleLines = this.getVisibleLines();
        const startLine = this.scrollOffset;
        const endLine = Math.min(startLine + visibleLines, this.terminalOutput.length);
        
        let y = 80;
        for (let i = startLine; i < endLine; i++) {
            this.ctx.fillText(this.terminalOutput[i], 20, y);
            y += this.lineHeight;
        }
        
        // Draw command prompt
        this.ctx.fillStyle = promptColor;
        const promptText = `visitor@cv:${this.currentPath}$ `;
        const promptWidth = this.ctx.measureText(promptText).width;
        this.ctx.fillText(promptText, 20, y);
        
        // Draw current command with cursor
        const textBeforeCursor = this.command.substring(0, this.cursorPosition);
        const textAfterCursor = this.command.substring(this.cursorPosition);
        const cursorX = 20 + promptWidth + this.ctx.measureText(textBeforeCursor).width;
        
        this.ctx.fillText(textBeforeCursor, 20 + promptWidth, y);
        
        if (this.cursorVisible) {
            this.ctx.fillRect(cursorX, y - this.fontSize, 2, this.fontSize);
        }
        
        this.ctx.fillText(textAfterCursor, cursorX, y);
        
        // Draw tab suggestions if any
        if (this.showingSuggestions && this.tabSuggestions.length > 0) {
            this.ctx.fillStyle = suggestionColor;
            this.ctx.fillText(
                `${this.translations[this.lang].suggestions} ${this.tabSuggestions.join(', ')}`,
                20,
                y + this.lineHeight
            );
        }
    }
    
    // Process user commands
    processCommand(cmd) {
        if (cmd.trim() === "") return;
        
        // Add command to history
        this.commandHistory.unshift(cmd);
        if (this.commandHistory.length > 50) this.commandHistory.pop();
        this.historyIndex = -1;
        
        // Clear suggestions
        this.showingSuggestions = false;
        this.tabSuggestions = [];
        
        // Parse command and arguments
        const args = cmd.trim().split(/\s+/);
        const mainCommand = args[0].toLowerCase();
        
        // Process based on command
        switch (mainCommand) {
            case "help":
                this.terminalOutput.push(...this.translations[this.lang].help);
                break;
                
            case "about":
                this.terminalOutput.push(this.translations[this.lang].about);
                break;
                
            case "experience":
                this.terminalOutput.push(this.translations[this.lang].experience);
                break;
                
            case "education":
                this.terminalOutput.push(this.translations[this.lang].education);
                break;
                
            case "projects":
                this.terminalOutput.push(this.translations[this.lang].projects);
                break;
                
            case "skills":
                this.terminalOutput.push(this.translations[this.lang].skills);
                break;
                
            case "clear":
                this.terminalOutput = [];
                break;
                
            case "theme":
                this.toggleTheme();
                return;
                
            case "lang":
                this.toggleLanguage();
                return;
                
            case "ls":
                this.listDirectory(args[1] || this.currentPath);
                break;
                
            case "cd":
                this.changeDirectory(args[1] || "/");
                break;
                
            case "cat":
                if (args.length < 2) {
                    this.terminalOutput.push("Usage: cat [filename]");
                } else {
                    this.displayFile(args[1]);
                }
                break;
                
            default:
                this.terminalOutput.push(`${this.translations[this.lang].unknown} ${mainCommand}`);
        }
        
        this.updateScroll(true);
    }
    
    // Toggle between light and dark theme
    toggleTheme() {
        this.theme = this.theme === "dark" ? "light" : "dark";
        document.body.style.backgroundColor = this.theme === "dark" ? "#1e1e1e" : "#f4f4f4";
        this.drawInterface();
    }
    
    // Toggle between English and Spanish
    toggleLanguage() {
        this.lang = this.lang === "en" ? "es" : "en";
        this.terminalOutput.push(this.translations[this.lang].welcome);
        this.updateScroll(true);
        this.drawInterface();
    }
    
    // Get directory or file from path
    getItemFromPath(path) {
        // Handle absolute and relative paths
        const fullPath = path.startsWith("/") ? path : (this.currentPath + "/" + path).replace(/\/+/g, "/");
        
        // Split path into segments
        const segments = fullPath.split("/").filter(Boolean);
        
        // Start from root
        let current = this.directoryStructure["/"];
        
        // Traverse the path
        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i];
            
            // Handle ".." (go up one directory)
            if (segment === "..") {
                // Remove the last segment from the path
                segments.splice(i - 1, 2);
                i -= 2;
                
                // If we went beyond the root, reset to root
                if (i < -1) {
                    current = this.directoryStructure["/"];
                    i = -1;
                } else {
                    // Recalculate current from root
                    current = this.directoryStructure["/"];
                    for (let j = 0; j <= i; j++) {
                        current = current.contents[segments[j]];
                    }
                }
            } else if (current.contents && current.contents[segment]) {
                current = current.contents[segment];
            } else {
                return null; // Item not found
            }
        }
        
        return current;
    }
    
    // List directory contents
    listDirectory(path) {
        const item = path ? this.getItemFromPath(path) : this.getItemFromPath(this.currentPath);
        
        if (!item) {
            this.terminalOutput.push(`${this.translations[this.lang].notFound} ${path}`);
            return;
        }
        
        if (item.type !== "folder") {
            this.terminalOutput.push(`${this.translations[this.lang].notDirectory} ${path}`);
            return;
        }
        
        const contents = Object.keys(item.contents);
        
        if (contents.length === 0) {
            this.terminalOutput.push("Directory is empty");
            return;
        }
        
        // Group items by type (folders first, then files)
        const folders = contents.filter(name => item.contents[name].type === "folder")
            .map(name => `📁 ${name}/`);
        
        const files = contents.filter(name => item.contents[name].type === "file")
            .map(name => `📄 ${name}`);
        
        // Output the sorted items
        this.terminalOutput.push(...folders, ...files);
    }
    
    // Change current directory
    changeDirectory(path) {
        // Handle special cases
        if (path === "/") {
            this.currentPath = "/";
            return;
        }
        
        if (path === "..") {
            // Go up one directory
            const segments = this.currentPath.split("/").filter(Boolean);
            segments.pop();
            this.currentPath = "/" + segments.join("/");
            return;
        }
        
        // Get the target directory
        const item = this.getItemFromPath(path);
        
        if (!item) {
            this.terminalOutput.push(`${this.translations[this.lang].notFound} ${path}`);
            return;
        }
        
        if (item.type !== "folder") {
            this.terminalOutput.push(`${this.translations[this.lang].notDirectory} ${path}`);
            return;
        }
        
        // Update the current path
        if (path.startsWith("/")) {
            this.currentPath = path;
        } else {
            this.currentPath = (this.currentPath + "/" + path).replace(/\/+/g, "/");
        }
        
        // Ensure the path starts with "/"
        if (!this.currentPath.startsWith("/")) {
            this.currentPath = "/" + this.currentPath;
        }
    }
    
    // Display file contents
    displayFile(path) {
        const item = this.getItemFromPath(path);
        
        if (!item) {
            this.terminalOutput.push(`${this.translations[this.lang].notFound} ${path}`);
            return;
        }
        
        if (item.type !== "file") {
            this.terminalOutput.push(`${this.translations[this.lang].notFile} ${path}`);
            return;
        }
        
        // Split content into lines and add to terminal output
        const lines = item.content.split("\n");
        this.terminalOutput.push(...lines);
    }
    
    // Generate autocompletion suggestions
    generateAutocompleteSuggestions() {
        // Parse the current command
        const args = this.command.trim().split(/\s+/);
        
        // If empty command, no suggestions
        if (args[0] === "") {
            return [];
        }
        
        // First word (command) autocompletion
        if (args.length === 1 && !this.command.endsWith(" ")) {
            const commandStart = args[0].toLowerCase();
            const commands = ["help", "about", "experience", "education", "projects", "skills", "clear", "theme", "lang", "ls", "cd", "cat"];
            return commands.filter(cmd => cmd.startsWith(commandStart));
        }
        
        // File/directory autocompletion for commands that need it
        if ((args[0] === "cd" || args[0] === "ls" || args[0] === "cat") && args.length <= 2) {
            let path = args[1] || "";
            
            // Get the current directory's contents
            let currentDir;
            let dirPath;
            
            if (path.includes("/") && !path.startsWith("/")) {
                // Handle relative paths with subdirectories
                const lastSlashIndex = path.lastIndexOf("/");
                const dirPart = path.substring(0, lastSlashIndex + 1);
                path = path.substring(lastSlashIndex + 1);
                dirPath = this.getItemFromPath(this.currentPath + "/" + dirPart);
            } else if (path.startsWith("/")) {
                // Handle absolute paths
                const lastSlashIndex = path.lastIndexOf("/");
                const dirPart = path.substring(0, lastSlashIndex + 1) || "/";
                path = path.substring(lastSlashIndex + 1);
                dirPath = this.getItemFromPath(dirPart);
            } else {
                // Handle current directory
                dirPath = this.getItemFromPath(this.currentPath);
            }
            
            currentDir = dirPath;
            
            if (!currentDir || currentDir.type !== "folder") {
                return [];
            }
            
            // Filter contents based on the path prefix
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
    
    // Autocomplete the command
    autocomplete() {
        const suggestions = this.generateAutocompleteSuggestions();
        
        if (suggestions.length === 1) {
            // Only one suggestion, autocomplete it
            const args = this.command.trim().split(/\s+/);
            
            if (args.length === 1 && !this.command.endsWith(" ")) {
                // Autocomplete command
                this.command = suggestions[0] + " ";
                this.cursorPosition = this.command.length;
            } else if ((args[0] === "cd" || args[0] === "ls" || args[0] === "cat") && args.length <= 2) {
                // Autocomplete path
                const commandPart = args[0] + " ";
                
                let pathPart = args[1] || "";
                
                if (pathPart.includes("/") && !pathPart.startsWith("/")) {
                    // Handle relative path with subdirectories
                    const lastSlashIndex = pathPart.lastIndexOf("/");
                    const dirPart = pathPart.substring(0, lastSlashIndex + 1);
                    this.command = commandPart + dirPart + suggestions[0];
                } else if (pathPart.startsWith("/")) {
                    // Handle absolute path
                    const lastSlashIndex = pathPart.lastIndexOf("/");
                    const dirPart = pathPart.substring(0, lastSlashIndex + 1);
                    this.command = commandPart + dirPart + suggestions[0];
                } else {
                    // Simple case
                    this.command = commandPart + suggestions[0];
                }
                
                this.cursorPosition = this.command.length;
            }
            
            this.showingSuggestions = false;
            this.tabSuggestions = [];
        } else if (suggestions.length > 1) {
            // Multiple suggestions, show them
            this.tabSuggestions = suggestions;
            this.showingSuggestions = true;
            
            // Find common prefix if double-tab is pressed
            const now = Date.now();
            if (now - this.lastTabTime < 500) {
                // Find the common prefix among all suggestions
                let commonPrefix = suggestions[0];
                for (let i = 1; i < suggestions.length; i++) {
                    let j = 0;
                    while (j < commonPrefix.length && j < suggestions[i].length && 
                           commonPrefix[j] === suggestions[i][j]) {
                        j++;
                    }
                    commonPrefix = commonPrefix.substring(0, j);
                }
                
                // If we have a common prefix longer than what's already typed
                if (commonPrefix.length > 0) {
                    const args = this.command.trim().split(/\s+/);
                    
                    if (args.length === 1 && !this.command.endsWith(" ")) {
                        // Autocomplete command with common prefix
                        this.command = commonPrefix;
                        this.cursorPosition = this.command.length;
                    } else if ((args[0] === "cd" || args[0] === "ls" || args[0] === "cat") && args.length <= 2) {
                        // Autocomplete path with common prefix
                        const commandPart = args[0] + " ";
                        
                        let pathPart = args[1] || "";
                        
                        if (pathPart.includes("/") && !pathPart.startsWith("/")) {
                            // Handle relative path with subdirectories
                            const lastSlashIndex = pathPart.lastIndexOf("/");
                            const dirPart = pathPart.substring(0, lastSlashIndex + 1);
                            this.command = commandPart + dirPart + commonPrefix;
                        } else if (pathPart.startsWith("/")) {
                            // Handle absolute path
                            const lastSlashIndex = pathPart.lastIndexOf("/");
                            const dirPart = pathPart.substring(0, lastSlashIndex + 1);
                            this.command = commandPart + dirPart + commonPrefix;
                        } else {
                            // Simple case
                            this.command = commandPart + commonPrefix;
                        }
                        
                        this.cursorPosition = this.command.length;
                    }
                }
            }
            
            this.lastTabTime = now;
        }
        
        this.drawInterface();
    }
    
    // Handle keyboard input
    handleKeyDown(e) {
        // Prevent default for arrow keys and other control keys
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "Tab"].includes(e.key)) {
            e.preventDefault();
        }
        
        // Hide suggestions when any key other than Tab is pressed
        if (e.key !== "Tab" && this.showingSuggestions) {
            this.showingSuggestions = false;
            this.tabSuggestions = [];
        }
        
        // Handle special keys
        switch (e.key) {
            case "Enter":
                // Process command and clear input
                this.terminalOutput.push(`visitor@cv:${this.currentPath}$ ${this.command}`);
                this.processCommand(this.command);
                this.command = "";
                this.cursorPosition = 0;
                break;
                
            case "Backspace":
                // Delete character before cursor
                if (this.cursorPosition > 0) {
                    this.command = this.command.substring(0, this.cursorPosition - 1) + this.command.substring(this.cursorPosition);
                    this.cursorPosition--;
                }
                break;
                
            case "Delete":
                // Delete character at cursor
                if (this.cursorPosition < this.command.length) {
                    this.command = this.command.substring(0, this.cursorPosition) + this.command.substring(this.cursorPosition + 1);
                }
                break;
                
            case "ArrowLeft":
                // Move cursor left
                if (this.cursorPosition > 0) {
                    this.cursorPosition--;
                }
                break;
                
            case "ArrowRight":
                // Move cursor right
                if (this.cursorPosition < this.command.length) {
                    this.cursorPosition++;
                }
                break;
                
            case "Home":
                // Move cursor to beginning
                this.cursorPosition = 0;
                break;
                
            case "End":
                // Move cursor to end
                this.cursorPosition = this.command.length;
                break;
                
            case "ArrowUp":
                // Navigate command history (previous)
                if (this.commandHistory.length > 0 && this.historyIndex < this.commandHistory.length - 1) {
                    this.historyIndex++;
                    this.command = this.commandHistory[this.historyIndex];
                    this.cursorPosition = this.command.length;
                }
                break;
                
            case "ArrowDown":
                // Navigate command history (next)
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
                // Handle autocompletion
                this.autocomplete();
                return; // Skip the drawInterface call below as it's handled in autocomplete
                
            default:
                // Add printable characters to command
                if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
                    this.command = this.command.substring(0, this.cursorPosition) + e.key + this.command.substring(this.cursorPosition);
                    this.cursorPosition++;
                }
        }
        
        this.drawInterface();
    }
    
    // Handle mouse scroll for terminal scrolling
    handleWheel(e) {
        const visibleLines = this.getVisibleLines();
        
        if (e.deltaY < 0) {
            // Scroll up
            if (this.scrollOffset > 0) {
                this.scrollOffset--;
                this.drawInterface();
            }
        } else if (e.deltaY > 0) {
            // Scroll down
            if (this.scrollOffset < this.terminalOutput.length - visibleLines) {
                this.scrollOffset++;
                this.drawInterface();
            }
        }
        
        e.preventDefault();
    }
    
    // Handle window resize
    handleResize() {
        this.resizeCanvas();
    }
}