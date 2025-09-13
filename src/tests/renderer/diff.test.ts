import { describe, it, expect, beforeEach } from 'vitest'
import diff from '../../renderer/diff'

describe('diff', () => {
    let parent: HTMLElement;
    beforeEach(() => {
        parent = document.createElement('div');
    });
    it('should replace a node if the new node is of a different type', () => {
        const oldNode = document.createElement('div');
        const newNode = document.createElement('span');
        parent.appendChild(oldNode);
        diff(oldNode, newNode, parent);
        expect(parent.firstChild).toBe(newNode);
    });
    it('should update the text content of a text node', () => {
        const oldNode = document.createTextNode('Hello');
        const newNode = document.createTextNode('World');
        parent.appendChild(oldNode);
        diff(oldNode, newNode, parent);
        expect(parent.firstChild?.textContent).toBe('World');
    });
    it('should add, remove, and update attributes', () => {
        const oldNode = document.createElement('div');
        oldNode.setAttribute('id', 'old');
        oldNode.setAttribute('class', 'old-class');
        const newNode = document.createElement('div');
        newNode.setAttribute('id', 'new');
        newNode.setAttribute('data-new', 'true');
        parent.appendChild(oldNode);
        diff(oldNode, newNode, parent);
        const result = parent.firstChild as HTMLElement;
        expect(result.id).toBe('new');
        expect(result.hasAttribute('class')).toBe(false);
        expect(result.getAttribute('data-new')).toBe('true');
    });
    it('should add children', () => {
        const oldNode = document.createElement('div');
        const newNode = document.createElement('div');
        newNode.appendChild(document.createElement('span'));
        parent.appendChild(oldNode);
        diff(oldNode, newNode, parent);
        expect(parent.firstChild?.childNodes.length).toBe(1);
        expect((parent.firstChild?.firstChild as HTMLElement).tagName).toBe('SPAN');
    });
    it('should remove children', () => {
        const oldNode = document.createElement('div');
        oldNode.appendChild(document.createElement('span'));
        const newNode = document.createElement('div');
        parent.appendChild(oldNode);
        diff(oldNode, newNode, parent);
        expect(parent.firstChild?.childNodes.length).toBe(0);
    });
    it('should replace children', () => {
        const oldNode = document.createElement('div');
        oldNode.appendChild(document.createElement('span'));
        const newNode = document.createElement('div');
        newNode.appendChild(document.createElement('p'));
        parent.appendChild(oldNode);
        diff(oldNode, newNode, parent);
        expect(parent.firstChild?.childNodes.length).toBe(1);
        expect((parent.firstChild?.firstChild as HTMLElement).tagName).toBe('P');
    });
});
