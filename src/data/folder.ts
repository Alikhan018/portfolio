const root = {
    name: "portfolio",
    type: "folder",
    children: [
        {
            name: "about.js",
            type: "file",
            content: `// Hi, I’m Ali 👋
// Full-Stack JavaScript Developer
// I craft web apps with React, Next.js, TypeScript & Node.js
// Databases? Sequelize, Prisma, PostgreSQL, Firebase 🔥
// Styling? TailwindCSS for speed & consistency 🎨
// Always learning. Always shipping. 🚀

function introduce() {
  return {
    name: "Ali",
    role: "Full-Stack Developer",
    loves: ["Clean Code", "Scalable Systems", "Restful APIs"],
    currently: "Building modern web apps with Next.js & Prisma"
  };
}

console.log(introduce());
`
        },
        {
            name: "skills.json",
            type: "file",
            content: `{
    "frontend": [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Framer Motion"
    ],
    "backend": [
        "Node.js",
        "Express",
        "Sequelize",
        "Prisma",
        "REST APIs"
    ],
    "database": [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Firebase Firestore",
        "Redis"
    ],
    "authentication": [
        "JWT",
        "OAuth",
        "Firebase Auth"
    ],
    "tools": [
        "Git",
        "GitHub",
        "Vercel",
        "Render",
        "Postman",
        "ESLint",
        "Prettier"
    ],
    "testing": [
        "Jest"
    ]
}
`
        },
        {
            name: "projects.jsx",
            type: "file",
            content: `const Projects = (linkToAll: www.github.com/Alikhan018) => (

                    ClassSync: A collaborative code editor classroom built with React and firebase
                    _____________________
                    Role based access control system: A system for managing user roles, groups, features and permissions 
                    built with Node.js and Express with React with PostgreSQL using SequelizeORM 
                    _____________________
                    Whatsapp Chatbot: A chatbot application built with Node.js and WhatsApp API
                    _____________________
                    Awwal: E-commerce platform built with React and firebase
                    _____________________
                    Befiler: A Tax Filing App built with Node.ts and Express with Next.ts with MongoDB as the database
                    _____________________
                    FileExplorer: A file management system built with Node.js and EJS with PostgreSQL as the database 
                    showcasing perfect use of tree data structures
                    _____________________
                    NewsApp: A web based news app built on React with News API integration
                    _____________________
                    TextZone: A web based text processing application built with React
                    _____________________
                    Blogs: A collection of blog posts built with raw HTML, CSS, and JavaScript to showcase thoughts and
                    experiences
                    _____________________
                    Tuple Editor: A tuple editor showcasing CRUD operations all based on local storage using raw HTML, 
                    CSS, and JavaScript
                    _____________________
                    Web Based Calculator: A simple web-based calculator built with HTML, CSS, and JavaScript
                    _____________________
                    Assessment Management System: A system for managing assessments, questions, and results built with 
                    C++ this a console only app showcasing use of OOP concepts along with file handling
                    _____________________
                    KFC Console: A console-based application for managing KFC orders and inventory built with C++ 
                    showcasing OOP principles and file handling
                    _____________________
                    ATM Simulator: A console-based application simulating an ATM interface built with C++ showcasing 
                    functional programming concepts

)`
        },
        {
            name: "blog.md",
            type: "file",
            content: `# Changelog of Ali 👨‍💻

## v1.0 — The Beginner
- Discovered JavaScript
- Built tiny apps that barely worked

## v2.0 — The Builder
- Learned React & Next.js
- Made side projects for fun

## v3.0 — The Professional
- Mastered Node.js, Express, Prisma
- Built scalable backends & APIs
- Added TypeScript to my workflow

## v4.0 — Work in Progress 🚀
- Exploring serverless & real-time apps
- Sharpening UI skills with TailwindCSS + Framer Motion
`
        },
        {
            name: "contact.ts",
            type: "file",
            content: `interface Contact {
                    email: "alykhan027@gmail.com";
                    github: "github.com/Alikhan018";
                    linkedin: "linkedin.com/in/alykhan72";
}`
        }
    ]
};

export default root;