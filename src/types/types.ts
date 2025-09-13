export type Props<T extends keyof HTMLElementTagNameMap> =
    Partial<HTMLElementTagNameMap[T]> &
    Partial<GlobalEventHandlers> & {
    className?: string,
    id?: string,
    style?: CSSProps,
    title?: string,
    lang?: string,
    hidden?: boolean,
    tabIndex?: number,
    draggable?: boolean,
    children?: any,
    [key: string]: any
}

export type State = {
    [identifier: string]: any
}

export type Primitive = string | number | boolean

type CSSProps = {
    [T in keyof CSSStyleDeclaration]: string | number
}

export type EventHandlers<T> = {
    [K in keyof GlobalEventHandlersEventMap]: (event: GlobalEventHandlersEventMap[K] & { currentTarget: T }) => void;
};

declare namespace Nordix {
    export function createState<T>(
        identifier: string,
        value: T
    ): T 
    export function updateState<T>(
        identifier: string,
        value: T
    ): void
}

export default Nordix