export declare type AccordionItem = {
    id: string
    triggerEl: HTMLElement
    targetEl: HTMLElement
    iconEl?: HTMLElement | null
    active?: boolean
    clickHandler?: EventListenerOrEventListenerObject
}

export declare type AccordionOptions = {
    alwaysOpen?: boolean
    activeClasses?: string
    inactiveClasses?: string
    onOpen?: (accordion: any, item: AccordionItem) => void
    onClose?: (accordion: any, item: AccordionItem) => void
    onToggle?: (accordion: any, item: AccordionItem) => void
}
