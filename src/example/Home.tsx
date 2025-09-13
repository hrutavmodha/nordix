import { navigate } from '../router'
import {
    createState,
    updateState
} from '../state/state'
export default function Home() {
    const name = createState('name', '')
    const handleClick = (e: any) => {
        updateState('name', e.target.value)
    }
    return (
        <>
            <h1>Hello Home</h1>
            <input value={name} type="text" oninput={handleClick} />
            <p>You entered: {name}</p>
            <button onclick={() => {navigate('/')}}>Go Back</button>
        </>
    )
}