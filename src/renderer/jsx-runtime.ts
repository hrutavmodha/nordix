import createElement from './createElement'

export function jsx(
    type: any,
    props: any
): HTMLElement | Text | DocumentFragment {
    return createElement(type, props)
}

export function jsxs(
    type: any,
    props: any
) {
    return jsx(type, props)
}

export const Fragment: string = 'FRAGMENT'