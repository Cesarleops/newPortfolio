/* empty css                               */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.9092f334.mjs';
import 'html-escaper';
import { $ as $$Layout } from './_project_.astro.5d527605.mjs';
import { MdOutlineMailOutline } from 'react-icons/md/index.esm.js';
import { BsGithub, BsLinkedin } from 'react-icons/bs/index.esm.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'react-icons/ai/index.esm.js';
import 'react-icons/gr/index.esm.js';

const Header = () => {
  return /* @__PURE__ */ jsx("header", {
    className: "flex w-screen justify-between items-center h-10 p-4",
    children: /* @__PURE__ */ jsx("section", {
      children: /* @__PURE__ */ jsx("p", {
        className: "text-primary font-noirlight",
        children: "Do your own thing"
      })
    })
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
          }), /* @__PURE__ */ jsx("a", {
            href: "/home",
            children: "Know more about me!"
          })]
        })
      })]
    })]
  });
};
__astro_tag_component__(MyCard, "@astrojs/react");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cesar Leyton" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<main class="h-screen w-screen">
		<section>
			${renderComponent($$result2, "MyCard", MyCard, {})}
		</section>
		
</main>` })}`;
}, "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/index.astro");

const $$file = "/Users/cesarleyton/Desktop/myNewPortfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
