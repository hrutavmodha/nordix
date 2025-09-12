export default function render(
    element: HTMLElement,
    parent?: HTMLElement
) {
    const container = parent ? parent : document.body
    container.innerHTML = ''
    container.appendChild(element)
}