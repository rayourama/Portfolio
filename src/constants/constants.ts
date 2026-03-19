import { Github, Linkedin, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  icon: LucideIcon;
  link: string;
}

export const PERSONAL_INFO = {
  fullName: "RAMASSAMY Ryan",
  title: "Développeur Logiciel",
  email: "ryan.ramassamy@orange.fr",
  phone: "06 76 68 29 00",
};

export const SOCIALS: Social[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/ryan-ramassamy/",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/rayourama",
  },
  {
    name: "Email",
    icon: Mail,
    link: "mailto:ryan.ramassamy@orange.fr",
  },
  {
    name: "Téléphone",
    icon: Phone,
    link: "tel:0676682900",
  },
];

export interface Card {
  title: string;
  link: string;
  description?: string;
  featured?: {
    label: string;
    projectId?: string;
  };
}

export const CARDS: Card[] = [
  { title: "Mon parcours", link: "/parcours",description: "Découvrez mon parcours académique et professionnel, mettant en lumière mes expériences, formations et compétences acquises au fil du temps." },
  { title: "Compétences", link: "/competences",description: "Découvrez mes diverses compétences qui font de moi un développeur polyvalent." },
  {
    title: "Mes projets",
    link: "/projets",
    description: "Découvrez mes divers projets personnels et académiques, mettant en lumière mes compétences et ma passion pour le développement logiciel.",
    featured: {
      label: "Mon dernier projet",
      projectId: "SAE6.01",
    },
  },
  {
    title: "Mes applications",
    link: "/applications",
    description: "Découvrez mes différentes applications, mêlant jeux et applications de bureau.",
    featured: {
      label: "Ma dernière application",
      projectId: "sudoku-go",
    },
  },
];