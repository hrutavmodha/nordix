import createElement from './createElement'

export default function handleChildren(
    child: any
): any {
    if (child == null) {
        return document.createTextNode('')
    }
    if (
        typeof child === 'string' ||
        typeof child === 'number'
    ) {
        return document.createTextNode(String(child))
    }
    if (Array.isArray(child)) {
        const fragment = document.createDocumentFragment()
        child.forEach((subChild: any) => {
            const subSolve = handleChildren(subChild)
            fragment.appendChild(subSolve)
        })
    }
    if (child instanceof Node) {
        return child
    }
    if (
        typeof child.type === 'string' ||
        child.type === 'FRAGMENT'
    ) {
        return createElement(child.type, child.props)
    }
}