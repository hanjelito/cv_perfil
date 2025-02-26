// Directory structure representing skills and experience
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
            "skills": {
                type: "folder",
                contents: {
                    "programming_languages": {
                        type: "folder",
                        contents: {
                            "python.txt": { 
                                type: "file", 
                                content: "Python: Advanced level. Experience with Django, Flask, Data Analysis." 
                            },
                            "javascript.txt": { 
                                type: "file", 
                                content: "JavaScript: Expert level. Proficient in modern ES6+, async patterns, and frameworks." 
                            },
                            "typescript.txt": { 
                                type: "file", 
                                content: "TypeScript: Intermediate level. Used in frontend and backend projects." 
                            },
                            "golang.txt": { 
                                type: "file", 
                                content: "Go: Intermediate level. Used for microservices and backend development." 
                            },
                            "php.txt": { 
                                type: "file", 
                                content: "PHP: Advanced level. Experience with Laravel and Symfony frameworks." 
                            }
                        }
                    },
                    "frameworks": {
                        type: "folder",
                        contents: {
                            "vue.txt": { 
                                type: "file", 
                                content: "Vue.js: Expert level. Built multiple production applications." 
                            },
                            "laravel.txt": { 
                                type: "file", 
                                content: "Laravel: Advanced level. Developed e-commerce and CMS solutions." 
                            },
                            "node.txt": { 
                                type: "file", 
                                content: "Node.js: Advanced level. Created RESTful APIs and real-time applications." 
                            },
                            "nest.txt": { 
                                type: "file", 
                                content: "NestJS: Intermediate level. Used for scalable backend applications." 
                            }
                        }
                    },
                    "databases": {
                        type: "folder",
                        contents: {
                            "mysql.txt": { 
                                type: "file", 
                                content: "MySQL: Advanced level. Database design, optimization, and administration." 
                            },
                            "postgresql.txt": { 
                                type: "file", 
                                content: "PostgreSQL: Advanced level. Complex queries and performance tuning." 
                            },
                            "mongodb.txt": { 
                                type: "file", 
                                content: "MongoDB: Intermediate level. NoSQL database for document storage." 
                            }
                        }
                    }
                }
            },
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