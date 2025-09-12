import { describe, it, expect, vi } from 'vitest';
import { setRender, reRender } from '../../renderer/rerenderer';
import { renderRoutes } from '../../router/router';

vi.mock('../../router/router', () => ({
  renderRoutes: vi.fn(),
}));

describe('rerenderer', () => {
  it('should set the global render function', () => {
    const renderFn = vi.fn();
    setRender(renderFn);
    reRender();
    expect(renderFn).toHaveBeenCalled();
    expect(renderRoutes).toHaveBeenCalled();
  });

  it('should not throw an error if the global render function is not set', () => {
    // Reset the global render function
    setRender(() => {});
    // Set it to undefined
    setRender(undefined as any);
    expect(() => reRender()).not.toThrow();
  });
});