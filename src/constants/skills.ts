import nodeLogo from "../assets/node.png";
import javaLogo from "../assets/java.png";
import phpLogo from "../assets/php.png";
import pythonLogo from "../assets/python.jpg";
import goLogo from "../assets/go.png";
import reactLogo from "../assets/react.png";
import tsLogo from "../assets/typescript.png";
import tailwindLogo from "../assets/tailwind.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import mongoLogo from "../assets/mongo.png";
import redisLogo from "../assets/redis.png";
import sqlLogo from "../assets/sql.png";
import postgresLogo from "../assets/postgres.png";
import windowsLogo from "../assets/windows.jpg";
import linuxLogo from "../assets/linux.jpg";
import dockerLogo from "../assets/docker.png";
import kubernetesLogo from "../assets/kubernetes.png";
import rLogo from "../assets/r.jpg";
export interface Skill {
  name: string
  logo: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", logo: reactLogo },
      { name: "TypeScript", logo: tsLogo },
      { name: "Tailwind", logo: tailwindLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "PHP", logo: phpLogo },
      { name: "GoLang", logo: goLogo },
    ],
  },
  {
    title: "Base de données",
    skills: [
      { name: "SQL", logo: sqlLogo },
      { name: "PostgreSQL", logo: postgresLogo },
      { name: "MongoDB", logo: mongoLogo },
      { name: "Redis", logo: redisLogo },
    ],
  },
  {
    title: "Système d’exploitation",
    skills: [
      { name: "Windows", logo: windowsLogo },
      { name: "Linux", logo: linuxLogo },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: kubernetesLogo },
    ],
  },
  {
    title: "Analyse de données",
    skills: [
      { name: "R", logo: rLogo },
    ],
  },
]
