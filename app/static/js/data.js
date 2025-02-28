// data.js - Sistema centralizado de datos en JSON para toda la aplicación

export const appData = {
  // Información básica del perfil
  profile: {
    name: "Juan Angel Gonzales Laura",
    email: "agonzales@peruyoung.com",
    github: "github.com/hanjelito",
    linkedin: "linkedin.com/in/angel-gonzales-laura",
    summary: {
      en: [
        "Computer and Industrial Engineer with over 20 years of experience in systems development and programming.",
        "I've led a variety of projects, from website creation to implementing comprehensive systems for airlines,",
        "with a special focus on data analysis for informed decision-making.",
        "I firmly believe in the importance of adaptability and continuous learning in the ever-changing world of technology."],
      es: "Ingeniero Informático e Industrial con más de 20 años de experiencia en desarrollo de sistemas y programación. He dirigido una variedad de proyectos, desde la creación de páginas web hasta la implementación de sistemas integrales para aerolíneas, con un enfoque especial en el análisis de datos para la toma de decisiones informadas. Creo firmemente en la importancia de la adaptabilidad y el aprendizaje constante en el siempre cambiante mundo de la tecnología."
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
            name: "JavaScript", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "I have 8+ years of experience with JavaScript for both frontend and backend development. Proficient in modern ES6+ features and JavaScript ecosystem.",
              es: "Tengo más de 8 años de experiencia con JavaScript tanto para desarrollo frontend como backend. Dominio de características modernas de ES6+ y del ecosistema JavaScript."
            },
            projects: [
              { 
                name: "E-commerce Platform", 
                description: {
                  en: "Built a complete online store with shopping cart, payment processing, and inventory management using React and Node.js", 
                  es: "Construí una tienda online completa con carrito de compras, procesamiento de pagos y gestión de inventario usando React y Node.js"
                }
              },
              { 
                name: "Real-time Dashboard", 
                description: {
                  en: "Developed a real-time data visualization dashboard using WebSockets and D3.js", 
                  es: "Desarrollé un panel de visualización de datos en tiempo real usando WebSockets y D3.js"
                }
              },
              { 
                name: "Custom CMS", 
                description: {
                  en: "Created a content management system with WYSIWYG editor and custom plugin architecture", 
                  es: "Creé un sistema de gestión de contenido con editor WYSIWYG y arquitectura de plugins personalizada"
                }
              }
            ],
            related_skills: ["Node.js", "React", "TypeScript", "Vue.js", "Express"]
          },
          { 
            name: "Python", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years working with Python for backend services, data processing, and automation. Experience with Django, Flask, and FastAPI frameworks.",
              es: "Más de 5 años trabajando con Python para servicios backend, procesamiento de datos y automatización. Experiencia con frameworks Django, Flask y FastAPI."
            },
            projects: [
              { 
                name: "Analytics API", 
                description: {
                  en: "Built a REST API for data analytics with Flask, SQLAlchemy, and Pandas", 
                  es: "Construí una API REST para análisis de datos con Flask, SQLAlchemy y Pandas"
                }
              },
              { 
                name: "ETL Pipeline", 
                description: {
                  en: "Developed data extraction, transformation, and loading processes for a business intelligence platform", 
                  es: "Desarrollé procesos de extracción, transformación y carga de datos para una plataforma de inteligencia empresarial"
                }
              },
              { 
                name: "Automation Scripts", 
                description: {
                  en: "Created scripts for CI/CD processes and infrastructure management", 
                  es: "Creé scripts para procesos de CI/CD y gestión de infraestructura"
                }
              }
            ],
            related_skills: ["Django", "Flask", "FastAPI", "Pandas", "SQLAlchemy"]
          },
          { 
            name: "PHP", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "7+ years of PHP development. Expert in Laravel and traditional MVC frameworks. Experience with high-traffic applications and optimization.",
              es: "Más de 7 años de desarrollo en PHP. Experto en Laravel y frameworks MVC tradicionales. Experiencia con aplicaciones de alto tráfico y optimización."
            },
            projects: [
              { 
                name: "E-learning Platform", 
                description: {
                  en: "Developed a complete learning management system with Laravel and Vue.js", 
                  es: "Desarrollé un sistema completo de gestión de aprendizaje con Laravel y Vue.js"
                }
              },
              { 
                name: "CRM System", 
                description: {
                  en: "Created a custom CRM with advanced reporting and API integrations", 
                  es: "Creé un CRM personalizado con informes avanzados e integraciones API"
                }
              },
              { 
                name: "Payment Gateway", 
                description: {
                  en: "Implemented secure payment processing for multiple platforms using Stripe and PayPal APIs", 
                  es: "Implementé procesamiento seguro de pagos para múltiples plataformas usando las APIs de Stripe y PayPal"
                }
              }
            ],
            related_skills: ["Laravel", "Symfony", "MySQL", "RESTful APIs", "Composer"]
          },
          { 
            name: "TypeScript", 
            level: 4, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "3+ years using TypeScript for frontend and Node.js development. Experience with type systems, interfaces, and generics for building robust applications.",
              es: "Más de 3 años usando TypeScript para desarrollo frontend y Node.js. Experiencia con sistemas de tipos, interfaces y genéricos para construir aplicaciones robustas."
            },
            projects: [
              { 
                name: "Enterprise Dashboard", 
                description: {
                  en: "Built a type-safe React application with complex state management", 
                  es: "Construí una aplicación React con seguridad de tipos y gestión de estado compleja"
                }
              },
              { 
                name: "API Framework", 
                description: {
                  en: "Developed a custom API framework with Express and TypeScript decorators", 
                  es: "Desarrollé un framework API personalizado con Express y decoradores TypeScript"
                }
              },
              { 
                name: "Component Library", 
                description: {
                  en: "Created a reusable UI component library with strong typing and documentation", 
                  es: "Creé una biblioteca de componentes UI reutilizables con tipado fuerte y documentación"
                }
              }
            ],
            related_skills: ["JavaScript", "Node.js", "React", "Angular", "Express"]
          },
          { 
            name: "Go", 
            level: 5, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "2+ years developing with Go. Experience building microservices, APIs, and CLI tools. Focus on performance and concurrency patterns.",
              es: "Más de 2 años desarrollando con Go. Experiencia construyendo microservicios, APIs y herramientas CLI. Enfoque en patrones de rendimiento y concurrencia."
            },
            projects: [
              { 
                name: "Microservice Architecture", 
                description: {
                  en: "Developed high-performance microservices for a distributed system", 
                  es: "Desarrollé microservicios de alto rendimiento para un sistema distribuido"
                }
              },
              { 
                name: "RESTful API", 
                description: {
                  en: "Built a RESTful API with Go and PostgreSQL for a logistics application", 
                  es: "Construí una API RESTful con Go y PostgreSQL para una aplicación de logística"
                }
              },
              { 
                name: "CLI Tool", 
                description: {
                  en: "Created a command-line tool for automating deployment processes", 
                  es: "Creé una herramienta de línea de comandos para automatizar procesos de despliegue"
                }
              }
            ],
            related_skills: ["Docker", "Kubernetes", "gRPC", "RESTful APIs", "PostgreSQL"]
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
            level: 5, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "6+ years of experience with Vue.js from early versions to the latest Vue 3 with Composition API. Skilled in Vuex, Vue Router, and Nuxt.js.",
              es: "Más de 6 años de experiencia con Vue.js desde las primeras versiones hasta Vue 3 con la API de Composición. Dominio de Vuex, Vue Router y Nuxt.js."
            },
            projects: [
              { 
                name: "E-commerce Frontend", 
                description: {
                  en: "Built a complete online store frontend with Vue 3, Vuex, and Tailwind CSS", 
                  es: "Construí un frontend completo para tienda online con Vue 3, Vuex y Tailwind CSS"
                }
              },
              { 
                name: "Admin Dashboard", 
                description: {
                  en: "Created a responsive admin panel with complex data visualization components", 
                  es: "Creé un panel de administración responsive con componentes complejos de visualización de datos"
                }
              },
              { 
                name: "SaaS Platform", 
                description: {
                  en: "Developed a multi-tenant SaaS application with Nuxt.js and serverless functions", 
                  es: "Desarrollé una aplicación SaaS multi-inquilino con Nuxt.js y funciones serverless"
                }
              }
            ],
            related_skills: ["JavaScript", "Vuex", "Nuxt.js", "Vue Router", "Tailwind CSS"]
          },
          { 
            name: "Laravel", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years of Laravel development. Experience with full-stack applications, REST APIs, and database optimization. Skilled in Laravel ecosystem tools.",
              es: "Más de 5 años de desarrollo con Laravel. Experiencia en aplicaciones full-stack, APIs REST y optimización de bases de datos. Dominio de herramientas del ecosistema Laravel."
            },
            projects: [
              { 
                name: "Multi-vendor Marketplace", 
                description: {
                  en: "Built a marketplace platform with vendor management, product listings, and payment processing", 
                  es: "Construí una plataforma de marketplace con gestión de vendedores, listados de productos y procesamiento de pagos"
                }
              },
              { 
                name: "API Backend", 
                description: {
                  en: "Developed a RESTful API with Laravel Sanctum authentication and complex database relationships", 
                  es: "Desarrollé una API RESTful con autenticación Laravel Sanctum y relaciones complejas de base de datos"
                }
              },
              { 
                name: "CMS System", 
                description: {
                  en: "Created a custom content management system with role-based permissions and workflow approval", 
                  es: "Creé un sistema de gestión de contenido personalizado con permisos basados en roles y aprobación de flujo de trabajo"
                }
              }
            ],
            related_skills: ["PHP", "MySQL", "Eloquent ORM", "Laravel Nova", "Laravel Livewire"]
          },
          { 
            name: "Node.js", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "6+ years building backend services with Node.js. Experience with Express, Fastify, and NestJS frameworks. Skilled in asynchronous programming patterns.",
              es: "Más de 6 años construyendo servicios backend con Node.js. Experiencia con frameworks Express, Fastify y NestJS. Dominio de patrones de programación asíncrona."
            },
            projects: [
              { 
                name: "Real-time Chat Service", 
                description: {
                  en: "Built a scalable WebSocket-based chat service with Redis for pub/sub messaging", 
                  es: "Construí un servicio de chat escalable basado en WebSocket con Redis para mensajería pub/sub"
                }
              },
              { 
                name: "REST API", 
                description: {
                  en: "Developed a comprehensive API with authentication, rate limiting, and caching", 
                  es: "Desarrollé una API completa con autenticación, limitación de velocidad y almacenamiento en caché"
                }
              },
              { 
                name: "ETL Service", 
                description: {
                  en: "Created data processing pipelines for importing and normalizing data from multiple sources", 
                  es: "Creé canales de procesamiento de datos para importar y normalizar datos de múltiples fuentes"
                }
              }
            ],
            related_skills: ["JavaScript", "Express", "MongoDB", "RESTful APIs", "Microservices"]
          },
          { 
            name: "NestJS", 
            level: 3, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "3+ years working with NestJS framework. Experience building enterprise-grade APIs, microservices, and GraphQL endpoints.",
              es: "Más de 3 años trabajando con el framework NestJS. Experiencia construyendo APIs empresariales, microservicios y endpoints GraphQL."
            },
            projects: [
              { 
                name: "Microservice Architecture", 
                description: {
                  en: "Designed and implemented a microservice-based backend with message broker integration", 
                  es: "Diseñé e implementé un backend basado en microservicios con integración de brokers de mensajería"
                }
              },
              { 
                name: "GraphQL API", 
                description: {
                  en: "Built a GraphQL API with NestJS and TypeORM for a content platform", 
                  es: "Construí una API GraphQL con NestJS y TypeORM para una plataforma de contenido"
                }
              },
              { 
                name: "Authentication Service", 
                description: {
                  en: "Developed a secure authentication service with JWT, OAuth2, and role-based access control", 
                  es: "Desarrollé un servicio de autenticación seguro con JWT, OAuth2 y control de acceso basado en roles"
                }
              }
            ],
            related_skills: ["TypeScript", "Node.js", "GraphQL", "TypeORM", "Microservices"]
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
            name: "MySQL", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "7+ years working with MySQL databases. Experience with optimization, replication, and high-availability setups. Skilled in complex queries and database design.",
              es: "Más de 7 años trabajando con bases de datos MySQL. Experiencia en optimización, replicación y configuraciones de alta disponibilidad. Dominio de consultas complejas y diseño de bases de datos."
            },
            projects: [
              { 
                name: "E-commerce Database", 
                description: {
                  en: "Designed and optimized database schema for high-traffic online store with partitioning", 
                  es: "Diseñé y optimicé esquema de base de datos para tienda online de alto tráfico con particionamiento"
                }
              },
              { 
                name: "Reporting System", 
                description: {
                  en: "Created complex stored procedures and views for business intelligence reporting", 
                  es: "Creé procedimientos almacenados complejos y vistas para informes de inteligencia empresarial"
                }
              },
              { 
                name: "HA Database Cluster", 
                description: {
                  en: "Set up and managed a high-availability MySQL cluster with replication and failover", 
                  es: "Configuré y administré un clúster MySQL de alta disponibilidad con replicación y failover"
                }
              }
            ],
            related_skills: ["SQL", "Database Design", "Performance Tuning", "InnoDB", "Stored Procedures"]
          },
          { 
            name: "PostgreSQL", 
            level: 4, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years of PostgreSQL database development. Experience with advanced features like JSON data types, full-text search, and geospatial functions.",
              es: "Más de 5 años de desarrollo de bases de datos PostgreSQL. Experiencia con características avanzadas como tipos de datos JSON, búsqueda de texto completo y funciones geoespaciales."
            },
            projects: [
              { 
                name: "Location-based Service", 
                description: {
                  en: "Built a geospatial database with PostGIS for a location-tracking application", 
                  es: "Construí una base de datos geoespacial con PostGIS para una aplicación de seguimiento de ubicación"
                }
              },
              { 
                name: "Analytics Platform", 
                description: {
                  en: "Developed a data warehouse with materialized views and complex aggregation queries", 
                  es: "Desarrollé un almacén de datos con vistas materializadas y consultas complejas de agregación"
                }
              },
              { 
                name: "Document Storage", 
                description: {
                  en: "Created a hybrid document-relational database using JSONB data types and indexes", 
                  es: "Creé una base de datos híbrida documental-relacional usando tipos de datos JSONB e índices"
                }
              }
            ],
            related_skills: ["SQL", "PostGIS", "JSONB", "Triggers", "Materialized Views"]
          },
          { 
            name: "MongoDB", 
            level: 3, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "4+ years using MongoDB for document-oriented storage. Experience with aggregation pipelines, indexing strategies, and MongoDB Atlas.",
              es: "Más de 4 años usando MongoDB para almacenamiento orientado a documentos. Experiencia con canales de agregación, estrategias de indexación y MongoDB Atlas."
            },
            projects: [
              { 
                name: "Content Repository", 
                description: {
                  en: "Designed schema for a flexible content management system with nested documents", 
                  es: "Diseñé esquema para un sistema flexible de gestión de contenido con documentos anidados"
                }
              },
              { 
                name: "User Profile System", 
                description: {
                  en: "Built a scalable user profile and preferences storage with complex querying", 
                  es: "Construí un almacenamiento escalable de perfiles de usuario y preferencias con consultas complejas"
                }
              },
              { 
                name: "Real-time Analytics", 
                description: {
                  en: "Developed a real-time analytics system using change streams and aggregation", 
                  es: "Desarrollé un sistema de analítica en tiempo real usando change streams y agregación"
                }
              }
            ],
            related_skills: ["NoSQL", "Aggregation Framework", "Node.js", "Indexing", "MongoDB Atlas"]
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
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "5+ years working with Docker for containerization. Experience with multi-container applications, custom images, and Docker Compose orchestration.",
              es: "Más de 5 años trabajando con Docker para contenedorización. Experiencia con aplicaciones multi-contenedor, imágenes personalizadas y orquestación con Docker Compose."
            },
            projects: [
              { 
                name: "Microservice Infrastructure", 
                description: {
                  en: "Containerized a complex application into multiple microservices with Docker Compose", 
                  es: "Contenericé una aplicación compleja en múltiples microservicios con Docker Compose"
                }
              },
              { 
                name: "CI/CD Pipeline", 
                description: {
                  en: "Built automated testing and deployment pipelines with Docker and GitHub Actions", 
                  es: "Construí canales automatizados de prueba y despliegue con Docker y GitHub Actions"
                }
              },
              { 
                name: "Development Environment", 
                description: {
                  en: "Created standardized development environments across team with Docker and VSCode", 
                  es: "Creé entornos de desarrollo estandarizados para todo el equipo con Docker y VSCode"
                }
              }
            ],
            related_skills: ["Kubernetes", "Docker Compose", "CI/CD", "Containerization", "DevOps"]
          },
          { 
            name: "Git", 
            level: 5, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "8+ years of Git version control. Advanced knowledge of branching strategies, submodules, hooks, and Git workflows for team collaboration.",
              es: "Más de 8 años de control de versiones Git. Conocimiento avanzado de estrategias de ramificación, submódulos, hooks y flujos de trabajo Git para colaboración en equipo."
            },
            projects: [
              { 
                name: "Monorepo Management", 
                description: {
                  en: "Established monorepo structure with specialized Git workflows for multiple projects", 
                  es: "Establecí estructura de monorepo con flujos de trabajo Git especializados para múltiples proyectos"
                }
              },
              { 
                name: "Git Hooks Framework", 
                description: {
                  en: "Developed custom Git hooks for automated code quality checks and conventional commits", 
                  es: "Desarrollé hooks Git personalizados para verificaciones automatizadas de calidad de código y commits convencionales"
                }
              },
              { 
                name: "CI Integration", 
                description: {
                  en: "Integrated Git with CI/CD pipelines for automated testing and deployment", 
                  es: "Integré Git con canales CI/CD para pruebas y despliegue automatizados"
                }
              }
            ],
            related_skills: ["GitHub", "GitLab", "Conventional Commits", "Code Review", "Branching Strategies"]
          },
          { 
            name: "CI/CD", 
            level: 3, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "4+ years implementing continuous integration and deployment pipelines. Experience with GitHub Actions, GitLab CI, and Jenkins.",
              es: "Más de 4 años implementando canales de integración y despliegue continuos. Experiencia con GitHub Actions, GitLab CI y Jenkins."
            },
            projects: [
              { 
                name: "Automated Deployment", 
                description: {
                  en: "Implemented zero-downtime deployment workflow for multiple environments", 
                  es: "Implementé flujo de trabajo de despliegue sin tiempo de inactividad para múltiples entornos"
                }
              },
              { 
                name: "Testing Pipeline", 
                description: {
                  en: "Created automated testing pipeline with unit, integration, and end-to-end tests", 
                  es: "Creé canal de pruebas automatizado con pruebas unitarias, de integración y end-to-end"
                }
              },
              { 
                name: "Infrastructure as Code", 
                description: {
                  en: "Developed CI/CD for infrastructure management with Terraform and GitHub Actions", 
                  es: "Desarrollé CI/CD para gestión de infraestructura con Terraform y GitHub Actions"
                }
              }
            ],
            related_skills: ["GitHub Actions", "GitLab CI", "Docker", "Automated Testing", "Deployment Strategies"]
          }
        ]
      }
    ]
  },
  
  // Experiencia profesional
  experience: [
    {
      company: "XYZ Corp",
      period: "2020-Present",
      title: {
        en: "Senior Developer",
        es: "Desarrollador Senior"
      },
      responsibilities: {
        en: [
          "Led team of 5 developers on e-commerce platform",
          "Implemented CI/CD pipeline resulting in 40% faster deployments",
          "Reduced loading times by 60% through optimizations"
        ],
        es: [
          "Lideró un equipo de 5 desarrolladores en plataforma de comercio electrónico",
          "Implementó pipeline de CI/CD resultando en despliegues 40% más rápidos",
          "Redujo tiempos de carga en un 60% a través de optimizaciones"
        ]
      }
    },
    {
      company: "Freelance",
      period: "2018-2020",
      title: {
        en: "Freelance Developer",
        es: "Desarrollador Freelance"
      },
      responsibilities: {
        en: [
          "Developed custom CMS for small businesses",
          "Created responsive designs for 20+ clients",
          "Integrated payment gateways and analytics systems"
        ],
        es: [
          "Desarrolló CMS personalizado para pequeños negocios",
          "Creó diseños responsivos para más de 20 clientes",
          "Integró pasarelas de pago y sistemas de analítica"
        ]
      }
    },
    {
      company: "Open Source",
      period: "2017-Present",
      title: {
        en: "Open Source Contributor",
        es: "Colaborador de Código Abierto"
      },
      responsibilities: {
        en: [
          "Active contributor to several JavaScript libraries",
          "Created documentation and tutorials",
          "Fixed bugs and implemented new features"
        ],
        es: [
          "Colaborador activo en varias bibliotecas JavaScript",
          "Creó documentación y tutoriales",
          "Corrigió errores e implementó nuevas funcionalidades"
        ]
      }
    }
  ],
  
  // Educación y certificaciones
  education: {
    university: {
      name: "Tech University",
      period: "2014-2018",
      degree: {
        en: "B.Sc. in Computer Science",
        es: "Licenciatura en Ciencias de la Computación"
      },
      details: {
        en: [
          "GPA: 3.8/4.0",
          "Specialized in Software Engineering",
          "Thesis: 'Optimizing Web Applications for Performance'"
        ],
        es: [
          "Promedio: 3.8/4.0",
          "Especializado en Ingeniería de Software",
          "Tesis: 'Optimización de Aplicaciones Web para Rendimiento'"
        ]
      }
    },
    certifications: {
      en: [
        "AWS Certified Developer",
        "Google Cloud Professional",
        "MongoDB Certified Developer"
      ],
      es: [
        "Desarrollador Certificado en AWS",
        "Profesional de Google Cloud",
        "Desarrollador Certificado de MongoDB"
      ]
    }
  },
  
  // Proyectos personales
  projects: [
    {
      id: "portfolio",
      name: {
        en: "Portfolio Website",
        es: "Sitio Web de Portafolio"
      },
      description: {
        en: "A responsive website showcasing my projects and skills using Vue.js and Tailwind CSS.",
        es: "Un sitio web responsivo que muestra mis proyectos y habilidades usando Vue.js y Tailwind CSS."
      }
    },
    {
      id: "ecommerce",
      name: {
        en: "E-commerce System",
        es: "Sistema de Comercio Electrónico"
      },
      description: {
        en: "A full-stack e-commerce platform with Laravel backend and Vue.js frontend.",
        es: "Una plataforma completa de comercio electrónico con backend en Laravel y frontend en Vue.js."
      }
    },
    {
      id: "chat_app",
      name: {
        en: "Real-time Chat App",
        es: "Aplicación de Chat en Tiempo Real"
      },
      description: {
        en: "A chat application using WebSockets, Node.js, and MongoDB for real-time messaging.",
        es: "Una aplicación de chat usando WebSockets, Node.js y MongoDB para mensajería en tiempo real."
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
      ],
      unknown: "Comando desconocido:",
      notFound: "Archivo o directorio no encontrado:",
      notFile: "No es un archivo:",
      notDirectory: "No es un directorio:",
      suggestions: "Sugerencias:",
    }
  }
};