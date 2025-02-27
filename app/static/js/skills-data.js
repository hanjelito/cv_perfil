// Archivo para almacenar los datos de habilidades
// Esto permite agregar o modificar habilidades fácilmente

export const skillsData = {
    categories: [
        {
            id: "programming_languages",
            translations: {
                en: "PROGRAMMING LANGUAGES",
                es: "LENGUAJES DE PROGRAMACIÓN"
            },
            skills: [
                { name: "JavaScript", level: 1, translations: { en: "Expert", es: "Experto" } },
                { name: "Python", level: 2, translations: { en: "Advanced", es: "Avanzado" } },
                { name: "PHP", level: 3, translations: { en: "Advanced", es: "Avanzado" } },
                { name: "TypeScript", level: 4, translations: { en: "Intermediate", es: "Intermedio" } },
                { name: "Go", level: 5, translations: { en: "Intermediate", es: "Intermedio" } }
                // Puedes agregar más habilidades aquí
            ]
        },
        {
            id: "frameworks",
            translations: {
                en: "FRAMEWORKS & LIBRARIES",
                es: "FRAMEWORKS Y BIBLIOTECAS"
            },
            skills: [
                { name: "Vue.js", level: 5, translations: { en: "Expert", es: "Experto" } },
                { name: "Laravel", level: 4, translations: { en: "Advanced", es: "Avanzado" } },
                { name: "Node.js", level: 4, translations: { en: "Advanced", es: "Avanzado" } },
                { name: "NestJS", level: 3, translations: { en: "Intermediate", es: "Intermedio" } }
                // Puedes agregar más frameworks aquí
            ]
        },
        {
            id: "databases",
            translations: {
                en: "DATABASES",
                es: "BASES DE DATOS"
            },
            skills: [
                { name: "MySQL", level: 4, translations: { en: "Advanced", es: "Avanzado" } },
                { name: "PostgreSQL", level: 4, translations: { en: "Advanced", es: "Avanzado" } },
                { name: "MongoDB", level: 3, translations: { en: "Intermediate", es: "Intermedio" } }
                // Puedes agregar más bases de datos aquí
            ]
        }
        // Puedes agregar más categorías aquí, por ejemplo:
        // {
        //     id: "devops",
        //     translations: {
        //         en: "DEVOPS & TOOLS", 
        //         es: "DEVOPS Y HERRAMIENTAS"
        //     },
        //     skills: [
        //         { name: "Docker", level: 4, translations: { en: "Advanced", es: "Avanzado" } },
        //         { name: "Git", level: 5, translations: { en: "Expert", es: "Experto" } },
        //         { name: "CI/CD", level: 3, translations: { en: "Intermediate", es: "Intermedio" } }
        //     ]
        // }
    ]
};