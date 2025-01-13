export const directoryStructure = {
    '/': {
        type: 'folder',
        contents: {
            skills: {
                type: 'folder',
                contents: {
                    lenguajes_de_programacion: {
                        type: 'folder',
                        contents: {
                            python: { type: 'file' },
                            golang: { type: 'file' },
                            javascript: { type: 'file' },
                            typescript: { type: 'file' },
                            php: { type: 'file' },
                            c_cpp: { type: 'file' },
                            bash_scripting: { type: 'file' },
                        },
                    },
                    frameworks_y_bibliotecas: {
                        type: 'folder',
                        contents: {
                            vue: { type: 'file' },
                            nest: { type: 'file' },
                            laravel: { type: 'file' },
                            symfony: { type: 'file' },
                            nodejs: { type: 'file' },
                        },
                    },
                    aplicaciones_y_herramientas: {
                        type: 'folder',
                        contents: {
                            flutter: { type: 'file' },
                            numpy: { type: 'file' },
                            spark: { type: 'file' },
                            scraping: { type: 'file' },
                            pandas: { type: 'file' },
                        },
                    },
                    bases_de_datos: {
                        type: 'folder',
                        contents: {
                            postgresql: { type: 'file' },
                            mysql: { type: 'file' },
                            mongodb: { type: 'file' },
                            mariadb: { type: 'file' },
                            sql: { type: 'file' },
                            sqlite: { type: 'file' },
                        },
                    },
                    herramientas_de_desarrollo: {
                        type: 'folder',
                        contents: {
                            docker: { type: 'file' },
                            kubernetes: { type: 'file' },
                            jwt: { type: 'file' },
                            api_connection: { type: 'file' },
                            websocket_services: { type: 'file' },
                        },
                    },
                    servidores_y_cloud: {
                        type: 'folder',
                        contents: {
                            aws: { type: 'file' },
                            google_cloud: { type: 'file' },
                            azure: { type: 'file' },
                            ubuntu: { type: 'file' },
                            debian: { type: 'file' },
                        },
                    },
                    metodologias_y_otras_habilidades: {
                        type: 'folder',
                        contents: {
                            git: { type: 'file' },
                            scrum: { type: 'file' },
                            jira: { type: 'file' },
                            trabajo_en_equipo: { type: 'file' },
                            kanban: { type: 'file' },
                        },
                    },
                },
            },
        },
    },
};