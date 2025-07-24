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
          en: "PROGRAMMING",
          es: "PROGRAMACIÓN"
        },
        skills: [
          { 
            name: "Go", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Microservices, APIs, and Docker container management systems",
              es: "Microservicios, APIs y sistemas de gestión de contenedores Docker"
            }
          },
          { 
            name: "C/C++", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "System-level applications, automation scripts, and performance-critical components",
              es: "Aplicaciones a nivel de sistema, scripts de automatización y componentes críticos de rendimiento"
            }
          },
          { 
            name: "Python", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Machine learning, linear regression, logistic regression, data analysis, web scraping, and backend automation",
              es: "Machine learning, regresión lineal, regresión logística, análisis de datos, web scraping y automatización backend"
            }
          },
          { 
            name: "JavaScript/TypeScript", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Frontend and backend development with modern frameworks and async programming",
              es: "Desarrollo frontend y backend con frameworks modernos y programación asíncrona"
            }
          },
          { 
            name: "PHP", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "Laravel and Symfony frameworks, high-traffic applications and optimization",
              es: "Frameworks Laravel y Symfony, aplicaciones de alto tráfico y optimización"
            }
          },
          { 
            name: "Bash", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Automation scripts, system administration, and DevOps tasks",
              es: "Scripts de automatización, administración de sistemas y tareas DevOps"
            }
          },
          { 
            name: "Kotlin", 
            level: 4, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "Android development with modern architecture components",
              es: "Desarrollo Android con componentes de arquitectura modernos"
            }
          }
        ]
      },
      {
        id: "frameworks",
        translations: {
          en: "FRAMEWORKS & TOOLS",
          es: "FRAMEWORKS Y HERRAMIENTAS"
        },
        skills: [
          { 
            name: "NestJS", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "Enterprise-grade APIs, microservices with MVP and Clean Architecture",
              es: "APIs empresariales, microservicios con MVP y Clean Architecture"
            }
          },
          { 
            name: "Laravel", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "Full-stack applications, REST APIs, and database optimization",
              es: "Aplicaciones full-stack, APIs REST y optimización de bases de datos"
            }
          },
          { 
            name: "Flutter", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Cross-platform mobile applications with state management",
              es: "Aplicaciones móviles multiplataforma con gestión de estado"
            }
          },
          { 
            name: "Scrapy", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Web scraping framework for large-scale data extraction",
              es: "Framework de web scraping para extracción de datos a gran escala"
            }
          },
          { 
            name: "BeautifulSoup", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "HTML and XML parsing for web scraping projects",
              es: "Análisis de HTML y XML para proyectos de web scraping"
            }
          },
          { 
            name: "Prisma", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Type-safe database access and automatic migrations",
              es: "Acceso type-safe a bases de datos y migraciones automáticas"
            }
          },
          { 
            name: "TypeORM", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Object-relational mapping for TypeScript applications",
              es: "Mapeo objeto-relacional para aplicaciones TypeScript"
            }
          },
          { 
            name: "pandas", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Data manipulation, analysis, and preprocessing for machine learning",
              es: "Manipulación, análisis y preprocesamiento de datos para machine learning"
            }
          },
          { 
            name: "NumPy", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Mathematical operations, linear algebra, and numerical computing for ML",
              es: "Operaciones matemáticas, álgebra lineal y computación numérica para ML"
            }
          },
          { 
            name: "Spark", 
            level: 4, 
            translations: { en: "Basic", es: "Básico" },
            description: {
              en: "Large-scale data processing and analytics",
              es: "Procesamiento de datos a gran escala y analítica"
            }
          },
          { 
            name: "Machine Learning", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Supervised learning, regression models, classification algorithms, and data science",
              es: "Aprendizaje supervisado, modelos de regresión, algoritmos de clasificación y ciencia de datos"
            }
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
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "Advanced features, performance tuning, and high-availability configurations",
              es: "Características avanzadas, ajuste de rendimiento y configuraciones de alta disponibilidad"
            }
          },
          { 
            name: "MySQL", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "Optimization, replication, and high-availability configurations",
              es: "Optimización, replicación y configuraciones de alta disponibilidad"
            }
          },
          { 
            name: "MariaDB", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "Enhanced MySQL alternative with improved performance features",
              es: "Alternativa mejorada a MySQL con características de rendimiento mejoradas"
            }
          },
          { 
            name: "SQLite", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Lightweight database for embedded applications and mobile development",
              es: "Base de datos ligera para aplicaciones embebidas y desarrollo móvil"
            }
          },
          { 
            name: "MongoDB", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Document-oriented storage with aggregation pipelines and indexing",
              es: "Almacenamiento orientado a documentos con pipelines de agregación e indexación"
            }
          }
        ]
      },
      {
        id: "devops",
        translations: {
          en: "DEVOPS & CLOUD", 
          es: "DEVOPS Y CLOUD"
        },
        skills: [
          { 
            name: "Docker", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "Containerization, multi-container applications and orchestration",
              es: "Contenedorización, aplicaciones multi-contenedor y orquestación"
            }
          },
          { 
            name: "Kubernetes", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Container orchestration, deployment strategies and cluster management",
              es: "Orquestación de contenedores, estrategias de despliegue y gestión de clústeres"
            }
          },
          { 
            name: "ArgoCD", 
            level: 3, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "GitOps continuous delivery for Kubernetes deployments",
              es: "Entrega continua GitOps para despliegues de Kubernetes"
            }
          },
          { 
            name: "n8n", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Workflow automation and system integration",
              es: "Automatización de flujos de trabajo e integración de sistemas"
            }
          },
          { 
            name: "Ubuntu/Debian", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Linux server administration and development environments",
              es: "Administración de servidores Linux y entornos de desarrollo"
            }
          },
          { 
            name: "AWS", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "EC2, S3, Lambda, RDS and cloud infrastructure services",
              es: "EC2, S3, Lambda, RDS y servicios de infraestructura en la nube"
            }
          },
          { 
            name: "GCP", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Compute Engine, Kubernetes Engine and cloud infrastructure",
              es: "Compute Engine, Kubernetes Engine e infraestructura en la nube"
            }
          },
          { 
            name: "Azure", 
            level: 3, 
            translations: { en: "Intermediate", es: "Intermedio" },
            description: {
              en: "Virtual machines, app services and Azure DevOps",
              es: "Máquinas virtuales, servicios de aplicaciones y Azure DevOps"
            }
          }
        ]
      },
      {
        id: "apis",
        translations: {
          en: "APIs & COMMUNICATION", 
          es: "APIs Y COMUNICACIÓN"
        },
        skills: [
          { 
            name: "WebSockets", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Real-time bidirectional communication for web applications",
              es: "Comunicación bidireccional en tiempo real para aplicaciones web"
            }
          },
          { 
            name: "JWT", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "Secure authentication and authorization in distributed systems",
              es: "Autenticación y autorización segura en sistemas distribuidos"
            }
          },
          { 
            name: "REST", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "RESTful API design and implementation for scalable services",
              es: "Diseño e implementación de APIs RESTful para servicios escalables"
            }
          },
          { 
            name: "Swagger", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "API documentation and testing framework",
              es: "Framework de documentación y pruebas de APIs"
            }
          }
        ]
      },
      {
        id: "methodologies",
        translations: {
          en: "METHODOLOGIES", 
          es: "METODOLOGÍAS"
        },
        skills: [
          { 
            name: "Scrum", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Agile project management for iterative development",
              es: "Gestión de proyectos ágil para desarrollo iterativo"
            }
          },
          { 
            name: "Kanban", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Visual workflow management for continuous improvement",
              es: "Gestión visual de flujo de trabajo para mejora continua"
            }
          },
          { 
            name: "Git", 
            level: 1, 
            translations: { en: "Expert", es: "Experto" },
            description: {
              en: "Version control with advanced branching strategies and workflows",
              es: "Control de versiones con estrategias avanzadas de ramificación y flujos de trabajo"
            }
          },
          { 
            name: "Jira", 
            level: 2, 
            translations: { en: "Advanced", es: "Avanzado" },
            description: {
              en: "Project management and issue tracking for agile teams",
              es: "Gestión de proyectos y seguimiento de incidencias para equipos ágiles"
            }
          }
        ]
      }
    ]
  },
  
  // Experiencia profesional
  experience: [
    {
      company: "Independent Development Consultant",
      location: "Madrid, Spain",
      period: "April 2025 - Present",
      title: {
        en: "Senior Backend Developer",
        es: "Senior Backend Developer"
      },
      clients: ["QUASAR", "COMEX Perú"],
      responsibilities: {
        en: [
          "Design and implementation of automated workflows with n8n",
          "Microservices with Node.js and NestJS (MVP and Clean Architecture)",
          "PostgreSQL access (Prisma/TypeORM) and MongoDB usage",
          "Automatic notification systems",
          "Documentation with Swagger and architecture best practices",
          "REST and SOAP API integration",
          "Endpoint optimization and database queries",
          "Cloud server maintenance, CI/CD and monitoring",
          "Security and scalability improvements",
          "Code standards definition and PR reviews",
          "Supervised services and daemons development in Go and C++",
          "Cross-platform systems programming with concurrency (Go) and low-level services (C++)"
        ],
        es: [
          "Diseño e implementación de flujos automatizados con n8n",
          "Microservicios con Node.js y NestJS (MVP y Clean Architecture)",
          "Acceso a PostgreSQL (Prisma/TypeORM) y uso de MongoDB",
          "Sistema de notificaciones automáticas",
          "Documentación con Swagger y buenas prácticas de arquitectura",
          "Integración de APIs REST y SOAP",
          "Optimización de endpoints y consultas a base de datos",
          "Mantenimiento en servidores cloud, CI/CD y monitoreo",
          "Mejora de seguridad y escalabilidad",
          "Definición de estándares de código y revisión de PRs",
          "Desarrollo de servicios supervisados y daemons en Go y C++",
          "Programación de sistemas cross-platform con concurrencia (Go) y servicios de bajo nivel (C++)"
        ]
      }
    },
    {
      company: "Libertad Digital",
      location: "Madrid, España",
      period: "June 2021 - March 2025",
      title: {
        en: "Senior Backend Developer",
        es: "Senior Backend Developer"
      },
      responsibilities: {
        en: [
          "Supervised and unsupervised queue systems",
          "Asynchronous tasks and workers for heavy processes",
          "Laravel (PHP), NestJS, WebSocket, testing",
          "Automation with Bash and C",
          "Environment dockerization and efficient deployment",
          "Team leadership",
          "Web scraping with Python and Selenium",
          "Infrastructure on GCP, Kubernetes, Linux and Docker"
        ],
        es: [
          "Sistemas de colas supervisadas y no supervisadas",
          "Tareas asincrónicas y workers para procesos pesados",
          "Laravel (PHP), NestJS, WebSocket, testing",
          "Automatización con Bash y C",
          "Dockerización de entornos y despliegue eficiente",
          "Liderazgo de equipo",
          "Web scraping con Python y Selenium",
          "Infraestructura en GCP, Kubernetes, Linux y Docker"
        ]
      }
    },
    {
      company: "APROS PERU",
      period: "Jan 2020 - Apr 2021",
      title: {
        en: "Senior Backend Developer",
        es: "Senior Backend Developer"
      },
      responsibilities: {
        en: [
          "Software architecture and databases for clients like Atsa Airlines and ComexPeru",
          "Go system with Docker API for automatic restart",
          "Custom web and mobile applications",
          "Network and server administration"
        ],
        es: [
          "Arquitectura de software y bases de datos para clientes como Atsa Airlines y ComexPeru",
          "Sistema en Go con Docker API para reinicio automático", 
          "Aplicaciones web y móviles personalizadas",
          "Administración de redes y servidores"
        ]
      }
    },
    {
      company: "Studio Tigres S.A.C.",
      location: "Arequipa, Perú",
      period: "Aug 2017 - Jul 2019",
      title: {
        en: "Office Director & Senior Backend Developer",
        es: "Director Oficina & Senior Backend Developer"
      },
      responsibilities: {
        en: [
          "Management and mentoring of technical teams",
          "Critical systems for San Fernando, Plan OK, Ferreyros, Atsa Perú, Apoyo Consultores",
          "Strategic infrastructure and security decisions"
        ],
        es: [
          "Gestión y mentoría de equipos técnicos",
          "Sistemas críticos para San Fernando, Plan OK, Ferreyros, Atsa Perú, Apoyo Consultores",
          "Decisiones estratégicas de infraestructura y seguridad"
        ]
      }
    },
    {
      company: "Apros: Consultores Digitales",
      period: "Apr 2015 - Jul 2017",
      title: {
        en: "Senior Backend Developer",
        es: "Senior Backend Developer"
      },
      responsibilities: {
        en: [
          "Team mentoring and technology adoption",
          "Scalable full-stack architectures",
          "Direct client management"
        ],
        es: [
          "Mentoría de equipos y adopción tecnológica",
          "Arquitecturas full-stack escalables",
          "Gestión directa con clientes"
        ]
      }
    },
    {
      company: "Apros: Consultores Digitales",
      period: "Jun 2014 - Apr 2015",
      title: {
        en: "Junior Programmer",
        es: "Programador Junior"
      },
      responsibilities: {
        en: [
          "Development in PHP, HTML, JS, Node.js, CSS",
          "Basic Linux server administration"
        ],
        es: [
          "Desarrollo en PHP, HTML, JS, Node.js, CSS",
          "Administración básica de servidores Linux"
        ]
      }
    }
  ],
  
  // Educación y certificaciones
  education: {
    universities: [
      {
        name: "UCSP, Arequipa",
        location: "Arequipa, Perú",
        period: "2003-2007",
        degree: {
          en: "Computer Engineering",
          es: "Ingeniería Informática"
        }
      },
      {
        name: "Continental University, Arequipa",
        location: "Arequipa, Perú",
        period: "2016-2019",
        degree: {
          en: "Industrial Engineering",
          es: "Ingeniería Industrial"
        }
      },
      {
        name: "42 Madrid, España",
        location: "Madrid, España",
        period: "2020-2025",
        degree: {
          en: "Low-level Programming",
          es: "Programación de Bajo Nivel"
        }
      }
    ],
    certifications: {
      en: [
        "AWS Academy Graduate – Cloud Foundations",
        "IBM Quantum Challenge (2023)",
        "Google Cloud: Core Infrastructure, Compute Engine, Kubernetes"
      ],
      es: [
        "AWS Academy Graduate – Cloud Foundations",
        "IBM Quantum Challenge (2023)",
        "Google Cloud: Core Infrastructure, Compute Engine, Kubernetes"
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
      "Workflow automation",
      "Systems architecture",
      "Cloud-native development",
      "Data engineering and analytics"
    ],
    es: [
      "Automatización de flujos de trabajo",
      "Arquitectura de sistemas",
      "Desarrollo cloud-native",
      "Ingeniería de datos y analítica"
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
