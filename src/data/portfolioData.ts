/**
 * ============================================================================
 * SWATHI BHANDARY PORTFOLIO — CENTRALIZED DATA CONFIGURATION
 * ============================================================================
 * Upgraded & redesigned from https://swathi1107.github.io/portfolio/
 * Preserves all genuine information, real photo (/assets/profile.jpg),
 * real resume (/assets/Swathi_Resume.pdf), contact links, and projects.
 */

export interface PersonalInfo {
  name: string;
  fullName: string;
  logoText: string;
  roleTitle: string;
  secondaryRoles: string[];
  degree: string;
  institution: string;
  batchYears: string;
  semester: string;
  cgpa: string;
  location: string;
  heroGreeting: string;
  heroTagline: string;
  heroTechStack: string[];
  aboutBio: string;
  aboutGoal: string;
  quickStats: {
    label: string;
    value: string;
  }[];
  profileImage: string;
  aboutImage: string;
  resumePdfPath: string;
  resumeAlternatePath: string;
  isResumeUploaded: boolean;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    portfolioRepo: string;
  };
}

export interface AboutCardItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  iconName: 'GraduationCap' | 'Code2' | 'MapPin' | 'Compass';
}

export interface SkillItem {
  name: string;
  context: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export type ProjectCategory = 'All' | 'Java' | 'Python' | 'Database' | 'AI/RAG';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  status: 'Completed' | 'Currently Developing';
  technologies: string[];
  categories: ProjectCategory[];
  shortDescription: string;
  problemStatement: string;
  objective: string;
  architectureWorkflow: string[];
  features: string[];
  futureImprovements: string[];
  image: string;
  assetFileName: string;
  githubUrl: string;
  liveDemoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  type: 'Internship' | 'Hackathon' | 'Activity';
  organization: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  details: string[];
  technologies: string[];
  imagePath: string;
  isImageUploaded: boolean;
  isPlaceholderNote?: boolean;
}

export interface CertificateItem {
  id: string;
  title: string;
  platform: string;
  category: string;
  statusNote?: string;
  skillsCovered: string[];
  imagePath: string;
  isUploaded: boolean;
  credentialUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  metricLabel: string;
  metricValue: string;
  highlights: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  imagePath?: string;
  isImageUploaded?: boolean;
}

export interface LearningItem {
  id: string;
  topic: string;
  category: string;
  focusNote: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Swathi',
  fullName: 'Swathi Bhandary',
  logoText: 'SWATHI.',
  roleTitle: 'Computer Science Engineering Student',
  secondaryRoles: [
    'Aspiring Software Developer',
    'Student Developer',
    'Currently learning and building practical projects',
  ],
  degree: 'B.E. Computer Science Engineering',
  institution: "Alva's Institute of Engineering and Technology",
  batchYears: '2024 – 2028',
  semester: 'Currently in 5th Semester',
  cgpa: '7.86',
  location: 'Karnataka, India',
  heroGreeting: "Hi, I'm Swathi 👋",
  heroTagline:
    'Building my skills through practical software projects, programming, databases, and emerging technologies.',
  heroTechStack: ['Java', 'Python', 'MySQL', 'DBMS', 'HTML/CSS/JS', 'Git'],
  aboutBio:
    "I’m Swathi Bhandary, a Computer Science Engineering student currently pursuing my B.E. at Alva's Institute of Engineering and Technology (2024 – 2028). I enjoy learning by building practical projects and exploring how software can solve real-world problems. My current interests include Java, Python, relational databases, web development, and emerging AI technologies.",
  aboutGoal:
    'I am continuously working on improving my technical foundation and gaining practical hands-on experience through academic and self-initiated software projects.',
  quickStats: [
    { label: 'Projects Built', value: '5+' },
    { label: 'Technologies Practiced', value: '10+' },
    { label: 'Current CGPA', value: '7.86' },
    { label: 'Expected Graduation', value: '2028' },
  ],
  // Real portrait and resume imported directly from https://swathi1107.github.io/portfolio/
  profileImage: '/assets/profile.jpg',
  aboutImage: '/assets/about.jpg',
  resumePdfPath: '/assets/Swathi_Resume.pdf',
  resumeAlternatePath: '/Swathi_Resume.pdf',
  isResumeUploaded: true,
  contact: {
    email: 'swathibhandary2006@gmail.com',
    linkedin: 'https://linkedin.com/in/swathi-bhandary-364404330',
    github: 'https://github.com/swathi1107',
    portfolioRepo: 'https://github.com/swathi1107/portfolio',
  },
};

export const aboutCards: AboutCardItem[] = [
  {
    id: 'education',
    label: 'Education',
    value: 'B.E. Computer Science Engineering',
    subtext: "Alva's Institute of Engineering and Technology · 5th Semester (2024 – 2028)",
    iconName: 'GraduationCap',
  },
  {
    id: 'focus',
    label: 'Current Focus',
    value: 'Software Development & Emerging Technologies',
    subtext: 'Java, Python, MySQL databases, web interfaces, and applied AI learning',
    iconName: 'Code2',
  },
  {
    id: 'location',
    label: 'Based In',
    value: 'Karnataka, India',
    subtext: 'Open to software engineering internships, hackathons, and collaborative projects',
    iconName: 'MapPin',
  },
  {
    id: 'approach',
    label: 'Learning Approach',
    value: 'Learn → Build → Improve',
    subtext: 'Turning foundational CS coursework into working software applications',
    iconName: 'Compass',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming & Web',
    description: 'Core languages and web technologies used across academic labs and software projects.',
    skills: [
      {
        name: 'Java',
        context: 'Object-oriented programming, JSP/Servlets, JDBC, and Advanced Java lab programs',
        iconName: 'FileCode2',
      },
      {
        name: 'Python',
        context: 'Application scripting, Tkinter GUI, computer vision, and AI/ML workflows',
        iconName: 'Terminal',
      },
      {
        name: 'C',
        context: 'Procedural programming, pointers, memory fundamentals, and structured logic',
        iconName: 'Cpu',
      },
      {
        name: 'HTML, CSS & JavaScript',
        context: 'Responsive frontend interfaces, interactive web pages, and form validation',
        iconName: 'Code',
      },
    ],
  },
  {
    id: 'database',
    title: 'Database Systems',
    description: 'Relational database design, structured query writing, and backend persistence.',
    skills: [
      {
        name: 'MySQL',
        context: 'Relational database integration for Java (JDBC) and Python applications',
        iconName: 'Database',
      },
      {
        name: 'DBMS',
        context: 'Relational schemas, normalization, ER diagrams, and transaction principles',
        iconName: 'Layers',
      },
      {
        name: 'SQL',
        context: 'CRUD queries, filtering, joins, aggregation, and report generation',
        iconName: 'Table2',
      },
    ],
  },
  {
    id: 'core-cs',
    title: 'Core Computer Science',
    description: 'Foundational engineering subjects and analytical problem-solving areas.',
    skills: [
      {
        name: 'Data Structures & Algorithms',
        context: 'Arrays, linked lists, trees, sorting, searching, and algorithm analysis',
        iconName: 'Network',
      },
      {
        name: 'Object-Oriented Programming',
        context: 'Encapsulation, inheritance, polymorphism, abstraction, and modular design',
        iconName: 'Boxes',
      },
      {
        name: 'Operating Systems',
        context: 'Process scheduling, memory management, synchronization, and file systems',
        iconName: 'Server',
      },
      {
        name: 'Machine Learning Basics',
        context: 'Foundational classification workflows and applied AI project exploration',
        iconName: 'HardDrive',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    description: 'Version control and integrated development environments used in daily work.',
    skills: [
      {
        name: 'Git',
        context: 'Source code version control, commits, and repository tracking',
        iconName: 'GitBranch',
      },
      {
        name: 'GitHub',
        context: 'Code hosting, project documentation, and GitHub Pages deployment',
        iconName: 'FolderGit2',
      },
      {
        name: 'VS Code',
        context: 'Primary editor for Python, web development, and project management',
        iconName: 'Code',
      },
      {
        name: 'Eclipse',
        context: 'IDE for Java, J2EE, JSP, and Servlet enterprise lab development',
        iconName: 'Laptop',
      },
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'hospital-management-system',
    index: '01',
    title: 'Hospital Management System',
    status: 'Completed',
    technologies: ['Java', 'MySQL', 'HTML/CSS', 'JSP/Servlet'],
    categories: ['Java', 'Database'],
    shortDescription:
      'A web-based hospital management system designed to manage patient information, doctor assignments, appointments, and hospital records efficiently.',
    problemStatement:
      'Manual record-keeping in clinics and hospitals often leads to slow patient lookup, fragmented appointment tracking, and difficulty generating filtered reports by date, ailment, or doctor.',
    objective:
      'To build a structured web application using Java (JSP/Servlet) and MySQL that digitizes patient registration, record updates, search filtering, and clinical report generation.',
    architectureWorkflow: [
      'Presentation Layer: HTML/CSS and JSP views capture patient registration inputs, updates, and search filters.',
      'Controller Layer: Java Servlets handle HTTP requests, validate form inputs, and coordinate application logic.',
      'Data Access Layer (JDBC): Connects Java Servlets to the MySQL database using prepared statements.',
      'Database Layer (MySQL): Maintains structured tables for patients, doctors, appointments, and medical history.',
    ],
    features: [
      'Add new patient records with clinical and contact details',
      'Update existing patient records and consultation status',
      'Delete outdated or discharged patient entries',
      'Display structured patient and doctor directories',
      'Search and filter patient records dynamically',
      'Generate reports based on date, ailment, and assigned doctor',
      'Persistent MySQL relational database integration',
    ],
    futureImprovements: [
      'Role-based login portals for doctors, receptionists, and administrators',
      'Automated appointment confirmation and reminder alerts',
      'Exportable PDF discharge summaries and billing receipts',
    ],
    image: '/assets/project-hospital.png',
    assetFileName: 'project-hospital.png',
    githubUrl: 'https://github.com/swathi1107',
    liveDemoUrl: '',
  },
  {
    id: 'vehicle-speed-monitoring',
    index: '02',
    title: 'Virtual Smart Vehicle Speed Monitoring & Radar System',
    status: 'Completed',
    technologies: ['Python', 'MySQL', 'Computer Vision'],
    categories: ['Python', 'Database'],
    shortDescription:
      'A vehicle monitoring and radar system built with Python, Computer Vision, and MySQL to detect vehicle speed from video, identify overspeed violations, and manage vehicle records.',
    problemStatement:
      'Manual traffic speed monitoring is labor-intensive, and tracking vehicle violation histories requires a reliable connection between video analysis and a structured database.',
    objective:
      'To develop a Python-based vehicle monitoring system that estimates vehicle speed across video frames, flags overspeed violations against speed limits, and stores violation histories in MySQL.',
    architectureWorkflow: [
      'Video Stream Processing: Reads traffic video frames in Python and identifies moving vehicles.',
      'Speed Estimation Module: Tracks vehicle movement across calibrated reference zones to compute speed.',
      'Speed-Limit Comparison: Evaluates estimated speed against configured road thresholds to flag violations.',
      'MySQL Database Storage: Logs vehicle records, timestamps, and overspeed violation histories for querying.',
    ],
    features: [
      'Automated vehicle detection from traffic video streams',
      'Frame-based vehicle speed estimation',
      'Configurable speed-limit threshold comparison',
      'Automated overspeed violation detection',
      'Structured violation record logging',
      'MySQL database integration for persistent storage',
      'Monitoring history view for reviewing past vehicle records',
    ],
    futureImprovements: [
      'Automatic number plate recognition (ANPR) for identified vehicles',
      'Multi-lane camera calibration profiles',
      'Summary analytics dashboard for traffic peak hours',
    ],
    image: '/assets/project-vehicle.png',
    assetFileName: 'project-vehicle.png',
    githubUrl: 'https://github.com/swathi1107',
    liveDemoUrl: '',
  },
  {
    id: 'mini-personal-assistant',
    index: '03',
    title: 'Mini Personal Assistant',
    status: 'Completed',
    technologies: ['Python', 'Tkinter', 'Speech Recognition', 'Text-to-Speech'],
    categories: ['Python'],
    shortDescription:
      'A desktop-based voice personal assistant developed in Python to perform daily tasks and queries using voice commands.',
    problemStatement:
      'Performing repetitive desktop lookups—such as checking the time, opening applications, or launching web searches—can be streamlined through an accessible voice interface.',
    objective:
      'To build an interactive desktop assistant in Python with a Tkinter GUI that captures spoken commands, executes system or web actions, and responds audibly via Text-to-Speech.',
    architectureWorkflow: [
      'Desktop GUI (Tkinter): Displays assistant status, microphone trigger controls, and recognized command text.',
      'Speech Recognition Layer: Captures microphone audio and transcribes speech into actionable text commands with offline fallback.',
      'Task Execution Router: Maps recognized commands to application launches, browser searches, or date/time utilities.',
      'Text-to-Speech Engine: Delivers spoken confirmation and conversational responses back to the user.',
    ],
    features: [
      'Voice command recognition and intent matching',
      'Spoken responses using Text-to-Speech (TTS)',
      'Launching common desktop applications by voice',
      'Automated web browsing and search queries',
      'Instant spoken date and time information',
      'Basic conversational responses',
      'Offline speech recognition fallback support',
    ],
    futureImprovements: [
      'Custom user-configurable voice command shortcuts',
      'Local reminder and to-do list persistence',
      'System status voice readouts (battery and network status)',
    ],
    image: '/assets/project-assistant.png',
    assetFileName: 'project-assistant.png',
    githubUrl: 'https://github.com/swathi1107',
    liveDemoUrl: '',
  },
  {
    id: 'ai-crop-disease-detection',
    index: '04',
    title: 'AI Crop Disease Detection',
    status: 'Completed',
    technologies: ['Python', 'HTML/CSS', 'JavaScript', 'AI/ML'],
    categories: ['Python', 'AI/RAG'],
    shortDescription:
      'An AI-based Crop Disease Detection application built using Python, HTML, CSS, and JavaScript to help identify plant leaf diseases from images.',
    problemStatement:
      'Early identification of crop and plant leaf diseases is critical for agriculture, yet manual visual inspection can be difficult without accessible diagnostic tools.',
    objective:
      'To create a web-accessible crop disease identification prototype combining a clean HTML/CSS/JavaScript frontend with a Python-based classification backend.',
    architectureWorkflow: [
      'Web Interface (HTML, CSS, JavaScript): Allows users to upload plant leaf images and view diagnostic results clearly.',
      'Image Pre-processing (Python): Resizes and normalizes uploaded leaf images for model inference.',
      'Disease Classification Pipeline: Evaluates leaf visual features to identify likely crop disease categories.',
      'Result Presentation: Displays the predicted condition alongside basic crop care information.',
    ],
    features: [
      'Clean web interface for uploading plant leaf images',
      'Python-based image pre-processing and classification workflow',
      'Identification of common crop leaf disease patterns',
      'Responsive HTML, CSS, and JavaScript frontend layout',
      'Clear display of predicted disease category and guidance',
    ],
    futureImprovements: [
      'Expanded dataset coverage for regional Karnataka crops',
      'Database logging to track historical crop health checks',
      'Multilingual support for local agricultural users',
    ],
    image: '/assets/project-rag.png',
    assetFileName: 'project-rag.png',
    githubUrl: 'https://github.com/swathi1107',
    liveDemoUrl: '',
  },
  {
    id: 'rag-waste-environmental-analysis',
    index: '05',
    title: 'RAG-Based Waste & Environmental Analysis System',
    status: 'Currently Developing',
    technologies: ['Python', 'RAG', 'AI', 'Database'],
    categories: ['Python', 'Database', 'AI/RAG'],
    shortDescription:
      'An AI-powered information system that uses historical and current environmental data to help analyze waste generation, waste types, disposal locations, pollution trends, and possible environmental solutions.',
    problemStatement:
      'Environmental and waste management data is often fragmented across documents and tables, making it challenging to connect historical waste trends with location-specific disposal and sustainability insights.',
    objective:
      'To iteratively design and develop a Retrieval-Augmented Generation (RAG) system backed by environmental datasets that provides source-grounded answers, trend analysis, and sustainability recommendations.',
    architectureWorkflow: [
      'Dataset Structuring (In Progress): Organizing historical and current waste data, disposal records, and pollution metrics.',
      'Retrieval Pipeline (Under Development): Indexing environmental documents and structured database records for context lookup.',
      'RAG Question Answering (Prototyping): Generating answers and recommendations strictly grounded in retrieved environmental sources.',
      'Visual Analysis Layer (Planned): Charting waste-type breakdowns, location analyses, and pollution trend lines.',
    ],
    features: [
      'Historical and current waste data organization (In Development)',
      'Waste-type classification and analysis',
      'Location-based disposal and environmental analysis',
      'Pollution trend analysis across periods',
      'Waste disposal method reference lookup',
      'Environmental impact information synthesis',
      'RAG-based question answering with source-backed responses',
      'Planned data visualization and actionable recommendations',
    ],
    futureImprovements: [
      'Full integration of regional municipal waste reports',
      'Interactive map visualization for disposal locations',
      'Source citation confidence indicators',
    ],
    image: '/assets/project-rag.png',
    assetFileName: 'project-rag.png',
    githubUrl: 'https://github.com/swathi1107',
    liveDemoUrl: '',
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: 'manipal-technologies-internship',
    type: 'Internship',
    organization: 'Manipal Technologies Limited',
    role: 'Intern',
    duration: 'Internship experience — details to be updated',
    location: 'Karnataka, India',
    summary: 'Internship experience — details to be updated.',
    details: [
      'Internship duration: To be updated in src/data/portfolioData.ts',
      'Work / project details: Specific responsibilities and project scope to be updated',
      'Technologies used: Tools and stack details to be updated',
    ],
    technologies: ['Details to be updated'],
    imagePath: '/assets/internship.jpg',
    isImageUploaded: false,
    isPlaceholderNote: true,
  },
  {
    id: 'smart-india-hackathon',
    type: 'Hackathon',
    organization: 'Smart India Hackathon',
    role: 'Student Participant · Project Development',
    duration: 'Academic Term Participation',
    location: "Alva's Institute of Engineering and Technology",
    summary:
      'Participated in collaborative problem analysis, system design, and prototype development as part of Smart India Hackathon team preparation.',
    details: [
      'Analyzed real-world problem statements and structured practical software solution workflows',
      'Collaborated on requirement breakdown, database schema planning, and technical presentation',
      'Applied classroom computer science concepts to practical team-based prototyping',
    ],
    technologies: ['Problem Solving', 'System Design', 'Team Collaboration', 'Prototyping'],
    imagePath: '/assets/hackathon.jpg',
    isImageUploaded: false,
    isPlaceholderNote: false,
  },
];

export const certificates: CertificateItem[] = [
  {
    id: 'cert-python',
    title: 'Python Programming',
    platform: 'Coursera',
    category: 'Programming',
    skillsCovered: ['Python Syntax', 'Data Structures', 'Control Flow', 'Functions & Modules'],
    imagePath: '/assets/certificate-python.jpg',
    isUploaded: false,
  },
  {
    id: 'cert-java',
    title: 'Java Programming',
    platform: 'Coursera',
    category: 'Programming',
    skillsCovered: ['Object-Oriented Programming', 'Classes & Interfaces', 'Exception Handling', 'Java Collections'],
    imagePath: '/assets/certificate-java.jpg',
    isUploaded: false,
  },
  {
    id: 'cert-dsa',
    title: 'Data Structures & Algorithms',
    platform: 'Coursera',
    category: 'Core CS',
    skillsCovered: ['Arrays & Linked Lists', 'Trees & Graphs', 'Sorting & Searching', 'Algorithmic Complexity'],
    imagePath: '/assets/certificate-dsa.jpg',
    isUploaded: false,
  },
  {
    id: 'cert-dbms',
    title: 'Database Management Systems',
    platform: 'Coursera',
    category: 'Database',
    skillsCovered: ['Relational Model', 'SQL Queries', 'Normalization', 'ER Diagrams'],
    imagePath: '/assets/certificate-dbms.jpg',
    isUploaded: false,
  },
  {
    id: 'cert-os',
    title: 'Operating Systems',
    platform: 'Coursera',
    category: 'Core CS',
    skillsCovered: ['Process Management', 'Memory Allocation', 'File Systems', 'Concurrency Concepts'],
    imagePath: '/assets/certificate-os.jpg',
    isUploaded: false,
  },
  {
    id: 'cert-ada',
    title: 'Analysis and Design of Algorithms',
    platform: 'Coursera',
    category: 'Core CS',
    skillsCovered: ['Divide & Conquer', 'Greedy Algorithms', 'Dynamic Programming', 'Complexity Analysis'],
    imagePath: '/assets/certificate-ada.jpg',
    isUploaded: false,
  },
  {
    id: 'cert-c-hackerrank',
    title: 'C Programming',
    platform: 'HackerRank',
    category: 'Programming',
    statusNote: 'Add certificate scan at /public/assets/certificate-c.jpg when available',
    skillsCovered: ['Pointers & Arrays', 'Control Structures', 'Functions', 'Standard I/O'],
    imagePath: '/assets/certificate-c.jpg',
    isUploaded: false,
  },
];

export const educationTimeline: EducationItem[] = [
  {
    id: 'edu-be-cse',
    degree: 'B.E. Computer Science Engineering',
    institution: "Alva's Institute of Engineering and Technology",
    location: 'Moodbidri, Karnataka',
    period: '2024 – 2028 · Currently in 5th Semester',
    metricLabel: 'CGPA',
    metricValue: '7.86',
    highlights: [
      'Currently pursuing Bachelor of Engineering in Computer Science with a strong focus on Software Development, Databases, AI/ML, and Web Development',
      'Coursework includes Data Structures & Algorithms, Database Management Systems, Operating Systems, Object-Oriented Programming, and Advanced Java (J2EE)',
    ],
  },
  {
    id: 'edu-puc',
    degree: 'Pre-University Course (PUC)',
    institution: 'Amrutha Bharathi, Hebri',
    location: 'Hebri, Karnataka',
    period: 'Completed',
    metricLabel: 'Score',
    metricValue: '90.5%',
    highlights: [
      'Strong foundation in mathematics, physics, chemistry, and analytical problem solving',
    ],
  },
  {
    id: 'edu-sslc',
    degree: 'SSLC (Secondary School Leaving Certificate)',
    institution: 'Church English Medium School, Ajekar',
    location: 'Ajekar, Karnataka',
    period: 'Completed',
    metricLabel: 'Score',
    metricValue: '92.8%',
    highlights: [
      'Completed secondary education with distinction',
    ],
  },
];

export const activities: ActivityItem[] = [
  {
    id: 'activity-conference',
    title: '3-Day Conference Participation',
    subtitle: 'Water Security · Sustainability · Disaster Risk Reduction',
    category: 'Conference & Sustainability',
    description:
      'Attended a 3-day interdisciplinary conference focused on water security, environmental sustainability, and disaster risk reduction—exploring how technology and data systems can support environmental resilience.',
    imagePath: '/assets/conference.jpg',
    isImageUploaded: false,
  },
  {
    id: 'activity-hackathon',
    title: 'Hackathon & Project Participation',
    subtitle: 'Smart India Hackathon & Collaborative Prototyping',
    category: 'Technical Participation',
    description:
      'Engaged in team-based hackathon ideation and project building, translating real-world problem statements into structured software workflows.',
    imagePath: '/assets/hackathon.jpg',
    isImageUploaded: false,
  },
  {
    id: 'activity-workshops',
    title: 'Technical Workshops & Lab Programs',
    subtitle: 'Java J2EE, Databases, Python & Web Development',
    category: 'Hands-on Learning',
    description:
      'Actively participate in college technical workshops, coding labs (including BCS405A Advanced Java with J2EE), and hands-on development sessions.',
  },
  {
    id: 'activity-sustainability',
    title: 'Sustainability & Environmental Computing',
    subtitle: 'Applying AI & Data to Environmental Challenges',
    category: 'Domain Exploration',
    description:
      'Exploring how software and AI can address agricultural and environmental challenges through projects like AI Crop Disease Detection and the ongoing RAG-Based Waste & Environmental Analysis System.',
  },
];

export const currentlyLearning: LearningItem[] = [
  {
    id: 'learn-adv-java',
    topic: 'Advanced Java',
    category: 'Enterprise Java (J2EE)',
    focusNote: 'Building JDBC, Servlets, JSP, and enterprise Java lab applications.',
  },
  {
    id: 'learn-spring-boot',
    topic: 'Spring Boot',
    category: 'Backend Framework',
    focusNote: 'Learning dependency injection, MVC architecture, and structured Java backend services.',
  },
  {
    id: 'learn-jpa',
    topic: 'JPA',
    category: 'Database Persistence',
    focusNote: 'Understanding object-relational mapping between Java classes and relational tables.',
  },
  {
    id: 'learn-rest-apis',
    topic: 'REST APIs',
    category: 'Web Services',
    focusNote: 'Studying HTTP endpoints, JSON data exchange, and frontend-to-backend integration.',
  },
  {
    id: 'learn-rag',
    topic: 'RAG / Retrieval-Augmented Generation',
    category: 'Applied AI',
    focusNote: 'Exploring document indexing and source-grounded retrieval for environmental data analysis.',
  },
  {
    id: 'learn-ai-dev',
    topic: 'AI-Assisted Application Development',
    category: 'Emerging Tech',
    focusNote: 'Learning how to combine AI models responsibly with structured software workflows.',
  },
  {
    id: 'learn-cybersecurity',
    topic: 'Cybersecurity Fundamentals',
    category: 'Security Basics',
    focusNote: 'Studying foundational application security, safe input validation, and core security concepts.',
  },
  {
    id: 'learn-git-github',
    topic: 'Git & GitHub',
    category: 'Version Control',
    focusNote: 'Practicing repository management, commit hygiene, and project deployment.',
  },
];
