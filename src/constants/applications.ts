import photoSnake from "../assets/applications/snake.png";
import photoDevineNombre from "../assets/applications/devineNombre.png";
import photoSudokuGo from "../assets/applications/sudoku.png";
import photoModalDevineNombre from "../assets/applications/devineNombre_card.png";
import PSM from "../assets/pending_projet.png";

export interface Application {
  id: string;
  title: string;
  imageCard: string;
  imageModal: string;
  description: string;
  link: string;
}

export const APPLICATIONS: Application[] = [
  {
    id: "snake",
    title: "Snake",
    imageCard: photoSnake,
    imageModal: photoSnake,
    description: "Ce projet est snake réalisé dans le cadre de la Ressource de Programmation Multimédia de ma 3eme année de BUT Informatique. Le principal objectif de ce projet était de mettre en pratique les t echniques d'animations que nous avons appris en cours à l'aide de python. Cela m'a alors permis d'élargir mes connaissances à propos de Python et des différentes librairies que l'on peut utiliser.",
    link: "https://github.com/rayourama/Jeu-de-Snake",
  },
  {
    id: "devine-nombre",
    title: "Devine le nombre",
    imageCard: photoModalDevineNombre,
    imageModal: photoDevineNombre,
    description: "Ce projet est un projet personnel développé hors cadre universitaire. Il s'agit d'un jeu simple développé en HTML, CSS et JavaScript où l'ordinateur choisit un nombre aléatoire, et vous devez deviner le nombre mystère.",
    link: "https://github.com/rayourama/Devine-le-nombre",
  },
  {
    id: "sudoku-go",
    title: "Sudoku-Go",
    imageCard: photoSudokuGo,
    imageModal: photoSudokuGo,
    description: "Ce projet est un jeu de sudoku en Golang. L'ordinateur génère des grilles de Sudoku et permet à l'utilisateur de les résoudre à l'aide d'une interface graphique. Le Sudoku est un jeu où le but est de remplir un grille avec des chiffres allant de 1 à 9 en respectant certaines conditions.",
    link: "https://github.com/rayourama/Sudoku-GO",
  },
  {
    id: "psm",
    title: "Pro Soccer Manager",
    imageCard: PSM,
    imageModal: PSM,
    description: "Ce projet est en cours de développement.",
    link: "",
  },
];