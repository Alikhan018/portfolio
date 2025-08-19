const root = {
    name: "portfolio",
    type: "folder",
    children: [
        {
            name: "about.js",
            type: "file",
            content: ` // Hi, I’m Ali 👋
                // Full-Stack JavaScript Developer
                // I build scalable web apps with React & Node.js

                console.log("Welcome to my portfolio!");`
        },
        {
            name: "skills.json",
            type: "file",
            content: `{
                "frontend": ["React", "Next.js", "TailwindCSS"],
                "backend": ["Node.js", "Express", "NestJS"],
                "database": ["MongoDB", "PostgreSQL", "MySQL"]
            }`
        },
        {
            name: "projects.jsx",
            type: "file",
            content: `const Projects = () => (
                    Project1
                    Project2   
)`
        },
        {
            name: "blog.md",
            type: "file",
            content: ``
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