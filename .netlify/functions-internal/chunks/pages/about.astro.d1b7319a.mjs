/* empty css                               */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent } from '../astro.9092f334.mjs';
import 'html-escaper';
import { BsArrowBarDown } from 'react-icons/bs/index.esm.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { $ as $$Layout } from './_project_.astro.5d527605.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'react-icons/ai/index.esm.js';
import 'react-icons/gr/index.esm.js';

const AboutMe = () => {
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
__astro_tag_component__(AboutMe, "@astrojs/react");

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cesar Leyton" }, { "default": ($$result2) => renderTemplate`
    ${renderComponent($$result2, "AboutMe", AboutMe, {})}
` })}`;
}, "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/about.astro");

const $$file = "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
