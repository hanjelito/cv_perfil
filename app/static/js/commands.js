import { translations } from './translations.js';

export const commands = {
    help: (terminal) => {
        const commandsList = translations[terminal.currentLang]?.commands;
        if (!commandsList) {
            terminal.appendOutput(`<p>Error: No commands available for the current language.</p>`);
            return;
        }

        let helpText = 'Available commands:\n\n';
        for (const [cmd, desc] of Object.entries(commandsList)) {
            helpText += `<strong>${cmd.padEnd(15)}</strong> - ${desc}\n`;
        }
        terminal.appendOutput(`<pre>${helpText}</pre>`);
    },
    about: (terminal) => {
        terminal.appendOutput(translations[terminal.currentLang]?.content.about || '<p>About content not available.</p>');
    },
    experience: (terminal) => {
        terminal.appendOutput(translations[terminal.currentLang]?.content.experience || '<p>Experience content not available.</p>');
    },
    education: (terminal) => {
        terminal.appendOutput(translations[terminal.currentLang]?.content.education || '<p>Education content not available.</p>');
    },
    contact: (terminal) => {
        terminal.appendOutput(translations[terminal.currentLang]?.content.contact || '<p>Contact content not available.</p>');
    },
    projects: (terminal) => {
        terminal.appendOutput(translations[terminal.currentLang]?.content.projects || '<p>Projects content not available.</p>');
    },
    clear: (terminal) => {
        terminal.output.innerHTML = '';
    },
    ls: (terminal) => {
        const currentFolder = terminal.getCurrentFolder();
        if (currentFolder?.contents) {
            const items = Object.keys(currentFolder.contents)
                .map((key) => {
                    const type = currentFolder.contents[key].type;
                    // Añadir un ícono o emoji basado en el tipo
                    const icon = type === 'folder' ? '📁' : '📄'; 
                    return `${icon} <strong>${key}${type === 'folder' ? '/' : ''}</strong>`;
                })
                .join('<br>');
            terminal.appendOutput(`<p>${items || 'This directory is empty.'}</p>`);
        } else {
            terminal.appendOutput('<p>Error: Unable to access this directory.</p>');
        }
    },
    cd: (terminal, folderName) => {
        if (!folderName || folderName === "/") {
            terminal.currentPath = "/";
        } else if (folderName === "..") {
            terminal.currentPath = terminal.currentPath.split("/").slice(0, -1).join("/") || "/";
        } else {
            folderName = folderName.trim().replace(/^["']|["']$/g, '');
            const currentFolder = terminal.getCurrentFolder();
            if (currentFolder?.contents[folderName]?.type === "folder") {
                terminal.currentPath = `${terminal.currentPath}/${folderName}`.replace(/\/+/g, '/');
            } else {
                terminal.appendOutput(`<p>Error: '${folderName}' is not a folder.</p>`);
                return;
            }
        }
        terminal.updatePrompt();
    },
    pwd: (terminal) => {
        terminal.appendOutput(`<p>${terminal.currentPath}</p>`);
    },
};