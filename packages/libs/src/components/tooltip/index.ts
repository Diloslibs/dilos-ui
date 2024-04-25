import { createPopper } from '@popperjs/core';
import type {
    Options as PopperOptions,
    Instance as PopperInstance,
} from '@popperjs/core';
import type { TooltipOptions } from './types';
import { TooltipInterface } from './interface';

const Default: TooltipOptions = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    ignoreClickOutsideClass: false,
    onShow: () => {},
    onHide: () => {},
    onToggle: () => {},
};


class Tooltip implements TooltipInterface {

    _instanceId: string;
    _targetEl: HTMLElement;
    _triggerEl: HTMLElement;
    _options: TooltipOptions;
    _visible: boolean;
    _popperInstance: PopperInstance;
    _initialized: boolean;
    _clickOutsideEventListener: EventListenerOrEventListenerObject;
    _hoverShowTriggerElHandler: EventListenerOrEventListenerObject;
    _hoverShowTargetElHandler: EventListenerOrEventListenerObject;
    _hoverHideHandler: EventListenerOrEventListenerObject;
    _clickHandler: EventListenerOrEventListenerObject;

    constructor(
        targetElement: HTMLElement | null = null,
        triggerElement: HTMLElement | null = null,
        options: TooltipOptions = Default
    ) {
        this._instanceId = targetElement.id;
        this._targetEl = targetElement;
        this._triggerEl = triggerElement;
        // this._options = { ...Default, ...options };
        this._popperInstance = null;
        this._visible = false;
        this._initialized = false;
        this.init();
    }

    init(){}
    destroy(){}
    _createPopperInstance() {
        return createPopper(this._triggerEl, this._targetEl, {
            placement: this._options.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [
                            this._options.offsetSkidding,
                            this._options.offsetDistance,
                        ],
                    },
                },
            ],
        });
    }


    _removeClickOutsideListener() {
        document.body.removeEventListener(
            'click',
            this._clickOutsideEventListener,
            true
        );
    }
    _setupEventListeners() {}
    _setupClickOutsideListener(){}
    _handleClickOutside(ev: Event, targetEl: HTMLElement){}
    _getTriggerEvents(){
        return {
            showEvents: ['click'],
            hideEvents: [],
        };
    }
    isVisible(){
        return this._visible;
    }
    show(){}
    hide(){}
}

// if (typeof window !== 'undefined') {
//     initDropdowns();
// }

export default Tooltip;