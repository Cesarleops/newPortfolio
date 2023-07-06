/* empty css                               */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.9092f334.mjs';
import 'html-escaper';
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

const $$Astro = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cesar Leyton" }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<main class="w-screen h-screen flex justify-center items-center gap-10 bg-red-700"> 
        <section class="w-[300px] h-[300px] bg-blue-500 flex justify-center items-center  ">
            <a href="/about">Find more about me!</a>
        </section>
        <section class="w-[300px] h-[300px] bg-blue-500 flex justify-center items-center ">
            <a href="/experience">Experience</a>
        </section>
        <section class="w-[300px] h-[300px] bg-blue-500 flex justify-center items-center ">
         <a href="/projects">My software projects</a>
        </section>
    </main>
` })}`;
}, "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/home.astro");

const $$file = "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/home.astro";
const $$url = "/home";

export { $$Home as default, $$file as file, $$url as url };
