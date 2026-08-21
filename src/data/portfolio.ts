import type {
  EducationItem,
  SkillCategory,
  ProjectItem,
  SecurityPracticeItem,
  ExperienceItem,
  CredentialItem,
  SocialLink
} from '../types';

export const PERSONAL_INFO = {
  fullName: 'Koppineedi Vamsi Lakshmi Satya Kumari',
  preferredName: 'Satya',
  location: 'Amalapuram, Andhra Pradesh, India',
  email: 'vamsilakshmisatyakoppineedi@gmail.com',
  phone: '9347596398',
  professionalTitle: 'Aspiring SOC Analyst',
  professionalIdentity: 'Aspiring SOC Analyst | Cybersecurity Enthusiast | Blue Team Learner',
  targetRoles: [
    'Cybersecurity Analyst',
    'SOC Analyst',
    'Network Security Engineer',
    'Entry-Level Security Roles'
  ],
  lookingFor: [
    'Cybersecurity Internships',
    'SOC Analyst Internships',
    'Entry-Level Security Opportunities'
  ],
  tagline: 'Detect Threats. Defend Systems. Secure the Future.',
  heroEyebrow: 'ASPIRING SOC ANALYST • BLUE TEAM LEARNER',
  heroHeading: "Hi, I'm Satya.",
  heroTitle: 'Cybersecurity Student · Aspiring SOC Analyst',
  heroDescriptions: [
    'Passionate and motivated Computer Science student with a growing interest in Cybersecurity, Security Operations, and Blue Team practices.',
    'Hands-on experience with network analysis, security tools, cybersecurity projects, simulations, and practical learning across threat detection, security monitoring, and network security.'
  ],
  availability: 'Open to Cybersecurity Internships & Entry-Level Security Opportunities',
  resumePath: '/resume.pdf'
};

export const PROFILE_SNAPSHOT = [
  { label: 'Education', value: 'B.Tech CSE – Cybersecurity', iconName: 'GraduationCap' },
  { label: 'CGPA', value: '8.96', iconName: 'Award' },
  { label: 'Focus', value: 'SOC / Blue Team', iconName: 'ShieldAlert' },
  { label: 'Location', value: 'Amalapuram, Andhra Pradesh', iconName: 'MapPin' },
  { label: 'Experience', value: 'Cybersecurity Internship', iconName: 'Briefcase' },
  { label: 'Open To', value: 'Internships & Entry-Level Roles', iconName: 'CheckCircle2' }
];

export const SECURITY_FOCUS_ITEMS = [
  { name: 'SOC Operations', iconName: 'ShieldAlert' },
  { name: 'Threat Detection', iconName: 'Activity' },
  { name: 'Network Security', iconName: 'Network' },
  { name: 'Incident Response', iconName: 'Zap' },
  { name: 'Blue Team', iconName: 'Lock' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/koppineeedi',
    iconName: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/satya-kumari-koppineedi/',
    iconName: 'Linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:vamsilakshmisatyakoppineedi@gmail.com',
    iconName: 'Mail'
  }
];

export const ABOUT_DATA = {
  sectionLabel: 'ABOUT ME',
  heading: 'Who I Am',
  paragraphs: [
    'I am a Cybersecurity student with hands-on training in network security, SOC operations, and threat analysis. I have experience working with security tools, network protocols, security simulations, and practical cybersecurity projects.',
    'I am particularly interested in defensive security, threat detection, security monitoring, incident response, and Blue Team operations.',
    'I am currently preparing for cybersecurity internships and entry-level security opportunities where I can strengthen my practical skills and contribute to secure digital environments.'
  ],
  cards: [
    {
      id: 'soc-analyst',
      title: 'SOC Analyst Aspirant',
      description: 'Focused on security monitoring, threat detection, log analysis, and incident response.',
      iconName: 'ShieldAlert'
    },
    {
      id: 'cyber-learner',
      title: 'Cybersecurity Learner',
      description: 'Interested in network security, vulnerability assessment, digital forensics, and defensive security.',
      iconName: 'Lock'
    },
    {
      id: 'problem-solver',
      title: 'Problem Solver',
      description: 'Applying analytical thinking to cybersecurity challenges, network analysis, and practical security projects.',
      iconName: 'Cpu'
    },
    {
      id: 'lifelong-learner',
      title: 'Lifelong Learner',
      description: 'Continuously developing skills across cybersecurity, networking, programming, cloud, and modern technologies.',
      iconName: 'BookOpen'
    }
  ]
};

export const PRACTICAL_CAPABILITIES = [
  {
    id: 'net-analysis',
    title: 'Network Analysis',
    description: 'Analyze network traffic and protocol behavior using Wireshark while applying TCP/IP and networking fundamentals.',
    tools: ['Wireshark', 'TCP/IP', 'Network Analysis'],
    iconName: 'Activity'
  },
  {
    id: 'sec-recon',
    title: 'Security Reconnaissance',
    description: 'Perform basic network reconnaissance and identify exposed services using tools such as Nmap.',
    tools: ['Nmap', 'Networking', 'Reconnaissance'],
    iconName: 'Search'
  },
  {
    id: 'sec-mon',
    title: 'Security Monitoring',
    description: 'Analyze security logs and identify suspicious activities and correlate security events as part of SOC-oriented learning.',
    tools: ['Logs', 'Security Monitoring', 'SOC'],
    iconName: 'FileText'
  },
  {
    id: 'web-sec',
    title: 'Web Security',
    description: 'Explore web security concepts and attack patterns using security testing tools such as Burp Suite.',
    tools: ['Burp Suite', 'Web Security', 'Security Testing'],
    iconName: 'Lock'
  },
  {
    id: 'inc-resp',
    title: 'Incident Response Fundamentals',
    description: 'Understand the fundamentals of identifying, analyzing, and responding to cybersecurity incidents.',
    tools: ['Incident Response', 'Threat Analysis', 'Security Operations'],
    iconName: 'ShieldCheck'
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'giet',
    duration: '2024 – 2027',
    shortName: 'GIET',
    degree: 'Bachelor of Technology – Computer Science (Cybersecurity)',
    college: 'Godavari Institute of Engineering and Technology',
    location: 'Andhra Pradesh, India',
    scoreDisplay: 'CGPA: 8.96',
    isCurrent: true
  },
  {
    id: 'bvcits',
    duration: '2021 – 2024',
    shortName: 'BVCITS',
    degree: 'Diploma – Computer Science and Engineering',
    college: 'B.V.C Institute of Technology & Science',
    location: 'Amalapuram, Andhra Pradesh',
    scoreDisplay: 'Score: 83.09%'
  },
  {
    id: 'ssc',
    duration: 'Completed 2021',
    shortName: 'SSC',
    degree: 'SSC (10th Grade)',
    college: 'Mahatma Gandhi Municipal High School',
    location: 'Amalapuram, Andhra Pradesh',
    scoreDisplay: 'GPA: 8.6'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'prog-lang',
    title: 'PROGRAMMING LANGUAGES',
    iconName: 'Code2',
    skills: ['Python', 'Java', 'C', 'C++', 'SQL']
  },
  {
    id: 'sec-tools',
    title: 'SECURITY TOOLS',
    iconName: 'Wrench',
    skills: ['Nmap', 'Wireshark', 'Burp Suite', 'Metasploit', 'Nessus', 'Kali Linux', 'Firewalls']
  },
  {
    id: 'networking',
    title: 'NETWORKING',
    iconName: 'Network',
    skills: ['TCP/IP', 'OSI Model', 'IP Addressing', 'Routing', 'Network Analysis', 'Network Monitoring']
  },
  {
    id: 'cybersecurity',
    title: 'CYBERSECURITY',
    iconName: 'ShieldCheck',
    skills: [
      'Threat Detection',
      'Threat Analysis',
      'Network Security',
      'Vulnerability Assessment',
      'Digital Forensics',
      'Security Monitoring',
      'Incident Response',
      'SOC Operations'
    ]
  },
  {
    id: 'web-backend',
    title: 'WEB & BACKEND',
    iconName: 'Layout',
    skills: ['HTML & CSS', 'JavaScript', 'Node.js', 'Angular', 'Spring Boot', 'React']
  },
  {
    id: 'technologies',
    title: 'TECHNOLOGIES',
    iconName: 'Server',
    skills: ['Linux', 'Git', 'GitHub', 'MySQL', 'AWS', 'Firebase', 'Postman']
  }
];

export const CURRENTLY_LEARNING_DATA = [
  'SIEM Fundamentals',
  'Log Analysis',
  'Threat Hunting',
  'Digital Forensics',
  'Incident Response',
  'Security Monitoring'
];

export interface UpgradedProjectItem extends ProjectItem {
  maturity: string;
  isFeatured?: boolean;
}

export const PROJECTS_DATA: UpgradedProjectItem[] = [
  {
    id: 'exploit2detect',
    title: 'Exploit2Detect',
    category: 'Cybersecurity / SOC',
    categoryFilter: 'Cybersecurity',
    maturity: 'Security Project',
    isFeatured: true,
    description: 'Cybersecurity platform for simulating web attacks, replaying attack scenarios, and validating SIEM detections.',
    githubUrl: 'https://github.com/koppineeedi/exploit2Detect',
    tags: ['Cybersecurity', 'Web Security', 'SIEM', 'Threat Detection'],
    securityRelevance: 'Attack simulation • SIEM detection validation • Threat analysis',
    keyFeatures: [
      'Simulates web attack vectors (SQLi, XSS, CSRF)',
      'Attack scenario replay mechanism',
      'SIEM detection validation rules'
    ]
  },
  {
    id: 'threatlens-ai',
    title: 'ThreatLens AI',
    category: 'AI + Cybersecurity',
    categoryFilter: 'AI Security',
    maturity: 'Cybersecurity / AI Project',
    isFeatured: true,
    description: 'AI-powered cybersecurity platform for vulnerability scanning, malware detection, and threat intelligence.',
    githubUrl: 'https://github.com/koppineeedi/Threatlens-AI',
    tags: ['AI', 'Cybersecurity', 'Vulnerability Scanning', 'Threat Intelligence'],
    securityRelevance: 'Vulnerability assessment • Malware detection • Threat intelligence',
    keyFeatures: [
      'Automated vulnerability assessment engine',
      'AI malware signature pattern matching',
      'Threat intelligence telemetry digest'
    ]
  },
  {
    id: 'crypta',
    title: 'Crypta',
    category: 'Cybersecurity / Cryptography',
    categoryFilter: 'Cybersecurity',
    maturity: 'Security Project',
    isFeatured: true,
    description: 'Secure browser-based file encryption tool using AES-GCM and PBKDF2.',
    githubUrl: 'https://github.com/koppineeedi/crypta',
    tags: ['AES-GCM', 'PBKDF2', 'Encryption', 'Web Security'],
    securityRelevance: 'File encryption • AES-GCM • PBKDF2',
    keyFeatures: [
      'Authenticated AES-256-GCM encryption mode',
      'PBKDF2 key derivation with 100k+ iterations',
      'Zero-server data exposure design'
    ]
  },
  {
    id: 'port-scanner-recon',
    title: 'Port Scanner & Recon Tool',
    category: 'Network Security',
    categoryFilter: 'Networking',
    maturity: 'Learning / Security Project',
    description: 'Python-based port scanner to identify open ports and active services on target machines.',
    githubUrl: 'https://github.com/koppineeedi',
    tags: ['Python', 'Networking', 'Port Scanning', 'Reconnaissance'],
    securityRelevance: 'Network reconnaissance • Port scanning • Service discovery',
    keyFeatures: [
      'Multi-threaded TCP connect scanning',
      'Service version & banner grabbing',
      'Formatted audit report generator'
    ]
  },
  {
    id: 'gridpulse',
    title: 'GridPulse',
    category: 'AI / Full Stack',
    categoryFilter: 'Full Stack',
    maturity: 'Academic / Software Project',
    description: 'AI-powered smart grid monitoring system for real-time telemetry and incident dispatch.',
    githubUrl: 'https://github.com/koppineeedi/gridpulse',
    tags: ['AI', 'Smart Grid', 'Telemetry', 'Full Stack'],
    keyFeatures: [
      'Real-time IoT telemetry dashboard',
      'Anomaly detection threshold alerts',
      'Automated incident dispatch workflow'
    ]
  },
  {
    id: 'projecthub',
    title: 'ProjectHub',
    category: 'Full Stack',
    categoryFilter: 'Full Stack',
    maturity: 'Full-Stack Project',
    description: 'Centralized project portfolio and collaboration platform inspired by Jira and ClickUp.',
    githubUrl: 'https://github.com/koppineeedi/projecthub',
    tags: ['Full Stack', 'React', 'Task Management', 'Collaboration'],
    keyFeatures: [
      'Kanban board and sprint planning',
      'Role-based access permission management',
      'Real-time task tracking & updates'
    ]
  },
  {
    id: 'repairhub',
    title: 'RepairHub',
    category: 'Full Stack / MERN',
    categoryFilter: 'Full Stack',
    maturity: 'Full-Stack Project',
    description: 'Production-ready MERN application connecting customers with verified appliance repair technicians.',
    githubUrl: 'https://github.com/koppineeedi/repairhub',
    tags: ['MERN', 'Full Stack', 'Service Marketplace', 'React'],
    keyFeatures: [
      'Verified technician verification portal',
      'Service scheduling & booking workflow',
      'RESTful API backend with Express & MongoDB'
    ]
  },
  {
    id: 'cybershield',
    title: 'CyberShield',
    category: 'Cybersecurity',
    categoryFilter: 'Cybersecurity',
    maturity: 'Cybersecurity Project',
    description: 'Cybersecurity-focused web application emphasizing monitoring, protection, and digital threat resilience.',
    githubUrl: 'https://github.com/koppineeedi/cybershield',
    tags: ['Cybersecurity', 'Threat Resilience', 'Monitoring', 'Web Security'],
    keyFeatures: [
      'Threat awareness dashboard',
      'System security compliance checklist',
      'Interactive risk exposure calculator'
    ]
  }
];

export const SECURITY_PRACTICE_DATA: SecurityPracticeItem[] = [
  {
    id: 'wireshark-analysis',
    title: 'Wireshark Packet Analysis',
    description: 'Saw and analyzed network packets to understand protocol behavior and data transmission.',
    iconName: 'Activity',
    toolsUsed: ['Wireshark', 'TCP/IP', 'DNS', 'HTTP/HTTPS']
  },
  {
    id: 'soc-log-analysis',
    title: 'SOC Log Analysis',
    description: 'Analyzed security logs to identify suspicious activities and correlate security events.',
    iconName: 'FileText',
    toolsUsed: ['Log Analysis', 'Event Logs', 'SIEM Rules', 'Threat Correlation']
  },
  {
    id: 'network-recon',
    title: 'Network Reconnaissance',
    description: 'Practiced basic network reconnaissance and analyzed open ports and services using security tools.',
    iconName: 'Search',
    toolsUsed: ['Nmap', 'Service Banner Grabbing', 'Port Analysis', 'Footprinting']
  },
  {
    id: 'security-labs',
    title: 'Security Labs',
    description: 'Practiced cybersecurity concepts through hands-on labs, security exercises, and self-directed learning.',
    iconName: 'Terminal',
    toolsUsed: ['Kali Linux', 'Burp Suite', 'Firewalls', 'Defensive Labs']
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'datavalley-internship',
    role: 'Cybersecurity Intern',
    organization: 'DataValley',
    duration: 'May 2026 – July 2026',
    badge: 'INTERNSHIP',
    description: [
      'Participated in a cybersecurity internship at DataValley, gaining practical experience in SOC operations and threat analysis.',
      'Completed advanced training in network security monitoring, incident response, and threat intelligence.'
    ]
  },
  {
    id: 'tata-simulation',
    role: 'Tata Cybersecurity Simulation',
    organization: 'Tata Cybersecurity Program',
    badge: 'SIMULATION',
    description: [
      'Completed a virtual cybersecurity simulation program focused on corporate security training.'
    ],
    areas: ['Risk Assessment', 'Network Protocols', 'Data Protection Policies', 'Threat Response']
  },
  {
    id: 'deloitte-simulation',
    role: 'Deloitte Cybersecurity Simulation',
    organization: 'Deloitte Cybersecurity Program',
    badge: 'SIMULATION',
    description: [
      'Completed Deloitte virtual cybersecurity simulation program focused on enterprise cybersecurity scenarios.'
    ],
    areas: ['Threat Analysis', 'Incident Response', 'Enterprise Security']
  }
];

export const CAREER_OBJECTIVE = {
  heading: 'Career Objective',
  text: 'To begin my career in cybersecurity as a SOC Analyst or Security Analyst, applying my knowledge of network security, threat detection, security monitoring, and incident response while continuously developing my Blue Team capabilities.'
};

export const CREDENTIALS_DATA: CredentialItem[] = [
  // Cisco Credential (Featured CERTIFICATION)
  {
    id: 'cisco-credential',
    organization: 'Cisco Networking Academy',
    type: 'Verified Credential',
    category: 'CERTIFICATION',
    title: 'Cisco Verified Credential',
    verificationUrl: 'https://www.netacad.com/certificates/?issuanceId=76d6762e-fbd9-4173-b1a8-a926b17fe8ee',
    buttonLabel: 'Verify Credential'
  },

  // Microsoft Learn Badge (Featured BADGE)
  {
    id: 'ms-learn-badge',
    organization: 'Microsoft Learn',
    type: 'Badge / Achievement',
    category: 'BADGE',
    title: 'Microsoft Learn Badge',
    verificationUrl: 'https://learn.microsoft.com/en-gb/users/koppineedivamsilakshmisatyakumari-6117/achievements/y',
    buttonLabel: 'View Badge'
  },

  // Infosys Springboard (Featured BADGE)
  {
    id: 'infosys-springboard',
    organization: 'Infosys Springboard',
    type: 'Learning Profile',
    category: 'BADGE',
    title: 'Infosys Springboard Learning Profile',
    verificationUrl: 'https://infyspringboard.onwingspan.com/web/en/app/profile/dashboard',
    buttonLabel: 'View Profile'
  },

  // 10 Credly Badges
  {
    id: 'credly-1',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/6971f44f-8149-44a6-9f9c-f118e58bebaf',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-2',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/38f2c821-faf0-476c-956e-474473b514bd',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-3',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/1a44bc79-5ed4-48e5-87c6-d38a7b9b1b6f',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-4',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/b3cb8753-384b-4d4d-9ba4-e76e2134403b',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-5',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/c1b76357-0539-4a86-ad11-4cf592e7c0e2',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-6',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/bba15247-2538-483d-87f2-4e6aab137c5d',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-7',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/7f4dbb2b-5c13-4747-9d19-232d99e699de',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-8',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/aaf60433-dd7b-4a34-84d8-2bdb6c7cb4cf',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-9',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/dcd71c92-1761-4ca8-80f0-3bb3c7486724',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-10',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/a6322b2f-1b3b-418c-beec-d8321b4b8b7f',
    buttonLabel: 'View Badge'
  }
];

export const RECRUITER_CTA_DATA = {
  heading: 'Looking for the next opportunity',
  text: "I'm currently seeking cybersecurity internships and entry-level security opportunities where I can strengthen my practical skills and contribute to defensive security.",
  focusTags: ['SOC', 'Security Operations', 'Blue Team', 'Network Security'],
  linkedinUrl: 'https://www.linkedin.com/in/satya-kumari-koppineedi/'
};
