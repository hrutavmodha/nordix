import { defineConfig } from 'vite'
import {
    dirname,
    join
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
        format: 'esm'
    },
    base: '/',
    build: {
        minify: false,
        emptyOutDir: true
    }
})