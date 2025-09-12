import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createState, updateState } from '../../state/state';
import { reRender } from '../../renderer/rerenderer';

vi.mock('../../renderer/rerenderer', () => ({
  reRender: vi.fn(),
}));

describe('state', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("createState should initialize state if it doesn't exist", () => {
    const initialValue = 'initial';
    const state = createState('testKey1', initialValue); // Use unique key
    expect(state).toBe(initialValue);
    updateState('testKey1', 'newValue');
    expect(reRender).toHaveBeenCalled();
  });

  it('createState should return existing state if it already exists', () => {
    createState('testKey2', 'initial'); // Use unique key
    const state = createState('testKey2', 'newAttempt');
    expect(state).toBe('initial');
  });

  it('updateState should update the state with a new value', () => {
    createState('testKey3', 'oldValue'); // Use unique key
    updateState('testKey3', 'newValue');
    const state = createState('testKey3', 'shouldBeNewValue');
    expect(state).toBe('newValue');
  });

  it('updateState should call reRender when the state changes', () => {
    createState('testKey4', 'oldValue'); // Use unique key
    updateState('testKey4', 'newValue');
    expect(reRender).toHaveBeenCalledTimes(1);
  });

  it('updateState should not call reRender when the state does not change', () => {
    createState('testKey5', 'sameValue'); // Use unique key
    updateState('testKey5', 'sameValue');
    expect(reRender).not.toHaveBeenCalled();
  });
});