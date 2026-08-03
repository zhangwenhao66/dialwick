// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { sitemapConfig } from './vendor/site-toolkit/packages/sitemap-config/src/index.ts';

// https://astro.build/config
export default defineConfig({
	site: 'https://dialwick.com',
	integrations: [sitemap(sitemapConfig())],
	build: {
		inlineStylesheets: 'always',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
