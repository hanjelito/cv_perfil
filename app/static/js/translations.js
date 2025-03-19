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
      experience: generateExperienceText('en'),
      education: generateEducationText('en'),
      projects: `Projects: ${appData.projects.map(proj => proj.name.en).join(', ')}.`,
      skills: skillsGenerator.generateSkillsAscii('en')
    },
    es: {
      ...appData.ui.es,
      about: Array.isArray(appData.profile.summary.es) 
        ? appData.profile.summary.es.join('\n') 
        : appData.profile.summary.es,
      experience: generateExperienceText('es'),
      education: generateEducationText('es'),
      projects: `Proyectos: ${appData.projects.map(proj => proj.name.es).join(', ')}.`,
      skills: skillsGenerator.generateSkillsAscii('es')
    }
  };
  
  return translations;
}

// Función para generar el texto de experiencia formateado
function generateExperienceText(lang) {
  const expText = appData.experience.map(exp => 
    `${exp.title[lang]} at ${exp.company} (${exp.period})`
  ).join(', ');
  
  return lang === 'en' ? `Experience: ${expText}.` : `Experiencia: ${expText}.`;
}

// Función para generar el texto de educación formateado
function generateEducationText(lang) {
  const eduText = appData.education.universities.map(uni => 
    `${uni.degree[lang]}, ${uni.name}`
  ).join(', ');
  
  return lang === 'en' ? `Education: ${eduText}.` : `Educación: ${eduText}.`;
}

export const translations = generateTranslations();