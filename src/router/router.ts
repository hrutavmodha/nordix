let routes: {
    [key: string]: () => HTMLElement
} = {}

export function renderRoutes() {
    const path = window.location.pathname
    if (routes[path]) {
        const html = routes[path]()
        const root = document.getElementById('root') as HTMLDivElement
        root.innerHTML = ''
        root.appendChild(html)
    }
    else {
        console.log('Matching route not found')
        console.log('Available routes:', routes)
    }
}

export function setRoutes(
    newRoutes: {
        [key: string]: any
    }
): void {
    routes = newRoutes
}

export function navigate(
    path: string
): void {
    history.pushState(null, '', path)
    renderRoutes()
}

window.addEventListener('popstate', () => {
    renderRoutes()
})