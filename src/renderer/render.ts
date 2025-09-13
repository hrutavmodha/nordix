import diff from './diff';

let rootElement: Node;
export default function render(
    newElement: HTMLElement,
    parent: HTMLElement
) {
    console.log('Root element is:\n', rootElement)
    if (rootElement === undefined) {
        rootElement = newElement;
        parent.appendChild(rootElement);
        console.log('Root element is:\n', rootElement)
    } else {
        rootElement = diff(rootElement, newElement, parent) as Node
        console.log('Root element is:\n', rootElement)
    }
    console.log('Root element is:\n', rootElement)
}