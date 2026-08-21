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
