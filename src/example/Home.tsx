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
            <input type="text" value={name} oninput={handleClick} />
            <button onclick={() => navigate('/')}>Go Home</button>

        </>
    )
}