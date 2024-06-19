import { ICollectionItem } from '@/interfaces'
import { IAlert } from './interface'
import { AlertItem, AlertOptions } from './types'

const Default: AlertOptions = {
    autoClose: false,
    duration: 5000,
    onClose: () => {}
}

class Alert implements IAlert {
    _alertEl: HTMLElement
    _items: AlertItem[]
    _options: AlertOptions
    _initialized: boolean

    constructor(
        alertEl: HTMLElement | null = null,
        items: AlertItem[] = [],
        options: AlertOptions = Default
    ) {
        this._alertEl = alertEl as HTMLElement
        this._items = items
        this._options = { ...Default, ...options }
        this._initialized = false
        this.init()
    }

    init() {
        if (this._items.length && !this._initialized) {
            this._items.forEach(item => {
                this.injectProgressBar(item)
                const clickHandler = () => {
                    this.close(item.id)
                }
                item.closeEl.addEventListener('click', clickHandler)
                if (this._options.autoClose) {
                    item.autoCloseTimeout = window.setTimeout(() => {
                        this.close(item.id)
                    }, item.duration || this._options.duration)

                    this.startProgressBar(item)
                }
            })
            this._initialized = true
        }
    }

    injectProgressBar(item: AlertItem) {
        const progressBar = document.createElement('div')
        progressBar.className = 'd-alert-progress'
        item.alertEl.appendChild(progressBar)
        item.progressBarEl = progressBar
    }

    startProgressBar(item: AlertItem) {
        if (item.progressBarEl) {
            item.progressBarEl.style.transition = `width ${item.duration || this._options.duration}ms linear`
            requestAnimationFrame(() => {
                item.progressBarEl.style.width = '100%'
            })
        }
    }

    close(id: string): void {
        const item = this.getItem(id)
        if (item) {
            item.alertEl.classList.add('hidden')
            if (item.autoCloseTimeout) {
                clearTimeout(item.autoCloseTimeout)
            }
            this._options.onClose(this, item)
        }
    }

    getItem(id: string): AlertItem | undefined {
        return this._items.find(item => item.id === id)
    }

    static autoInit() {
        document.querySelectorAll('[data-alert]').forEach($alertEl => {
            const items = [] as AlertItem[]
            const id = $alertEl.getAttribute('data-alert')
            const closeEl = $alertEl.querySelector(
                '.d-alert-close'
            ) as HTMLElement
            const duration =
                parseInt($alertEl.getAttribute('data-duration')) || undefined

            if (id && closeEl) {
                items.push({
                    id: id,
                    alertEl: $alertEl as HTMLElement,
                    closeEl: closeEl,
                    duration: duration
                } as AlertItem)
            }

            new Alert($alertEl as HTMLElement, items, {
                autoClose: $alertEl.getAttribute('data-auto-close') === 'true',
                duration: duration || Default.duration
            } as AlertOptions)
        })
    }
}

declare global {
    interface Window {
        DAlert: Function
        $dAlertCollection: ICollectionItem<Alert>[]
    }
}

window.addEventListener('load', () => {
    Alert.autoInit()
})

if (typeof window !== 'undefined') {
    window.DAlert = Alert
}

export default Alert
