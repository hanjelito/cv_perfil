// structure.js - Genera la estructura de directorios a partir de los datos centralizados
import { appData } from './data.js';

// Función para generar automáticamente la estructura de directorios de habilidades
function generateSkillsStructure() {
    const skillsDir = {
        type: "folder",
        contents: {}
    };
    
    // Crear carpetas para cada categoría
    appData.skills.categories.forEach(category => {
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
    // Obtener la descripción, proyectos y habilidades relacionadas de datos reales
    const description = skill.description?.en || `Experience with ${skill.name}.`;
    
    // Formatear proyectos si existen, o usar texto de relleno
    let projectsText = "";
    if (skill.projects && skill.projects.length > 0) {
        projectsText = skill.projects.map(project => 
            `- ${project.name}: ${project.description.en}`
        ).join('\n');
    } else {
        projectsText = "- No specific projects listed";
    }
    
    // Formatear habilidades relacionadas si existen, o usar texto de relleno
    let relatedSkillsText = "";
    if (skill.related_skills && skill.related_skills.length > 0) {
        relatedSkillsText = skill.related_skills.map(relSkill => 
            `- ${relSkill}`
        ).join('\n');
    } else {
        relatedSkillsText = "- No related skills listed";
    }
    
    // Construir el contenido completo del archivo
    return `${skill.name}
${'-'.repeat(skill.name.length)}

Level: ${'★'.repeat(skill.level)}${'☆'.repeat(5 - skill.level)}

Description:
${description}

Projects using ${skill.name}:
${projectsText}

Related skills:
${relatedSkillsText}`;
}

// Generar estructura de experiencia desde datos centralizados
function generateExperienceStructure() {
    const experienceDir = {
        type: "folder",
        contents: {}
    };
    
    appData.experience.forEach(exp => {
        const fileName = exp.company.toLowerCase().replace(/\s+/g, '_') + '.txt';
        
        experienceDir.contents[fileName] = {
            type: "file",
            content: `${exp.company} (${exp.period})
${exp.title.en}
${exp.responsibilities.en.map(resp => `- ${resp}`).join('\n')}`
        };
    });
    
    return experienceDir;
}

// Generar estructura de educación desde datos centralizados
function generateEducationStructure() {
    const educationDir = {
        type: "folder",
        contents: {}
    };
    
    // Crear archivo para cada universidad
    appData.education.universities.forEach(uni => {
        const fileName = uni.name.toLowerCase().replace(/\s+/g, '_') + '.txt';
        
        educationDir.contents[fileName] = {
            type: "file",
            content: `${uni.name} (${uni.period})
${uni.degree.en}
${uni.location}`
        };
    });
    
    // Archivo para certificaciones
    educationDir.contents["certifications.txt"] = { 
        type: "file", 
        content: `Professional Certifications:
${appData.education.certifications.en.map(cert => `- ${cert}`).join('\n')}`
    };
    
    return educationDir;
}

// Generar estructura de proyectos desde datos centralizados
function generateProjectsStructure() {
    const projectsDir = {
        type: "folder",
        contents: {}
    };
    
    appData.projects.forEach(project => {
        projectsDir.contents[`${project.id}.txt`] = {
            type: "file",
            content: `${project.name.en}
${project.description.en}`
        };
    });
    
    return projectsDir;
}

// Generar contenido del archivo about.txt con soporte para arrays o strings
function generateAboutContent(profile) {
    // Si el resumen (summary) es un array, unir con saltos de línea
    let enContent;
    if (Array.isArray(profile.summary.en)) {
        enContent = profile.summary.en.join('\n');
    } else {
        enContent = profile.summary.en;
    }
    
    // Devolver el contenido formateado
    return enContent;
}

// Generar la estructura completa de directorios
export const directoryStructure = {
    "/": {
        type: "folder",
        contents: {
            "about.txt": { 
                type: "file",
                content: generateAboutContent(appData.profile)
            },
            "resume.md": { 
                type: "file",
                content: `# ${appData.profile.name}\n\nEmail: ${appData.profile.email}\nGitHub: ${appData.profile.github}\nLinkedIn: ${appData.profile.linkedin}\n\n## Professional Summary\n${Array.isArray(appData.profile.summary.en) ? appData.profile.summary.en.join('\n\n') : appData.profile.summary.en}`
            },
            "skills": generateSkillsStructure(),
            "experience": generateExperienceStructure(),
            "education": generateEducationStructure(),
            "projects": generateProjectsStructure()
        }
    }
};