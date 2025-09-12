import { describe, it, expect, vi, beforeEach } from 'vitest';
import Home from '../../example/Home';
import { navigate } from '../../router';
import { createState, updateState } from '../../state/state';
import createElement from '../../renderer/createElement'; // Assuming Home uses createElement internally

// Mock dependencies
vi.mock('../../router', () => ({
  navigate: vi.fn(),
}));

vi.mock('../../state/state', () => ({
  createState: vi.fn(),
  updateState: vi.fn(),
}));

vi.mock('../../renderer/createElement', () => ({
  default: vi.fn((type, props) => ({ type, props, children: props.children })),
}));

describe('Home', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call createState for name', () => {
    Home(); // Call Home to trigger createState
    expect(createState).toHaveBeenCalledWith('name', '');
  });

  it('should call navigate when "Go Home" button is clicked', () => {
    const homeComponent = Home();
    // Find the button and simulate click
    const goHomeButton = homeComponent.props.children.find(
      (child: any) => child && child.type === 'button' && child.props.onclick && child.children && child.children.includes('Go Home')
    );
    goHomeButton.props.onclick();
    expect(navigate).toHaveBeenCalledWith('/');
  });

  it('should call updateState when input value changes', () => {
    // Mock createState to return a specific value for name
    (createState as vi.Mock).mockImplementation((id, initialValue) => {
      if (id === 'name') return ''; // Initial name
      return initialValue;
    });

    const homeComponent = Home();
    const inputElement = homeComponent.props.children.find(
      (child: any) => child && child.type === 'input' && child.props.oninput
    );
    const mockEvent = { target: { value: 'New Name' } };
    inputElement.props.oninput(mockEvent);
    expect(updateState).toHaveBeenCalledWith('name', 'New Name');
  });
});