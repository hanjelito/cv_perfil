export const translations = {
    en: {
        welcome: 'Welcome to my interactive CV! Type \'help\' to see available commands.',
        commands: {
            help: 'Display the list of available commands',
            about: 'Learn more about me',
            experience: 'View my work experience',
            education: 'View my education history',
            contact: 'Get my contact details',
            projects: 'View my projects',
            clear: 'Clear the terminal output',
            pwd: 'Print the current working directory',
            ls: 'List the contents of the current directory',
            cd: 'Navigate to a directory. Use "cd .." to go up a level, or "cd" to return to the root',
            tab: 'Auto-complete directory names while navigating',
        },
        content: {
            about: `
                <h1>Angel Gonzales</h1>
                <p><strong>Email:</strong> agonzales@peruyoung.com | <strong>Phone:</strong> (+34) 643 663 002</p>
                <p><strong>Student 42</strong> juan-gon</p>
                <p>
                    <strong>About Me:</strong> Computer and Industrial Engineer with over 20 years of experience in software development
                    and programming. Skilled in back-end optimization, data-driven decision-making, and creating scalable solutions.
                    Passionate about adaptability, continuous learning, and thriving in the ever-changing tech landscape.
                </p>
            `,
            experience: `
                <h2>Professional Experience</h2>
                <ul>
                    <li>
                        <strong>Senior Software Engineer</strong> - Diario de España (Jun 2021 - Present)
                        <ul>
                            <li>Developed back-end systems with Laravel PHP and Nest.js</li>
                            <li>Implemented Docker containers for efficient deployment</li>
                            <li>Led contract teams to ensure project success</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Senior Software Engineer</strong> - APROS PERU (Jan 2020 - Apr 2021)
                        <ul>
                            <li>Designed software architectures for major clients</li>
                            <li>Created a container management system using Go and Docker</li>
                            <li>Customized web and mobile apps tailored to client needs</li>
                        </ul>
                    </li>
                </ul>
            `,
            education: `
                <h2>Education</h2>
                <ul>
                    <li>Computer Engineering - Universidad Católica San Pablo (2003 - 2007)</li>
                    <li>Industrial Engineering - Universidad Continental (2016 - 2019)</li>
                    <li>Low-Level Programming - 42 Network Madrid (2020 - 2023)</li>
                </ul>
            `,
            contact: `
                <h3>Contact Information</h3>
                <ul>
                    <li>Email: agonzales@peruyoung.com</li>
                    <li>Phone: (+34) 643 663 002</li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/angel-gonzales-laura/" target="_blank">linkedin.com/in/angel-gonzales-laura</a></li>
                    <li>GitHub: <a href="https://github.com/hanjelito" target="_blank">github.com/hanjelito</a></li>
                </ul>
            `,
            projects: '<p>Showcasing projects I have worked on, including links and descriptions.</p>',
            ls: '<p>Available sections: about, experience, education, skills (as a directory), contact, projects.</p>',
        },
    },
    es: {
        welcome: '¡Bienvenido a mi CV interactivo! Escribe \'help\' para ver los comandos disponibles.',
        commands: {
            help: 'Muestra la lista de comandos disponibles',
            about: 'Más información sobre mí',
            experience: 'Ver mi experiencia laboral',
            education: 'Ver mi historial educativo',
            contact: 'Obtener mis datos de contacto',
            projects: 'Ver mis proyectos',
            clear: 'Limpiar la salida del terminal',
            pwd: 'Muestra el directorio de trabajo actual',
            ls: 'Lista el contenido del directorio actual',
            cd: 'Navegar a un directorio. Usa "cd .." para subir un nivel, o "cd" para volver a la raíz',
        },
        content: {
            about: `
                <h2>Sobre Mí</h2>
                <p>
                    Soy Ingeniero Informático e Industrial con más de 20 años de experiencia en desarrollo de sistemas y programación. 
                    A lo largo de mi carrera, he liderado una variedad de proyectos, desde la creación de páginas web hasta la 
                    implementación de sistemas integrales para aerolíneas. Mi enfoque principal es el análisis de datos para 
                    la toma de decisiones informadas.
                </p>
                <p>
                    Creo firmemente en la adaptabilidad y el aprendizaje constante en el siempre cambiante mundo de la tecnología. 
                    Sobreviví al COVID-19 en 2021 tras pasar dos meses en el hospital, incluyendo tres semanas en coma. 
                    Esta experiencia reforzó mi resiliencia y mi convicción de que lo que no te mata, te hace más fuerte.
                </p>
            `,
            experience: `
                <h2>Experiencia Profesional</h2>
                <ul>
                    <li>
                        <strong>Ingeniero Senior de Desarrollo de Software</strong> - Diario de España (Jun 2021 - Presente)
                        <ul>
                            <li>Desarrollé sistemas back-end con Laravel PHP y Nest.js</li>
                            <li>Implementé contenedores Docker para despliegues eficientes</li>
                            <li>Lideré equipos contratados para garantizar el éxito del proyecto</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Ingeniero Senior de Software</strong> - APROS PERU (Ene 2020 - Abr 2021)
                        <ul>
                            <li>Diseñé arquitecturas de software para clientes importantes</li>
                            <li>Creé un sistema de gestión de contenedores con Go y Docker</li>
                            <li>Desarrollé aplicaciones web y móviles personalizadas</li>
                        </ul>
                    </li>
                </ul>
            `,
            education: `
                <h2>Educación</h2>
                <ul>
                    <li>Ingeniería Informática - Universidad Católica San Pablo (2003 - 2007)</li>
                    <li>Ingeniería Industrial - Universidad Continental (2016 - 2019)</li>
                    <li>Programación de Bajo Nivel - 42 Network Madrid (2020 - 2023)</li>
                </ul>
            `,
            contact: `
                <h3>Información de Contacto</h3>
                <ul>
                    <li>Email: agonzales@peruyoung.com</li>
                    <li>Teléfono: (+34) 643 663 002</li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/angel-gonzales-laura/" target="_blank">linkedin.com/in/angel-gonzales-laura</a></li>
                    <li>GitHub: <a href="https://github.com/hanjelito" target="_blank">github.com/hanjelito</a></li>
                </ul>
            `,
            projects: '<p>Proyectos en los que he trabajado, incluyendo enlaces y descripciones.</p>',
            ls: '<p>Secciones disponibles: about, experience, education, skills (como directorio), contact, projects.</p>',
        },
    },
};