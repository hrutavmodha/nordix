import { type Primitive } from '../types/types'

export default function runEffect(
    callBack:  () => () => void,
    dependencyArray: Array<Primitive>
): void {
    let newDepdencyArray: Array<Primitive> = []
    newDepdencyArray = dependencyArray.map((dependency: Primitive) => {
        return dependency
    })
    const cleanUp = callBack()
    if (typeof cleanUp === 'function') {
        cleanUp()
    }
    dependencyArray.forEach((dependency: any, index: number) => {
        if (newDepdencyArray[index] !== dependency) {
            callBack()
        }
    })
}