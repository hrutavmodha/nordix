import { reRender } from '../renderer/rerenderer'

type State = {
    [identifier: string]: any
}

let states: State = {}

export function createState(
    identifier: string,
    value: any
): any {
    if (states[identifier] === undefined) {
        states[identifier] = value
    }
    return states[identifier]
}

export function updateState(
    identifier: string,
    newValue: any
): void {
    if (states[identifier] !== newValue) {
        states[identifier] = newValue
        reRender()
    }
}