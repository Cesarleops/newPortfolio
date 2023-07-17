import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), prefetch()],
  output: "server",
  adapter: netlify(),
  experimental:{
    assets:true
  }
});