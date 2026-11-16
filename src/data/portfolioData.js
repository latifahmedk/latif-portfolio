export const personalInfo = {
  name: "Latif Ahmed",
  role: "Software Developer",
  subRole: "Python Full Stack Developer",
  location: "Thane, Maharashtra, India",
  phone: "+91-9326174220",
  email: "latif.bst18@gmail.com",
  summary:
    "Software Developer Intern with hands-on experience in Python, Django, REST APIs, and React. Strong interest in backend development, problem-solving, and building efficient software solutions. Currently strengthening Data Structures, Algorithms, and logical problem-solving skills while expanding knowledge of Angular, Node.js, and MongoDB. Quick learner with a strong interest in developing scalable applications and continuously improving technical skills.",
  socialLinks: {
    github: "https://github.com/latifahmedk",
    linkedin: "https://linkedin.com/in/latif-ahmed",
    leetcode: "https://leetcode.com/latifahmed",
    email: "mailto:latif.bst18@gmail.com",
    phone: "tel:+919326174220",
  },
  resumeUrl: "/Latif_Ahmed_Resume.pdf",
};

export const stats = [
  { label: "B.Tech CGPA", value: "7.32", detail: "Galgotias College" },
  { label: "Diploma Score", value: "77.76%", detail: "Jamia Millia Islamia" },
  { label: "SSC Board", value: "85.4%", detail: "Mount Mary High" },
  { label: "Key Core Projects", value: "2+", detail: "Full Stack & Web" },
  { label: "Professional Certs", value: "4", detail: "Qspiders, Infosys & more" },
];

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    iconName: "Code2",
    accent: "from-blue-500 to-cyan-400",
    borderGlow: "hover:border-blue-500/50 hover:shadow-blue-500/20",
    skills: [
      { name: "Python", level: "Advanced", icon: "SiPython", color: "#3776AB", tag: "Primary Backend" },
      { name: "JavaScript", level: "Proficient", icon: "SiJavascript", color: "#F7DF1E", tag: "ES6+ / Web" },
      { name: "C++", level: "Intermediate", icon: "SiCplusplus", color: "#00599C", tag: "OOP & DSA" },
      { name: "SQL", level: "Proficient", icon: "TbDatabase", color: "#E38C00", tag: "Relational Queries" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Libraries",
    iconName: "Layers",
    accent: "from-violet-500 to-purple-400",
    borderGlow: "hover:border-violet-500/50 hover:shadow-violet-500/20",
    skills: [
      { name: "Django", level: "Advanced", icon: "SiDjango", color: "#092E20", tag: "Web Architecture" },
      { name: "Django REST Framework", level: "Advanced", icon: "SiDjango", color: "#A30000", tag: "RESTful APIs" },
      { name: "React.js", level: "Proficient", icon: "SiReact", color: "#61DAFB", tag: "Frontend UI" },
      { name: "Angular", level: "Hands-on", icon: "SiAngular", color: "#DD0031", tag: "Enterprise SPA" },
      { name: "Node.js", level: "Familiar", icon: "SiNodedotjs", color: "#339933", tag: "Runtime" },
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    iconName: "Database",
    accent: "from-emerald-500 to-teal-400",
    borderGlow: "hover:border-emerald-500/50 hover:shadow-emerald-500/20",
    skills: [
      { name: "MongoDB", level: "Hands-on", icon: "SiMongodb", color: "#47A248", tag: "NoSQL Document" },
      { name: "MySQL", level: "Proficient", icon: "SiMysql", color: "#4479A1", tag: "RDBMS" },
      { name: "Oracle DB", level: "Intermediate", icon: "GrOracle", color: "#F80000", tag: "Enterprise DB" },
      { name: "SQLite", level: "Proficient", icon: "SiSqlite", color: "#003B57", tag: "Embedded / ORM" },
    ],
  },
  {
    id: "concepts",
    title: "Core CS Concepts",
    iconName: "BrainCircuit",
    accent: "from-pink-500 to-rose-400",
    borderGlow: "hover:border-pink-500/50 hover:shadow-pink-500/20",
    skills: [
      { name: "OOP (Object-Oriented)", level: "Strong", icon: "FaCubes", color: "#EC4899", tag: "Design & Patterns" },
      { name: "Artificial Intelligence (AI)", level: "Academic (B.Tech)", icon: "FaBrain", color: "#8B5CF6", tag: "Specialization" },
      { name: "Data Structures & Algorithms", level: "Strengthening", icon: "FaNetworkWired", color: "#3B82F6", tag: "Problem Solving" },
      { name: "RESTful APIs & JWT", level: "Proficient", icon: "FaKey", color: "#10B981", tag: "Auth & Endpoints" },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools & DevOps",
    iconName: "Wrench",
    accent: "from-amber-500 to-orange-400",
    borderGlow: "hover:border-amber-500/50 hover:shadow-amber-500/20",
    skills: [
      { name: "Antigravity", level: "Proficient", icon: "SiGooglecloud", color: "#4285F4", tag: "Agentic AI / Tooling" },
      { name: "Azure DevOps", level: "Intermediate", icon: "VscAzureDevops", color: "#0078D7", tag: "CI/CD & Boards" },
      { name: "GitLab", level: "Proficient", icon: "SiGitlab", color: "#FC6D26", tag: "VCS & Pipelines" },
      { name: "Jira", level: "Proficient", icon: "SiJira", color: "#0052CC", tag: "Agile & Bug Tracking" },
      { name: "Git & GitHub", level: "Proficient", icon: "SiGithub", color: "#F05032", tag: "Version Control" },
      { name: "Postman", level: "Proficient", icon: "SiPostman", color: "#FF6C37", tag: "API Testing" },
    ],
  },
];

export const experienceData = [
  {
    id: "shujabits",
    company: "Shujabits Infotech Solution",
    role: "Software Developer Intern",
    period: "July 2026 – Present",
    status: "Present Role",
    location: "India",
    summary:
      "Contributing actively to enterprise software systems with end-to-end full stack development, API design, bug identification, and performance enhancement.",
    techStack: ["Python", "Django", "Django REST Framework", "React", "Angular", "MongoDB", "DSA"],
    responsibilities: [
      "Contributing to a production Warehouse Management System (WMS) using Python, Django, Django REST Framework, and React, building robust APIs, CRUD operations, and core business logic.",
      "Identified and resolved critical backend and frontend bugs, integrated REST APIs smoothly, and collaborated with cross-functional team members to improve application stability and responsiveness.",
      "Gained valuable hands-on production experience with Angular and MongoDB while strengthening core programming fundamentals.",
      "Actively practicing and focusing on Data Structures and Algorithms (DSA) and logical problem-solving to architect scalable solutions.",
    ],
  },
];

export const projectsData = [
  {
    id: "employee-management-system",
    title: "Employee Management System",
    category: "Full Stack Application",
    timeline: "June 2026",
    featured: true,
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    accentColor: "#3b82f6",
    techStack: ["Python", "Django", "Django REST Framework", "ReactJS", "MySQL", "JWT Authentication"],
    description:
      "A comprehensive full-stack enterprise web application engineered to streamline employee management, administration, and organization hierarchy. Features complete CRUD capabilities, real-time search, robust pagination, and strict JWT-secured endpoint authentication.",
    features: [
      "End-to-end CRUD operations for managing employees, departments, and roles.",
      "Instant query search and server-side pagination for optimal database performance.",
      "Secure JWT (JSON Web Token) authentication with protected API endpoints via DRF.",
      "Modern, responsive React frontend with fluid UI feedback and clean state handling.",
      "Structured relational database schema implemented with MySQL.",
    ],
    github: "https://github.com/latifahmedk/employee-management-system",
    demo: "#",
    badge: "Full Stack / Featured",
  },
  {
    id: "flight-booking-system",
    title: "Flight Booking System",
    category: "Web Application",
    timeline: "January 2026",
    featured: true,
    gradient: "from-cyan-600 via-teal-600 to-emerald-600",
    accentColor: "#06b6d4",
    techStack: ["Python", "Django", "HTML5", "CSS3", "SQLite", "Django ORM"],
    description:
      "A dynamic airline reservation web platform featuring an interactive booking pipeline, intelligent seat-selection logic, and secure user authentication. Leverages Django views and ORM to provide a dependable, frictionless customer travel reservation journey.",
    features: [
      "Intuitive flight search, schedule lookup, and multi-step reservation booking flow.",
      "Interactive visual seat-selection logic and seat availability management.",
      "Secure user authentication, credential encryption, and profile booking history.",
      "Efficient data modeling and query operations using Django ORM with SQLite backend.",
      "Responsive, mobile-optimized interface built with clean HTML5 and CSS3 styling.",
    ],
    github: "https://github.com/latifahmedk/flight-booking-system",
    demo: "#",
    badge: "Django Web App",
  },
];

export const educationData = [
  {
    id: "btech",
    institution: "Galgotias College Of Engineering and Technology",
    degree: "B.Tech in Computer Science (Artificial Intelligence)",
    score: "CGPA: 7.32",
    period: "2022 – 2025",
    location: "Greater Noida, Uttar Pradesh",
    icon: "GraduationCap",
    details:
      "Specialized in Artificial Intelligence and core Computer Science disciplines including Data Structures, Algorithms, Database Management Systems, Object-Oriented Programming, and Software Engineering methodologies.",
    badge: "Undergraduate Degree",
  },
  {
    id: "diploma",
    institution: "Jamia Millia Islamia",
    degree: "Diploma in Engineering",
    score: "Percentage: 77.76%",
    period: "2019 – 2022",
    location: "New Delhi, Delhi",
    icon: "Award",
    details:
      "Gained comprehensive technical foundation in applied engineering, programming principles, computer architecture, and computational problem solving.",
    badge: "Engineering Diploma",
  },
  {
    id: "school",
    institution: "Mount Mary High School",
    degree: "Secondary School Certificate (SSC)",
    score: "Percentage: 85.4%",
    period: "2018",
    location: "Mumbai, Maharashtra",
    icon: "BookOpen",
    details:
      "Graduated with distinction in science, mathematics, and secondary academic curriculum.",
    badge: "Secondary Education",
  },
];

export const certificationsData = [
  {
    title: "Python Full Stack Development",
    issuer: "Qspiders",
    icon: "SiPython",
    color: "#3776AB",
    description: "In-depth training covering Python, backend frameworks, database integration, and full stack web architecture.",
  },
  {
    title: "Web Development",
    issuer: "Udemy",
    icon: "SiJavascript",
    color: "#F7DF1E",
    description: "Modern full-stack web development methodologies, responsive UI design, frontend interactivity, and APIs.",
  },
  {
    title: "Database Management System",
    issuer: "Infosys",
    icon: "TbDatabase",
    color: "#007ACC",
    description: "Comprehensive study of relational databases, query optimization, normalization, transactions, and indexing.",
  },
  {
    title: "Professional Communication",
    issuer: "SoftPro India",
    icon: "FaComments",
    color: "#10B981",
    description: "Corporate collaboration, technical presentations, agile communication, and workplace effectiveness.",
  },
];
