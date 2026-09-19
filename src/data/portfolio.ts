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
  tagline: 'From learning cybersecurity to building for defense — focused on SOC operations, threat detection, and Blue Team security.',
  heroEyebrow: 'ASPIRING SOC ANALYST • BLUE TEAM LEARNER',
  heroHeading: "Hi, I'm Satya.",
  heroTitle: 'Cybersecurity Student · Aspiring SOC Analyst',
  heroDescriptions: [
    'From learning cybersecurity to building for defense — focused on SOC operations, threat detection, and Blue Team security.',
    'A serious cybersecurity candidate with a polished technical identity — combining hands-on experience in network packet analysis, security tools, SIEM detections, and defensive security projects.'
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
    'From learning cybersecurity to building for defense — focused on SOC operations, threat detection, and Blue Team security.',
    'A serious cybersecurity candidate with a polished technical identity — possessing hands-on experience with security tools, network protocols, security simulations, and practical cybersecurity projects.',
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
    id: 'netwatch',
    title: 'NetWatch',
    category: 'Enterprise SIEM & SOAR',
    categoryFilter: 'Cybersecurity',
    maturity: 'Enterprise SIEM / SOAR Platform',
    isFeatured: true,
    description: 'Defensive SIEM, UEBA, Sigma Detection Engine, and SOAR Analyst Platform built with FastAPI (Python), SQLAlchemy, React (TypeScript), Vite, and Tailwind CSS.',
    githubUrl: 'https://github.com/koppineeedi/NetWatch-Network-Security-Monitoring-Suspicious-Activity-Detection-Platform',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'SIEM', 'UEBA', 'Sigma Engine', 'SOAR', 'MITRE ATT&CK'],
    securityRelevance: 'Passive socket telemetry • Syslog receiver (UDP 514) • Threat intelligence (AbuseIPDB/OTX/MISP) • Sigma engine & sandbox • SOAR playbooks',
    keyFeatures: [
      'Passive system socket connection telemetry & structured log ingestion engine',
      'Explainable Z-score anomaly detection & MITRE ATT&CK tactic/technique mapping',
      'Sigma rule parser, validator, field mapper & sandbox execution environment',
      'Automated SOAR playbook engine with OS host isolation and firewall drivers'
    ]
  },
  {
    id: 'api-sentinel',
    title: 'API Sentinel — API Security Testing & Monitoring Platform',
    category: 'API Security Testing & Monitoring',
    categoryFilter: 'Cybersecurity',
    maturity: 'Production-Oriented Security Platform',
    isFeatured: true,
    tagline: 'Discover. Detect. Defend. — Intelligent API Security.',
    description: 'API security testing and monitoring platform with vulnerability detection, traffic analytics, anomaly detection, risk scoring, findings management, security reports, audit logging, and AI-assisted analysis.',
    fullDescription: 'API Sentinel is a production-oriented API Security Testing & Monitoring Platform designed to discover, assess, and monitor API security risks. It combines OpenAPI discovery, authentication and authorization testing, JWT analysis, BOLA/IDOR detection, security-header and input-validation checks, traffic monitoring, anomaly detection, explainable risk scoring, findings management, security reports, audit logging, and AI-assisted security analysis in a SOC-style dashboard.',
    githubUrl: 'https://github.com/koppineeedi/api-sentinel',
    tags: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'GitHub Actions'],
    securityRelevance: 'OpenAPI spec auto-discovery • Auth & JWT vulnerability scanner • BOLA / IDOR detection • Traffic monitoring & anomaly detection • Explainable risk scoring engine • AI-assisted SOC remediation guidance',
    keyFeatures: [
      'OpenAPI / Swagger spec auto-discovery, parsing & endpoint cataloging',
      'Vulnerability scanning engine for Auth bypass, weak JWTs, BOLA/IDOR, and Injection (SQLi/XSS/SSRF)',
      'Security header enforcement verification (CORS, CSP, HSTS, X-Content-Type)',
      'Real-time API traffic capture, request/response payload inspection & baseline anomaly detection',
      'Explainable weighted risk calculation algorithm (0-100 score) mapped to OWASP API Security Top 10',
      'AI Security Analyst overlay for context-aware vulnerability explanation & actionable SOC fixes',
      'HTML/JSON security report generator, full operational audit logging, and Role-Based Access Control (RBAC)'
    ],
    capabilities: {
      apiSecurityTesting: [
        'OpenAPI / Swagger spec auto-discovery & parsing',
        'Authentication bypass & weak token validation',
        'JWT security analysis (weak algorithms, missing signatures, claim tampering)',
        'Broken Object Level Authorization (BOLA / IDOR) detection',
        'Input validation & injection vulnerability checks (SQLi, XSS, SSRF)',
        'Rate limit testing & anti-automation verification',
        'Security header compliance checking (CORS, CSP, HSTS, X-Content-Type)'
      ],
      securityMonitoring: [
        'Real-time API traffic capture & request/response inspection',
        'Endpoint inventory & API endpoint parameter profiling',
        'High-volume anomaly & suspicious payload detection'
      ],
      detectionAndRisk: [
        'Weighted risk scoring engine (0-100 score per endpoint)',
        'Deterministic vulnerability classification (OWASP API Security Top 10)',
        'Consolidated findings management & remediation tracking'
      ],
      securityOperations: [
        'HTML & JSON security report generation',
        'Comprehensive audit logging for all security operations',
        'Role-Based Access Control (RBAC: Admin, Analyst, Auditor)'
      ]
    },
    aiSecurityAnalyst: {
      description: 'AI-assisted security analysis engine that interprets observed vulnerability evidence, correlates traffic anomalies, and generates actionable SOC remediation guidance.',
      pipeline: [
        'Observed Security Evidence (HTTP logs, header gaps, failed auth)',
        'Deterministic Vulnerability & Anomaly Detection Result',
        'AI Analysis & Risk Interpretation (Contextual threat evaluation)',
        'Actionable SOC Remediation Guidance & Fix Recommendations'
      ],
      note: 'AI acts as an analytical overlay to simplify investigation workflows; zero automated exploitation or payload execution occurs without deterministic verification.'
    },
    architectureLayers: {
      frontend: 'React + TypeScript + Vite + Tailwind CSS (SOC-Style Operations Dashboard)',
      backend: 'FastAPI (Python) + Pydantic',
      engines: [
        'OpenAPI Spec Parser & Discovery Engine',
        'Vulnerability Scanner Engine (Auth, JWT, BOLA, Injection, Headers)',
        'Traffic Analytics & Anomaly Detection Engine',
        'Explainable Risk Scoring Engine'
      ],
      database: 'PostgreSQL + SQLAlchemy ORM',
      supportingServices: [
        'AI Security Analyst Integration (LLM-assisted threat insights)',
        'Audit Logging Engine',
        'Report Generator (HTML/JSON export)'
      ]
    },
    deploymentInfo: {
      containerization: 'Docker & Docker Compose (Multi-container orchestration for Web, API, Database)',
      services: ['FastAPI Backend Service', 'React Frontend Service', 'PostgreSQL Database Service'],
      ciCd: 'GitHub Actions CI/CD Pipeline (Automated testing & linting)',
      note: '35/35 automated backend unit & integration tests passing in CI pipeline.'
    },
    securityBoundaries: {
      authorizedUse: 'Authorized API security testing, internal environment monitoring, and defensive vulnerability management.',
      excludedActions: [
        'No unauthorized scanning or brute-forcing of third-party APIs',
        'No credential stuffing or password spraying',
        'No Denial of Service (DoS/DDoS) attack testing',
        'No payload execution against production systems without explicit authorization'
      ]
    },
    securityEngineering: [
      'FastAPI & Pydantic for high-performance async API security scanning',
      'SQLAlchemy ORM + PostgreSQL for relational findings & audit persistence',
      'JWT decoding & cryptographic signature inspection without secret leakage',
      'OpenAPI 3.0 specification parser & parameter schema validator',
      'Explainable weighted risk calculation algorithm based on OWASP API Top 10 impact',
      'Dockerized multi-container setup with isolated network bridges',
      'CI/CD workflow enforcing 35/35 unit and integration test pass requirements'
    ],
    testMetrics: '35/35 tests passing',
    documentationLinks: [
      { title: 'README.md', url: 'https://github.com/koppineeedi/api-sentinel#readme' },
      { title: 'SECURITY.md', url: 'https://github.com/koppineeedi/api-sentinel/blob/main/SECURITY.md' },
      { title: 'ARCHITECTURE.md', url: 'https://github.com/koppineeedi/api-sentinel/blob/main/ARCHITECTURE.md' }
    ],
    screenshots: [
      { label: 'API Sentinel Dashboard', placeholderText: 'Overview dashboard with risk scores & endpoint status' },
      { label: 'API Inventory & Discovery', placeholderText: 'OpenAPI parser & discovered endpoint catalog' },
      { label: 'Vulnerability Scanner', placeholderText: 'JWT, BOLA & Injection security test execution' },
      { label: 'Traffic & Anomaly Monitor', placeholderText: 'Real-time API traffic capture & baseline anomaly alerts' },
      { label: 'AI Security Analyst', placeholderText: 'AI-assisted vulnerability interpretation & remediation guidance' },
      { label: 'Findings & Audit Logs', placeholderText: 'OWASP findings list, audit trail & HTML report export' }
    ]
  },
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
    title: 'Crypta — Client-Side Encryption & Password Security Toolkit',
    category: 'Cybersecurity / Cryptography',
    categoryFilter: 'Cybersecurity',
    maturity: 'Client-Side Cryptography & Password Security',
    isFeatured: true,
    tagline: 'Protect your files. Strengthen your passwords. Keep your secrets private.',
    description: 'Privacy-first browser security toolkit combining AES-256-GCM file encryption with advanced password analysis, breach exposure detection, reuse detection, attack-resistance estimation, and secure password generation.',
    fullDescription: 'Crypta is a privacy-first cybersecurity toolkit that provides browser-based AES-256-GCM file encryption and advanced password security analysis, including password strength and pattern detection, guessability estimation, attack-resistance modeling, breach exposure checking, password reuse detection, and cryptographically secure password generation.',
    githubUrl: 'https://github.com/koppineeedi/crypta',
    tags: ['JavaScript', 'Web Crypto API', 'AES-256-GCM', 'PBKDF2', 'SHA-256'],
    securityRelevance: 'AES-256-GCM browser encryption • PBKDF2 key derivation • Privacy-preserving k-anonymity breach checking • Password attack-resistance modeling',
    keyFeatures: [
      'Client-side AES-256-GCM file encryption with random salt, random IV & PBKDF2 key derivation',
      'Advanced password analyzer with pattern detection (dictionary, keyboard, sequential, date/year)',
      'Privacy-preserving breach exposure checking using k-anonymity (plaintext password never sent)',
      'Password attack-resistance modeling (online throttled, offline fast-hash & slow-KDF estimates)',
      'Local/session-based password reuse detection across accounts without server storage',
      'Cryptographically secure password & Diceware passphrase generator via crypto.getRandomValues()'
    ],
    capabilities: {
      fileSecurity: [
        'AES-256-GCM file encryption',
        'Secure password-based key derivation (PBKDF2)',
        'Random salt generation',
        'Random IV generation',
        'Browser-side encryption/decryption',
        'No plaintext file uploads'
      ],
      passwordSecurity: [
        'Advanced password analysis & pattern detection',
        'Guessability estimation & attack-resistance modeling',
        'Breach exposure detection via k-anonymity',
        'Password reuse detection (session-based)',
        'Secure password generation (crypto.getRandomValues())',
        'Passphrase generation (Diceware-based)'
      ]
    },
    privacyArchitecture: {
      passwordAnalysis: 'Client-side local processing',
      fileEncryption: 'Client-side local processing in browser',
      plaintextStorage: 'None (zero server-side storage)',
      plaintextUpload: 'None (no plaintext file uploads)',
      breachLookup: 'Privacy-preserving (k-anonymity hash prefix only)'
    },
    attackResistance: {
      title: 'Model-Based Attack Resistance Estimates',
      models: [
        'Online throttled attack model (e.g., 10 guesses/min rate-limited login endpoints)',
        'Offline fast-hash attack model (e.g., MD5/SHA-1 GPU hash cracking arrays)',
        'Offline slow password-KDF attack model (e.g., PBKDF2 / Argon2 / bcrypt slow key derivation)'
      ],
      disclaimer: 'Results are model-based resistance estimates depending on assumptions about attacker hardware, hashing algorithms, dictionaries, leaked credentials, rate limits, and attack strategies.'
    },
    securityEngineering: [
      'Web Crypto API for native browser cryptographic primitives',
      'AES-256-GCM authenticated symmetric encryption mode',
      'PBKDF2 key derivation with random salt for password-to-key transformation',
      'SHA-256 hashing for k-anonymity prefix-based breach checking',
      'crypto.getRandomValues() for cryptographically secure pseudo-random number generation',
      'Zero-knowledge client-side secret handling'
    ],
    testMetrics: '14 automated tests passing',
    documentationLinks: [
      { title: 'README.md', url: 'https://github.com/koppineeedi/crypta#readme' },
      { title: 'SECURITY.md', url: 'https://github.com/koppineeedi/crypta/blob/main/SECURITY.md' },
      { title: 'THREAT_MODEL.md', url: 'https://github.com/koppineeedi/crypta/blob/main/THREAT_MODEL.md' }
    ],
    screenshots: [
      { label: 'Crypta Dashboard', placeholderText: 'Main security dashboard & navigation' },
      { label: 'File Encryption', placeholderText: 'AES-256-GCM file encryption & decryption interface' },
      { label: 'Password Security Analyzer', placeholderText: 'Pattern detection & strength analysis' },
      { label: 'Password Generator', placeholderText: 'Cryptographic password & Diceware passphrase generator' },
      { label: 'Password Reuse Detection', placeholderText: 'Session-based account password reuse checker' },
      { label: 'Privacy & Security Center', placeholderText: 'Client-side security architecture & limitations disclosure' }
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
  text: 'From learning cybersecurity to building for defense — focused on SOC operations, threat detection, and Blue Team security. Aiming to begin my career as a SOC Analyst or Security Analyst, applying my knowledge of network security, security monitoring, and incident response.'
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

  // Newly Added Cybersecurity Credentials
  {
    id: 'udemy-bug-bounty',
    organization: 'Udemy',
    type: 'Verified Credential',
    category: 'CERTIFICATION',
    title: 'Masterclass for Bug Bounty',
    verificationUrl: 'https://www.udemy.com/certificate/UC-98501d75-dbf9-46c1-8360-eeed579f2028/',
    buttonLabel: 'View Certificate'
  },
  {
    id: 'udemy-zero-trust-linux',
    organization: 'Udemy',
    type: 'Verified Credential',
    category: 'CERTIFICATION',
    title: 'Zero-Trust Linux Administration: Complete Root Sudo Security',
    verificationUrl: 'https://www.udemy.com/certificate/UC-1aca5ba9-97fe-46be-b7e6-8a4107729cdf',
    buttonLabel: 'View Certificate'
  },
  {
    id: 'udemy-network-fundamentals',
    organization: 'Udemy',
    type: 'Verified Credential',
    category: 'CERTIFICATION',
    title: 'Network Fundamentals',
    verificationUrl: 'https://www.udemy.com/certificate/UC-68c78814-f91b-4058-a970-e6b2a111aa25',
    buttonLabel: 'View Certificate'
  },
  {
    id: 'deloitte-cyber-simulation',
    organization: 'Deloitte (Forage)',
    type: 'Verified Credential',
    category: 'CERTIFICATION',
    title: 'Deloitte Australia - Cyber Job Simulation',
    verificationUrl: 'https://www.theforage.com/certificates/TuEkdQM2m5X9XyXxA',
    buttonLabel: 'Verify Certificate'
  },
  {
    id: 'tata-cyber-simulation',
    organization: 'Tata (Forage)',
    type: 'Verified Credential',
    category: 'CERTIFICATION',
    title: 'Tata - Cybersecurity Analyst Job Simulation',
    verificationUrl: 'https://www.theforage.com/certificates/ahqADnNBEJwWXdGRY',
    buttonLabel: 'Verify Certificate'
  },

  // Credly Badges with exact user-provided titles
  {
    id: 'credly-1',
    organization: 'Cisco / Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Junior Cybersecurity Analyst Career Path',
    verificationUrl: 'https://www.credly.com/badges/6971f44f-8149-44a6-9f9c-f118e58bebaf',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-2',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Python Essentials 2',
    verificationUrl: 'https://www.credly.com/badges/38f2c821-faf0-476c-956e-474473b514bd',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-3',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Apply AI: Analyze Customer Reviews',
    verificationUrl: 'https://www.credly.com/badges/1a44bc79-5ed4-48e5-87c6-d38a7b9b1b6f',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-4',
    organization: 'Cisco / Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'CCNA: Introduction to Networks',
    verificationUrl: 'https://www.credly.com/badges/b3cb8753-384b-4d4d-9ba4-e76e2134403b',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-5',
    organization: 'Cisco / Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'CCNA: Enterprise Networking, Security, and Automation',
    verificationUrl: 'https://www.credly.com/badges/c1b76357-0539-4a86-ad11-4cf592e7c0e2',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-6',
    organization: 'Cisco / Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Introduction to Cybersecurity',
    verificationUrl: 'https://www.credly.com/badges/dcd71c92-1761-4ca8-80f0-3bb3c7486724',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-7',
    organization: 'Cisco / Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Networking Basics',
    verificationUrl: 'https://www.credly.com/badges/aaf60433-dd7b-4a34-84d8-2bdb6c7cb4cf',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-8',
    organization: 'Cisco / Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Introduction to IoT',
    verificationUrl: 'https://www.credly.com/badges/bba15247-2538-483d-87f2-4e6aab137c5d',
    buttonLabel: 'View Badge'
  },
  {
    id: 'credly-9',
    organization: 'Credly',
    type: 'Verified Badge',
    category: 'BADGE',
    title: 'Credly Verified Badge',
    verificationUrl: 'https://www.credly.com/badges/7f4dbb2b-5c13-4747-9d19-232d99e699de',
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
  heading: 'A serious cybersecurity candidate with a polished technical identity.',
  text: "From learning cybersecurity to building for defense — focused on SOC operations, threat detection, and Blue Team security. Currently seeking cybersecurity internships and entry-level security opportunities.",
  focusTags: ['SOC Operations', 'Threat Detection', 'Blue Team', 'Network Security'],
  linkedinUrl: 'https://www.linkedin.com/in/satya-kumari-koppineedi/'
};
