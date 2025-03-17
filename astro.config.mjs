// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), svelte(), vue(), mdx()],

	vite: {
		plugins: [tailwindcss()],
	},

	adapter: vercel(),
});
