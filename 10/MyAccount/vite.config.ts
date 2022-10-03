import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@pages": path.resolve(__dirname, './src/pages'),
			"@styles": path.resolve(__dirname, './src/styles'),
			"@components": path.resolve(__dirname, './src/components'),
			"@services": path.resolve(__dirname, './src/services'),
			"@contexts": path.resolve(__dirname, './src/contexts'),
			"@interfaces": path.resolve(__dirname, './src/interfaces')
		}
	}
})
