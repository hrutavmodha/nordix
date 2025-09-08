# Nordix

<!-- ![NPM Version](https://img.shields.io/npm/v/nordix)
![License](https://img.shields.io/npm/l/nordix) -->

A modern, lightweight frontend framework for building web applications.

## Installation

```bash
npm install nordix
```

## Usage

Here's a simple example of a Nordix application:

```tsx
import { createState, updateState } from 'nordix/state';
import { setRoutes, navigate } from 'nordix/router';

function App() {
    const count = createState('count', 0);

    return (
        <div>
            <h1>Hello, Nordix!</h1>
            <p>Count: {count}</p>
            <button onclick={() => updateState('count', count + 1)}>
                Increment
            </button>
            <button onclick={() => navigate('/home')}>
                Go to Home
            </button>
        </div>
    );
}

function Home() {
    return <h1>Welcome Home!</h1>;
}

setRoutes({
    '/': App,
    '/home': Home,
});
```

## API Reference

### State Management

- `createState(key, initialValue)`: Creates a new state variable.
- `updateState(key, newValue)`: Updates the value of a state variable.

### Routing

- `setRoutes(routes)`: Defines the application's routes.
- `navigate(path)`: Navigates to a different route.

## License

This project is licensed under the MIT License.