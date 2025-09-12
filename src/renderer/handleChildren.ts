import createElement from './createElement'
export default function handleChildren(child: any) {
    if (child == null) {
        return document.createTextNode('');
    }
    if (typeof child === 'string' || typeof child === 'number') {
        return document.createTextNode(String(child))
    }
    if (Array.isArray(child)) {
        const fragment = document.createDocumentFragment()
        child.forEach((subChild) => {
            const subSolve = handleChildren(subChild)
            fragment.appendChild(subSolve as Node)
        });
        return fragment; // Added this line
    }
    if (child instanceof Node) {
        return child;
    }
    if (
        typeof child.type === 'string' ||
        child.type === 'FRAGMENT'
    ) {
        return createElement(child.type, child.props);
    }
    return document.createTextNode('');
}