import handleProps from './handleProps'

export default function createElement(
    type: any,
    props: any
): HTMLElement | Text | DocumentFragment {
    let element
    if (type === 'FRAGMENT') {
        element = document.createDocumentFragment()
    }
    else if (type === 'TEXT_NODE') {
        element = document.createTextNode(props.nodeValue)
    }
    else if (typeof type === 'function') {
        element = type(props)
    }
    else {
        element = document.createElement(type) as HTMLElement
    }
    handleProps(element, props)
    return element
}