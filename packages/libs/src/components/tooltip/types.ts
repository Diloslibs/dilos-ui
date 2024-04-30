import { TooltipInterface } from './interface';
import type { Placement } from '@popperjs/core';

export declare type TooltipTriggerType = 'click' | 'hover' | 'none';

export declare type TooltipTriggerEventTypes = {
    showEvents: string[];
    hideEvents: string[];
};

export declare type TooltipOptions = {
    placement?: Placement;
    triggerType?: TooltipTriggerType;
    offsetSkidding?: number;
    offsetDistance?: number;
    ignoreClickOutsideClass?: string | boolean;
    delay?: number;
    onShow?: (tooltip: TooltipInterface) => void;
    onHide?: (tooltip: TooltipInterface) => void;
    onToggle?: (tooltip: TooltipInterface) => void;
};