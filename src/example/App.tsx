import {
    navigate,
    setRoutes
} from '../router/router'
import {
    createState,
    updateState
} from '../state/state'
import Home from './Home'

export default function App() {
    const count = createState('count', 0)
    const decrease = createState('decrease', 100)
    return (
        <div className="main">
            <h1>Hello World</h1>
            <button onclick={() => navigate('/home')}>Go to Home</button>
            <p>{count}</p>
            <button onclick={() => {
                updateState('count', count + 1)
            }}>
                Increase Value
            </button>
            <p>{decrease}</p>
            <button onclick={() => {
                updateState('decrease', decrease - 1)
            }}>Decrease Value</button>
        </div>
    )
}

setRoutes({
    '/': App,
    '/home': Home
})
