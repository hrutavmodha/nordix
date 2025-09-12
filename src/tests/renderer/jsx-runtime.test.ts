import { describe, it, expect, vi } from 'vitest';
import { jsx, jsxs, Fragment } from '../../renderer/jsx-runtime';
import createElement from '../../renderer/createElement';

vi.mock('../../renderer/createElement', () => ({
  default: vi.fn((type, props) => ({ type, props })),
}));

describe('jsx-runtime', () => {
  it('jsx should call createElement with the correct arguments', () => {
    const type = 'div';
    const props = { id: 'test' };
    const result = jsx(type, props);
    expect(createElement).toHaveBeenCalledWith(type, props);
    expect(result).toEqual({ type, props });
  });

  it('jsxs should call jsx with the correct arguments', () => {
    const type = 'span';
    const props = { className: 'test' };
    const result = jsxs(type, props);
    expect(createElement).toHaveBeenCalledWith(type, props); // jsx calls createElement
    expect(result).toEqual({ type, props });
  });

  it('Fragment should be the string "FRAGMENT"', () => {
    expect(Fragment).toBe('FRAGMENT');
  });
});