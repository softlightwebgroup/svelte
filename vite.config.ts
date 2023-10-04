import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import * as path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	build: {
		chunkSizeWarningLimit: 1600
	},
	server: {
		port: 8080,
		strictPort: false
	},
	resolve: {
		alias: {
			'softlightweb': path.resolve(process.cwd(), './src/lib/index.js')
		}
	}
});
