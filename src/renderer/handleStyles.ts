function camelToKebab(key: string) {
    return key.replace(/[A-Z]/g, (value: string): string => {
        return '-' + value.toLowerCase()
    }) 
}

function applyStyles(styles?: Record<string, string | number>): string {
    if (!styles) {
        return ''
    }
    else {
        return Object.entries(styles)
            .map(([key, value]): string => {
                return `${camelToKebab(key)}: ${value}`
            })
            .join(';')
    }
}

export default function handleStyles(
    element: HTMLElement,
    styles: {[key: string]: any}
): void {
    element.style = applyStyles(styles)
}
