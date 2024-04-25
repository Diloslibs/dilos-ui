import {
    TooltipTriggerType,
    TooltipTriggerEventTypes,
    TooltipOptions
} from './types';
import type { Instance as PopperInstance } from '@popperjs/core';

export declare interface TooltipInterface {
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: TooltipOptions;
    _visible: boolean;
    _popperInstance: PopperInstance;
    _initialized: boolean;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    
    init(): void;
    _createPopperInstance(): PopperInstance;
    _setupEventListeners(): void;
    _setupClickOutsideListener(): void;
    _removeClickOutsideListener(): void;
    _handleClickOutside(ev: Event, targetEl: HTMLElement): void;
    _getTriggerEvents(
        triggerType: TooltipTriggerType
    ): TooltipTriggerEventTypes;
    isVisible(): boolean;
    show(): void;
    hide(): void;
}
