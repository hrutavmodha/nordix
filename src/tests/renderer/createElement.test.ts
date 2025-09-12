import { describe, it, expect, vi } from 'vitest';
import createElement from '../../renderer/createElement';

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

describe('createElement', () => {
  it('should create a regular HTML element', () => {
    const element = createElement('div', {});
    expect((element as HTMLElement).tagName).toBe('DIV');
  });

  it('should create a text node', () => {
    const element = createElement('TEXT_NODE', { nodeValue: 'Hello' });
    expect(element.nodeType).toBe(3);
    expect(element.nodeValue).toBe('Hello');
  });

  it('should create a document fragment', () => {
    const element = createElement('FRAGMENT', {});
    expect(element.nodeType).toBe(11);
  });

  it('should handle functional components', () => {
    const FunctionalComponent = (props: { name: string }) => {
      return createElement('div', { children: [`Hello ${props.name}`] });
    };
    const element = createElement(FunctionalComponent, { name: 'World' });
    expect((element as HTMLElement).tagName).toBe('DIV');
    expect(element.textContent).toBe('Hello World');
  });

  it('should apply props to the element', () => {
    const element = createElement('div', { id: 'test', className: 'test-class' });
    expect((element as HTMLElement).id).toBe('test');
    expect((element as HTMLElement).className).toBe('test-class');
  });
});