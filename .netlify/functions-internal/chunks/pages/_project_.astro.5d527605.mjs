/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../astro.9092f334.mjs';
import 'html-escaper';
import { AiOutlinePlayCircle } from 'react-icons/ai/index.esm.js';
import { BsGithub } from 'react-icons/bs/index.esm.js';
import { GrGallery } from 'react-icons/gr/index.esm.js';

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
	  <meta name="view-transition" content="same-origin">
	  <title>${title}</title>
	${renderHead($$result)}</head>
	<body>
	  ${renderSlot($$result, $$slots["default"])}
	  
	  
	</body>
	 
	
  </html>`;
}, "/Users/cesarleyton/Desktop/myNewPortfolio/src/layouts/Layout.astro");

const myProjects = {
  AdvancedSignUp: {
    id: "1",
    title: "Sign Up form",
    description: "A funny challenge from Front-End Mentor where you have to develop a responsive form for a games suscription with a stepper.",
    stack: ["Typescript", "React", "Scss"],
    image: "",
    gitHub: "https://github.com/Cesarleops/advancedSignUp",
    demo: "https://neon-mousse-70d49d.netlify.app"
  },
  AllGames: {
    id: "2",
    title: "AllGames",
    description: "A non-responsive library where you can find information about any video game such as description, release date, reviews and more. You can see the most popular games as well as use filters to simplify your search.",
    stack: ["Javascript", "React", "Redux", "CSS", "PostgreSql", "Express"],
    image: "[AllOne, AllTwo, AllThree, AllFourth ]",
    gitHub: "https://github.com/Cesarleops/PI-Videogames",
    demo: "https://pi-videogames-luh0u0eyu-cesarleops.vercel.app"
  },
  Hbuy: {
    id: "3",
    title: "H-BUY",
    description: "E-Commerce developed as a team, we used the MERN stack to develop an E-commerce that was functional for different industries, it has authorization, payment gateway, administrative profiles and other functionalities. ",
    stack: [
      "Javascript",
      "React",
      "Redux",
      "Bootstrap",
      "MongoDB",
      "MaterialUI",
      "Express"
    ],
    image: "",
    gitHub: "https://github.com/Felipesch96/PF-H-Buy",
    demo: "https://main.d2d0y3pf0pfssa.amplifyapp.com/"
  },
  Umoob: {
    id: "4",
    title: "Umoob",
    description: "Umoob is a business management app and a marketplace focused on the fitness industry. I've worked as a front-end developer in several development cycles ",
    stack: ["Typescript", "Python", "React", "Redux", "SASS", "Django"],
    image: "",
    demo: "https://www.umoob.com/"
  },
  Sendy: {
    id: "5",
    title: "Sendy",
    description: "Sendy is a messaging app when you can add friends and talk with them anytime",
    stack: [
      "Typescript",
      "Next JS",
      "Tailwind CSS",
      "Mongo DB",
      "Express",
      "Moongose"
    ],
    image: "",
    gitHub: "https://github.com/Cesarleops/superChat",
    demo: "https://www.umoob.com/"
  }
};

const $$Astro = createAstro();
const $$project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$project;
  const { project } = Astro2.params;
  const actualProject = Object.values(myProjects).find((p) => p.id === project);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cesar Leyton" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<main class="h-screen w-screen flex justify-center items-center">
        <section class="relative bg-secondary p-5 rounded-lg sm:w-[300px] xl:h-[700px] xl:w-[700px]"${addAttribute(`view-transition-name:project-${actualProject?.id}`, "style")}>
            <h4 class="text-2xl text-primary">${actualProject?.title}</h4>
            <article class="max-w-sm mb-2">
              <p class="text-terciary">${actualProject?.description}</p>
            </article>
            <article class="flex max-w-[310px] flex-wrap gap-2 ">
              ${actualProject?.stack?.map((tec) => renderTemplate`<p class="whitespace-normal p-1 rounded-lg bg-primary ">${tec}</p>`)}
            </article>
            <ul class="absolute top-3 right-3 flex gap-3 text-xl ">
              <li>
                ${renderComponent($$result2, "AiOutlinePlayCircle", AiOutlinePlayCircle, { "className": "text-terciary" })}
              </li>
              <li>
                ${renderComponent($$result2, "BsGithub", BsGithub, { "className": "text-terciary" })}
              </li>
              <li>
                ${renderComponent($$result2, "GrGallery", GrGallery, { "className": "bg-terciary" })}
              </li>
            </ul>
          </section>
    </main>
 
` })}`;
}, "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/[project].astro");

const $$file = "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/[project].astro";
const $$url = "/[project]";

const _project_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$project,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _project_ as _, myProjects as m };
