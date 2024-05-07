/*
 * Accordion
 * @version: x.x.x
 * @author: Dilos
 * @license: -
 * Copyright 2024 Dilos
*/

import { IAccordion } from './interface'
import { AccordionItem, AccordionOptions } from './types'

const Default: AccordionOptions = {
    alwaysOpen: false,
    activeClasses: 'bg-gray-100 text-gray-900',
    inactiveClasses: 'text-gray-500',
    onOpen: () => { },
    onClose: () => { },
    onToggle: () => { }
}

class Accordion implements IAccordion {
    _accordionEl: HTMLElement
    _items: AccordionItem[]
    _options: AccordionOptions
    _clickHandler: EventListenerOrEventListenerObject
    _initialized: boolean

    constructor(
        accordionEl: HTMLElement | null = null,
        items: AccordionItem[] = [],
        options: AccordionOptions = Default
    ) {
        this._accordionEl = accordionEl as HTMLElement
        this._items = items
        this._options = { ...Default, ...options }
        this._initialized = false
        this.init()
    }

    init() {
        if (this._items.length && !this._initialized) {
            this._items.forEach(item => {
                if (item.active) {
                    this.open(item.id)
                }
                const clickHandler = () => {
                    this.toggle(item.id)
                }
                item.triggerEl.addEventListener('click', clickHandler)
                item.clickHandler = clickHandler
            })
            this._initialized = true
        }
    }

    open(id: string): void {
        const item = this.getItem(id)
        if (!this._options.alwaysOpen) {
            this._items.map(i => {
                if (i !== item) {
                    i.triggerEl.classList.remove(
                        ...this._options.activeClasses.split(' ')
                    )
                    i.triggerEl.classList.add(
                        ...this._options.inactiveClasses.split(' ')
                    )
                    i.targetEl.classList.add('hidden')
                    i.triggerEl.setAttribute('aria-expanded', 'false')
                    i.active = false
                    if (i.iconEl) {
                        i.iconEl.classList.add('rotate-180')
                    }
                }
            })
        }
        item.triggerEl.classList.add(...this._options.activeClasses.split(' '))
        item.triggerEl.classList.remove(
            ...this._options.inactiveClasses.split(' ')
        )
        item.triggerEl.setAttribute('aria-expanded', 'true')
        item.targetEl.classList.remove('hidden')
        item.active = true
        if (item.iconEl) {
            item.iconEl.classList.remove('rotate-180')
        }
        this._options.onOpen(this, item)
    }

    toggle(id: string): void {
        const item = this.getItem(id)

        if (item.active) {
            this.close(id)
        } else {
            this.open(id)
        }

        this._options.onToggle(this, item)
    }

    close(id: string): void {
        const item = this.getItem(id)

        item.triggerEl.classList.remove(
            ...this._options.activeClasses.split(' ')
        )
        item.triggerEl.classList.add(
            ...this._options.inactiveClasses.split(' ')
        )
        item.targetEl.classList.add('hidden')
        item.triggerEl.setAttribute('aria-expanded', 'false')
        item.active = false

        if (item.iconEl) {
            item.iconEl.classList.add('rotate-180')
        }

        this._options.onClose(this, item)
    }

    getItem(id: string): AccordionItem | undefined {
        return this._items.filter(item => item.id === id)[0]
    }
}

export function initAccordions() {
    document.querySelectorAll('[data-accordion]').forEach($accordionEl => {
        const alwaysOpen = $accordionEl.getAttribute('data-accordion')
        const activeClasses = $accordionEl.getAttribute('data-active-classes')
        const inactiveClasses = $accordionEl.getAttribute(
            'data-inactive-classes'
        )
        const items = [] as AccordionItem[]
        $accordionEl
            .querySelectorAll('[data-accordion-target]')
            .forEach($triggerEl => {
                if ($triggerEl.closest('[data-accordion]') === $accordionEl) {
                    const item = {
                        id: $triggerEl.getAttribute('data-accordion-target'),
                        triggerEl: $triggerEl,
                        targetEl: document.querySelector(
                            $triggerEl.getAttribute('data-accordion-target')
                        ),
                        iconEl: $triggerEl.querySelector(
                            '[data-accordion-icon]'
                        ),
                        active:
                            $triggerEl.getAttribute('aria-expanded') === 'true'
                                ? true
                                : false
                    } as AccordionItem
                    items.push(item)
                }
            })

        new Accordion($accordionEl as HTMLElement, items, {
            alwaysOpen: alwaysOpen === 'open' ? true : false,
            activeClasses: activeClasses
                ? activeClasses
                : Default.activeClasses,
            inactiveClasses: inactiveClasses
                ? inactiveClasses
                : Default.inactiveClasses
        } as AccordionOptions)
    })
}

window.addEventListener('load', () => {
    initAccordions()
});

if (typeof window !== 'undefined') {
    initAccordions()
}
export default Accordion
