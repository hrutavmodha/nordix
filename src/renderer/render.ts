export default function render(
    element: any,
    parent?: HTMLElement
): void {
    let container: HTMLElement
    if (!parent) {
        container = document.body
    }
    else {
        container = parent
    }
    container.innerHTML = ''
    container.appendChild(element)
}