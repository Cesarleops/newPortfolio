
interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  gitHub?: string;
  demo: string;
}

export  const myProjects: {
    AdvancedSignUp: ProjectCardProps;
    Umoob: ProjectCardProps;
    Sendy: ProjectCardProps;
  } = {
    AdvancedSignUp: {
      id: "1",
      title: "Sign Up form",
      description:
        "A funny challenge from Front-End Mentor where you have to develop a responsive form for a games suscription with a stepper.",
      stack: ["Typescript", "React", "Sass"],
      image: "/improvedForm.png",
      gitHub: "https://github.com/Cesarleops/advancedSignUp",
      demo: "https://neon-mousse-70d49d.netlify.app",
    },
    Umoob: {
      id: "4",
      title: "Umoob",
      description:
        "Umoob is a business management app and a marketplace focused on the fitness industry. I've worked as a front-end developer in several development cycles ",
      stack: ["Typescript", "Python", "React", "Redux", "Sass", "Django"],
      image: '/umoobOne.png',
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
      image: '/chat.png',
      gitHub: "https://github.com/Cesarleops/superChat",
      demo: "https://super-chat-six.vercel.app",
    },
  };