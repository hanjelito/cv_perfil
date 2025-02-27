// Generador dinámico de visualización de habilidades con formato exacto
import { skillsData } from '../skills-data.js';

export class SkillsGenerator {
    constructor() {
        this.maxBarLength = 24; // Longitud para barras de progreso
    }
    
    // Generar el ASCII art para las habilidades en el idioma especificado
    generateSkillsAscii(lang = 'en') {
        const result = [];
        
        // No incluir título principal, empezar directamente con las categorías
        skillsData.categories.forEach(category => {
            // Título de categoría con formato simple
            const categoryTitle = category.translations[lang];
            result.push("");
            result.push(categoryTitle + " " + "─".repeat(Math.max(1, 47 - categoryTitle.length)));
            
            // Contenedor superior
            result.push(" ".repeat(57));
            
            // Procesar cada habilidad con alineación más precisa
            category.skills.forEach(skill => {
                const levelLabel = skill.translations[lang];
                const progressBar = this._generateProgressBar(skill.level);
                // Alineación específica para cada parte
                result.push(skill.name.padEnd(12) + progressBar + " " + levelLabel.padEnd(12));
            });
            
            // Contenedor inferior
            result.push(" ".repeat(57));
        });
        
        // No agregar mensaje final para mantener el aspecto limpio del terminal
        return result;
    }
    
    // Generar la barra de progreso con colores específicos
    _generateProgressBar(level) {
        const filled = "█"; // Bloque completo (verde brillante en el terminal)
        const empty = "▒";  // Bloque con textura (se verá más oscuro)
        
        const filledBlocks = Math.round((level / 5) * this.maxBarLength);
        const emptyBlocks = this.maxBarLength - filledBlocks;
        
        return filled.repeat(filledBlocks) + empty.repeat(emptyBlocks) + " ";
    }
}