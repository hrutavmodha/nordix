import handleChildren from './handleChildren'
import handleStyles from './handleStyles'

export default function handleProps(
    element: any,
    props: any
): void {
    for (let attr in props) {
        if (
            attr.startsWith('on') &&
            typeof props[attr] === 'function'
        ) {
            element.addEventListener(attr.substring(2).toLowerCase(), props[attr]) // Added .toLowerCase()
        }
        else if (attr === 'children') {
            const childNode = handleChildren(props[attr])
            element.appendChild(childNode)
        }
        else if (attr === 'className') {
            element.className = props[attr]
        }
        else if (attr === 'style') {
            handleStyles(element, props[attr])
        }
        else if (element instanceof HTMLElement) {
            element.setAttribute(attr, props[attr]);
        }
    }
}