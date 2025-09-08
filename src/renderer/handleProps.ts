import handleChildren from './handleChildren'
import handleStyles from './handleStyles'

export default function handleProps(
    element: any,
    props: any
) {
    for (let attr in props) {
        if (
            attr.startsWith('on') &&
            typeof props[attr] === 'function'
        ) {
            element.addEventListener(attr.substring(2), props[attr])
        }
        else if (
            attr === 'children'
        ) {
            let children =
                Array.isArray(props[attr]) ?
                    props[attr] :
                    [props[attr]]
            children = children.flat(Infinity)
            children.forEach((child: any) => {
                element.appendChild(handleChildren(child))
            })
        }
        else if (attr === 'className') {
            element.className = props[attr]
        }
        else if (attr === 'style') {
            handleStyles(element, props[attr])
        }
        else if (element instanceof HTMLElement) {
            element.setAttribute(attr, props[attr])
        }
    }
}