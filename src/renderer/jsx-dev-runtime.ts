import { jsx } from './jsx-runtime'

export function jsxDEV(
    type: any,
    props: any,
) {
    return jsx(type, props)
}

export {
    jsxs,
    Fragment
} from './jsx-runtime'