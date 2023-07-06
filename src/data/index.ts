
import ProjectCardProps from '../components/ProjectCard.astro'

export const myProjects: {
    AdvancedSignUp: ProjectCardProps;
    AllGames: ProjectCardProps;
    Hbuy: ProjectCardProps;
    Umoob: ProjectCardProps;
    Sendy: ProjectCardProps;
  } = {
    AdvancedSignUp: {
      id: "1",
      title: "Sign Up form",
      description:
        "A funny challenge from Front-End Mentor where you have to develop a responsive form for a games suscription with a stepper.",
      stack: ["Typescript", "React", "Scss"],
      image: "",
      gitHub: "https://github.com/Cesarleops/advancedSignUp",
      demo: "https://neon-mousse-70d49d.netlify.app",
    },
  
    AllGames: {
      id: "2",
      title: "AllGames",
      description:
        "A non-responsive library where you can find information about any video game such as description, release date, reviews and more. You can see the most popular games as well as use filters to simplify your search.",
      stack: ["Javascript", "React", "Redux", "CSS", "PostgreSql", "Express"],
      image: "[AllOne, AllTwo, AllThree, AllFourth ]",
      gitHub: "https://github.com/Cesarleops/PI-Videogames",
      demo: "https://pi-videogames-luh0u0eyu-cesarleops.vercel.app",
    },
    Hbuy: {
      id: "3",
      title: "H-BUY",
      description:
        "E-Commerce developed as a team, we used the MERN stack to develop an E-commerce that was functional for different industries, it has authorization, payment gateway, administrative profiles and other functionalities. ",
      stack: [
        "Javascript",
        "React",
        "Redux",
        "Bootstrap",
        "MongoDB",
        "MaterialUI",
        "Express",
      ],
      image: "",
      gitHub: "https://github.com/Felipesch96/PF-H-Buy",
      demo: "https://main.d2d0y3pf0pfssa.amplifyapp.com/",
    },
    Umoob: {
      id: "4",
      title: "Umoob",
      description:
        "Umoob is a business management app and a marketplace focused on the fitness industry. I've worked as a front-end developer in several development cycles ",
      stack: ["Typescript", "Python", "React", "Redux", "SASS", "Django"],
      image: "",
      demo: "https://www.umoob.com/",
    },
    Sendy: {
      id: "5",
      title: "Sendy",
      description:
        "Sendy is a messaging app when you can add friends and talk with them anytime",
      stack: [
        "Typescript",
        "Next JS",
        "Tailwind CSS",
        "Mongo DB",
        "Express",
        "Moongose",
      ],
      image: "",
      gitHub: "https://github.com/Cesarleops/superChat",
      demo: "https://www.umoob.com/",
    },
  };