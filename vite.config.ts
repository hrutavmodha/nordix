import { defineConfig } from 'vite'
import {
    dirname,
    join,
    resolve
} from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
    root: '.',
    resolve: {
        alias: {
            'render': join(__dirname, 'src', 'renderer')
        }
    },
    esbuild: {
        jsx: 'automatic',
        jsxImportSource: 'render',
    },
    base: '/',
    build: {
        minify: false,
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, 'src', 'index.ts'),
            name: 'Nordix',
            formats: [
                'cjs',
                'es'
            ],
            fileName: (format: string) => {
                return `nordix-${format}.js`
            }
        }
    }
})