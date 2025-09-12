import { describe, it, expect, vi, beforeEach } from 'vitest';
import { navigate, setRoutes } from '../../router/router';
import { createState, updateState } from '../../state/state';
import createElement from '../../renderer/createElement';

// Mock dependencies
vi.mock('../../router/router', () => ({
  navigate: vi.fn(),
  setRoutes: vi.fn(),
}));

vi.mock('../../state/state', () => ({
  createState: vi.fn(),
  updateState: vi.fn(),
}));

vi.mock('../../renderer/createElement', () => ({
  default: vi.fn((type, props) => ({ type, props, children: props.children })),
}));

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call setRoutes with the correct routes', async () => {
    // App is called when imported, so setRoutes should be called
    // We need to re-import App to ensure setRoutes is called after mocks are set up
    vi.resetModules();
    const { default: AppModule } = await import('../../example/App');
    expect(setRoutes).toHaveBeenCalledWith({
      '/': AppModule,
      '/home': expect.any(Function), // Home component
    });
  });

  it('should call createState for count and decrease', async () => {
    const { default: AppModule } = await import('../../example/App');
    AppModule(); // Call App to trigger createState
    expect(createState).toHaveBeenCalledWith('count', 0);
    expect(createState).toHaveBeenCalledWith('decrease', 100);
  });

  it('should call navigate when "Go to Home" button is clicked', async () => {
    const { default: AppModule } = await import('../../example/App');
    const appComponent = AppModule();
    // Find the button and simulate click
    const goToHomeButton = appComponent.props.children.find(
      (child: any) => child && child.type === 'button' && child.props.onclick && child.children && child.children.includes('Go to Home')
    );
    goToHomeButton.props.onclick();
    expect(navigate).toHaveBeenCalledWith('/home');
  });

  it('should call updateState with incremented count when "Increase Value" button is clicked', async () => {
    // Mock createState to return a specific value for count
    (createState as vi.Mock).mockImplementation((id, initialValue) => {
      if (id === 'count') return 0; // Initial count
      return initialValue;
    });

    const { default: AppModule } = await import('../../example/App');
    const appComponent = AppModule();
    const increaseButton = appComponent.props.children.find(
      (child: any) => child && child.type === 'button' && child.props.onclick && child.children && child.children.includes('Increase Value')
    );
    increaseButton.props.onclick();
    expect(updateState).toHaveBeenCalledWith('count', 1);
  });

  it('should call updateState with decremented decrease when "Decrease Value" button is clicked', async () => {
    // Mock createState to return a specific value for decrease
    (createState as vi.Mock).mockImplementation((id, initialValue) => {
      if (id === 'decrease') return 100; // Initial decrease
      return initialValue;
    });

    const { default: AppModule } = await import('../../example/App');
    const appComponent = AppModule();
    const decreaseButton = appComponent.props.children.find(
      (child: any) => child && child.type === 'button' && child.props.onclick && child.children && child.children.includes('Decrease Value')
    );
    decreaseButton.props.onclick();
    expect(updateState).toHaveBeenCalledWith('decrease', 99);
  });
});