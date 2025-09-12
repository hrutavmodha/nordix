import { describe, it, expect, vi, beforeEach } from 'vitest';
import { jsxDEV, jsxs, Fragment } from '../../renderer/jsx-dev-runtime';
import { jsx } from '../../renderer/jsx-runtime';
import createElement from '../../renderer/createElement'; // Import for mocking

vi.mock('../../renderer/createElement', () => ({
  default: vi.fn((type, props) => {
    if (type === 'FRAGMENT') {
      const fragment = document.createDocumentFragment();
      if (props.children) {
        props.children.forEach((child: any) => {
          if (child instanceof Node) {
            fragment.appendChild(child);
          } else if (typeof child === 'string' || typeof child === 'number') {
            fragment.appendChild(document.createTextNode(String(child)));
          }
        });
      }
      return fragment;
    } else if (type === 'TEXT_NODE') {
      return document.createTextNode(props.nodeValue);
    } else if (typeof type === 'function') {
      const element = document.createElement('div'); // Functional components render to a div in this mock
      if (props.children) {
        props.children.forEach((child: any) => {
          if (child instanceof Node) {
            element.appendChild(child);
          } else if (typeof child === 'string' || typeof child === 'number') {
            element.appendChild(document.createTextNode(String(child)));
          }
        });
      }
      // Simulate the functional component rendering its content
      const functionalComponentResult = type(props);
      if (functionalComponentResult instanceof Node) {
        element.appendChild(functionalComponentResult);
      } else if (functionalComponentResult && functionalComponentResult.props && functionalComponentResult.props.children) {
        functionalComponentResult.props.children.forEach((child: any) => {
          if (child instanceof Node) {
            element.appendChild(child);
          } else if (typeof child === 'string' || typeof child === 'number') {
            element.appendChild(document.createTextNode(String(child)));
          }
        });
      }
      return element;
    } else {
      const element = document.createElement(type);
      for (const prop in props) {
        if (prop === 'children') {
          props.children.forEach((child: any) => {
            if (child instanceof Node) {
              element.appendChild(child);
            } else if (typeof child === 'string' || typeof child === 'number') {
              element.appendChild(document.createTextNode(String(child)));
            }
          });
        } else if (prop === 'className') {
          element.className = props[prop];
        } else if (prop === 'style') {
          // Simple style application for mock
          for (const styleProp in props[prop]) {
            (element.style as any)[styleProp] = props[prop][styleProp];
          }
        } else {
          element.setAttribute(prop, props[prop]);
        }
      }
      return element;
    }
  }),
}));

vi.mock('../../renderer/jsx-runtime', async (importOriginal) => {
  const actual = await importOriginal();
  const mockedJsx = vi.fn((type, props) => createElement(type, props));
  return {
    ...actual,
    jsx: mockedJsx,
    jsxs: vi.fn((type, props) => mockedJsx(type, props)), // jsxs calls the mocked jsx
  };
});

describe('jsx-dev-runtime', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('jsxDEV should call jsx with the correct arguments', () => {
    const type = 'div';
    const props = { id: 'test' };
    const result = jsxDEV(type, props);
    expect(jsx).toHaveBeenCalledWith(type, props);
    expect(result.tagName).toBe('DIV');
    expect(result.id).toBe('test');
  });

  it('jsxs should be re-exported correctly', () => {
    const type = 'span';
    const props = { className: 'test' };
    const result = jsxs(type, props);
    expect(jsx).toHaveBeenCalledWith(type, props);
    expect(result.tagName).toBe('SPAN');
    expect(result.className).toBe('test');
  });

  it('Fragment should be re-exported correctly', () => {
    expect(Fragment).toBe('FRAGMENT');
  });
});