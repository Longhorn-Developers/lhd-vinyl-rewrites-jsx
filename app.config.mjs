import { defineConfig } from '@tanstack/react-start/config';

export default defineConfig({
    vite: {
        resolve: {
            extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
        },
    },
});
