// translations.js - Refactorizado para usar el sistema centralizado
import { appData } from './data.js';
import { SkillsGenerator } from './terminal/skills-generator.js';

// Crear instancia del generador de habilidades 
const skillsGenerator = new SkillsGenerator();

// Función para generar las traducciones completas a partir de los datos centralizados
function generateTranslations() {
  const translations = {
    en: {
      ...appData.ui.en,
      about: Array.isArray(appData.profile.summary.en) 
        ? appData.profile.summary.en.join('\n') 
        : appData.profile.summary.en,
      experience: `Experience: ${appData.experience.map(exp => `${exp.title.en} at ${exp.company}`).join(', ')}.`,
      education: `Education: ${appData.education.university.degree.en}, ${appData.education.university.name}.`,
      projects: `Projects: ${appData.projects.map(proj => proj.name.en).join(', ')}.`,
      skills: skillsGenerator.generateSkillsAscii('en')
    },
    es: {
      ...appData.ui.es,
      about: Array.isArray(appData.profile.summary.es) 
        ? appData.profile.summary.es.join('\n') 
        : appData.profile.summary.es,
      experience: `Experiencia: ${appData.experience.map(exp => `${exp.title.es} en ${exp.company}`).join(', ')}.`,
      education: `Educación: ${appData.education.university.degree.es}, ${appData.education.university.name}.`,
      projects: `Proyectos: ${appData.projects.map(proj => proj.name.es).join(', ')}.`,
      skills: skillsGenerator.generateSkillsAscii('es')
    }
  };
  
  return translations;
}

export const translations = generateTranslations();