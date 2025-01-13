import { commands } from './commands.js';
import { translations } from './translations.js';
import { scrollToBottom } from './utils.js';
import { directoryStructure } from './skills.js';

class Terminal {
    constructor() {
        this.commandInput = document.getElementById('command-input');
        this.output = document.getElementById('output');
        this.themeToggle = document.getElementById('themeToggle');
        this.langToggle = document.getElementById('langToggle');
        this.currentLang = 'en';
        this.commandHistory = [];
        this.historyIndex = -1;
        this.currentPath = '/';
        this.directoryStructure = directoryStructure;
        this.translations = translations;

        this.setupEventListeners();

        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);

        const savedLang = localStorage.getItem('lang') || 'en';
        this.setLanguage(savedLang);
    }

    setupEventListeners() {
        this.commandInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleCommand();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory('up');
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory('down');
            } else if (e.key === 'Tab') {
                e.preventDefault(); // Evitar el comportamiento predeterminado del tabulador
                this.handleAutocomplete();
            }
        });
    
        this.themeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            this.setTheme(newTheme);
        });
    
        this.langToggle.addEventListener('click', () => {
            const newLang = this.currentLang === 'en' ? 'es' : 'en';
            this.setLanguage(newLang);
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        this.langToggle.textContent = lang === 'en' ? '🌐 ES' : '🌐 EN';
        if (this.output.children.length === 2) {
            this.output.lastElementChild.textContent = this.translations[lang].welcome;
        }
    }

    handleCommand() {
        const command = this.commandInput.value.trim();
        if (!command) return; // Ignorar si está vacío
    
        // Guardar el comando en el historial
        this.commandHistory.unshift(command);
        this.historyIndex = -1; // Reiniciar el índice del historial
    
        // Mostrar el comando ingresado con el prompt actual
        this.appendOutput(command, true);
    
        const [baseCommand, ...args] = command.split(' ');
        const argument = args.join(' ');
    
        if (commands[baseCommand]) {
            commands[baseCommand](this, argument);
        } else {
            this.appendOutput(`Command not found: ${command}`);
        }
    
        this.commandInput.value = '';
        this.updatePrompt(); // Actualizar solo el prompt dinámico
        scrollToBottom(this.output);
    }

    handleAutocomplete() {
        const input = this.commandInput.value.trim();
        const [command, ...args] = input.split(' ');
        const currentFolder = this.getCurrentFolder();
    
        // Verificar si el comando es `cd` o `ls`
        if (command === 'cd' || command === 'ls') {
            const partial = args.join(' ').toLowerCase(); // Obtener el argumento parcial
            const matches = Object.keys(currentFolder.contents || {}).filter((key) =>
                key.toLowerCase().startsWith(partial)
            );
    
            if (matches.length === 1) {
                // Completar automáticamente si hay una sola coincidencia
                this.commandInput.value = `${command} ${matches[0]}`;
            } else if (matches.length > 1) {
                // Mostrar opciones si hay varias coincidencias
                this.appendOutput(`<p>Opciones: ${matches.join(', ')}</p>`);
            }
        }
    }

    appendOutput(content, includePrompt = false) {
        const p = document.createElement('p');
        if (includePrompt) {
            const cleanPath = this.currentPath.replace(/\/+/g, '/'); // Ruta limpia para el prompt estático
            p.innerHTML = `<span class="prompt">visitor@cv:${cleanPath}~$</span> ${content}`;
        } else {
            p.innerHTML = content;
        }
        this.output.appendChild(p);
    }

    navigateHistory(direction) {
        if (direction === 'up') {
            if (this.historyIndex < this.commandHistory.length - 1) {
                this.historyIndex++;
            }
        } else if (direction === 'down') {
            if (this.historyIndex > -1) {
                this.historyIndex--;
            }
        }
    
        // Mostrar el comando del historial correspondiente
        if (this.historyIndex >= 0 && this.historyIndex < this.commandHistory.length) {
            this.commandInput.value = this.commandHistory[this.historyIndex];
        } else {
            this.commandInput.value = ''; // Limpiar si está fuera de rango
        }
    }

    getCurrentFolder() {
        const paths = this.currentPath.split('/').filter(Boolean);
        let folder = this.directoryStructure['/'];
        for (const path of paths) {
            if (folder.contents[path]) {
                folder = folder.contents[path];
            } else {
                return null;
            }
        }
        return folder;
    }

    updatePrompt() {
        const cleanPath = this.currentPath.replace(/\/+/g, '/'); // Limpiar rutas dobles "//"
        const inputPrompt = document.querySelector('.input-line .prompt'); // Seleccionar solo el prompt del input
        inputPrompt.textContent = `visitor@cv:${cleanPath}~$`; // Actualizar el prompt activo
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
});