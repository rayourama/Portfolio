import sae1 from "../assets/projets/sae1.01.png"
import sae4Card from "../assets/projets/sae4.01_card.png"
import sae4Modal from "../assets/projets/sae4.01.png"
import sae5Card from "../assets/projets/sae5.01_card.png"
import sae5Modal from "../assets/projets/sae5.01.png"
import consulatCard from "../assets/projets/consulat_card.png"
import consulatModal from "../assets/projets/consulat.png"
import podcast from "../assets/projets/podcast.png"
import sae6 from "../assets/projets/sae6.01.jpg"


export interface Project {
  id: string;
  title: string;
  imageCard: string;
  imageModal: string;
  description: string;
  link: string;
}

export const PROJECTS: Project[] = [
  {
    id: "SAE1.01",
    title: "Implémentation d'un besoin client",
    imageCard: sae1,
    imageModal: sae1,
    description: "Ce projet est une SAE réalisée dans le cadre de ma première année de BUT Informatique. Ce dernier consiste en la simulation d'un réseau social. En binôme, et en utilisant Python et plus précisément Jupyter Notebook, il nous a été demandé d'implémenter plusieurs fonctions en fonction de la demande qui nous était demandé. Cette SAE m'a alors permis de travailler en equipe et de développer mes compétences en programmation en Python.",
    link: "https://github.com/rayourama/SAE-1.01-Implementation-d-un-besoin-client",
  },
  {
    id: "SAE4.01",
    title: "Développement d'une application complexe",
    imageCard: sae4Card,
    imageModal: sae4Modal,
    description: "Ce projet est une SAE de groupe de 5 étudiants réalisée dans le cadre de ma deuxième année de BUT Informatique. Cette SAE avait pour objectif de reprendre le projet d'une autre équipe, et de faire le nécessaire pour optimiser l'application Web produite. Entre la coordination de groupe, le travail d'équipe ainsi que la gestion de groupe, j'ai pu vivre une nouvelle expérience. En utilisant des outils tels que HTML, CSS, PHP ou encore PostgreSQL, nous avons mis l'accent sur l'accessibilité du site.",
    link: "https://github.com/rayourama/SAE-4.01-Developpement-d-une-application-complexe",
  },
  {
    id: "SAE5.01",
    title: "S5.01 - Développement avancé",
    imageCard: sae5Card,
    imageModal: sae5Modal,
    description: "Ce projet est une SAE de groupe de 5 étudiants realisee dans le cadre de ma troisième année de BUT Informatique. Cette SAE est une application web utilisant HTML, CSS, JavaScript, Python ainsi que MongoDB. Cette application a été développée et optimisée afin d'être la plus efficace possible.",
    link: "https://github.com/rayourama/SAE-5.01-Developpement-avance",
  },
  {
    id: "consulat",
    title: "Consulat de Guadeloupe",
    imageCard: consulatCard,
    imageModal: consulatModal,
    description: "Ce projet est un site Web développé dans le cadre de la Ressource de Qualité de Développement de ma 3eme année de BUT Informatique. Ce site, codé en HTML, CSS, JavaScript et PHP et suivant une architecture MVC, permet de simuler le consulat de la Guadeloupe, où il est possible d'effectuer une demande de visa, de découvrir la culture guadeloupéenne. Ce projet avait pour objectif de nous apprendre à étudier la demande d'un client, d'apprendre à mener un projet à bien pour qu'il soit qualitatif.",
    link: "https://github.com/rayourama/R508-Qualite-de-Developpement",
  },
  {
    id: "podcast",
    title: "Podcast : InfoCast",
    imageCard: podcast,
    imageModal: podcast,
    description: "Ce projet est un podcast enregistré en groupe de 5 personnes où nous débattons et parlons de l'impact dans le monde de l'éducation.",
    link: "https://www.youtube.com/watch?v=_J3-FVsI0dk",
  },
  {
    id: "SAE6.01",
    title: "S6.01 - Développement avancé",
    imageCard: sae6,
    imageModal: sae6,
    description: "Ce projet est une SAE où nous étions chargé de réaliser un audit critique de deux projets informatiques développé par d’autres élèves. L’objectif est d’évaluer la qualité du projet, d’identifier ses points forts et ses axes d’amélioration, et de proposer des recommandations concrètes.",
    link: "",
  },
];