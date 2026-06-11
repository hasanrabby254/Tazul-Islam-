/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  highlights: string[];
}

export interface Education {
  id: string;
  degree: string;
  major: string;
  institution: string;
  duration: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  highlighted: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
