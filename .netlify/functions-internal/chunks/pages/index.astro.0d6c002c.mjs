/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, _ as __astro_tag_component__, f as renderComponent, m as maybeRenderHead } from '../astro.9092f334.mjs';
import 'html-escaper';
import { MdOutlineMailOutline } from 'react-icons/md/index.esm.js';
import { BsGithub, BsLinkedin, BsArrowBarDown } from 'react-icons/bs/index.esm.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { AiOutlinePlayCircle } from 'react-icons/ai/index.esm.js';
import { GrGallery } from 'react-icons/gr/index.esm.js';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html class="scroll-smooth" lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="Astro description">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/car.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/Users/cesarleyton/Desktop/myNewPortfolio/src/layouts/Layout.astro");

const Header = () => {
  return /* @__PURE__ */ jsxs("header", {
    className: "flex w-screen justify-between items-center h-10 p-4",
    children: [/* @__PURE__ */ jsx("nav", {
      children: /* @__PURE__ */ jsxs("ul", {
        className: "flex gap-5 [& > ul > li]: text-primary font-noirlight",
        children: [/* @__PURE__ */ jsx("li", {
          className: "hover:text-white duration-200 ",
          children: /* @__PURE__ */ jsx("a", {
            href: "#about",
            children: "About"
          })
        }), /* @__PURE__ */ jsx("li", {
          className: "hover:text-white duration-200",
          children: /* @__PURE__ */ jsx("a", {
            href: "#experience",
            children: "Experience"
          })
        }), /* @__PURE__ */ jsx("li", {
          className: "hover:text-white duration-200",
          children: /* @__PURE__ */ jsx("a", {
            href: "#projects",
            children: "Projects"
          })
        })]
      })
    }), /* @__PURE__ */ jsx("section", {
      children: /* @__PURE__ */ jsx("p", {
        className: "text-primary font-noirlight",
        children: "Do your own thing"
      })
    })]
  });
};
__astro_tag_component__(Header, "@astrojs/react");

const MyCard = () => {
  return /* @__PURE__ */ jsxs("main", {
    className: "flex flex-col justify-start items-center gap-5 h-screen w-screen bg-secondary",
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsxs("section", {
      className: "mt-40 space-y-10",
      children: [/* @__PURE__ */ jsxs("hgroup", {
        className: "space-y-4 text-center",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-8xl font-noirpro text-terciary brightness-105 drop-shadow-md ",
          children: "Cesar Leyton"
        }), /* @__PURE__ */ jsx("h3", {
          className: "text-3xl font-noirlight text-primary",
          children: "Fullstack Developer"
        })]
      }), /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsxs("nav", {
          className: "flex flex-col items-center justify-center gap-20",
          children: [/* @__PURE__ */ jsxs("ul", {
            className: "flex items-center justify-center gap-8 [&>ul>li]: text-terciary ",
            children: [/* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                href: "mailto:cesarleyton549@gmail.com",
                target: "_blank",
                children: /* @__PURE__ */ jsx(MdOutlineMailOutline, {
                  className: "text-5xl  hover:text-primary duration-200"
                })
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                href: "https://github.com/Cesarleops",
                target: "_blank",
                children: /* @__PURE__ */ jsx(BsGithub, {
                  className: "text-4xl  hover:text-primary duration-200"
                })
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                href: "https://www.linkedin.com/in/cesar-leyton-a5b879238/",
                target: "_blank",
                children: /* @__PURE__ */ jsx(BsLinkedin, {
                  className: "text-4xl  hover:text-primary transition-colors duration-200"
                })
              })
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "animate-bounce w-5 h-5 text-center text-primary text-4xl  ml-1",
            children: /* @__PURE__ */ jsx(BsArrowBarDown, {})
          })]
        })
      })]
    })]
  });
};
__astro_tag_component__(MyCard, "@astrojs/react");

const ExperienceCard = ({
  longevity,
  position,
  description,
  job,
  technologies
}) => {
  const paragraphs = description.split("/");
  return /* @__PURE__ */ jsxs("section", {
    className: " xl:flex flex-col items-center p-5 relative",
    children: [/* @__PURE__ */ jsxs("header", {
      className: "xl:flex gap-6 ",
      children: [/* @__PURE__ */ jsx("p", {
        className: "text-primary",
        children: longevity
      }), /* @__PURE__ */ jsx("h4", {
        className: "text-primary",
        children: job
      })]
    }), /* @__PURE__ */ jsxs("section", {
      className: "xl:flex flex-col items-center ",
      children: [/* @__PURE__ */ jsxs("article", {
        className: `${job === "Umoob" ? "xl:ml-[390px]" : "xl:ml-48"} max-w-[300px]`,
        children: [/* @__PURE__ */ jsx("h5", {
          className: "text-terciary",
          children: position
        }), paragraphs.map((paragraph) => /* @__PURE__ */ jsxs("p", {
          className: "text-terciary",
          children: [/* @__PURE__ */ jsx("small", {
            className: "text-primary xl:text-center text-xl",
            children: "-"
          }), " ", paragraph]
        }))]
      }), /* @__PURE__ */ jsx("article", {
        className: "xl:max-w-md",
        children: technologies?.map((tech, i) => /* @__PURE__ */ jsx("p", {
          className: "text-terciary",
          children: tech
        }, i))
      })]
    })]
  });
};
__astro_tag_component__(ExperienceCard, "@astrojs/react");

const myExperience = {
  Umoob: {
    longevity: "2022-PRESENT",
    job: "Umoob",
    position: "Fullstack Developer",
    technologies: ["Typescript", "React", "SASS", "Python", "Django", "Storybook"],
    description: "Developing responsive and reusable components with React+Typescript based on Figma designs / Maintenance and improvement of the code. / Contribute ideas that improve user experience, development and teamwork. / collaborate with senior engineers following a complete software development cycle including development paradigms,methodologies such as Atomic design and BEM, taking participation in code reviews"
  },
  Nacional: {
    longevity: "2021-PRESENT",
    job: "Universidad Nacional de Colombia",
    position: "Student",
    description: "Collaborated with other students in the research groups of computational science and data analysis that belong to the university, where I have been able to develop my problem solving and communication skills  "
  }
};
const Experience = () => {
  return /* @__PURE__ */ jsxs("main", {
    className: "h-screen flex flex-col items-center justify-center bg-secondary relative ",
    id: "experience",
    children: [/* @__PURE__ */ jsx("h4", {
      className: "text-3xl text-primary absolute top-10",
      children: "Experience"
    }), /* @__PURE__ */ jsx("section", {
      className: " sm:flex items-start gap-10 overflow-x-auto w-screen",
      children: Object.keys(myExperience).map((key, i) => /* @__PURE__ */ jsx(ExperienceCard, {
        longevity: myExperience[key]["longevity"],
        job: myExperience[key]["job"],
        description: myExperience[key]["description"],
        position: myExperience[key]["position"]
      }, i))
    })]
  });
};
__astro_tag_component__(Experience, "@astrojs/react");

const About = () => {
  return /* @__PURE__ */ jsxs("section", {
    className: "h-screen w-screen flex flex-col items-center justify-center mb-10 gap-4 bg-terciary",
    id: "about",
    children: [/* @__PURE__ */ jsx("h4", {
      className: "text-3xl text-primary font-noirpro",
      children: "About me"
    }), /* @__PURE__ */ jsxs("article", {
      className: "max-w-md flex flex-col items-center justify-center gap-16",
      children: [/* @__PURE__ */ jsx("p", {
        className: "text-secondary font-noirlight px-5",
        children: "Two years ago I was playing The witcher 3 and it came to my mind how you could create a world that allowed you to take so many different paths, so many ways to do things, that made me fell in love with the idea of being able to create something from a computer. Started studying software engineering and in a web development class something clicked, it was exciting to create solutions to problems and that those solutions were accessible to anyone. Today I'm building software in a fitness startup that seeks to boost the growth of gyms through digitalization. Outside of work and studies I enjoy working out, videogames and reading."
      }), /* @__PURE__ */ jsx(BsArrowBarDown, {
        className: "animate-bounce text-primary text-4xl"
      })]
    })]
  });
};
__astro_tag_component__(About, "@astrojs/react");

const ProjectCard = ({
  title,
  demo,
  description,
  image,
  gitHub,
  stack
}) => {
  return /* @__PURE__ */ jsxs("section", {
    className: "relative bg-secondary p-5 rounded-lg sm:w-[300px] xl:h-[350px]",
    children: [/* @__PURE__ */ jsx("h4", {
      className: "text-2xl text-primary",
      children: title
    }), /* @__PURE__ */ jsx("article", {
      className: "max-w-sm mb-2",
      children: /* @__PURE__ */ jsx("p", {
        className: "text-terciary",
        children: description
      })
    }), /* @__PURE__ */ jsx("article", {
      className: "flex max-w-[310px] flex-wrap gap-2 ",
      children: stack.map((tec) => /* @__PURE__ */ jsx("p", {
        className: "whitespace-normal p-1 rounded-lg bg-primary ",
        children: tec
      }))
    }), /* @__PURE__ */ jsxs("ul", {
      className: "absolute top-3 right-3 flex gap-3 text-xl ",
      children: [/* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx(AiOutlinePlayCircle, {
          className: "text-terciary"
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx(BsGithub, {
          className: "text-terciary"
        })
      }), /* @__PURE__ */ jsx("li", {
        children: /* @__PURE__ */ jsx(GrGallery, {
          className: "bg-terciary"
        })
      })]
    })]
  });
};
__astro_tag_component__(ProjectCard, "@astrojs/react");

const myProjects = {
  AdvancedSignUp: {
    title: "Sign Up form",
    description: "A funny challenge from Front-End Mentor where you have to develop a responsive form for a games suscription with a stepper.",
    stack: ["Typescript", "React", "Scss"],
    image: "",
    gitHub: "https://github.com/Cesarleops/advancedSignUp",
    demo: "https://neon-mousse-70d49d.netlify.app"
  },
  AllGames: {
    title: "AllGames",
    description: "A non-responsive library where you can find information about any video game such as description, release date, reviews and more. You can see the most popular games as well as use filters to simplify your search.",
    stack: ["Javascript", "React", "Redux", "CSS", "PostgreSql", "Express"],
    image: "[AllOne, AllTwo, AllThree, AllFourth ]",
    gitHub: "https://github.com/Cesarleops/PI-Videogames",
    demo: "https://pi-videogames-luh0u0eyu-cesarleops.vercel.app"
  },
  Hbuy: {
    title: "H-BUY",
    description: "E-Commerce developed as a team, we used the MERN stack to develop an E-commerce that was functional for different industries, it has authorization, payment gateway, administrative profiles and other functionalities. ",
    stack: ["Javascript", "React", "Redux", "Bootstrap", "MongoDB", "MaterialUI", "Express"],
    image: "",
    gitHub: "https://github.com/Felipesch96/PF-H-Buy",
    demo: "https://main.d2d0y3pf0pfssa.amplifyapp.com/"
  },
  Umoob: {
    title: "Umoob",
    description: "Umoob is a business management app and a marketplace focused on the fitness industry. I've worked as a front-end developer in several development cycles ",
    stack: ["Typescript", "Python", "React", "Redux", "SASS", "Django"],
    image: "",
    demo: "https://www.umoob.com/"
  },
  Sendy: {
    title: "Sendy",
    description: "Sendy is a messaging app when you can add friends and talk with them anytime",
    stack: ["Typescript", "Next JS", "Tailwind CSS", "Mongo DB", "Express", "Moongose"],
    image: "",
    gitHub: "https://github.com/Cesarleops/superChat",
    demo: "https://www.umoob.com/"
  }
};
const MyProjects = () => {
  return /* @__PURE__ */ jsxs("main", {
    className: " w-screen flex flex-col items-center justify-center bg-terciary ",
    id: "projects",
    children: [/* @__PURE__ */ jsx("h5", {
      className: "text-3xl text-primary  pt-5 xl:pt-10",
      children: "Personal Projects"
    }), /* @__PURE__ */ jsx("section", {
      className: "flex flex-col px-3 mt-5 mb-5 gap-3  md:flex-row max-w-screen flex-wrap pl-2",
      children: Object.keys(myProjects).map((key, i) => /* @__PURE__ */ jsx(ProjectCard, {
        title: myProjects[key]["title"],
        image: myProjects[key]["image"],
        description: myProjects[key]["description"],
        demo: myProjects[key]["demo"],
        stack: myProjects[key]["stack"]
      }, i))
    })]
  });
};
__astro_tag_component__(MyProjects, "@astrojs/react");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cesar Leyton" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="h-screen w-screen overflow-y-auto snap-y snap-mandatory ">
		<div class="snap-center">
			${renderComponent($$result2, "MyCard", MyCard, {})}
		</div>
		<div class="snap-center">
			${renderComponent($$result2, "About", About, {})}
		</div>
		<div class="snap-center">
			${renderComponent($$result2, "Experience", Experience, {})}
		</div>
		<div class="snap-start">
			${renderComponent($$result2, "MyProjects", MyProjects, {})}
		</div>
	</main>
` })}`;
}, "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/index.astro");

const $$file = "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
