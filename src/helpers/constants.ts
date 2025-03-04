import { PortfolioData } from "../types/portfolio.types";

export const portfolioData: PortfolioData = {
  // Basic Info
  name: "Uday Mehta",
  email: "iamudaymehta@gmail.com",

  // Navigation
  navLinks: [
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Experience", path: "experience" },
    { name: "Education", path: "education" },
    { name: "Contact", path: "contact" }
  ],

  // Hero Section
  hero: {
    title: "Hi, I'm Uday Mehta",
    subtitles: [
      "Full Stack Developer",
      "React Developer", 
      "Node.js Developer", 
      "Problem Solver", 
      "Tech Enthusiast"
    ],
    description: "Passionate Software Engineer with 2+ years of experience building dynamic and efficient web applications! Skilled in cutting-edge technologies like Node.js, React.js, MongoDB, Next.js, and MySQL, I thrive on solving challenging problems and creating impactful solutions."
  },

  // Skills Section
  skills: {
    title: "Key Skills",
    categories: [
      {
        title: "Languages",
        skills: ["JavaScript", "TypeScript", "C", "C++", "HTML", "CSS", "SQL", "Python", "Java"]
      },
      {
        title: "Frameworks",
        skills: ["React.js", "Next.js", "AngularJS", "Node.js", "Express.js"]
      },
      {
        title: "Libraries",
        skills: ["Redux", "Tailwind CSS", "Material-UI", "Chakra UI", "Bootstrap", "Three.js", "D3.js", "Mongoose"]
      },
      {
        title: "Database",
        skills: ["MongoDB", "MySQL"]
      },
      {
        title: "DevOps & Tools",
        skills: ["Docker", "Docker Compose", "Nginx", "Git", "GitHub", "Bitbucket", "Amazon Web Services (AWS)"]
      },
      {
        title: "Other Tools",
        skills: ["VS Code", "Chrome DevTools", "Postman", "Swagger", "JIRA", "Notion", "Slack"]
      }
    ]
  },

  // Experience Section
  experience: {
    title: "Professional Experience",
    jobs: [
      {
        company: "Repozitory Technologies Pvt. Ltd.",
        location: "Hisar",
        position: "Software Developer Engineer",
        type: "Full-time",
        duration: "July 2023 - Present",
        project: {
          name: "getStatus",
          description: "An Israel-based software solution for project management and real estate collaboration",
          technologies: ["Next.js", "Node.js", "AngularJS", "MongoDB", "Tailwind", "Redux"]
        },
        responsibilities: [
          "Developed a Next.js Marketplace App with 10k+ active users",
          "Led a team of 5 developers, managing sprint releases and deployments",
          "Implemented performance optimizations improving app responsiveness by 40%",
          "Developed robust backend solutions with TypeScript and JOI validation",
          "Integrated multiple third-party services and APIs"
        ]
      },
      {
        company: "Repozitory Technologies Pvt. Ltd.",
        location: "Hisar",
        position: "MERN Developer Intern",
        type: "Internship",
        duration: "Jan 2023 - June 2023",
        project: {
          name: "Eargo",
          description: "US Based Healthcare e-commerce web application for hearing aid products",
          technologies: ["React.js", "Node.js", "MySQL", "Redux", "Payment Gateway"]
        },
        responsibilities: [
          "Migrated 50+ React components to functional architecture",
          "Optimized checkout flow, increasing completion rates by 25%",
          "Integrated multiple payment gateways",
          "Implemented comprehensive API documentation using Swagger"
        ]
      }
    ]
  },

  // Education Section
  education: {
    title: "Educational Background",
    schools: [
      {
        name: "Guru Jambheshwar University of Science and Technology",
        location: "Hisar, Haryana",
        degree: "Bachelor of Technology - Information Technology",
        duration: "August 2019 - July 2023",
        score: "GPA: 7.60",
        courses: [
          "Data Structures", 
          "Algorithms", 
          "Object-Oriented Programming", 
          "Software Engineering", 
          "Operating Systems", 
          "Database Management"
        ]
      }
    ]
  },

  // Achievements Section
  achievements: {
    title: "Professional Achievements",
    list: [
      "Led a team of 5 developers, ensuring successful project deliveries",
      "Developed a marketplace app achieving 10k+ user sign-ups in first month",
      "Improved application performance by 40% through code optimization",
      "Implemented robust CI/CD pipelines and deployment strategies",
      "Conducted technical interviews and mentored junior developers"
    ]
  },

  // Certifications Section
  certifications: {
    title: "Professional Certifications",
    list: [
      {
        name: "JavaScript Security Specialization",
        issuer: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/DF62H0XVLIJ4"
      },
      {
        name: "Cloning Facebook using HTML and CSS",
        issuer: "Udemy",
        link: "https://tinyurl.com/FACEBOOK-CLone"
      },
      {
        name: "JavaScript and React",
        issuer: "DevTown",
        link: "https://tinyurl.com/JavascriptReact"
      }
    ]
  },

  // Projects Section
  projects: {
    title: "Personal Projects",
    projectsList: [
      {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce application with payment integration",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        githubLink: "https://github.com/yourusername/ecommerce-project",
        liveLink: "https://your-ecommerce-project.com"
      },
      {
        title: "Task Management App",
        description: "Real-time task tracking application with user authentication",
        technologies: ["Next.js", "Firebase", "Tailwind"],
        githubLink: "https://github.com/yourusername/task-management",
        liveLink: "https://your-task-app.com"
      }
    ]
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    description: "I'm open to new opportunities and collaborations. Feel free to reach out!",
    buttonText: "Say Hello"
  },

  // Social Links
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/iamudaymehta",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/iamudaymehta",
      icon: "linkedin"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/iamudaymehta",
      icon: "twitter"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/iamudaymehta/",
      icon: "leetcode"
    }
  ],

  // Theme Colors
  theme: {
    primaryColor: "#0a192f",
    secondaryColor: "#64ffda",
    textPrimary: "#ccd6f6",
    textSecondary: "#8892b0",
    backgroundColor: "#0a192f"
  }
};