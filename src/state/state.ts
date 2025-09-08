import { reRender } from '../renderer/rerenderer'

type State = {
    identifier: string,
    value: any
}

let states: Array<State> = []

export function createState(
    identifier: string,
    value: any
): any {
    for (let state of states) {
        if (state.identifier === identifier) {
            return state.value
        }
    }
    states.push({
        identifier: identifier,
        value: value
    })
    return value
}

export function updateState(
    identifier: string,
    newValue: any
): void {
    const stateToUpdate = states.find((state: State) => state.identifier === identifier)
    if (stateToUpdate) {
        stateToUpdate.value = newValue
        reRender()
    }
}