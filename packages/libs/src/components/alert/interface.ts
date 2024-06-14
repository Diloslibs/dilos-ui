import { AlertItem, AlertOptions } from './types'

export declare interface IAlert {
    _items: AlertItem[]
    _options: AlertOptions

    getItem(id: string): AlertItem | undefined
    close(id: string): void
}
