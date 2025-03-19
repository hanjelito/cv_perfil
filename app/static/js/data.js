// data.js - Sistema centralizado de datos en JSON para toda la aplicación

export const appData = {
  // Información básica del perfil
  profile: {
    name: "Juan Angel Gonzales Laura",
    email: "agonzales@peruyoung.com",
    phone: "(+34) 643 663 002",
    github: "github.com/hanjelito",
    linkedin: "linkedin.com/in/angel-gonzales-laura",
    nationality: "Peruana",
    summary: {
      en: [
        "Computer and Industrial Engineer with extensive experience in developing and implementing advanced technological solutions,",
        "including back-end systems, automation, agent integration, and n8n workflows.",
        "Specialized in data analysis for strategic decision-making, technical team management,",
        "and agile adaptation to new technologies."
      ],
      es: "Ingeniero Informático e Industrial con amplia experiencia en el desarrollo e implementación de soluciones tecnológicas avanzadas, incluyendo sistemas back-end, automatización, integración de agentes y workflows con n8n. Especializado en análisis de datos para decisiones estratégicas, gestión de equipos técnicos y adaptación ágil a nuevas tecnologías."
    }
  },
  
  // Habilidades técnicas organizadas por categorías
  skills: {
    categories: [
      {
        id: "programming_languages",
        translations: {
          en: "PROGRAMMING LANGUAGES",
          es: "LENGUAJES DE PROGRAMACIÓN"
        },
        skills: [
          { 
            name: "Python", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "8+ years working with Python for backend services, web scraping, data processing, and automation. Experience with Selenium and various Python frameworks.",
              es: "Más de 8 años trabajando con Python para servicios backend, web scraping, procesamiento de datos y automatización. Experiencia con Selenium y varios frameworks de Python."
            },
            projects: [
              { 
                name: "Web Scraping System", 
                description: {
                  en: "Developed advanced web scraping solutions with Python and Selenium for efficient analysis of large data volumes", 
                  es: "Desarrollé soluciones avanzadas de web scraping con Python y Selenium para análisis eficiente de grandes volúmenes de datos"
                }
              },
              { 
                name: "Data Processing Pipeline", 
                description: {
                  en: "Created automated data processing pipelines for extracting insights from diverse sources", 
                  es: "Creé canales automatizados de procesamiento de datos para extraer información valiosa de diversas fuentes"
                }
              },
              { 
                name: "Automation Scripts", 
                description: {
                  en: "Developed complex automation scripts for server management and task scheduling", 
                  es: "Desarrollé scripts complejos de automatización para gestión de servidores y programación de tareas"
                }
              }
            ],
            related_skills: ["Selenium", "Data Analysis", "Web Scraping", "Automation", "APIs"]
          },
          { 
            name: "Golang", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years developing with Go. Experience building microservices, APIs, and systems for automated Docker container management.",
              es: "Más de 5 años desarrollando con Go. Experiencia construyendo microservicios, APIs y sistemas para gestión automática de contenedores Docker."
            },
            projects: [
              { 
                name: "Container Management System", 
                description: {
                  en: "Developed a system for automated Docker container management via REST APIs", 
                  es: "Desarrollé un sistema para gestión automática de contenedores Docker mediante APIs REST"
                }
              },
              { 
                name: "Microservice Architecture", 
                description: {
                  en: "Designed and implemented scalable microservices for enterprise clients", 
                  es: "Diseñé e implementé microservicios escalables para clientes empresariales"
                }
              },
              { 
                name: "High-Performance API", 
                description: {
                  en: "Created high-performance APIs for critical business operations", 
                  es: "Creé APIs de alto rendimiento para operaciones comerciales críticas"
                }
              }
            ],
            related_skills: ["Docker", "Kubernetes", "REST APIs", "Microservices", "Performance Optimization"]
          },
          { 
            name: "JavaScript/TypeScript", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "7+ years of experience with JavaScript and TypeScript for both frontend and backend development. Proficient in modern frameworks and async programming.",
              es: "Más de 7 años de experiencia con JavaScript y TypeScript tanto para desarrollo frontend como backend. Dominio de frameworks modernos y programación asíncrona."
            },
            projects: [
              { 
                name: "Vue.js Applications", 
                description: {
                  en: "Developed modern web applications using Vue.js and TypeScript", 
                  es: "Desarrollé aplicaciones web modernas usando Vue.js y TypeScript"
                }
              },
              { 
                name: "Node.js Backend Services", 
                description: {
                  en: "Created robust backend services with Node.js, Express, and NestJS", 
                  es: "Creé servicios backend robustos con Node.js, Express y NestJS"
                }
              },
              { 
                name: "Real-time Systems", 
                description: {
                  en: "Implemented real-time systems using WebSockets and JWT authentication", 
                  es: "Implementé sistemas en tiempo real usando WebSockets y autenticación JWT"
                }
              }
            ],
            related_skills: ["Vue.js", "Node.js", "NestJS", "WebSockets", "JWT"]
          },
          { 
            name: "PHP", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "7+ years of PHP development. Expert in Laravel and Symfony frameworks. Experience with high-traffic applications and optimization.",
              es: "Más de 7 años de desarrollo en PHP. Experto en frameworks Laravel y Symfony. Experiencia con aplicaciones de alto tráfico y optimización."
            },
            projects: [
              { 
                name: "Enterprise CMS", 
                description: {
                  en: "Developed custom content management systems for corporate clients", 
                  es: "Desarrollé sistemas de gestión de contenido personalizados para clientes corporativos"
                }
              },
              { 
                name: "RESTful APIs", 
                description: {
                  en: "Created RESTful APIs for mobile application backends", 
                  es: "Creé APIs RESTful para backends de aplicaciones móviles"
                }
              },
              { 
                name: "E-commerce Solutions", 
                description: {
                  en: "Implemented e-commerce platforms with secure payment processing", 
                  es: "Implementé plataformas de comercio electrónico con procesamiento seguro de pagos"
                }
              }
            ],
            related_skills: ["Laravel", "Symfony", "MySQL", "RESTful APIs", "MVC"]
          },
          { 
            name: "C/C++", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years of C/C++ programming. Experience developing system-level applications, automation scripts, and performance-critical components.",
              es: "Más de 5 años de programación en C/C++. Experiencia desarrollando aplicaciones a nivel de sistema, scripts de automatización y componentes críticos de rendimiento."
            },
            projects: [
              { 
                name: "System Automation", 
                description: {
                  en: "Developed C scripts for backend automation and system management", 
                  es: "Desarrollé scripts en C para automatización de backend y gestión de sistemas"
                }
              },
              { 
                name: "Performance Optimization", 
                description: {
                  en: "Optimized performance-critical components in legacy systems", 
                  es: "Optimicé componentes críticos de rendimiento en sistemas heredados"
                }
              },
              { 
                name: "Low-level Programming", 
                description: {
                  en: "Created low-level programming solutions during 42 Network training", 
                  es: "Creé soluciones de programación de bajo nivel durante la formación en 42 Network"
                }
              }
            ],
            related_skills: ["System Programming", "Memory Management", "Performance Optimization", "Bash", "Linux"]
          },
          { 
            name: "Kotlin", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "4+ years experience with Kotlin for Android development. Proficient in building location-based applications with modern architecture components and Jetpack libraries.",
              es: "Más de 4 años de experiencia con Kotlin para desarrollo Android. Competente en la creación de aplicaciones basadas en ubicación con componentes de arquitectura modernos y bibliotecas Jetpack."
            },
            projects: [
              { 
                name: "ReservaGPS App", 
                description: {
                  en: "Developed a reservation and location tracking application using MVVM architecture with LiveData and Coroutines", 
                  es: "Desarrollé una aplicación de reservas y seguimiento de ubicación utilizando arquitectura MVVM con LiveData y Coroutines"
                }
              },
              { 
                name: "Real-time Tracking Service", 
                description: {
                  en: "Created a background service for continuous location updates using Kotlin Flows and Google Location API", 
                  es: "Creé un servicio en segundo plano para actualizaciones continuas de ubicación usando Kotlin Flows y Google Location API"
                }
              },
              { 
                name: "JWT Authentication", 
                description: {
                  en: "Implemented secure JWT authentication with token refresh mechanism and local storage", 
                  es: "Implementé autenticación segura JWT con mecanismo de actualización de tokens y almacenamiento local"
                }
              }
            ],
            related_skills: ["Android SDK", "MVVM", "API", "Room Database", "Retrofit", "Coroutines"]
          },
          { 
            name: "Flutter", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "3+ years developing cross-platform applications with Flutter. Experience building reservation systems and location-based services with state management solutions.",
              es: "Más de 3 años desarrollando aplicaciones multiplataforma con Flutter. Experiencia en la creación de sistemas de reservas y servicios basados en ubicación con soluciones de gestión de estado."
            },
            projects: [
              { 
                name: "ReservaFlutter", 
                description: {
                  en: "Built a cross-platform reservation app with BLoC pattern and clean architecture principles", 
                  es: "Construí una aplicación de reservas multiplataforma con patrón BLoC y principios de arquitectura limpia"
                }
              },
              { 
                name: "GPS Navigator", 
                description: {
                  en: "Developed a custom navigation system using Flutter and Google Maps with real-time routing", 
                  es: "Desarrollé un sistema de navegación personalizado usando Flutter y Google Maps con enrutamiento en tiempo real"
                }
              },
              { 
                name: "Offline Reservation Manager", 
                description: {
                  en: "Created an offline-first reservation system with local storage and background synchronization", 
                  es: "Creé un sistema de reservas offline-first con almacenamiento local y sincronización en segundo plano"
                }
              }
            ],
            related_skills: ["Dart", "BLoC Pattern", "Provider", "Google Maps Flutter", "Firebase", "Offline Storage"]
          },
          { 
            name: "Bash", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "6+ years experience with Bash scripting for automation, system administration, and DevOps tasks.",
              es: "Más de 6 años de experiencia con scripts Bash para automatización, administración de sistemas y tareas DevOps."
            },
            projects: [
              { 
                name: "Deployment Automation", 
                description: {
                  en: "Created automated deployment scripts for continuous integration environments", 
                  es: "Creé scripts automatizados de despliegue para entornos de integración continua"
                }
              },
              { 
                name: "System Monitoring", 
                description: {
                  en: "Developed scripts for system monitoring and alerting", 
                  es: "Desarrollé scripts para monitoreo de sistemas y alertas"
                }
              },
              { 
                name: "Batch Processing", 
                description: {
                  en: "Implemented batch processing solutions for data management", 
                  es: "Implementé soluciones de procesamiento por lotes para gestión de datos"
                }
              }
            ],
            related_skills: ["Linux", "Shell Scripting", "Automation", "DevOps", "Cron Jobs"]
          }
        ]
      },
      {
        id: "frameworks",
        translations: {
          en: "FRAMEWORKS & LIBRARIES",
          es: "FRAMEWORKS Y BIBLIOTECAS"
        },
        skills: [
          { 
            name: "Vue.js", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "6+ years of experience with Vue.js from early versions to Vue 3 with Composition API. Skilled in state management and component architecture.",
              es: "Más de 6 años de experiencia con Vue.js desde las primeras versiones hasta Vue 3 con la API de Composición. Dominio de gestión de estado y arquitectura de componentes."
            },
            projects: [
              { 
                name: "Corporate Dashboard", 
                description: {
                  en: "Built responsive dashboards for data visualization and management", 
                  es: "Construí dashboards responsivos para visualización y gestión de datos"
                }
              },
              { 
                name: "Single Page Applications", 
                description: {
                  en: "Developed complex single page applications with optimized performance", 
                  es: "Desarrollé aplicaciones de página única complejas con rendimiento optimizado"
                }
              },
              { 
                name: "Component Libraries", 
                description: {
                  en: "Created reusable component libraries for enterprise applications", 
                  es: "Creé bibliotecas de componentes reutilizables para aplicaciones empresariales"
                }
              }
            ],
            related_skills: ["JavaScript", "TypeScript", "Vuex", "Vue Router", "Composition API"]
          },
          { 
            name: "Node.js", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "7+ years building backend services with Node.js. Experience with Express, NestJS, and asynchronous programming patterns.",
              es: "Más de 7 años construyendo servicios backend con Node.js. Experiencia con Express, NestJS y patrones de programación asíncrona."
            },
            projects: [
              { 
                name: "RESTful APIs", 
                description: {
                  en: "Developed scalable RESTful APIs for web and mobile applications", 
                  es: "Desarrollé APIs RESTful escalables para aplicaciones web y móviles"
                }
              },
              { 
                name: "Real-time Services", 
                description: {
                  en: "Created real-time services using WebSockets and event-driven architecture", 
                  es: "Creé servicios en tiempo real usando WebSockets y arquitectura basada en eventos"
                }
              },
              { 
                name: "Microservices", 
                description: {
                  en: "Designed and implemented microservice architectures with message queues", 
                  es: "Diseñé e implementé arquitecturas de microservicios con colas de mensajes"
                }
              }
            ],
            related_skills: ["Express", "NestJS", "WebSockets", "RabbitMQ", "Redis"]
          },
          { 
            name: "NestJS", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "2+ years working with NestJS framework. Experience building enterprise-grade APIs, microservices, and GraphQL endpoints.",
              es: "Más de 2 años trabajando con el framework NestJS. Experiencia construyendo APIs empresariales, microservicios y endpoints GraphQL."
            },
            projects: [
              { 
                name: "Enterprise APIs", 
                description: {
                  en: "Developed enterprise-grade APIs with robust authentication and authorization", 
                  es: "Desarrollé APIs empresariales con autenticación y autorización robustas"
                }
              },
              { 
                name: "Microservice Systems", 
                description: {
                  en: "Created microservice systems with message integration",
                  es: "Creé sistemas de microservicios con integración de mensajería",
                }
              },
              { 
                name: "Real-time Applications", 
                description: {
                  en: "Built real-time applications with WebSockets and event handling", 
                  es: "Construí aplicaciones en tiempo real con WebSockets y manejo de eventos"
                }
              }
            ],
            related_skills: ["TypeScript", "Node.js", "Microservices", "WebSockets", "JWT"]
          },
          { 
            name: "Laravel", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years of Laravel development. Experience with full-stack applications, REST APIs, and database optimization.",
              es: "Más de 5 años de desarrollo con Laravel. Experiencia en aplicaciones full-stack, APIs REST y optimización de bases de datos."
            },
            projects: [
              { 
                name: "CMS Systems", 
                description: {
                  en: "Developed customized content management systems for corporate clients", 
                  es: "Desarrollé sistemas de gestión de contenido personalizados para clientes corporativos"
                }
              },
              { 
                name: "Backend APIs", 
                description: {
                  en: "Created backend APIs for mobile and web applications", 
                  es: "Creé APIs backend para aplicaciones móviles y web"
                }
              },
              { 
                name: "E-commerce Solutions", 
                description: {
                  en: "Implemented e-commerce solutions with payment gateway integrations", 
                  es: "Implementé soluciones de comercio electrónico con integraciones de pasarelas de pago"
                }
              }
            ],
            related_skills: ["PHP", "MySQL", "Eloquent ORM", "Blade", "REST APIs"]
          },
          { 
            name: "Symfony", 
            level: 3, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "4+ years working with Symfony framework. Experience with complex applications, component architecture, and performance optimization.",
              es: "Más de 4 años trabajando con el framework Symfony. Experiencia con aplicaciones complejas, arquitectura de componentes y optimización de rendimiento."
            },
            projects: [
              { 
                name: "Enterprise Applications", 
                description: {
                  en: "Developed enterprise-level applications with complex business logic", 
                  es: "Desarrollé aplicaciones de nivel empresarial con lógica de negocio compleja"
                }
              },
              { 
                name: "Service Integration", 
                description: {
                  en: "Created service integration platforms for connecting multiple systems", 
                  es: "Creé plataformas de integración de servicios para conectar múltiples sistemas"
                }
              },
              { 
                name: "Performance Optimization", 
                description: {
                  en: "Optimized high-traffic applications for improved performance", 
                  es: "Optimicé aplicaciones de alto tráfico para mejorar el rendimiento"
                }
              }
            ],
            related_skills: ["PHP", "Doctrine ORM", "Twig", "DependencyInjection", "EventDispatcher"]
          },
          { 
            name: "n8n", 
            level: 3, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "1 year of experience with n8n for workflow automation. Experience in integrating different systems and creating automated business processes.",
              es: "1 año de experiencia con n8n para automatización de flujos de trabajo. Experiencia en integración de diferentes sistemas y creación de procesos de negocio automatizados.",
            },
            projects: [
              { 
                name: "Process Automation", 
                description: {
                  en: "Automated complex business processes across multiple systems", 
                  es: "Automaticé procesos de negocio complejos a través de múltiples sistemas"
                }
              },
              { 
                name: "System Integration", 
                description: {
                  en: "Created workflows to integrate disparate systems and APIs", 
                  es: "Creé flujos de trabajo para integrar sistemas y APIs dispares"
                }
              },
              { 
                name: "Data Processing", 
                description: {
                  en: "Developed data processing workflows for ETL operations", 
                  es: "Desarrollé flujos de trabajo de procesamiento de datos para operaciones ETL"
                }
              }
            ],
            related_skills: ["Workflow Automation", "API Integration", "Webhooks", "ETL", "Business Process Automation"]
          }
        ]
      },
      {
        id: "databases",
        translations: {
          en: "DATABASES",
          es: "BASES DE DATOS"
        },
        skills: [
          { 
            name: "PostgreSQL", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "7+ years of PostgreSQL database development. Experience with advanced features, performance tuning, and high-availability configurations.",
              es: "Más de 7 años de desarrollo de bases de datos PostgreSQL. Experiencia con características avanzadas, ajuste de rendimiento y configuraciones de alta disponibilidad."
            },
            projects: [
              { 
                name: "Enterprise Databases", 
                description: {
                  en: "Designed and optimized enterprise-level database systems", 
                  es: "Diseñé y optimicé sistemas de bases de datos de nivel empresarial"
                }
              },
              { 
                name: "Performance Tuning", 
                description: {
                  en: "Performed database performance tuning for high-traffic applications", 
                  es: "Realicé ajustes de rendimiento de bases de datos para aplicaciones de alto tráfico"
                }
              },
              { 
                name: "Data Migration", 
                description: {
                  en: "Managed complex data migration projects between different systems", 
                  es: "Gestioné proyectos complejos de migración de datos entre diferentes sistemas"
                }
              }
            ],
            related_skills: ["SQL", "Database Design", "Performance Tuning", "Replication", "PL/pgSQL"]
          },
          { 
            name: "MySQL/MariaDB", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "8+ years working with MySQL and MariaDB. Experience with optimization, replication, and high-availability configurations.",
              es: "Más de 8 años trabajando con MySQL y MariaDB. Experiencia en optimización, replicación y configuraciones de alta disponibilidad."
            },
            projects: [
              { 
                name: "Web Application Databases", 
                description: {
                  en: "Designed and maintained databases for high-traffic web applications", 
                  es: "Diseñé y mantuve bases de datos para aplicaciones web de alto tráfico"
                }
              },
              { 
                name: "Replication Setup", 
                description: {
                  en: "Configured and managed database replication for high availability", 
                  es: "Configuré y administré replicación de bases de datos para alta disponibilidad"
                }
              },
              { 
                name: "Query Optimization", 
                description: {
                  en: "Optimized complex queries and database schema for performance", 
                  es: "Optimicé consultas complejas y esquemas de bases de datos para mejorar el rendimiento"
                }
              }
            ],
            related_skills: ["SQL", "Database Design", "Performance Tuning", "Replication", "Stored Procedures"]
          },
          { 
            name: "MongoDB", 
            level: 3, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "4+ years using MongoDB for document-oriented storage. Experience with aggregation pipelines, indexing strategies, and cluster management.",
              es: "Más de 4 años usando MongoDB para almacenamiento orientado a documentos. Experiencia con canales de agregación, estrategias de indexación y gestión de clústeres."
            },
            projects: [
              { 
                name: "NoSQL Solutions", 
                description: {
                  en: "Implemented NoSQL database solutions for flexible data storage", 
                  es: "Implementé soluciones de bases de datos NoSQL para almacenamiento flexible de datos"
                }
              },
              { 
                name: "Real-time Applications", 
                description: {
                  en: "Designed database solutions for real-time applications", 
                  es: "Diseñé soluciones de bases de datos para aplicaciones en tiempo real"
                }
              },
              { 
                name: "Document Storage", 
                description: {
                  en: "Created document storage systems with complex querying capabilities", 
                  es: "Creé sistemas de almacenamiento de documentos con capacidades de consulta complejas"
                }
              }
            ],
            related_skills: ["NoSQL", "Aggregation Framework", "Indexing", "Sharding", "Document Design"]
          },
          { 
            name: "Redis", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years working with Redis for caching, queuing, and real-time data storage. Experience with advanced features and high-performance configurations.",
              es: "Más de 5 años trabajando con Redis para caché, colas y almacenamiento de datos en tiempo real. Experiencia con características avanzadas y configuraciones de alto rendimiento."
            },
            projects: [
              { 
                name: "Caching Systems", 
                description: {
                  en: "Implemented caching systems for high-performance applications", 
                  es: "Implementé sistemas de caché para aplicaciones de alto rendimiento"
                }
              },
              { 
                name: "Message Queues", 
                description: {
                  en: "Developed message queue systems for asynchronous processing", 
                  es: "Desarrollé sistemas de colas de mensajes para procesamiento asíncrono"
                }
              },
              { 
                name: "Real-time Data Store", 
                description: {
                  en: "Created real-time data stores for fast-changing information", 
                  es: "Creé almacenes de datos en tiempo real para información de rápido cambio"
                }
              }
            ],
            related_skills: ["Caching", "Message Queues", "Pub/Sub", "Data Structures", "Performance Optimization"]
          }
        ]
      },
      {
        id: "devops",
        translations: {
          en: "DEVOPS & TOOLS", 
          es: "DEVOPS Y HERRAMIENTAS"
        },
        skills: [
          { 
            name: "Docker", 
            level: 4, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "6+ years working with Docker for containerization. Experience with complex multi-container applications and container orchestration.",
              es: "Más de 6 años trabajando con Docker para contenedorización. Experiencia con aplicaciones complejas multi-contenedor y orquestación de contenedores."
            },
            projects: [
              { 
                name: "Containerized Applications", 
                description: {
                  en: "Containerized complex applications for consistent deployment environments", 
                  es: "Contenericé aplicaciones complejas para entornos de despliegue consistentes"
                }
              },
              { 
                name: "Multi-container Solutions", 
                description: {
                  en: "Designed and implemented multi-container solution architectures", 
                  es: "Diseñé e implementé arquitecturas de soluciones multi-contenedor"
                }
              },
              { 
                name: "CI/CD Integration", 
                description: {
                  en: "Integrated Docker with CI/CD pipelines for automated testing and deployment", 
                  es: "Integré Docker con canales CI/CD para pruebas y despliegue automatizados"
                }
              }
            ],
            related_skills: ["Containerization", "Docker Compose", "Container Orchestration", "CI/CD", "Microservices"]
          },
          { 
            name: "Kubernetes", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "4+ years experience with Kubernetes for container orchestration. Skilled in deployment strategies, scaling, and cluster management.",
              es: "Más de 4 años de experiencia con Kubernetes para orquestación de contenedores. Dominio en estrategias de despliegue, escalado y gestión de clústeres."
            },
            projects: [
              { 
                name: "Container Orchestration", 
                description: {
                  en: "Managed container orchestration for large-scale applications", 
                  es: "Gestioné orquestación de contenedores para aplicaciones a gran escala"
                }
              },
              { 
                name: "Deployment Automation", 
                description: {
                  en: "Automated deployment processes for Kubernetes environments", 
                  es: "Automaticé procesos de despliegue para entornos Kubernetes"
                }
              },
              { 
                name: "High-Availability Clusters", 
                description: {
                  en: "Configured and managed high-availability Kubernetes clusters", 
                  es: "Configuré y administré clústeres Kubernetes de alta disponibilidad"
                }
              }
            ],
            related_skills: ["Container Orchestration", "Cluster Management", "Deployment Strategies", "Service Mesh", "Helm"]
          },
          { 
            name: "AWS", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years working with AWS services. Experience with EC2, S3, Lambda, RDS, and other core services for cloud infrastructure.",
              es: "Más de 5 años trabajando con servicios AWS. Experiencia con EC2, S3, Lambda, RDS y otros servicios principales para infraestructura en la nube."
            },
            projects: [
              { 
                name: "Cloud Infrastructure", 
                description: {
                  en: "Designed and implemented cloud infrastructure for enterprise applications", 
                  es: "Diseñé e implementé infraestructura en la nube para aplicaciones empresariales"
                }
              },
              { 
                name: "Serverless Applications", 
                description: {
                  en: "Developed serverless applications using Lambda and API Gateway", 
                  es: "Desarrollé aplicaciones serverless usando Lambda y API Gateway"
                }
              },
              { 
                name: "Data Storage Solutions", 
                description: {
                  en: "Created scalable data storage solutions with S3 and RDS", 
                  es: "Creé soluciones escalables de almacenamiento de datos con S3 y RDS"
                }
              }
            ],
            related_skills: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"]
          },
          { 
            name: "Google Cloud", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "4+ years experience with Google Cloud Platform. Skilled in Compute Engine, Kubernetes Engine, and cloud infrastructure management.",
              es: "Más de 4 años de experiencia con Google Cloud Platform. Dominio en Compute Engine, Kubernetes Engine y gestión de infraestructura en la nube."
            },
            projects: [
              { 
                name: "GKE Management", 
                description: {
                  en: "Managed Google Kubernetes Engine clusters for containerized applications", 
                  es: "Gestioné clústeres de Google Kubernetes Engine para aplicaciones en contenedores"
                }
              },
              { 
                name: "Cloud Infrastructure", 
                description: {
                  en: "Designed cloud infrastructure for scalable applications", 
                  es: "Diseñé infraestructura en la nube para aplicaciones escalables"
                }
              },
              { 
                name: "Data Processing", 
                description: {
                  en: "Implemented data processing solutions using Google Cloud services", 
                  es: "Implementé soluciones de procesamiento de datos usando servicios de Google Cloud"
                }
              }
            ],
            related_skills: ["Compute Engine", "Kubernetes Engine", "Cloud Storage", "Cloud Functions", "BigQuery"]
          },
          { 
            name: "RabbitMQ", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years working with RabbitMQ for message queuing. Experience with complex messaging patterns and high-throughput systems.",
              es: "Más de 5 años trabajando con RabbitMQ para colas de mensajes. Experiencia con patrones complejos de mensajería y sistemas de alto rendimiento."
            },
            projects: [
              { 
                name: "Message Queue Systems", 
                description: {
                  en: "Implemented message queue systems for distributed applications", 
                  es: "Implementé sistemas de colas de mensajes para aplicaciones distribuidas"
                }
              },
              { 
                name: "Event-driven Architecture", 
                description: {
                  en: "Designed event-driven architectures using message brokers", 
                  es: "Diseñé arquitecturas basadas en eventos usando brokers de mensajes"
                }
              },
              { 
                name: "Asynchronous Processing", 
                description: {
                  en: "Created asynchronous processing systems for high-load operations", 
                  es: "Creé sistemas de procesamiento asíncrono para operaciones de alta carga"
                }
              }
            ],
            related_skills: ["Message Queues", "AMQP", "Distributed Systems", "Event-driven Architecture", "System Integration"]
          },
          { 
            name: "Git", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "8+ years of Git version control. Advanced knowledge of branching strategies, workflows, and collaborative development.",
              es: "Más de 8 años de control de versiones Git. Conocimiento avanzado de estrategias de ramificación, flujos de trabajo y desarrollo colaborativo."
            },
            projects: [
              { 
                name: "Team Workflow", 
                description: {
                  en: "Established Git workflows and best practices for development teams", 
                  es: "Establecí flujos de trabajo Git y mejores prácticas para equipos de desarrollo"
                }
              },
              { 
                name: "CI/CD Integration", 
                description: {
                  en: "Integrated Git with CI/CD pipelines for automated testing and deployment", 
                  es: "Integré Git con canales CI/CD para pruebas y despliegue automatizados"
                }
              },
              { 
                name: "Version Control Strategies", 
                description: {
                  en: "Implemented advanced version control strategies for complex projects", 
                  es: "Implementé estrategias avanzadas de control de versiones para proyectos complejos"
                }
              }
            ],
            related_skills: ["GitHub", "GitLab", "Branching Strategies", "Code Review", "Version Control"]
          },
          { 
            name: "Azure", 
            level: 4, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "3+ years experience with Microsoft Azure. Knowledge of virtual machines, app services, and Azure DevOps.",
              es: "Más de 3 años de experiencia con Microsoft Azure. Conocimiento de máquinas virtuales, servicios de aplicaciones y Azure DevOps."
            },
            projects: [
              { 
                name: "Cloud Migration", 
                description: {
                  en: "Migrated on-premises applications to Azure cloud infrastructure", 
                  es: "Migré aplicaciones locales a infraestructura en la nube de Azure"
                }
              },
              { 
                name: "Azure DevOps", 
                description: {
                  en: "Implemented CI/CD pipelines using Azure DevOps", 
                  es: "Implementé canales CI/CD usando Azure DevOps"
                }
              },
              { 
                name: "App Services", 
                description: {
                  en: "Deployed and managed applications using Azure App Services", 
                  es: "Desplegué y administré aplicaciones usando Azure App Services"
                }
              }
            ],
            related_skills: ["Cloud Computing", "Virtual Machines", "App Services", "Azure DevOps", "Infrastructure as Code"]
          },
          { 
            name: "CI/CD", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years implementing continuous integration and deployment pipelines. Experience with GitHub Actions, GitLab CI, and Jenkins.",
              es: "Más de 5 años implementando canales de integración y despliegue continuos. Experiencia con GitHub Actions, GitLab CI y Jenkins."
            },
            projects: [
              { 
                name: "Automated Deployment", 
                description: {
                  en: "Implemented zero-downtime deployment workflows for production environments", 
                  es: "Implementé flujos de trabajo de despliegue sin tiempo de inactividad para entornos de producción"
                }
              },
              { 
                name: "Test Automation", 
                description: {
                  en: "Created comprehensive test automation as part of CI/CD pipelines", 
                  es: "Creé automatización de pruebas integral como parte de canales CI/CD"
                }
              },
              { 
                name: "Pipeline Optimization", 
                description: {
                  en: "Optimized CI/CD pipelines for faster builds and deployments", 
                  es: "Optimicé canales CI/CD para builds y despliegues más rápidos"
                }
              }
            ],
            related_skills: ["GitHub Actions", "GitLab CI", "Jenkins", "Docker", "Automated Testing"]
          }
        ]
      }
    ]
  },
  
  // Experiencia profesional
  experience: [
    {
      company: "Diario de España",
      period: "2021-2025",
      title: {
        en: "Senior Software Development Engineer",
        es: "Ingeniero Senior de Desarrollo de Software"
      },
      responsibilities: {
        en: [
          "Developed and optimized back-end solutions, specializing in queue systems (RabbitMQ, Redis)",
          "Automated processes with C and Bash scripts, advanced management of Docker containers and Kubernetes",
          "Implemented web scraping with Python and Selenium for efficient analysis of large data volumes",
          "Led technical teams, ensuring achievement of objectives through agile methodologies (Scrum/Kanban)",
          "Integrated and automated processes through workflows in n8n"
        ],
        es: [
          "Desarrollo y optimización de soluciones back-end, especialización en sistemas de colas (RabbitMQ, Redis)",
          "Automatización con scripts en C y Bash, gestión avanzada de contenedores Docker y Kubernetes",
          "Web scraping con Python y Selenium para análisis eficiente de grandes volúmenes de datos",
          "Liderazgo de equipos técnicos, asegurando cumplimiento de objetivos mediante metodologías ágiles (Scrum/Kanban)",
          "Integración y automatización de procesos mediante workflows en n8n"
        ]
      }
    },
    {
      company: "APROS PERÚ",
      period: "2020-2021",
      title: {
        en: "Senior Software Engineer",
        es: "Ingeniero de Software Senior"
      },
      responsibilities: {
        en: [
          "Designed scalable architectures and custom databases for strategic clients",
          "Provided key technological consulting at ComexPeru, implementing significant improvements in infrastructure and processes",
          "Developed systems in Golang for automatic Docker container management via REST APIs",
          "Administered servers and IT security, conducted preventive audits"
        ],
        es: [
          "Diseño de arquitecturas escalables y bases de datos personalizadas para clientes estratégicos",
          "Consultoría tecnológica clave en ComexPeru, implementando mejoras significativas en infraestructura y procesos",
          "Desarrollo en Golang de sistemas para gestión automática de contenedores Docker mediante APIs REST",
          "Administración de servidores y seguridad informática, realización de auditorías preventivas"
        ]
      }
    },
    {
      company: "Studio Tigres S.A.C.",
      period: "2017-2019",
      title: {
        en: "Office Director and Senior Programmer",
        es: "Director Oficina y Programador Senior"
      },
      responsibilities: {
        en: [
          "Directed and trained technical teams for the adoption of new technologies (Flutter, Vue.js, Laravel)",
          "Developed and supervised technological solutions for large corporate clients such as San Fernando and Ferreyros",
          "Effectively implemented control and monitoring systems through APIs, Flutter, and advanced web technologies"
        ],
        es: [
          "Dirección y formación de equipos técnicos para la adopción de nuevas tecnologías (Flutter, Vue.js, Laravel)",
          "Desarrollo y supervisión de soluciones tecnológicas para grandes clientes corporativos como San Fernando y Ferreyros",
          "Implementación efectiva de sistemas de control y seguimiento mediante APIs, Flutter y tecnologías web avanzadas"
        ]
      }
    }
  ],
  
  // Educación y certificaciones
  education: {
    universities: [
      {
        name: "Universidad Católica San Pablo",
        location: "Arequipa, Perú",
        period: "2003-2007",
        degree: {
          en: "Computer Engineering",
          es: "Ingeniería Informática"
        }
      },
      {
        name: "Universidad Continental",
        location: "Arequipa, Perú",
        period: "2016-2019",
        degree: {
          en: "Industrial Engineering",
          es: "Ingeniería Industrial"
        }
      },
      {
        name: "42 Network",
        location: "Madrid, España",
        period: "2020-2024",
        degree: {
          en: "Low-level Programmer",
          es: "Programador de bajo nivel"
        }
      }
    ],
    certifications: {
      en: [
        "AWS Academy Cloud Foundations",
        "Google Cloud: Core Infrastructure",
        "Google Cloud: Compute Engine",
        "Google Cloud: Kubernetes Engine",
        "IBM Quantum Challenge: Spring 2023"
      ],
      es: [
        "AWS Academy Cloud Foundations",
        "Google Cloud: Infraestructura Core",
        "Google Cloud: Compute Engine",
        "Google Cloud: Kubernetes Engine",
        "IBM Quantum Challenge: Primavera 2023"
      ]
    }
  },
  
  // Proyectos personales
  projects: [
    {
      id: "workflow_automation",
      name: {
        en: "Workflow Automation Platform",
        es: "Plataforma de Automatización de Flujos de Trabajo"
      },
      description: {
        en: "An advanced workflow automation system using n8n, integrating multiple services and APIs for business process automation.",
        es: "Un sistema avanzado de automatización de flujos de trabajo utilizando n8n, integrando múltiples servicios y APIs para automatización de procesos de negocio."
      }
    },
    {
      id: "container_management",
      name: {
        en: "Container Management System",
        es: "Sistema de Gestión de Contenedores"
      },
      description: {
        en: "A comprehensive container management solution built with Golang and Docker API for automated deployment and scaling of containerized applications.",
        es: "Una solución integral de gestión de contenedores construida con Golang y API de Docker para despliegue y escalado automatizado de aplicaciones en contenedores."
      }
    },
    {
      id: "data_scraping",
      name: {
        en: "Advanced Data Scraping Tool",
        es: "Herramienta Avanzada de Web Scraping"
      },
      description: {
        en: "A sophisticated data scraping and analysis tool built with Python and Selenium for extracting and processing large volumes of web data.",
        es: "Una sofisticada herramienta de web scraping y análisis construida con Python y Selenium para extraer y procesar grandes volúmenes de datos web."
      }
    },
    {
      id: "real_time_dashboard",
      name: {
        en: "Real-time Monitoring Dashboard",
        es: "Panel de Monitoreo en Tiempo Real"
      },
      description: {
        en: "A real-time monitoring dashboard using Vue.js, WebSockets, and Redis for visualizing system metrics and performance data.",
        es: "Un panel de monitoreo en tiempo real utilizando Vue.js, WebSockets y Redis para visualizar métricas del sistema y datos de rendimiento."
      }
    }
  ],
  
  // Traducciones de la interfaz del terminal
  ui: {
    en: {
      welcome: [
        "",
        "██╗  ██╗██████╗ ███╗   ██╗███████╗████████╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗",
        "██║  ██║╚════██╗████╗  ██║██╔════╝╚══██╔══╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝",
        "███████║ █████╔╝██╔██╗ ██║█████╗     ██║   ██║ █╗ ██║██║   ██║██████╔╝█████╔╝ ",
        "╚════██║██╔═══╝ ██║╚██╗██║██╔══╝     ██║   ██║███╗██║██║   ██║██╔══██╗██╔═██╗ ",
        "     ██║███████╗██║ ╚████║███████╗   ██║   ╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗",
        "     ╚═╝╚══════╝╚═╝  ╚═══╝╚══════╝   ╚═╝    ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝",
        "                                                              ",
        "          ╦╦ ╦╔═╗╔╗╔ ╔═╗╔═╗╔╗╔    ",
        "          ║║ ║╠═╣║║║═║ ╦║ ║║║║    ",
        "         ╚╝╚═╝╩ ╩╝╚╝ ╚═╝╚═╝╝╚╝    ",
        "                                  ",
        "Type 'help' to see available commands."
      ],
      help: [
        "Available commands:",
        " - ls: List directory contents",
        " - cd [dir]: Change directory (cd .. to go up, cd / to go to root)",
        " - cat [file]: Display file contents",
        " - clear: Clear the terminal",
        " - theme: Toggle light/dark theme",
        " - lang: Switch language (es/en)",
        " - about: Display information about me",
        " - experience: Show my professional experience",
        " - education: Show my education history",
        " - projects: Show my projects",
        " - skills: Show my technical skills",
        " - contact: Display my contact information",
        " - interests: Show my personal interests"
      ],
      unknown: "Unknown command:",
      notFound: "File or directory not found:",
      notFile: "Not a file:",
      notDirectory: "Not a directory:",
      suggestions: "Suggestions:",
    },
    es: {
      welcome: [
        "",
        "██╗  ██╗██████╗ ███╗   ██╗███████╗████████╗██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗",
        "██║  ██║╚════██╗████╗  ██║██╔════╝╚══██╔══╝██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝",
        "███████║ █████╔╝██╔██╗ ██║█████╗     ██║   ██║ █╗ ██║██║   ██║██████╔╝█████╔╝ ",
        "╚════██║██╔═══╝ ██║╚██╗██║██╔══╝     ██║   ██║███╗██║██║   ██║██╔══██╗██╔═██╗ ",
        "     ██║███████╗██║ ╚████║███████╗   ██║   ╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗",
        "     ╚═╝╚══════╝╚═╝  ╚═══╝╚══════╝   ╚═╝    ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝",
        "                                                                               ",
        "          ╦╦ ╦╔═╗╔╗╔ ╔═╗╔═╗╔╗╔    ",
        "          ║║ ║╠═╣║║║═║ ╦║ ║║║║    ",
        "         ╚╝╚═╝╩ ╩╝╚╝ ╚═╝╚═╝╝╚╝    ",
        "                                  ",
        "Escribe 'help' para ver los comandos disponibles."
      ],
      help: [
        "Comandos disponibles:",
        " - ls: Listar contenido del directorio",
        " - cd [dir]: Cambiar directorio (cd .. para subir, cd / para ir a la raíz)",
        " - cat [file]: Mostrar contenido del archivo",
        " - clear: Limpiar el terminal",
        " - theme: Cambiar entre tema claro/oscuro",
        " - lang: Cambiar idioma (es/en)",
        " - about: Mostrar información sobre mí",
        " - experience: Mostrar mi experiencia profesional",
        " - education: Mostrar mi historial educativo",
        " - projects: Mostrar mis proyectos",
        " - skills: Mostrar mis habilidades técnicas",
        " - contact: Mostrar mi información de contacto",
        " - interests: Mostrar mis intereses personales"
      ],
      unknown: "Comando desconocido:",
      notFound: "Archivo o directorio no encontrado:",
      notFile: "No es un archivo:",
      notDirectory: "No es un directorio:",
      suggestions: "Sugerencias:",
    }
  },
  
  // Intereses personales
  interests: {
    en: [
      "Traveling",
      "Photography",
      "Technological research",
      "Gym"
    ],
    es: [
      "Viajar",
      "Fotografía",
      "Investigación tecnológica",
      "Gimnasio"
    ]
  },
  
  // Información de contacto adicional
  contact: {
    phone: "(+34) 643 663 002",
    email: "agonzales@peruyoung.com",
    linkedin: "linkedin.com/in/angel-gonzales-laura",
    github: "github.com/hanjelito",
    location: {
      en: "Madrid, Spain",
      es: "Madrid, España"
    }
  },
  
  // Información adicional
  additional_info: {
    nationality: "Peruana",
    languages: {
      en: [
        {name: "Spanish", level: "Native"},
        {name: "English", level: "Professional working proficiency"},
        {name: "Portuguese", level: "Basic"}
      ],
      es: [
        {name: "Español", level: "Nativo"},
        {name: "Inglés", level: "Competencia profesional"},
        {name: "Portugués", level: "Básico"}
      ]
    },
    availability: {
      en: "Available for new professional opportunities",
      es: "Disponible para nuevas oportunidades profesionales"
    }
  }
};
