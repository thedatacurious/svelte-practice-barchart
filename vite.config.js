import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	optimizeDeps: {
		esbuild: {
			target: 'es2021'
		}
	},

	build: {
		outDir: 'build'
	},
	plugins: [svelte()]
});
