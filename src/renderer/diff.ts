function diffChildren(
    oldChildren: Array<Node>,
    newChildren: Array<Node>,
    parent: HTMLElement
) {
    const oldChildrenLength = oldChildren.length;
    const newChildrenLength = newChildren.length;
    const minLength = Math.min(oldChildrenLength, newChildrenLength);

    for (let i = 0; i < minLength; i++) {
        diff(oldChildren[i], newChildren[i], parent);
    }

    if (newChildrenLength > oldChildrenLength) {
        for (let i = oldChildrenLength; i < newChildrenLength; i++) {
            parent.appendChild(newChildren[i]);
        }
    }

    if (oldChildrenLength > newChildrenLength) {
        for (let i = newChildrenLength; i < oldChildrenLength; i++) {
            parent.removeChild(oldChildren[i]);
        }
    }
}

export default function diff(
    oldNode: Node,
    newNode: Node,
    parent: HTMLElement
): any {
    if (!oldNode) {
        parent.appendChild(newNode);
        return newNode;
    }

    if (!newNode) {
        parent.removeChild(oldNode);
        return null;
    }

    if (oldNode.nodeType !== newNode.nodeType || oldNode.nodeName !== newNode.nodeName) {
        parent.replaceChild(newNode, oldNode);
        return newNode;
    }

    if (oldNode.nodeType === Node.TEXT_NODE) {
        if (oldNode.textContent !== newNode.textContent) {
            oldNode.textContent = newNode.textContent;
        }
        return oldNode;
    }

    if (oldNode.nodeType === Node.ELEMENT_NODE) {
        const oldElement = oldNode as HTMLElement;
        const newElement = newNode as HTMLElement;

        // Diff attributes
        const oldAttrs = oldElement.attributes;
        const newAttrs = newElement.attributes;

        for (let i = 0; i < newAttrs.length; i++) {
            const attr = newAttrs[i];
            if (!oldElement.hasAttribute(attr.name) || oldElement.getAttribute(attr.name) !== attr.value) {
                oldElement.setAttribute(attr.name, attr.value);
            }
        }

        for (let i = 0; i < oldAttrs.length; i++) {
            const attr = oldAttrs[i];
            if (!newElement.hasAttribute(attr.name)) {
                oldElement.removeAttribute(attr.name);
            }
        }

        // Diff children
        const oldChildren = Array.from(oldNode.childNodes);
        const newChildren = Array.from(newNode.childNodes);
        diffChildren(oldChildren, newChildren, oldElement);
        return oldNode;
    }
}