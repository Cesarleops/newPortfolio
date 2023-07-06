/* empty css                               */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro.9092f334.mjs';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { $ as $$Layout } from './_project_.astro.5d527605.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'react-icons/ai/index.esm.js';
import 'react-icons/bs/index.esm.js';
import 'react-icons/gr/index.esm.js';

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
const MyExperience = () => {
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
__astro_tag_component__(MyExperience, "@astrojs/react");

const $$Astro = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cesar Leyton" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "MyExperience", MyExperience, {})}
` })}`;
}, "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/experience.astro");

const $$file = "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/experience.astro";
const $$url = "/experience";

export { $$Experience as default, $$file as file, $$url as url };
