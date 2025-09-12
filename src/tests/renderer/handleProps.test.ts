import { describe, it, expect, vi } from 'vitest';
import handleProps from '../../renderer/handleProps';
import createElement from '../../renderer/createElement'; // Import for mocking
import handleChildren from '../../renderer/handleChildren'; // Import for mocking

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

vi.mock('../../renderer/handleChildren', () => ({
  default: vi.fn((child) => {
    if (child == null) {
      return document.createTextNode('');
    }
    if (typeof child === 'string' || typeof child === 'number') {
      return document.createTextNode(String(child));
    }
    if (Array.isArray(child)) {
      const fragment = document.createDocumentFragment();
      child.forEach((subChild) => {
        // For simplicity, just append text nodes for array children in this mock
        fragment.appendChild(document.createTextNode(String(subChild)));
      });
      return fragment;
    }
    if (child instanceof Node) {
      return child;
    }
    // If it's a VDOM element, return a simple div
    return document.createElement('div');
  }),
}));

describe('handleProps', () => {
  it('should handle event listeners', () => {
    const element = document.createElement('div');
    const onClick = vi.fn();
    const eventListeners: { [key: string]: Function } = {};
    element.addEventListener = vi.fn((event, handler) => {
      eventListeners[event] = handler as Function;
    });
    handleProps(element, { onClick });
    expect(element.addEventListener).toHaveBeenCalledWith('click', onClick);
    eventListeners['click'](); // Manually trigger the event
    expect(onClick).toHaveBeenCalled();
  });

  it('should handle the children prop', () => {
    const element = document.createElement('div');
    handleProps(element, { children: ['Hello'] });
    expect(element.textContent).toBe('Hello');
  });

  it('should handle the className prop', () => {
    const element = document.createElement('div');
    handleProps(element, { className: 'test-class' });
    expect(element.className).toBe('test-class');
  });

  it('should handle the style prop', () => {
    const element = document.createElement('div');
    handleProps(element, { style: { color: 'red' } });
    expect(element.style.color).toBe('red');
  });

  it('should handle other HTML attributes', () => {
    const element = document.createElement('div');
    handleProps(element, { id: 'test', 'data-test': 'true' });
    expect(element.id).toBe('test');
    expect(element.getAttribute('data-test')).toBe('true');
  });
});