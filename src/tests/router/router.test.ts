import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { setRoutes, navigate, renderRoutes } from '../../router/router';

describe('router', () => {
  let rootElement: HTMLDivElement;

  beforeEach(() => {
    // Create a root element and append it to the document body
    rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);

    // Mock window.location and history
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/',
      },
      writable: true,
    });
    Object.defineProperty(window, 'history', {
      value: {
        pushState: vi.fn((state, title, url) => {
          window.location.pathname = url;
        }),
      },
      writable: true,
    });
    vi.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log
  });

  afterEach(() => {
    vi.restoreAllMocks();
    document.body.removeChild(rootElement);
  });

  it('setRoutes should correctly set the routes', () => {
    const testRoutes = {
      '/': () => document.createElement('div'),
      '/about': () => document.createElement('span'),
    };
    setRoutes(testRoutes);
    // Since 'routes' is not exported, we can't directly assert its value.
    // We'll rely on renderRoutes to implicitly test if routes are set correctly.
    window.location.pathname = '/about';
    renderRoutes();
    expect(rootElement.firstChild?.tagName).toBe('SPAN');
  });

  it('navigate should update the browser history and call renderRoutes', () => {
    const testRoutes = {
      '/': () => document.createElement('div'),
      '/contact': () => document.createElement('p'),
    };
    setRoutes(testRoutes);
    navigate('/contact');
    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '/contact');
    expect(window.location.pathname).toBe('/contact');
    expect(rootElement.firstChild?.tagName).toBe('P');
  });

  it('renderRoutes should render the correct component based on the path', () => {
    const homeComponent = document.createElement('h1');
    homeComponent.textContent = 'Home';
    const aboutComponent = document.createElement('h2');
    aboutComponent.textContent = 'About';

    setRoutes({
      '/': () => homeComponent,
      '/about': () => aboutComponent,
    });

    window.location.pathname = '/';
    renderRoutes();
    expect(rootElement.innerHTML).toContain('<h1>Home</h1>');

    window.location.pathname = '/about';
    renderRoutes();
    expect(rootElement.innerHTML).toContain('<h2>About</h2>');
  });

  it('renderRoutes should handle cases where no matching route is found', () => {
    setRoutes({
      '/': () => document.createElement('div'),
    });
    window.location.pathname = '/nonexistent';
    renderRoutes();
    expect(rootElement.innerHTML).toBe(''); // Should be empty if no route matches
    expect(console.log).toHaveBeenCalledWith('Matching route not found');
  });

  it('renderRoutes should clear the root element before appending the new content', () => {
    const initialContent = document.createElement('p');
    initialContent.textContent = 'Initial';
    rootElement.appendChild(initialContent);

    const newComponent = document.createElement('span');
    newComponent.textContent = 'New';

    setRoutes({
      '/': () => newComponent,
    });

    window.location.pathname = '/';
    renderRoutes();
    expect(rootElement.innerHTML).toBe('<span>New</span>');
  });

  it('popstate event listener should call renderRoutes', () => {
    const testRoutes = {
      '/': () => document.createElement('div'),
    };
    setRoutes(testRoutes);
    rootElement.innerHTML = ''; // Clear before event

    window.location.pathname = '/'; // Set a path that has a route
    window.dispatchEvent(new PopStateEvent('popstate'));

    expect(rootElement.innerHTML).toContain('<div></div>'); // Check if the route was rendered
  });
});