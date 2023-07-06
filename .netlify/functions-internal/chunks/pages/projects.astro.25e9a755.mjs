/* empty css                               */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro.9092f334.mjs';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { m as myProjects, $ as $$Layout } from './_project_.astro.5d527605.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'react-icons/ai/index.esm.js';
import 'react-icons/bs/index.esm.js';
import 'react-icons/gr/index.esm.js';

const ProjectCard = ({
  title,
  id
}) => {
  return /* @__PURE__ */ jsxs("section", {
    className: "relative bg-secondary p-5 rounded-lg sm:w-[300px] xl:h-[350px]",
    style: {
      viewTransitionName: `project-${id}`
    },
    children: [/* @__PURE__ */ jsx("a", {
      href: `${id}`,
      children: "GO"
    }), /* @__PURE__ */ jsx("h4", {
      className: "text-2xl text-primary",
      children: title
    })]
  });
};
__astro_tag_component__(ProjectCard, "@astrojs/react");

const MyProjects = () => {
  return /* @__PURE__ */ jsxs("main", {
    className: " w-screen flex flex-col items-center justify-center bg-terciary ",
    id: "projects",
    children: [/* @__PURE__ */ jsx("h5", {
      className: "text-3xl text-primary  pt-5 xl:pt-10",
      children: "Personal Projects"
    }), /* @__PURE__ */ jsx("section", {
      className: "grid grid-cols-3 grid-rows-2 gap-4",
      children: Object.keys(myProjects).map((key, i) => /* @__PURE__ */ jsx(ProjectCard, {
        title: myProjects[key]["title"],
        id: myProjects[key]["id"]
      }))
    })]
  });
};
__astro_tag_component__(MyProjects, "@astrojs/react");

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cesar Leyton" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "MyProjects", MyProjects, {})}
` })}`;
}, "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/projects.astro");

const $$file = "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
