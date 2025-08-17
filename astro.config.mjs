import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless"; // 👈 Use Vercel adapter

export default defineConfig({
  site: "https://popoffapp.io", // update if needed
  integrations: [mdx(), sitemap()],
  adapter: vercel(),
});
