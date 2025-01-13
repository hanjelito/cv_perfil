class Terminal {
    constructor() {
        this.commandInput = document.getElementById('command-input');
        this.output = document.getElementById('output');
        this.themeToggle = document.getElementById('themeToggle');
        this.langToggle = document.getElementById('langToggle');
        this.currentLang = 'en';
        this.setupEventListeners();
        this.commandHistory = [];
        this.historyIndex = -1;

        this.translations = {
            en: {
                welcome: 'Welcome to my interactive CV! Type \'help\' to see available commands.',
                commands: {
                    'help': 'Display available commands',
                    'about': 'Display information about me',
                    'experience': 'Show work experience',
                    'education': 'Show educational background',
                    'skills': 'List technical skills (type \'skills\' to explore)',
                    'projects': 'Show notable projects',
                    'contact': 'Display contact information',
                    'clear': 'Clear the terminal',
                    'whoami': 'Display current user',
                    'ls': 'List available sections',
                    'matrix': 'Display a fun matrix animation'
                },
                content: {
                    about: `<div class="section">
                        <h2>About Me</h2>
                        <p>I am a passionate software developer with expertise in web development
                        and a strong foundation in computer science. I love creating elegant
                        solutions to complex problems and am constantly learning new technologies.</p>
                    </div>`,
                    experience: `<div class="section">
                        <h2>Work Experience</h2>
                        <pre>
Senior Software Developer | TechCorp
2020 - Present
• Led development of enterprise web applications
• Mentored junior developers
• Implemented CI/CD pipelines

Software Developer | StartupX
2018 - 2020
• Developed full-stack applications
• Worked with agile methodologies
• Improved application performance by 40%
                        </pre>
                    </div>`,
                    education: `<div class="section">
                        <h2>Education</h2>
                        <pre>
Universidad Católica San Pablo          Arequipa, Perú
Ingeniería Informática                  2003 - 2007

Universidad Continental                 Arequipa, Perú
Ingeniería Industrial                   2016 - 2019

42 Network sede Madrid                  Madrid, España
Programador bajo nivel                  2020 - 2023
                        </pre>
                    </div>`,
                    skills: `<div class="section">
                        <h2>Technical Skills</h2>
                        <pre>
Type 'skills' to explore categories:
1. Programming Languages
2. Frameworks and Libraries
3. Applications
4. Databases
5. Development Tools
6. Servers and Services
7. Others
                        </pre>
                    </div>`,
                    projects: `<div class="section">
                        <h2>Notable Projects</h2>
                        <pre>
Terminal CV
• Interactive terminal-styled online CV
• Built with Flask and vanilla JavaScript
• Responsive design with terminal aesthetics

E-Commerce Platform
• Full-stack web application
• Implemented payment processing
• Real-time inventory management
                        </pre>
                    </div>`,
                    contact: `<div class="section">
                        <h2>Contact Information</h2>
                        <pre>
Email:    developer@example.com
GitHub:   github.com/developer
LinkedIn: linkedin.com/in/developer
                        </pre>
                    </div>`,
                    ls: `<pre>
about/
experience/
education/
skills/
projects/
contact/
                    </pre>`
                }
            },
            es: {
                welcome: '¡Bienvenido a mi CV interactivo! Escribe \'help\' para ver los comandos disponibles.',
                commands: {
                    'help': 'Mostrar comandos disponibles',
                    'about': 'Mostrar información sobre mí',
                    'experience': 'Mostrar experiencia laboral',
                    'education': 'Mostrar formación académica',
                    'skills': 'Listar habilidades técnicas (escribe \'skills\' para explorar)',
                    'projects': 'Mostrar proyectos destacados',
                    'contact': 'Mostrar información de contacto',
                    'clear': 'Limpiar la terminal',
                    'whoami': 'Mostrar usuario actual',
                    'ls': 'Listar secciones disponibles',
                    'matrix': 'Mostrar una animación matrix'
                },
                content: {
                    about: `<div class="section">
                        <h2>Sobre Mí</h2>
                        <p>Soy un desarrollador de software apasionado con experiencia en desarrollo web
                        y una sólida base en ciencias de la computación. Me encanta crear soluciones
                        elegantes para problemas complejos y estoy constantemente aprendiendo nuevas tecnologías.</p>
                    </div>`,
                    experience: `<div class="section">
                        <h2>Experiencia Laboral</h2>
                        <pre>
Desarrollador Senior de Software | TechCorp
2020 - Presente
• Lideré el desarrollo de aplicaciones web empresariales
• Mentoré a desarrolladores junior
• Implementé pipelines de CI/CD

Desarrollador de Software | StartupX
2018 - 2020
• Desarrollé aplicaciones full-stack
• Trabajé con metodologías ágiles
• Mejoré el rendimiento de la aplicación en un 40%
                        </pre>
                    </div>`,
                    education: `<div class="section">
                        <h2>Formación Académica</h2>
                        <pre>
Universidad Católica San Pablo          Arequipa, Perú
Ingeniería Informática                  2003 - 2007

Universidad Continental                 Arequipa, Perú
Ingeniería Industrial                   2016 - 2019

42 Network sede Madrid                  Madrid, España
Programador bajo nivel                  2020 - 2023
                        </pre>
                    </div>`,
                    skills: `<div class="section">
                        <h2>Habilidades Técnicas</h2>
                        <pre>
Escribe 'skills' para explorar categorías:
1. Lenguajes de Programación
2. Frameworks y Bibliotecas
3. Aplicativos
4. Bases de Datos
5. Herramientas de Desarrollo
6. Servidores y Servicios
7. Otros
                        </pre>
                    </div>`,
                    projects: `<div class="section">
                        <h2>Proyectos Destacados</h2>
                        <pre>
CV de Terminal
• CV interactivo con estilo de terminal
• Construido con Flask y JavaScript
• Diseño adaptable con estética de terminal

Plataforma de Comercio Electrónico
• Aplicación web full-stack
• Implementación de procesamiento de pagos
• Gestión de inventario en tiempo real
                        </pre>
                    </div>`,
                    contact: `<div class="section">
                        <h2>Información de Contacto</h2>
                        <pre>
Correo electrónico:    developer@example.com
GitHub:   github.com/developer
LinkedIn: linkedin.com/in/developer
                        </pre>
                    </div>`,
                    ls: `<pre>
sobre/
experiencia/
formacion/
habilidades/
proyectos/
contacto/
                    </pre>`
                }
            }
        };

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

    navigateHistory(direction) {
        if (direction === 'up' && this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
        } else if (direction === 'down' && this.historyIndex > -1) {
            this.historyIndex--;
        }

        if (this.historyIndex >= 0 && this.historyIndex < this.commandHistory.length) {
            this.commandInput.value = this.commandHistory[this.commandHistory.length - 1 - this.historyIndex];
        } else {
            this.commandInput.value = '';
        }
    }

    handleCommand() {
        const command = this.commandInput.value.trim().toLowerCase();
        this.commandHistory.push(command);
        this.appendOutput(`<span class="prompt">visitor@cv:~$</span> ${command}`);

        const [baseCommand, argument] = command.split(' ');

        switch (baseCommand) {
            case 'help':
                this.showHelp();
                break;
            case 'about':
                this.showAbout();
                break;
            case 'experience':
                this.showExperience();
                break;
            case 'education':
                this.showEducation();
                break;
            case 'skills':
                if (argument) {
                    this.showSkillCategory(argument);
                } else {
                    this.showSkillsMenu();
                }
                break;
            case 'projects':
                this.showProjects();
                break;
            case 'contact':
                this.showContact();
                break;
            case 'clear':
                this.clearTerminal();
                break;
            case 'whoami':
                this.appendOutput('visitor');
                break;
            case 'ls':
                this.showLS();
                break;
            case 'matrix':
                this.showMatrix();
                break;
            case '':
                break;
            default:
                this.appendOutput(`Command not found: ${command}. Type 'help' for available commands.`);
        }

        this.commandInput.value = '';
        this.scrollToBottom();
    }

    appendOutput(content) {
        const p = document.createElement('p');
        p.innerHTML = content;
        this.output.appendChild(p);
    }

    showHelp() {
        let helpText = this.currentLang === 'en' ? 'Available commands:\n\n' : 'Comandos disponibles:\n\n';
        const commands = this.translations[this.currentLang].commands;
        for (const [cmd, desc] of Object.entries(commands)) {
            helpText += `${cmd.padEnd(15)} - ${desc}\n`;
        }
        this.appendOutput(`<pre>${helpText}</pre>`);
    }

    showAbout() {
        this.appendOutput(this.translations[this.currentLang].content.about);
    }

    showExperience() {
        this.appendOutput(this.translations[this.currentLang].content.experience);
    }

    showEducation() {
        this.appendOutput(this.translations[this.currentLang].content.education);
    }

    showSkillsMenu() {
        this.appendOutput(this.translations[this.currentLang].content.skills);
    }

    showSkillCategory(category) {
        const skillCategories = {
            '1': `
            <div class="section">
                <h3>Lenguajes de Programación</h3>
                <pre>
● Python
● Golang
● JavaScript
● TypeScript
● PHP
● C / C++
● Bash Scripting
                </pre>
            </div>`,
            '2': `
            <div class="section">
                <h3>Frameworks y Bibliotecas</h3>
                <pre>
● Vue3
● NodeJS
● Nest
● Laravel
● Symfony
                </pre>
            </div>`,
            '3': `
            <div class="section">
                <h3>Aplicativos</h3>
                <pre>
● Flutter
● Numpy
● Spark
● Scraping
                </pre>
            </div>`,
            '4': `
            <div class="section">
                <h3>Bases de Datos</h3>
                <pre>
● PostgreSQL
● MySQL
● MongoDB
● MariaDB
● SQL
● SQLite
                </pre>
            </div>`,
            '5': `
            <div class="section">
                <h3>Herramientas de Desarrollo</h3>
                <pre>
● Docker
● Kubernetes
● JWT
● API connection
● Pandas
                </pre>
            </div>`,
            '6': `
            <div class="section">
                <h3>Servidores y Servicios</h3>
                <pre>
● AWS
● Google Cloud
● Azure
● Ubuntu
● Debian
● Servicios WebSocket, JWT, API Rest
                </pre>
            </div>`,
            '7': `
            <div class="section">
                <h3>Otros</h3>
                <pre>
● Git
● Scrum
● Jira
● Trabajo en equipo
● Kanban
● Colab
                </pre>
            </div>`
        };

        const content = skillCategories[category] || `<p>Categoría no válida. Por favor selecciona un número del 1 al 7.</p>`;
        this.appendOutput(content);
    }

    showProjects() {
        this.appendOutput(this.translations[this.currentLang].content.projects);
    }

    showContact() {
        this.appendOutput(this.translations[this.currentLang].content.contact);
    }

    showLS() {
        this.appendOutput(this.translations[this.currentLang].content.ls);
    }

    showMatrix() {
        const matrix = document.createElement('div');
        matrix.style.color = '#00ff00';
        matrix.style.fontFamily = 'monospace';
        matrix.innerHTML = `
            <pre>
1001 0110 1010 1111
0110 1100 0101 1010
1111 0000 1111 0000
            </pre>
        `;
        this.output.appendChild(matrix);
    }

    clearTerminal() {
        this.output.innerHTML = '';
    }

    scrollToBottom() {
        this.output.scrollTop = this.output.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Terminal();
});
