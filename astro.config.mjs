// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless"; // ✅ Use Vercel adapter

// https://astro.build/config
export default defineConfig({
  site: "https://popoffapp.io", // update to your real domain
  integrations: [mdx(), sitemap()],
  output: "server", // ✅ required for serverless deployment
  adapter: vercel(),
});
