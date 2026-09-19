export interface EducationItem {
  id: string;
  duration: string;
  shortName: string;
  degree: string;
  college: string;
  location: string;
  scoreDisplay: string;
  isCurrent?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryFilter: 'Cybersecurity' | 'SOC / Blue Team' | 'Networking' | 'AI Security' | 'Full Stack';
  description: string;
  githubUrl: string;
  tags: string[];
  securityRelevance?: string;
  keyFeatures?: string[];
  liveUrl?: string;
  tagline?: string;
  fullDescription?: string;
  capabilities?: {
    fileSecurity?: string[];
    passwordSecurity?: string[];
    apiSecurityTesting?: string[];
    securityMonitoring?: string[];
    detectionAndRisk?: string[];
    securityOperations?: string[];
  };
  aiSecurityAnalyst?: {
    description: string;
    pipeline: string[];
    note: string;
  };
  architectureLayers?: {
    frontend?: string;
    backend?: string;
    testingAndAnalysis?: string[];
    engines?: string[];
    database?: string;
    supportingServices?: string[];
  };
  deploymentInfo?: {
    containerization?: string;
    services?: string[];
    ciCd?: string;
    note?: string;
  };
  securityBoundaries?: {
    authorizedUse: string;
    excludedActions: string[];
  };
  privacyArchitecture?: {
    passwordAnalysis?: string;
    fileEncryption?: string;
    plaintextStorage?: string;
    plaintextUpload?: string;
    breachLookup?: string;
  };
  attackResistance?: {
    title: string;
    models: string[];
    disclaimer: string;
  };
  securityEngineering?: string[];
  testMetrics?: string;
  documentationLinks?: { title: string; url: string }[];
  screenshots?: { label: string; placeholderText: string }[];
}

export interface SecurityPracticeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  toolsUsed: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  duration?: string;
  badge: 'INTERNSHIP' | 'SIMULATION';
  description: string[];
  areas?: string[];
}

export interface CredentialItem {
  id: string;
  organization: string;
  type: 'Verified Badge' | 'Verified Credential' | 'Badge / Achievement' | 'Learning Profile';
  category: 'CERTIFICATION' | 'BADGE';
  title: string;
  verificationUrl: string;
  buttonLabel: string;
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
}
