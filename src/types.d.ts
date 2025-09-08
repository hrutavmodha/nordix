type Props<T extends keyof HTMLElementTagNameMap> = Partial<HTMLElementTagNameMap[T]> & {
    className?: string,
    id?: string,
    style?: CSSProps,
    title?: string,
    lang?: string,
    hidden?: boolean,
    tabIndex?: number,
    draggable?: boolean,
    children?: any
    [key: string]: any
}

type CSSProps = {
    [T in keyof CSSStyleDeclaration]?: string | number
}

declare module 'nordix' {
    export * from './index'
}

declare namespace JSX {
    interface IntrinsicElements {
        a: Props<HTMLAnchorElement>;
        abbr: Props<HTMLElement>;
        address: Props<HTMLElement>;
        area: Props<HTMLAreaElement>;
        article: Props<HTMLElement>;
        aside: Props<HTMLElement>;
        audio: Props<HTMLAudioElement>;
        b: Props<HTMLElement>;
        base: Props<HTMLBaseElement>;
        bdi: Props<HTMLElement>;
        bdo: Props<HTMLElement>;
        blockquote: Props<HTMLQuoteElement>;
        br: Props<HTMLBRElement>;
        button: Props<HTMLButtonElement>;
        canvas: Props<HTMLCanvasElement>;
        caption: Props<HTMLTableCaptionElement>;
        cite: Props<HTMLElement>;
        code: Props<HTMLElement>;
        col: Props<HTMLTableColElement>;
        colgroup: Props<HTMLTableColElement>;
        data: Props<HTMLDataElement>;
        datalist: Props<HTMLDataListElement>;
        dd: Props<HTMLElement>;
        del: Props<HTMLModElement>;
        details: Props<HTMLDetailsElement>;
        dfn: Props<HTMLElement>;
        dialog: Props<HTMLDialogElement>;
        div: Props<HTMLDivElement>;
        dl: Props<HTMLDListElement>;
        dt: Props<HTMLElement>;
        em: Props<HTMLElement>;
        embed: Props<HTMLEmbedElement>;
        fieldset: Props<HTMLFieldSetElement>;
        figcaption: Props<HTMLElement>;
        figure: Props<HTMLElement>;
        footer: Props<HTMLElement>;
        form: Props<HTMLFormElement>;
        h1: Props<HTMLHeadingElement>;
        h2: Props<HTMLHeadingElement>;
        h3: Props<HTMLHeadingElement>;
        h4: Props<HTMLHeadingElement>;
        h5: Props<HTMLHeadingElement>;
        h6: Props<HTMLHeadingElement>;
        header: Props<HTMLElement>;
        hr: Props<HTMLHRElement>;
        i: Props<HTMLElement>;
        iframe: Props<HTMLIFrameElement>;
        img: Props<HTMLImageElement>;
        input: Props<HTMLInputElement>;
        ins: Props<HTMLModElement>;
        kbd: Props<HTMLElement>;
        label: Props<HTMLLabelElement>;
        legend: Props<HTMLLegendElement>;
        li: Props<HTMLLIElement>;
        link: Props<HTMLLinkElement>;
        main: Props<HTMLElement>;
        map: Props<HTMLMapElement>;
        mark: Props<HTMLElement>;
        meta: Props<HTMLMetaElement>;
        meter: Props<HTMLMeterElement>;
        nav: Props<HTMLElement>;
        noscript: Props<HTMLElement>;
        object: Props<HTMLObjectElement>;
        ol: Props<HTMLOListElement>;
        optgroup: Props<HTMLOptGroupElement>;
        option: Props<HTMLOptionElement>;
        output: Props<HTMLOutputElement>;
        p: Props<HTMLParagraphElement>;
        param: Props<HTMLParamElement>;
        picture: Props<HTMLPictureElement>;
        pre: Props<HTMLPreElement>;
        progress: Props<HTMLProgressElement>;
        q: Props<HTMLQuoteElement>;
        rp: Props<HTMLElement>;
        rt: Props<HTMLElement>;
        ruby: Props<HTMLElement>;
        s: Props<HTMLElement>;
        samp: Props<HTMLElement>;
        section: Props<HTMLElement>;
        select: Props<HTMLSelectElement>;
        small: Props<HTMLElement>;
        source: Props<HTMLSourceElement>;
        span: Props<HTMLSpanElement>;
        strong: Props<HTMLElement>;
        style: Props<HTMLStyleElement>;
        sub: Props<HTMLElement>;
        summary: Props<HTMLElement>;
        sup: Props<HTMLElement>;
        table: Props<HTMLTableElement>;
        tbody: Props<HTMLTableSectionElement>;
        td: Props<HTMLTableCellElement>;
        template: Props<HTMLTemplateElement>;
        textarea: Props<HTMLTextAreaElement>;
        tfoot: Props<HTMLTableSectionElement>;
        th: Props<HTMLTableCellElement>;
        thead: Props<HTMLTableSectionElement>;
        time: Props<HTMLTimeElement>;
        tr: Props<HTMLTableRowElement>;
        track: Props<HTMLTrackElement>;
        u: Props<HTMLElement>;
        ul: Props<HTMLUListElement>;
        htmlVar: Props<HTMLElement>;
        video: Props<HTMLVideoElement>;
        wbr: Props<HTMLElement>;
        svg: Props<SVGSVGElement>;
        circle: Props<SVGCircleElement>;
        defs: Props<SVGDefsElement>;
        ellipse: Props<SVGEllipseElement>;
        g: Props<SVGGElement>;
        line: Props<SVGLineElement>;
        linearGradient: Props<SVGLinearGradientElement>;
        mask: Props<SVGMaskElement>;
        path: Props<SVGPathElement>;
        pattern: Props<SVGPatternElement>;
        polygon: Props<SVGPolygonElement>;
        polyline: Props<SVGPolylineElement>;
        radialGradient: Props<SVGRadialGradientElement>;
        rect: Props<SVGRectElement>;
        stop: Props<SVGStopElement>;
        text: Props<SVGTextElement>;
        tspan: Props<SVGTSpanElement>;
    }
}