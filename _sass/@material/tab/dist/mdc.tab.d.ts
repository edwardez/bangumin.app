// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../../@material/base/component
//   ../../../@material/ripple/component
//   ../../../@material/ripple/types
//   ../../../@material/tab-indicator/component
//   ../../../@material/base/foundation

declare module '@material/tab' {
    /**
      * @license
      * Copyright 2019 Google Inc.
      *
      * Permission is hereby granted, free of charge, to any person obtaining a copy
      * of this software and associated documentation files (the "Software"), to deal
      * in the Software without restriction, including without limitation the rights
      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      * copies of the Software, and to permit persons to whom the Software is
      * furnished to do so, subject to the following conditions:
      *
      * The above copyright notice and this permission notice shall be included in
      * all copies or substantial portions of the Software.
      *
      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      * THE SOFTWARE.
      */
    export * from '@material/tab/adapter';
    export * from '@material/tab/component';
    export * from '@material/tab/foundation';
    export * from '@material/tab/types';
}

declare module '@material/tab/adapter' {
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCTabAdapter {
            /**
                * Adds the given className to the root element.
                * @param className The className to add
                */
            addClass(className: string): void;
            /**
                * Removes the given className from the root element.
                * @param className The className to remove
                */
            removeClass(className: string): void;
            /**
                * Returns whether the root element has the given className.
                * @param className The className to remove
                */
            hasClass(className: string): boolean;
            /**
                * Sets the given attrName of the root element to the given value.
                * @param attr The attribute name to set
                * @param value The value so give the attribute
                */
            setAttr(attr: string, value: string): void;
            /**
                * Activates the indicator element.
                * @param previousIndicatorClientRect The client rect of the previously activated indicator
                */
            activateIndicator(previousIndicatorClientRect?: ClientRect): void;
            /** Deactivates the indicator. */
            deactivateIndicator(): void;
            /**
                * Emits the MDCTab:interacted event for use by parent components
                */
            notifyInteracted(): void;
            /**
                * Returns the offsetLeft value of the root element.
                */
            getOffsetLeft(): number;
            /**
                * Returns the offsetWidth value of the root element.
                */
            getOffsetWidth(): number;
            /**
                * Returns the offsetLeft of the content element.
                */
            getContentOffsetLeft(): number;
            /**
                * Returns the offsetWidth of the content element.
                */
            getContentOffsetWidth(): number;
            /**
                * Applies focus to the root element
                */
            focus(): void;
    }
}

declare module '@material/tab/component' {
    /**
        * @license
        * Copyright 2018 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { MDCComponent } from '@material/base/component';
    import { MDCRippleFactory } from '@material/ripple/component';
    import { MDCRippleCapableSurface } from '@material/ripple/types';
    import { MDCTabIndicatorFactory } from '@material/tab-indicator/component';
    import { MDCTabFoundation } from '@material/tab/foundation';
    import { MDCTabDimensions } from '@material/tab/types';
    export type MDCTabFactory = (el: Element, foundation?: MDCTabFoundation) => MDCTab;
    export class MDCTab extends MDCComponent<MDCTabFoundation> implements MDCRippleCapableSurface {
            static attachTo(root: Element): MDCTab;
            id: string;
            root_: HTMLElement;
            initialize(rippleFactory?: MDCRippleFactory, tabIndicatorFactory?: MDCTabIndicatorFactory): void;
            initialSyncWithDOM(): void;
            destroy(): void;
            getDefaultFoundation(): MDCTabFoundation;
            /**
                * Getter for the active state of the tab
                */
            readonly active: boolean;
            focusOnActivate: boolean;
            /**
                * Activates the tab
                */
            activate(computeIndicatorClientRect?: ClientRect): void;
            /**
                * Deactivates the tab
                */
            deactivate(): void;
            /**
                * Returns the indicator's client rect
                */
            computeIndicatorClientRect(): ClientRect;
            computeDimensions(): MDCTabDimensions;
            /**
                * Focuses the tab
                */
            focus(): void;
    }
}

declare module '@material/tab/foundation' {
    /**
        * @license
        * Copyright 2018 Google Inc.
        *
        * Permission is hereby granted, free of charge, to any person obtaining a copy
        * of this software and associated documentation files (the "Software"), to deal
        * in the Software without restriction, including without limitation the rights
        * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the Software is
        * furnished to do so, subject to the following conditions:
        *
        * The above copyright notice and this permission notice shall be included in
        * all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
        * THE SOFTWARE.
        */
    import { MDCFoundation } from '@material/base/foundation';
    import { MDCTabAdapter } from '@material/tab/adapter';
    import { MDCTabDimensions } from '@material/tab/types';
    export class MDCTabFoundation extends MDCFoundation<MDCTabAdapter> {
            static readonly cssClasses: {
                    ACTIVE: string;
            };
            static readonly strings: {
                    ARIA_SELECTED: string;
                    CONTENT_SELECTOR: string;
                    INTERACTED_EVENT: string;
                    RIPPLE_SELECTOR: string;
                    TABINDEX: string;
                    TAB_INDICATOR_SELECTOR: string;
            };
            static readonly defaultAdapter: MDCTabAdapter;
            constructor(adapter?: Partial<MDCTabAdapter>);
            handleClick(): void;
            isActive(): boolean;
            /**
                * Sets whether the tab should focus itself when activated
                */
            setFocusOnActivate(focusOnActivate: boolean): void;
            /**
                * Activates the Tab
                */
            activate(previousIndicatorClientRect?: ClientRect): void;
            /**
                * Deactivates the Tab
                */
            deactivate(): void;
            /**
                * Returns the dimensions of the Tab
                */
            computeDimensions(): MDCTabDimensions;
    }
    export default MDCTabFoundation;
}

declare module '@material/tab/types' {
    /**
        * MDCTabDimensions provides details about the left and right edges of the Tab
        * root element and the Tab content element. These values are used to determine
        * the visual position of the Tab with respect it's parent container.
        */
    export interface MDCTabDimensions {
            rootLeft: number;
            rootRight: number;
            contentLeft: number;
            contentRight: number;
    }
    export interface MDCTabInteractionEventDetail {
            tabId: string;
    }
    export interface MDCTabInteractionEvent extends Event {
            readonly detail: MDCTabInteractionEventDetail;
    }
}

