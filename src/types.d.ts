type Props<T> = Partial<T> & {
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

type GlobalEventHandlers<T> = {
    [K in keyof GlobalEventHandlersEventMap]?: (event: GlobalEventHandlersEventMap[K] & { currentTarget: T }) => void;
};


declare module 'nordix' {
    export * from './index'
}

declare namespace JSX {
    interface IntrinsicElements {
        a: Props<HTMLAnchorElement> & GlobalEventHandlers<HTMLAnchorElement>;
        abbr: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        address: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        area: Props<HTMLAreaElement> & GlobalEventHandlers<HTMLAreaElement>;
        article: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        aside: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        audio: Props<HTMLAudioElement> & GlobalEventHandlers<HTMLAudioElement>;
        b: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        base: Props<HTMLBaseElement> & GlobalEventHandlers<HTMLBaseElement>;
        bdi: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        bdo: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        blockquote: Props<HTMLQuoteElement> & GlobalEventHandlers<HTMLQuoteElement>;
        br: Props<HTMLBRElement> & GlobalEventHandlers<HTMLBRElement>;
        button: Props<HTMLButtonElement> & GlobalEventHandlers<HTMLButtonElement>;
        canvas: Props<HTMLCanvasElement> & GlobalEventHandlers<HTMLCanvasElement>;
        caption: Props<HTMLTableCaptionElement> & GlobalEventHandlers<HTMLTableCaptionElement>;
        cite: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        code: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        col: Props<HTMLTableColElement> & GlobalEventHandlers<HTMLTableColElement>;
        colgroup: Props<HTMLTableColElement> & GlobalEventHandlers<HTMLTableColElement>;
        data: Props<HTMLDataElement> & GlobalEventHandlers<HTMLDataElement>;
        datalist: Props<HTMLDataListElement> & GlobalEventHandlers<HTMLDataListElement>;
        dd: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        del: Props<HTMLModElement> & GlobalEventHandlers<HTMLModElement>;
        details: Props<HTMLDetailsElement> & GlobalEventHandlers<HTMLDetailsElement>;
        dfn: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        dialog: Props<HTMLDialogElement> & GlobalEventHandlers<HTMLDialogElement>;
        div: Props<HTMLDivElement> & GlobalEventHandlers<HTMLDivElement>;
        dl: Props<HTMLDListElement> & GlobalEventHandlers<HTMLDListElement>;
        dt: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        em: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        embed: Props<HTMLEmbedElement> & GlobalEventHandlers<HTMLEmbedElement>;
        fieldset: Props<HTMLFieldSetElement> & GlobalEventHandlers<HTMLFieldSetElement>;
        figcaption: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        figure: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        footer: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        form: Props<HTMLFormElement> & GlobalEventHandlers<HTMLFormElement>;
        h1: Props<HTMLHeadingElement> & GlobalEventHandlers<HTMLHeadingElement>;
        h2: Props<HTMLHeadingElement> & GlobalEventHandlers<HTMLHeadingElement>;
        h3: Props<HTMLHeadingElement> & GlobalEventHandlers<HTMLHeadingElement>;
        h4: Props<HTMLHeadingElement> & GlobalEventHandlers<HTMLHeadingElement>;
        h5: Props<HTMLHeadingElement> & GlobalEventHandlers<HTMLHeadingElement>;
        h6: Props<HTMLHeadingElement> & GlobalEventHandlers<HTMLHeadingElement>;
        header: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        hr: Props<HTMLHRElement> & GlobalEventHandlers<HTMLHRElement>;
        i: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        iframe: Props<HTMLIFrameElement> & GlobalEventHandlers<HTMLIFrameElement>;
        img: Props<HTMLImageElement> & GlobalEventHandlers<HTMLImageElement>;
        input: Props<HTMLInputElement> & GlobalEventHandlers<HTMLInputElement>;
        ins: Props<HTMLModElement> & GlobalEventHandlers<HTMLModElement>;
        kbd: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        label: Props<HTMLLabelElement> & GlobalEventHandlers<HTMLLabelElement>;
        legend: Props<HTMLLegendElement> & GlobalEventHandlers<HTMLLegendElement>;
        li: Props<HTMLLIElement> & GlobalEventHandlers<HTMLLIElement>;
        link: Props<HTMLLinkElement> & GlobalEventHandlers<HTMLLinkElement>;
        main: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        map: Props<HTMLMapElement> & GlobalEventHandlers<HTMLMapElement>;
        mark: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        meta: Props<HTMLMetaElement> & GlobalEventHandlers<HTMLMetaElement>;
        meter: Props<HTMLMeterElement> & GlobalEventHandlers<HTMLMeterElement>;
        nav: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        noscript: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        object: Props<HTMLObjectElement> & GlobalEventHandlers<HTMLObjectElement>;
        ol: Props<HTMLOListElement> & GlobalEventHandlers<HTMLOListElement>;
        optgroup: Props<HTMLOptGroupElement> & GlobalEventHandlers<HTMLOptGroupElement>;
        option: Props<HTMLOptionElement> & GlobalEventHandlers<HTMLOptionElement>;
        output: Props<HTMLOutputElement> & GlobalEventHandlers<HTMLOutputElement>;
        p: Props<HTMLParagraphElement> & GlobalEventHandlers<HTMLParagraphElement>;
        param: Props<HTMLParamElement> & GlobalEventHandlers<HTMLParamElement>;
        picture: Props<HTMLPictureElement> & GlobalEventHandlers<HTMLPictureElement>;
        pre: Props<HTMLPreElement> & GlobalEventHandlers<HTMLPreElement>;
        progress: Props<HTMLProgressElement> & GlobalEventHandlers<HTMLProgressElement>;
        q: Props<HTMLQuoteElement> & GlobalEventHandlers<HTMLQuoteElement>;
        rp: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        rt: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        ruby: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        s: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        samp: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        section: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        select: Props<HTMLSelectElement> & GlobalEventHandlers<HTMLSelectElement>;
        small: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        source: Props<HTMLSourceElement> & GlobalEventHandlers<HTMLSourceElement>;
        span: Props<HTMLSpanElement> & GlobalEventHandlers<HTMLSpanElement>;
        strong: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        style: Props<HTMLStyleElement> & GlobalEventHandlers<HTMLStyleElement>;
        sub: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        summary: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        sup: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        table: Props<HTMLTableElement> & GlobalEventHandlers<HTMLTableElement>;
        tbody: Props<HTMLTableSectionElement> & GlobalEventHandlers<HTMLTableSectionElement>;
        td: Props<HTMLTableCellElement> & GlobalEventHandlers<HTMLTableCellElement>;
        template: Props<HTMLTemplateElement> & GlobalEventHandlers<HTMLTemplateElement>;
        textarea: Props<HTMLTextAreaElement> & GlobalEventHandlers<HTMLTextAreaElement>;
        tfoot: Props<HTMLTableSectionElement> & GlobalEventHandlers<HTMLTableSectionElement>;
        th: Props<HTMLTableCellElement> & GlobalEventHandlers<HTMLTableCellElement>;
        thead: Props<HTMLTableSectionElement> & GlobalEventHandlers<HTMLTableSectionElement>;
        time: Props<HTMLTimeElement> & GlobalEventHandlers<HTMLTimeElement>;
        tr: Props<HTMLTableRowElement> & GlobalEventHandlers<HTMLTableRowElement>;
        track: Props<HTMLTrackElement> & GlobalEventHandlers<HTMLTrackElement>;
        u: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        ul: Props<HTMLUListElement> & GlobalEventHandlers<HTMLUListElement>;
        htmlVar: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        video: Props<HTMLVideoElement> & GlobalEventHandlers<HTMLVideoElement>;
        wbr: Props<HTMLElement> & GlobalEventHandlers<HTMLElement>;
        svg: Props<SVGSVGElement> & GlobalEventHandlers<SVGSVGElement>;
        circle: Props<SVGCircleElement> & GlobalEventHandlers<SVGCircleElement>;
        defs: Props<SVGDefsElement> & GlobalEventHandlers<SVGDefsElement>;
        ellipse: Props<SVGEllipseElement> & GlobalEventHandlers<SVGEllipseElement>;
        g: Props<SVGGElement> & GlobalEventHandlers<SVGGElement>;
        line: Props<SVGLineElement> & GlobalEventHandlers<SVGLineElement>;
        linearGradient: Props<SVGLinearGradientElement> & GlobalEventHandlers<SVGLinearGradientElement>;
        mask: Props<SVGMaskElement> & GlobalEventHandlers<SVGMaskElement>;
        path: Props<SVGPathElement> & GlobalEventHandlers<SVGPathElement>;
        pattern: Props<SVGPatternElement> & GlobalEventHandlers<SVGPatternElement>;
        polygon: Props<SVGPolygonElement> & GlobalEventHandlers<SVGPolygonElement>;
        polyline: Props<SVGPolylineElement> & GlobalEventHandlers<SVGPolylineElement>;
        radialGradient: Props<SVGRadialGradientElement> & GlobalEventHandlers<SVGRadialGradientElement>;
        rect: Props<SVGRectElement> & GlobalEventHandlers<SVGRectElement>;
        stop: Props<SVGStopElement> & GlobalEventHandlers<SVGStopElement>;
        text: Props<SVGTextElement> & GlobalEventHandlers<SVGTextElement>;
        tspan: Props<SVGTSpanElement> & GlobalEventHandlers<SVGTSpanElement>;
    }
}