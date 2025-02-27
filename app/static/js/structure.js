// Directory structure representing skills and experience
import { skillsData } from './skills-data.js';

// Función para generar automáticamente la estructura de directorios de habilidades
function generateSkillsStructure() {
    const skillsDir = {
        type: "folder",
        contents: {}
    };
    
    // Crear carpetas para cada categoría
    skillsData.categories.forEach(category => {
        const categoryDir = {
            type: "folder",
            contents: {}
        };
        
        // Crear archivos para cada habilidad
        category.skills.forEach(skill => {
            categoryDir.contents[`${skill.name.toLowerCase()}.txt`] = {
                type: "file",
                content: generateSkillContent(skill)
            };
        });
        
        // Añadir la carpeta de categoría al directorio de habilidades
        skillsDir.contents[category.id] = categoryDir;
    });
    
    return skillsDir;
}

// Generar contenido detallado para cada archivo de habilidad
function generateSkillContent(skill) {
    return `${skill.name}
${'-'.repeat(skill.name.length)}

Level: ${'★'.repeat(skill.level)}${'☆'.repeat(5 - skill.level)}

Description:
This file contains detailed information about my experience with ${skill.name}.
Here you would find projects I've worked on, specific techniques I've mastered,
and how I've applied this skill in real-world scenarios.

Projects using ${skill.name}:
- Project 1: Description of implementation
- Project 2: Another example of how I used this skill
- Project 3: Additional relevant work

Related skills:
- Related skill 1
- Related skill 2
- Related skill 3`;
}

export const directoryStructure = {
    "/": {
        type: "folder",
        contents: {
            "about.txt": { 
                type: "file",
                content: "Angel Gonzales is a software developer with expertise in web and system design."
            },
            "resume.md": { 
                type: "file",
                content: "# Angel Gonzales\n\nEmail: jgonzales@peruyoung.com\nGitHub: github.com/hanjelito\nLinkedIn: linkedin.com/in/angel-gonzales-laura\n\n## Professional Summary\nSoftware developer with expertise in web development and system design."
            },
            "skills": generateSkillsStructure(),
            "experience": {
                type: "folder",
                contents: {
                    "xyz_corp.txt": { 
                        type: "file", 
                        content: "XYZ Corp (2020-Present)\nSenior Developer\n- Led team of 5 developers on e-commerce platform\n- Implemented CI/CD pipeline resulting in 40% faster deployments\n- Reduced loading times by 60% through optimizations" 
                    },
                    "freelance.txt": { 
                        type: "file", 
                        content: "Freelance Developer (2018-2020)\n- Developed custom CMS for small businesses\n- Created responsive designs for 20+ clients\n- Integrated payment gateways and analytics systems" 
                    },
                    "open_source.txt": { 
                        type: "file", 
                        content: "Open Source Contributor (2017-Present)\n- Active contributor to several JavaScript libraries\n- Created documentation and tutorials\n- Fixed bugs and implemented new features" 
                    }
                }
            },
            "education": {
                type: "folder",
                contents: {
                    "university.txt": { 
                        type: "file", 
                        content: "Tech University (2014-2018)\nB.Sc. in Computer Science\n- GPA: 3.8/4.0\n- Specialized in Software Engineering\n- Thesis: 'Optimizing Web Applications for Performance'" 
                    },
                    "certifications.txt": { 
                        type: "file", 
                        content: "Professional Certifications:\n- AWS Certified Developer\n- Google Cloud Professional\n- MongoDB Certified Developer" 
                    }
                }
            },
            "projects": {
                type: "folder",
                contents: {
                    "portfolio.txt": { 
                        type: "file", 
                        content: "Portfolio Website\nA responsive website showcasing my projects and skills using Vue.js and Tailwind CSS." 
                    },
                    "e-commerce.txt": { 
                        type: "file", 
                        content: "E-commerce System\nA full-stack e-commerce platform with Laravel backend and Vue.js frontend." 
                    },
                    "chat_app.txt": { 
                        type: "file", 
                        content: "Real-time Chat App\nA chat application using WebSockets, Node.js, and MongoDB for real-time messaging." 
                    }
                }
            }
        }
    }
};