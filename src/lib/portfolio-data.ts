export const profile = {
  name: "Ananda",
  title: "Full-Stack Developer | MERN Stack | Building Modern Web Applications",
  tagline:
    "Computer Science & Engineering student and Full-Stack Developer building practical, user-focused web applications with the MERN stack.",
  email: "anandaj6002@gmail.com",
  phone: "8088821849",
  location: "Mangaluru, Karnataka, India",
  github: "https://github.com/Ananda6002",
  linkedin: "https://linkedin.com/in/ananda-j-48b234293",
};

export const about = [
  "I'm a Computer Science and Engineering student and Full-Stack Developer passionate about building practical, user-focused web applications. I work primarily with the MERN stack, using React.js, Node.js, Express.js, and MongoDB to develop responsive frontends, secure backend systems, and RESTful APIs.",
  "Through hands-on projects such as complaint management, service tracking, and e-commerce applications, I've gained experience in authentication, role-based access control, database management, API development, and real-world problem solving.",
  "I'm currently looking for opportunities where I can contribute to real-world software projects, strengthen my technical expertise, and grow as a professional software developer.",
];

export const aboutHighlights = [
  "Computer Science & Engineering",
  "Full-Stack Development",
  "MERN Stack",
  "REST APIs",
  "Problem Solving",
];

export const skillGroups = [
  { label: "Languages", items: ["C++", "SQL", "Java (basic)", "JavaScript"] },
  { label: "Frontend", items: ["HTML", "CSS", "React.js", "Bootstrap"] },
  { label: "Backend", items: ["Node.js", "Express.js"] },
  { label: "Database", items: ["MongoDB"] },
  { label: "Full-Stack", items: ["MERN Stack", "REST APIs"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
];

export const coreSkills = ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "C++"];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Service Connect",
    description:
      "A service tracking web application that connects users with service providers and follows each request through to completion.",
    tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Ananda6002/Service_Connect.git",
  },
  {
    name: "Complaint Management System",
    description:
      "A complaint management platform where users can raise complaints and authorised roles review and update their status.",
    tech: ["MERN Stack", "REST APIs", "MongoDB", "Authentication"],
    github: "https://github.com/Ananda6002/complaint-management-system.git",
  },
  {
    name: "NexCart E-Commerce",
    description:
      "An e-commerce web application covering product listings, cart flow and order handling with a responsive interface.",
    tech: ["MERN Stack", "React.js", "Express.js", "MongoDB"],
    github: "https://github.com/Ananda6002/nexcart_ecommerce.git",
  },
  {
    name: "Feastly",
    description:
      "A food-focused web application built as a full-stack learning project. Detailed description to be added.",
    tech: ["JavaScript", "Full-Stack"],
    github: "https://github.com/Ananda6002/feastly.git",
  },
];

export const education = [
  {
    school: "Sahyadri College of Engineering and Management, Mangalore",
    degree: "B.E. in Computer Science & Engineering",
    detail: "CGPA: 8.4",
    years: "2023 – Present",
    current: true,
  },
  { school: "Pre-University (12th)", degree: "Higher Secondary", detail: "83.33%", years: "" },
  { school: "Secondary School (10th)", degree: "SSLC", detail: "88%", years: "" },
];

export const achievements = [
  {
    title: "Skill Sangam 2025 — 24-Hour Hackathon",
    description:
      "Successfully completed a 24-hour hackathon focused on full-stack web development using the MERN stack, Next.js and Generative AI.",
  },
];

export const certifications = [
  "Mastering JavaScript — Infosys Springboard",
  "Python Foundation Certification — Infosys Springboard",
  "Java Foundation Certification — Infosys Springboard",
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
