import {defineConfig} from 'vite';
import UnoCSS from 'unocss/vite';
export default defineConfig({base:'/das-mobile/',plugins:[UnoCSS()],esbuild:{jsx:'automatic'},build:{chunkSizeWarningLimit:1500},server:{host:'0.0.0.0'}});
