import { describe, it, expect, vi } from 'vitest';
import handleChildren from '../../renderer/handleChildren';
import createElement from '../../renderer/createElement'; // Import createElement for mocking

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
      // For functional components, we'll just return a div for simplicity in this mock
      const element = document.createElement('div');
      if (props.children) {
        props.children.forEach((child: any) => {
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
      // Apply basic props for testing purposes
      for (const prop in props) {
        if (prop === 'children') {
          props.children.forEach((child: any) => {
            if (child instanceof Node) {
              element.appendChild(child);
            } else if (typeof child === 'string' || typeof child === 'number') {
              element.appendChild(document.createTextNode(String(child)));
            }
          });
        } else {
          element.setAttribute(prop, props[prop]);
        }
      }
      return element;
    }
  }),
}));

describe('handleChildren', () => {
  it('should handle null or undefined children', () => {
    const nullChild = handleChildren(null);
    expect((nullChild as Text).nodeType).toBe(3);
    expect((nullChild as Text).nodeValue).toBe('');

    const undefinedChild = handleChildren(undefined);
    expect((undefinedChild as Text).nodeType).toBe(3);
    expect((undefinedChild as Text).nodeValue).toBe('');
  });

  it('should handle string or number children', () => {
    const stringChild = handleChildren('Hello');
    expect((stringChild as Text).nodeType).toBe(3);
    expect((stringChild as Text).nodeValue).toBe('Hello');

    const numberChild = handleChildren(123);
    expect((numberChild as Text).nodeType).toBe(3);
    expect((numberChild as Text).nodeValue).toBe('123');
  });

  it('should handle an array of children', () => {
    const arrayChild = handleChildren(['Hello', 123, null]);
    expect((arrayChild as DocumentFragment).nodeType).toBe(11);
    expect((arrayChild as DocumentFragment).childNodes.length).toBe(3);
    expect((arrayChild as DocumentFragment).childNodes[0].nodeValue).toBe('Hello');
    expect((arrayChild as DocumentFragment).childNodes[1].nodeValue).toBe('123');
    expect((arrayChild as DocumentFragment).childNodes[2].nodeValue).toBe('');
  });

  it('should handle a DOM node child', () => {
    const element = document.createElement('div');
    const nodeChild = handleChildren(element);
    expect(nodeChild).toBe(element);
  });

  it('should handle a virtual DOM element child', () => {
    const vdomChild = { type: 'div', props: { id: 'test' } };
    const element = handleChildren(vdomChild);
    expect((element as HTMLElement).tagName).toBe('DIV');
    expect((element as HTMLElement).id).toBe('test');
  });
});