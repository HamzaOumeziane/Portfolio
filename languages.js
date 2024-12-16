const languages = {
    en: {
        nav: {
            home: "Home",
            about: "Information",
            services: "Services",
            projects: "Projects",
            contact: "Contact"
        },
        home: {
            welcome: "Welcome to My Portfolio!",
            subtitle: "Discover the journey of my creativity and innovation.",
            button: "Discover More"
        },
        about: {
            title: "About Me",
            description: `My name is Hamza Oumeziane, and I am passionate about technology and software development.
                          Currently a Software Engineering student at Collège de Bois-de-Boulogne, I have acquired
                          solid skills in programming, web and mobile application development, as well as database
                          management. My academic journey and professional experiences have allowed me to develop
                          analytical thinking and the ability to solve complex problems.`,
            tabs: {
                skills: "Skills",
                experience: "Experience",
                education: "Education"
            }
        },
        services: {
            title: "My Services",
            items: [
                {
                    title: "Web Development",
                    points: [
                        "Dynamic website creation:",
                        [
                            "Custom website design using React, TypeScript, and TailwindCSS.",
                            "Backend features integration with Node.js and Express."
                        ],
                        "Redesign existing websites:",
                        ["UI modernization and UX improvements."],
                        "API and external service integration:",
                        ["Connect third-party systems like Stripe, Google Maps, or other APIs."],
                    ]
                },
                {
                    title: "Mobile Development",
                    points: [
                        "Android app development:",
                        [
                            "Design and development of Android applications using Kotlin.",
                            "Performance optimization and best practices implementation for Android."
                        ],
                        
                    ]
                },

                {
                    title: "Complete Application Development",
                    points: [
                        "Management Platforms",
                        ["Creation of CRM (Customer Relationship Management) systems for businesses."],
                        "E-commerce Applications",
                        ["Development of online stores with secure payment management."],
                        "Custom Applications",
                        ["Tailored solutions for local businesses (inventory management, interactive calendars, etc.)."]
                    ]
                },
                
                {
                    title: "Game Development",
                    points: [
                        "2D/3D game prototypes:",
                        ["Development for PC using Unity and C#."],
                        "Educational mini-games:",
                        ["Interactive solutions for events or businesses."]
                    ]
                },
                {
                    title: "Automation and Scripts",
                    points: [
                        "Task automation:",
                        ["Develop Python scripts to automate repetitive processes."],
                        "Chatbots and virtual assistants:",
                        ["Node.js solutions for user support or client interactions."]
                    ]
                },
                {
                    title: "Database Management",
                    points: [
                        "Database design and maintenance:",
                        [
                            "Create and manage relational databases (MySQL, Oracle).",
                            "Work with NoSQL databases like MongoDB."
                        ],
                        "Performance optimization:",
                        ["Analyze and optimize SQL queries for better performance."],
                        "Data migrations:",
                        ["Develop solutions for data migration between systems."]
                    ]
                },
                
                {
                    title: "Support and Maintenance",
                    points: [
                        "Bug fixes and software updates:",
                        ["Maintenance of web, mobile, or desktop applications."],
                        "Migration to modern technologies:",
                        ["Help businesses upgrade to newer tech stacks."]
                    ]
                }
            ]
        },
        projects: {
            title: "Latest Projects",
            items: [
                {
                    title: "Loaf AI - Excel Extension",
                    type: "Team Project",
                    description: `Development of a MERN application for Excel, integrating AI features to assist users.
                                  Key functionalities include an interactive chatbot linked to the book 'An Introduction to Business Administration,' 
                                  data extraction and standardization, formula generation, an Excel assistant, and a Stripe-based payment system.`,
                    technologies: "Technologies: React, Node.js, Express, TypeScript.",
                    link: "https://github.com/BdeB-Org/projet-de-session-equipe_loaf.git"
                },
                {
                    title: "ExerDex - Mobile Application",
                    type: "Team Project",
                    description: `An Android application to manage and track workouts and exercises. Key functionalities include user registration, 
                                  tracking completed exercises, workout templates, an AI assistant generating personalized exercises, 
                                  a quick search feature, and profile management.`,
                    technologies: "Technologies: Kotlin.",
                    link: "https://github.com/HamzaOumeziane/Exerdex-Mobile-App.git"
                },
                {
                    title: "Energymize - Full Stack Web Application",
                    type: "Team Project",
                    description: `A web platform allowing users to create and follow personalized workout plans. 
                                  Features include quick registration and login, plan generation based on preferences, 
                                  an interactive calendar for tracking sessions, profile management, and training customization.`,
                    technologies: "Technologies: EJS, Node.js, Express, Bootstrap, JavaScript.",
                    link: "https://github.com/HamzaOumeziane/Energymize-fullstack-app.git"
                }
            ]
        },
        contact: {
            getInTouch: "GET IN TOUCH",
            contactMe: "Contact me!",
            name: "Name",
            email: "Email address",
            phone: "Phone number",
            message: "Message",
            submit: "Submit",
            coords: {
                getInTouch: "Get in Touch",
                email: "houmeziane.contact@gmail.com",
                phone: "+1 514 802 5816",
                location: "Laval, QC CA",
                cvFrench: "Download CV (French)",
                cvEnglish: "Download CV (English)"
            }
        },
        footer: {
            rights: "© 2024 Hamza Oumeziane. All Rights Reserved."
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "Information",
            services: "Services",
            projects: "Projets",
            contact: "Contact"
        },
        home: {
            welcome: "Bienvenue sur Mon Portfolio !",
            subtitle: "Découvrez le parcours de ma créativité et de mon innovation.",
            button: "Découvrir Plus"
        },
        about: {
            title: "À Propos de Moi",
            description: `Je m'appelle Hamza Oumeziane, et je suis passionné de technologie et de développement logiciel.
                          Actuellement étudiant en Génie Logiciel au Collège de Bois-de-Boulogne, j'ai acquis des compétences
                          solides en programmation, en développement d'applications web et mobiles, ainsi qu'en gestion de
                          bases de données. Mon parcours académique et mes expériences professionnelles m'ont permis de
                          développer un esprit analytique et une capacité à résoudre des problèmes complexes.`,
            tabs: {
                skills: "Compétences",
                experience: "Expérience",
                education: "Éducation"
            }
        },
        services: {
            title: "Mes Services",
            items: [
                {
                    title: "Développement Web",
                    points: [
                        "Création de sites web dynamiques :",
                        [
                            "Conception de sites web personnalisés en utilisant React, TypeScript, et TailwindCSS.",
                            "Intégration de fonctionnalités back-end avec Node.js et Express."
                        ],
                        "Refonte de sites web existants :",
                        ["Modernisation de l'interface utilisateur (UI) et amélioration de l'expérience utilisateur (UX)."],
                        "Intégration d'API et services externes :",
                        ["Connectez des systèmes tiers comme Stripe, Google Maps, ou d'autres API."],
                    ]
                },
                {
                    title: "Développement Mobile",
                    points: [
                        "Création d'applications mobiles Android :",
                        [
                            "Conception et développement d'applications Android en Kotlin.",
                            "Optimisation des performances et mise en œuvre des bonnes pratiques pour Android."
                        ],
                    ]
                },

                {
                    title: "Création d'Applications Complètes",
                    points: [
                        "Plateformes de gestion",
                        ["Création de CRM (Customer Relationship Management) pour les entreprises."],
                        "Applications e-commerce",
                        ["Développement de boutiques en ligne avec gestion des paiements sécurisés."],
                        "Applications sur mesure",
                        ["Solutions adaptées pour les entreprises locales (gestion de stocks, calendriers interactifs, etc.)."]
                    ]
                },

                {
                    title: "Développement de Jeux Vidéo",
                    points: [
                        "Prototypes de jeux 2D/3D :",
                        ["Développement pour PC en utilisant Unity et C#."],
                        "Mini-jeux éducatifs :",
                        ["Solutions interactives pour des événements ou des entreprises."]
                    ]
                },
                {
                    title: "Automatisation et Scripts",
                    points: [
                        "Automatisation de tâches :",
                        ["Développement de scripts Python pour automatiser les processus répétitifs."],
                        "Chatbots et assistants virtuels :",
                        ["Solutions Node.js pour répondre aux utilisateurs ou fournir un support client."]
                    ]
                },
                {
                    title: "Gestion de Bases de Données",
                    points: [
                        "Conception et maintenance :",
                        [
                            "Création et gestion de bases de données relationnelles (MySQL, Oracle).",
                            "Gestion de bases NoSQL comme MongoDB."
                        ],
                        "Optimisation des performances :",
                        ["Analyse et optimisation des requêtes SQL pour de meilleures performances."],
                        "Migrations de données :",
                        ["Développement de solutions pour migrer les données entre systèmes."]
                    ]
                },
                
                {
                    title: "Support et Maintenance",
                    points: [
                        "Corrections de bugs et mises à jour :",
                        ["Maintenance des applications web, mobiles, ou desktop."],
                        "Migration vers des technologies modernes :",
                        ["Aide aux entreprises pour passer à des technologies récentes."]
                    ]
                }
            ]
        },
        projects: {
            title: "Récents Projets",
            items: [
                {
                    title: "Loaf AI - Extension Excel",
                    type: "Projet en équipe",
                    description: `Développement d'une application MERN fonctionnant sur Excel, intégrant des fonctionnalités IA pour aider les utilisateurs.
                                  Principales fonctionnalités : Chatbot interactif lié au livre 'Une introduction à l’administration des affaires', 
                                  extraction et standardisation de données, génération de formules, assistant Excel et système de paiement avec Stripe.`,
                    technologies: "Technologies : React, Node.js, Express, TypeScript.",
                    link: "https://github.com/BdeB-Org/projet-de-session-equipe_loaf.git"
                },
                {
                    title: "ExerDex - Application Mobile",
                    type: "Projet en équipe",
                    description: `Application Android pour la gestion et le suivi des entraînements et exercices. 
                                  Fonctionnalités principales : inscription, suivi des exercices réalisés, modèles d'entraînement, 
                                  assistant IA pour des exercices personnalisés, recherche rapide et gestion de profil utilisateur.`,
                    technologies: "Technologies : Kotlin.",
                    link: "https://github.com/HamzaOumeziane/Exerdex-Mobile-App.git"
                },
                {
                    title: "Energymize - Application Web Full Stack",
                    type: "Projet en équipe",
                    description: `Plateforme web permettant de créer et suivre des plans d'entraînement personnalisés. 
                                  Fonctionnalités principales : inscription rapide, génération de plans d'entraînement adaptés, 
                                  calendrier interactif pour le suivi, gestion de profil utilisateur et personnalisation des entraînements.`,
                    technologies: "Technologies : EJS, Node.js, Express, Bootstrap, JavaScript.",
                    link: "https://github.com/HamzaOumeziane/Energymize-fullstack-app.git"
                }
            ]
        },
        contact: {
            getInTouch: "RESTEZ EN CONTACT",
            contactMe: "Contactez-moi !",
            name: "Nom",
            email: "Adresse e-mail",
            phone: "Numéro de téléphone",
            message: "Message",
            submit: "Envoyer",
            coords: {
                getInTouch: "Rester en Contact",
                email: "houmeziane.contact@gmail.com",
                phone: "+1 514 802 5816",
                location: "Laval, QC CA",
                cvFrench: "Télécharger CV (Français)",
                cvEnglish: "Télécharger CV (Anglais)"
            }
        },
        footer: {
            rights: "© 2024 Hamza Oumeziane. Tous Droits Réservés."
        }
    }
};
