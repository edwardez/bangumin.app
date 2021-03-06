// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../../../@material/base/types
//   ../../../@material/base/component
//   ../../../@material/base/foundation

declare module '@material/toolbar' {
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
    export * from '@material/toolbar/adapter';
    export * from '@material/toolbar/component';
    export * from '@material/toolbar/foundation';
    export * from '@material/toolbar/types';
}

declare module '@material/toolbar/adapter' {
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
    import { SpecificEventListener } from '@material/base/types';
    import { MDCToolbarEventDetail } from '@material/toolbar/types';
    /**
        * Defines the shape of the adapter expected by the foundation.
        * Implement this adapter for your framework of choice to delegate updates to
        * the component in your framework of choice. See architecture documentation
        * for more details.
        * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
        */
    export interface MDCToolbarAdapter {
            hasClass: (className: string) => boolean;
            addClass: (className: string) => void;
            removeClass: (className: string) => void;
            registerScrollHandler: (handler: SpecificEventListener<'scroll'>) => void;
            deregisterScrollHandler: (handler: SpecificEventListener<'scroll'>) => void;
            registerResizeHandler: (handler: SpecificEventListener<'resize'>) => void;
            deregisterResizeHandler: (handler: SpecificEventListener<'resize'>) => void;
            getViewportWidth: () => number;
            getViewportScrollY: () => number;
            getOffsetHeight: () => number;
            getFirstRowElementOffsetHeight: () => number;
            notifyChange: (evtData: MDCToolbarEventDetail) => void;
            setStyle: (property: string, value: string) => void;
            setStyleForTitleElement: (property: string, value: string) => void;
            setStyleForFlexibleRowElement: (property: string, value: string) => void;
            setStyleForFixedAdjustElement: (property: string, value: string) => void;
    }
}

declare module '@material/toolbar/component' {
    /**
      * @license
      * Copyright 2017 Google Inc.
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
    import { MDCToolbarFoundation } from '@material/toolbar/foundation';
    export class MDCToolbar extends MDCComponent<MDCToolbarFoundation> {
        static attachTo(root: Element): MDCToolbar;
        protected root_: HTMLElement;
        initialize(): void;
        destroy(): void;
        fixedAdjustElement: HTMLElement | null;
        getDefaultFoundation(): MDCToolbarFoundation;
    }
}

declare module '@material/toolbar/foundation' {
    /**
      * @license
      * Copyright 2017 Google Inc.
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
    import { MDCToolbarAdapter } from '@material/toolbar/adapter';
    export class MDCToolbarFoundation extends MDCFoundation<MDCToolbarAdapter> {
        static readonly cssClasses: {
            FIXED: string;
            FIXED_AT_LAST_ROW: string;
            FIXED_LASTROW: string;
            FLEXIBLE_DEFAULT_BEHAVIOR: string;
            FLEXIBLE_MAX: string;
            FLEXIBLE_MIN: string;
            TOOLBAR_ROW_FLEXIBLE: string;
        };
        static readonly strings: {
            CHANGE_EVENT: string;
            FIRST_ROW_SELECTOR: string;
            ICON_SELECTOR: string;
            TITLE_SELECTOR: string;
        };
        static readonly numbers: {
            MAX_TITLE_SIZE: number; /** The ratio of max scrollTop that we should listen to to row height. */
            MIN_TITLE_SIZE: number;
            TOOLBAR_MOBILE_BREAKPOINT: number;
            TOOLBAR_ROW_HEIGHT: number;
            TOOLBAR_ROW_MOBILE_HEIGHT: number;
        };
        static readonly defaultAdapter: MDCToolbarAdapter;
        constructor(adapter?: Partial<MDCToolbarAdapter>);
        init(): void;
        destroy(): void;
        updateAdjustElementStyles(): void;
    }
    export default MDCToolbarFoundation;
}

declare module '@material/toolbar/types' {
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
    export interface MDCToolbarEventDetail {
        flexibleExpansionRatio: number;
    }
    export interface MDCToolbarEvent extends Event {
        readonly detail: MDCToolbarEventDetail;
    }
}

