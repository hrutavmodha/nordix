import {
    createState,
    updateState
} from '../state/state'
export default function Home() {
    const count2 = createState('count2', 0)
    let arr: Array<number> = []
    for (let i = 1; i < 100; i++) {
        arr.push(i)
    }
    return (
        <>
            <h1>Hello Home</h1>
            <button onclick={() => updateState('count2', count2 + 1)}>Clear String</button>
            {arr.map((_: number) => {
                return (
                    <p>{count2}</p>
                )
            })}
        </>
    )
}