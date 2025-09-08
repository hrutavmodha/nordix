import { renderRoutes } from '../router/router'

let globalRender: () => void

export function setRender(render: () => void): void {
    globalRender = render
}

export function reRender(): void {
    if (globalRender) {
        globalRender()
        renderRoutes()
    }
}
