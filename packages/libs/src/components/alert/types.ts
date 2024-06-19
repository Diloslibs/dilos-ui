export declare type AlertItem = {
    id: string
    alertEl: HTMLElement
    closeEl: HTMLElement
    progressBarEl?: HTMLElement
    duration?: number
    autoCloseTimeout?: number
}

export declare type AlertOptions = {
    autoClose?: boolean
    duration?: number
    onClose?: (alert: any, item: AlertItem) => void
}
