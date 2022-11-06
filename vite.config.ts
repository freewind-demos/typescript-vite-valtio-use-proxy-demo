import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import macro from 'valtio/macro/vite'

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    plugins: [
        react(),
        macro
    ],
});
