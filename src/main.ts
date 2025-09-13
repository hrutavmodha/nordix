import App from './example/App';
import render from './renderer/render';
import { setRender } from './renderer/rerenderer';

const root = document.getElementById('root') as HTMLDivElement
render(App(), root)
setRender(() => {
    render(App(), root)
})
