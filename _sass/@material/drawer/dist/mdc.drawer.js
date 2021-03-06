/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["drawer"] = factory(); else root["mdc"] = root["mdc"] || {}, 
    root["mdc"]["drawer"] = factory();
})(this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter
                });
            }
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function getDefault() {
                return module["default"];
            } : function getModuleExports() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 110);
    }({
        0: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var MDCFoundation = function() {
                function MDCFoundation(adapter) {
                    if (adapter === void 0) {
                        adapter = {};
                    }
                    this.adapter_ = adapter;
                }
                Object.defineProperty(MDCFoundation, "cssClasses", {
                    get: function get() {
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "strings", {
                    get: function get() {
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "numbers", {
                    get: function get() {
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCFoundation, "defaultAdapter", {
                    get: function get() {
                        return {};
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCFoundation.prototype.init = function() {};
                MDCFoundation.prototype.destroy = function() {};
                return MDCFoundation;
            }();
            exports.MDCFoundation = MDCFoundation;
            exports.default = MDCFoundation;
        },
        1: function(module, exports, __webpack_require__) {
            "use strict";
            var __read = this && this.__read || function(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m) return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                        ar.push(r.value);
                    }
                } catch (error) {
                    e = {
                        error: error
                    };
                } finally {
                    try {
                        if (r && !r.done && (m = i["return"])) m.call(i);
                    } finally {
                        if (e) throw e.error;
                    }
                }
                return ar;
            };
            var __spread = this && this.__spread || function() {
                for (var ar = [], i = 0; i < arguments.length; i++) {
                    ar = ar.concat(__read(arguments[i]));
                }
                return ar;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var foundation_1 = __webpack_require__(0);
            var MDCComponent = function() {
                function MDCComponent(root, foundation) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    this.root_ = root;
                    this.initialize.apply(this, __spread(args));
                    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
                    this.foundation_.init();
                    this.initialSyncWithDOM();
                }
                MDCComponent.attachTo = function(root) {
                    return new MDCComponent(root, new foundation_1.MDCFoundation({}));
                };
                MDCComponent.prototype.initialize = function() {
                    var _args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _args[_i] = arguments[_i];
                    }
                };
                MDCComponent.prototype.getDefaultFoundation = function() {
                    throw new Error("Subclasses must override getDefaultFoundation to return a properly configured " + "foundation class");
                };
                MDCComponent.prototype.initialSyncWithDOM = function() {};
                MDCComponent.prototype.destroy = function() {
                    this.foundation_.destroy();
                };
                MDCComponent.prototype.listen = function(evtType, handler) {
                    this.root_.addEventListener(evtType, handler);
                };
                MDCComponent.prototype.unlisten = function(evtType, handler) {
                    this.root_.removeEventListener(evtType, handler);
                };
                MDCComponent.prototype.emit = function(evtType, evtData, shouldBubble) {
                    if (shouldBubble === void 0) {
                        shouldBubble = false;
                    }
                    var evt;
                    if (typeof CustomEvent === "function") {
                        evt = new CustomEvent(evtType, {
                            bubbles: shouldBubble,
                            detail: evtData
                        });
                    } else {
                        evt = document.createEvent("CustomEvent");
                        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
                    }
                    this.root_.dispatchEvent(evt);
                };
                return MDCComponent;
            }();
            exports.MDCComponent = MDCComponent;
            exports.default = MDCComponent;
        },
        10: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var cssClasses = {
                LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
                LIST_ITEM_CLASS: "mdc-list-item",
                LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
                LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
                ROOT: "mdc-list"
            };
            exports.cssClasses = cssClasses;
            var strings = {
                ACTION_EVENT: "MDCList:action",
                ARIA_CHECKED: "aria-checked",
                ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
                ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
                ARIA_CURRENT: "aria-current",
                ARIA_ORIENTATION: "aria-orientation",
                ARIA_ORIENTATION_HORIZONTAL: "horizontal",
                ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
                ARIA_SELECTED: "aria-selected",
                CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
                CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
                CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a\n  ",
                FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses.LIST_ITEM_CLASS + " a,\n    ." + cssClasses.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + cssClasses.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled)\n  ',
                RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)'
            };
            exports.strings = strings;
            var numbers = {
                UNSET_INDEX: -1
            };
            exports.numbers = numbers;
        },
        110: function(module, exports, __webpack_require__) {
            "use strict";
            function __export(m) {
                for (var p in m) {
                    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                }
            }
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) for (var k in mod) {
                    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                }
                result["default"] = mod;
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var util = __importStar(__webpack_require__(58));
            exports.util = util;
            __export(__webpack_require__(113));
            __export(__webpack_require__(38));
            __export(__webpack_require__(60));
        },
        111: function(module, exports) {
            var candidateSelectors = [ "input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])' ];
            var candidateSelector = candidateSelectors.join(",");
            var matches = typeof Element === "undefined" ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
            function tabbable(el, options) {
                options = options || {};
                var regularTabbables = [];
                var orderedTabbables = [];
                var candidates = el.querySelectorAll(candidateSelector);
                if (options.includeContainer) {
                    if (matches.call(el, candidateSelector)) {
                        candidates = Array.prototype.slice.apply(candidates);
                        candidates.unshift(el);
                    }
                }
                var i, candidate, candidateTabindex;
                for (i = 0; i < candidates.length; i++) {
                    candidate = candidates[i];
                    if (!isNodeMatchingSelectorTabbable(candidate)) continue;
                    candidateTabindex = getTabindex(candidate);
                    if (candidateTabindex === 0) {
                        regularTabbables.push(candidate);
                    } else {
                        orderedTabbables.push({
                            documentOrder: i,
                            tabIndex: candidateTabindex,
                            node: candidate
                        });
                    }
                }
                var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function(a) {
                    return a.node;
                }).concat(regularTabbables);
                return tabbableNodes;
            }
            tabbable.isTabbable = isTabbable;
            tabbable.isFocusable = isFocusable;
            function isNodeMatchingSelectorTabbable(node) {
                if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
                    return false;
                }
                return true;
            }
            function isTabbable(node) {
                if (!node) throw new Error("No node provided");
                if (matches.call(node, candidateSelector) === false) return false;
                return isNodeMatchingSelectorTabbable(node);
            }
            function isNodeMatchingSelectorFocusable(node) {
                if (node.disabled || isHiddenInput(node) || isHidden(node)) {
                    return false;
                }
                return true;
            }
            var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");
            function isFocusable(node) {
                if (!node) throw new Error("No node provided");
                if (matches.call(node, focusableCandidateSelector) === false) return false;
                return isNodeMatchingSelectorFocusable(node);
            }
            function getTabindex(node) {
                var tabindexAttr = parseInt(node.getAttribute("tabindex"), 10);
                if (!isNaN(tabindexAttr)) return tabindexAttr;
                if (isContentEditable(node)) return 0;
                return node.tabIndex;
            }
            function sortOrderedTabbables(a, b) {
                return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
            }
            function isContentEditable(node) {
                return node.contentEditable === "true";
            }
            function isInput(node) {
                return node.tagName === "INPUT";
            }
            function isHiddenInput(node) {
                return isInput(node) && node.type === "hidden";
            }
            function isRadio(node) {
                return isInput(node) && node.type === "radio";
            }
            function isNonTabbableRadio(node) {
                return isRadio(node) && !isTabbableRadio(node);
            }
            function getCheckedRadio(nodes) {
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].checked) {
                        return nodes[i];
                    }
                }
            }
            function isTabbableRadio(node) {
                if (!node.name) return true;
                var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
                var checked = getCheckedRadio(radioSet);
                return !checked || checked === node;
            }
            function isHidden(node) {
                return node.offsetParent === null || getComputedStyle(node).visibility === "hidden";
            }
            module.exports = tabbable;
        },
        112: function(module, exports) {
            module.exports = extend;
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            function extend() {
                var target = {};
                for (var i = 0; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                        if (hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
                return target;
            }
        },
        113: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var _extendStatics = function extendStatics(d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return _extendStatics(d, b);
                };
                return function(d, b) {
                    _extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            };
            var __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (mod != null) for (var k in mod) {
                    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                }
                result["default"] = mod;
                return result;
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var component_1 = __webpack_require__(1);
            var component_2 = __webpack_require__(15);
            var foundation_1 = __webpack_require__(7);
            var focus_trap_1 = __importDefault(__webpack_require__(59));
            var foundation_2 = __webpack_require__(38);
            var foundation_3 = __webpack_require__(60);
            var util = __importStar(__webpack_require__(58));
            var cssClasses = foundation_2.MDCDismissibleDrawerFoundation.cssClasses, strings = foundation_2.MDCDismissibleDrawerFoundation.strings;
            var MDCDrawer = function(_super) {
                __extends(MDCDrawer, _super);
                function MDCDrawer() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCDrawer.attachTo = function(root) {
                    return new MDCDrawer(root);
                };
                Object.defineProperty(MDCDrawer.prototype, "open", {
                    get: function get() {
                        return this.foundation_.isOpen();
                    },
                    set: function set(isOpen) {
                        if (isOpen) {
                            this.foundation_.open();
                        } else {
                            this.foundation_.close();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDrawer.prototype, "list", {
                    get: function get() {
                        return this.list_;
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCDrawer.prototype.initialize = function(focusTrapFactory, listFactory) {
                    if (focusTrapFactory === void 0) {
                        focusTrapFactory = focus_trap_1.default;
                    }
                    if (listFactory === void 0) {
                        listFactory = function listFactory(el) {
                            return new component_2.MDCList(el);
                        };
                    }
                    var listEl = this.root_.querySelector("." + foundation_1.MDCListFoundation.cssClasses.ROOT);
                    if (listEl) {
                        this.list_ = listFactory(listEl);
                        this.list_.wrapFocus = true;
                    }
                    this.focusTrapFactory_ = focusTrapFactory;
                };
                MDCDrawer.prototype.initialSyncWithDOM = function() {
                    var _this = this;
                    var MODAL = cssClasses.MODAL;
                    var SCRIM_SELECTOR = strings.SCRIM_SELECTOR;
                    this.scrim_ = this.root_.parentNode.querySelector(SCRIM_SELECTOR);
                    if (this.scrim_ && this.root_.classList.contains(MODAL)) {
                        this.handleScrimClick_ = function() {
                            return _this.foundation_.handleScrimClick();
                        };
                        this.scrim_.addEventListener("click", this.handleScrimClick_);
                        this.focusTrap_ = util.createFocusTrapInstance(this.root_, this.focusTrapFactory_);
                    }
                    this.handleKeydown_ = function(evt) {
                        return _this.foundation_.handleKeydown(evt);
                    };
                    this.handleTransitionEnd_ = function(evt) {
                        return _this.foundation_.handleTransitionEnd(evt);
                    };
                    this.listen("keydown", this.handleKeydown_);
                    this.listen("transitionend", this.handleTransitionEnd_);
                };
                MDCDrawer.prototype.destroy = function() {
                    this.unlisten("keydown", this.handleKeydown_);
                    this.unlisten("transitionend", this.handleTransitionEnd_);
                    if (this.list_) {
                        this.list_.destroy();
                    }
                    var MODAL = cssClasses.MODAL;
                    if (this.scrim_ && this.handleScrimClick_ && this.root_.classList.contains(MODAL)) {
                        this.scrim_.removeEventListener("click", this.handleScrimClick_);
                        this.open = false;
                    }
                };
                MDCDrawer.prototype.getDefaultFoundation = function() {
                    var _this = this;
                    var adapter = {
                        addClass: function addClass(className) {
                            return _this.root_.classList.add(className);
                        },
                        removeClass: function removeClass(className) {
                            return _this.root_.classList.remove(className);
                        },
                        hasClass: function hasClass(className) {
                            return _this.root_.classList.contains(className);
                        },
                        elementHasClass: function elementHasClass(element, className) {
                            return element.classList.contains(className);
                        },
                        saveFocus: function saveFocus() {
                            return _this.previousFocus_ = document.activeElement;
                        },
                        restoreFocus: function restoreFocus() {
                            var previousFocus = _this.previousFocus_;
                            if (previousFocus && previousFocus.focus && _this.root_.contains(document.activeElement)) {
                                previousFocus.focus();
                            }
                        },
                        focusActiveNavigationItem: function focusActiveNavigationItem() {
                            var activeNavItemEl = _this.root_.querySelector("." + foundation_1.MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS);
                            if (activeNavItemEl) {
                                activeNavItemEl.focus();
                            }
                        },
                        notifyClose: function notifyClose() {
                            return _this.emit(strings.CLOSE_EVENT, {}, true);
                        },
                        notifyOpen: function notifyOpen() {
                            return _this.emit(strings.OPEN_EVENT, {}, true);
                        },
                        trapFocus: function trapFocus() {
                            return _this.focusTrap_.activate();
                        },
                        releaseFocus: function releaseFocus() {
                            return _this.focusTrap_.deactivate();
                        }
                    };
                    var DISMISSIBLE = cssClasses.DISMISSIBLE, MODAL = cssClasses.MODAL;
                    if (this.root_.classList.contains(DISMISSIBLE)) {
                        return new foundation_2.MDCDismissibleDrawerFoundation(adapter);
                    } else if (this.root_.classList.contains(MODAL)) {
                        return new foundation_3.MDCModalDrawerFoundation(adapter);
                    } else {
                        throw new Error("MDCDrawer: Failed to instantiate component. Supported variants are " + DISMISSIBLE + " and " + MODAL + ".");
                    }
                };
                return MDCDrawer;
            }(component_1.MDCComponent);
            exports.MDCDrawer = MDCDrawer;
        },
        114: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var cssClasses = {
                ANIMATE: "mdc-drawer--animate",
                CLOSING: "mdc-drawer--closing",
                DISMISSIBLE: "mdc-drawer--dismissible",
                MODAL: "mdc-drawer--modal",
                OPEN: "mdc-drawer--open",
                OPENING: "mdc-drawer--opening",
                ROOT: "mdc-drawer"
            };
            exports.cssClasses = cssClasses;
            var strings = {
                APP_CONTENT_SELECTOR: ".mdc-drawer-app-content",
                CLOSE_EVENT: "MDCDrawer:closed",
                OPEN_EVENT: "MDCDrawer:opened",
                SCRIM_SELECTOR: ".mdc-drawer-scrim"
            };
            exports.strings = strings;
        },
        15: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var _extendStatics = function extendStatics(d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return _extendStatics(d, b);
                };
                return function(d, b) {
                    _extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var component_1 = __webpack_require__(1);
            var ponyfill_1 = __webpack_require__(2);
            var constants_1 = __webpack_require__(10);
            var foundation_1 = __webpack_require__(7);
            var MDCList = function(_super) {
                __extends(MDCList, _super);
                function MDCList() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(MDCList.prototype, "vertical", {
                    set: function set(value) {
                        this.foundation_.setVerticalOrientation(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCList.prototype, "listElements", {
                    get: function get() {
                        return [].slice.call(this.root_.querySelectorAll("." + constants_1.cssClasses.LIST_ITEM_CLASS));
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCList.prototype, "wrapFocus", {
                    set: function set(value) {
                        this.foundation_.setWrapFocus(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCList.prototype, "singleSelection", {
                    set: function set(isSingleSelectionList) {
                        this.foundation_.setSingleSelection(isSingleSelectionList);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCList.prototype, "selectedIndex", {
                    get: function get() {
                        return this.foundation_.getSelectedIndex();
                    },
                    set: function set(index) {
                        this.foundation_.setSelectedIndex(index);
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCList.attachTo = function(root) {
                    return new MDCList(root);
                };
                MDCList.prototype.initialSyncWithDOM = function() {
                    this.handleClick_ = this.handleClickEvent_.bind(this);
                    this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
                    this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
                    this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
                    this.listen("keydown", this.handleKeydown_);
                    this.listen("click", this.handleClick_);
                    this.listen("focusin", this.focusInEventListener_);
                    this.listen("focusout", this.focusOutEventListener_);
                    this.layout();
                    this.initializeListType();
                };
                MDCList.prototype.destroy = function() {
                    this.unlisten("keydown", this.handleKeydown_);
                    this.unlisten("click", this.handleClick_);
                    this.unlisten("focusin", this.focusInEventListener_);
                    this.unlisten("focusout", this.focusOutEventListener_);
                };
                MDCList.prototype.layout = function() {
                    var direction = this.root_.getAttribute(constants_1.strings.ARIA_ORIENTATION);
                    this.vertical = direction !== constants_1.strings.ARIA_ORIENTATION_HORIZONTAL;
                    [].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(function(el) {
                        el.setAttribute("tabindex", "-1");
                    });
                    [].slice.call(this.root_.querySelectorAll(constants_1.strings.FOCUSABLE_CHILD_ELEMENTS)).forEach(function(el) {
                        return el.setAttribute("tabindex", "-1");
                    });
                    this.foundation_.layout();
                };
                MDCList.prototype.initializeListType = function() {
                    var _this = this;
                    var checkboxListItems = this.root_.querySelectorAll(constants_1.strings.ARIA_ROLE_CHECKBOX_SELECTOR);
                    var singleSelectedListItem = this.root_.querySelector("\n      ." + constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS + ",\n      ." + constants_1.cssClasses.LIST_ITEM_SELECTED_CLASS + "\n    ");
                    var radioSelectedListItem = this.root_.querySelector(constants_1.strings.ARIA_CHECKED_RADIO_SELECTOR);
                    if (checkboxListItems.length) {
                        var preselectedItems = this.root_.querySelectorAll(constants_1.strings.ARIA_CHECKED_CHECKBOX_SELECTOR);
                        this.selectedIndex = [].map.call(preselectedItems, function(listItem) {
                            return _this.listElements.indexOf(listItem);
                        });
                    } else if (singleSelectedListItem) {
                        if (singleSelectedListItem.classList.contains(constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS)) {
                            this.foundation_.setUseActivatedClass(true);
                        }
                        this.singleSelection = true;
                        this.selectedIndex = this.listElements.indexOf(singleSelectedListItem);
                    } else if (radioSelectedListItem) {
                        this.selectedIndex = this.listElements.indexOf(radioSelectedListItem);
                    }
                };
                MDCList.prototype.getDefaultFoundation = function() {
                    var _this = this;
                    var adapter = {
                        addClassForElementIndex: function addClassForElementIndex(index, className) {
                            var element = _this.listElements[index];
                            if (element) {
                                element.classList.add(className);
                            }
                        },
                        focusItemAtIndex: function focusItemAtIndex(index) {
                            var element = _this.listElements[index];
                            if (element) {
                                element.focus();
                            }
                        },
                        getAttributeForElementIndex: function getAttributeForElementIndex(index, attr) {
                            return _this.listElements[index].getAttribute(attr);
                        },
                        getFocusedElementIndex: function getFocusedElementIndex() {
                            return _this.listElements.indexOf(document.activeElement);
                        },
                        getListItemCount: function getListItemCount() {
                            return _this.listElements.length;
                        },
                        hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
                            var listItem = _this.listElements[index];
                            return !!listItem.querySelector(constants_1.strings.CHECKBOX_SELECTOR);
                        },
                        hasRadioAtIndex: function hasRadioAtIndex(index) {
                            var listItem = _this.listElements[index];
                            return !!listItem.querySelector(constants_1.strings.RADIO_SELECTOR);
                        },
                        isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
                            var listItem = _this.listElements[index];
                            var toggleEl = listItem.querySelector(constants_1.strings.CHECKBOX_SELECTOR);
                            return toggleEl.checked;
                        },
                        isFocusInsideList: function isFocusInsideList() {
                            return _this.root_.contains(document.activeElement);
                        },
                        isRootFocused: function isRootFocused() {
                            return document.activeElement === _this.root_;
                        },
                        notifyAction: function notifyAction(index) {
                            _this.emit(constants_1.strings.ACTION_EVENT, {
                                index: index
                            }, true);
                        },
                        removeClassForElementIndex: function removeClassForElementIndex(index, className) {
                            var element = _this.listElements[index];
                            if (element) {
                                element.classList.remove(className);
                            }
                        },
                        setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
                            var element = _this.listElements[index];
                            if (element) {
                                element.setAttribute(attr, value);
                            }
                        },
                        setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
                            var listItem = _this.listElements[index];
                            var toggleEl = listItem.querySelector(constants_1.strings.CHECKBOX_RADIO_SELECTOR);
                            toggleEl.checked = isChecked;
                            var event = document.createEvent("Event");
                            event.initEvent("change", true, true);
                            toggleEl.dispatchEvent(event);
                        },
                        setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
                            var element = _this.listElements[listItemIndex];
                            var listItemChildren = [].slice.call(element.querySelectorAll(constants_1.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                            listItemChildren.forEach(function(el) {
                                return el.setAttribute("tabindex", tabIndexValue);
                            });
                        }
                    };
                    return new foundation_1.MDCListFoundation(adapter);
                };
                MDCList.prototype.getListItemIndex_ = function(evt) {
                    var eventTarget = evt.target;
                    var nearestParent = ponyfill_1.closest(eventTarget, "." + constants_1.cssClasses.LIST_ITEM_CLASS + ", ." + constants_1.cssClasses.ROOT);
                    if (nearestParent && ponyfill_1.matches(nearestParent, "." + constants_1.cssClasses.LIST_ITEM_CLASS)) {
                        return this.listElements.indexOf(nearestParent);
                    }
                    return -1;
                };
                MDCList.prototype.handleFocusInEvent_ = function(evt) {
                    var index = this.getListItemIndex_(evt);
                    this.foundation_.handleFocusIn(evt, index);
                };
                MDCList.prototype.handleFocusOutEvent_ = function(evt) {
                    var index = this.getListItemIndex_(evt);
                    this.foundation_.handleFocusOut(evt, index);
                };
                MDCList.prototype.handleKeydownEvent_ = function(evt) {
                    var index = this.getListItemIndex_(evt);
                    var target = evt.target;
                    this.foundation_.handleKeydown(evt, target.classList.contains(constants_1.cssClasses.LIST_ITEM_CLASS), index);
                };
                MDCList.prototype.handleClickEvent_ = function(evt) {
                    var index = this.getListItemIndex_(evt);
                    var target = evt.target;
                    var toggleCheckbox = !ponyfill_1.matches(target, constants_1.strings.CHECKBOX_RADIO_SELECTOR);
                    this.foundation_.handleClick(index, toggleCheckbox);
                };
                return MDCList;
            }(component_1.MDCComponent);
            exports.MDCList = MDCList;
        },
        2: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            function closest(element, selector) {
                if (element.closest) {
                    return element.closest(selector);
                }
                var el = element;
                while (el) {
                    if (matches(el, selector)) {
                        return el;
                    }
                    el = el.parentElement;
                }
                return null;
            }
            exports.closest = closest;
            function matches(element, selector) {
                var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
                return nativeMatches.call(element, selector);
            }
            exports.matches = matches;
        },
        38: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var _extendStatics = function extendStatics(d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return _extendStatics(d, b);
                };
                return function(d, b) {
                    _extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            var __assign = this && this.__assign || function() {
                __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) {
                            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                        }
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var foundation_1 = __webpack_require__(0);
            var constants_1 = __webpack_require__(114);
            var MDCDismissibleDrawerFoundation = function(_super) {
                __extends(MDCDismissibleDrawerFoundation, _super);
                function MDCDismissibleDrawerFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCDismissibleDrawerFoundation.defaultAdapter, adapter)) || this;
                    _this.animationFrame_ = 0;
                    _this.animationTimer_ = 0;
                    return _this;
                }
                Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
                    get: function get() {
                        return constants_1.strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
                    get: function get() {
                        return constants_1.cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
                    get: function get() {
                        return {
                            addClass: function addClass() {
                                return undefined;
                            },
                            removeClass: function removeClass() {
                                return undefined;
                            },
                            hasClass: function hasClass() {
                                return false;
                            },
                            elementHasClass: function elementHasClass() {
                                return false;
                            },
                            notifyClose: function notifyClose() {
                                return undefined;
                            },
                            notifyOpen: function notifyOpen() {
                                return undefined;
                            },
                            saveFocus: function saveFocus() {
                                return undefined;
                            },
                            restoreFocus: function restoreFocus() {
                                return undefined;
                            },
                            focusActiveNavigationItem: function focusActiveNavigationItem() {
                                return undefined;
                            },
                            trapFocus: function trapFocus() {
                                return undefined;
                            },
                            releaseFocus: function releaseFocus() {
                                return undefined;
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCDismissibleDrawerFoundation.prototype.destroy = function() {
                    if (this.animationFrame_) {
                        cancelAnimationFrame(this.animationFrame_);
                    }
                    if (this.animationTimer_) {
                        clearTimeout(this.animationTimer_);
                    }
                };
                MDCDismissibleDrawerFoundation.prototype.open = function() {
                    var _this = this;
                    if (this.isOpen() || this.isOpening() || this.isClosing()) {
                        return;
                    }
                    this.adapter_.addClass(constants_1.cssClasses.OPEN);
                    this.adapter_.addClass(constants_1.cssClasses.ANIMATE);
                    this.runNextAnimationFrame_(function() {
                        _this.adapter_.addClass(constants_1.cssClasses.OPENING);
                    });
                    this.adapter_.saveFocus();
                };
                MDCDismissibleDrawerFoundation.prototype.close = function() {
                    if (!this.isOpen() || this.isOpening() || this.isClosing()) {
                        return;
                    }
                    this.adapter_.addClass(constants_1.cssClasses.CLOSING);
                };
                MDCDismissibleDrawerFoundation.prototype.isOpen = function() {
                    return this.adapter_.hasClass(constants_1.cssClasses.OPEN);
                };
                MDCDismissibleDrawerFoundation.prototype.isOpening = function() {
                    return this.adapter_.hasClass(constants_1.cssClasses.OPENING) || this.adapter_.hasClass(constants_1.cssClasses.ANIMATE);
                };
                MDCDismissibleDrawerFoundation.prototype.isClosing = function() {
                    return this.adapter_.hasClass(constants_1.cssClasses.CLOSING);
                };
                MDCDismissibleDrawerFoundation.prototype.handleKeydown = function(evt) {
                    var keyCode = evt.keyCode, key = evt.key;
                    var isEscape = key === "Escape" || keyCode === 27;
                    if (isEscape) {
                        this.close();
                    }
                };
                MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function(evt) {
                    var OPENING = constants_1.cssClasses.OPENING, CLOSING = constants_1.cssClasses.CLOSING, OPEN = constants_1.cssClasses.OPEN, ANIMATE = constants_1.cssClasses.ANIMATE, ROOT = constants_1.cssClasses.ROOT;
                    var isRootElement = this.isElement_(evt.target) && this.adapter_.elementHasClass(evt.target, ROOT);
                    if (!isRootElement) {
                        return;
                    }
                    if (this.isClosing()) {
                        this.adapter_.removeClass(OPEN);
                        this.closed_();
                        this.adapter_.restoreFocus();
                        this.adapter_.notifyClose();
                    } else {
                        this.adapter_.focusActiveNavigationItem();
                        this.opened_();
                        this.adapter_.notifyOpen();
                    }
                    this.adapter_.removeClass(ANIMATE);
                    this.adapter_.removeClass(OPENING);
                    this.adapter_.removeClass(CLOSING);
                };
                MDCDismissibleDrawerFoundation.prototype.opened_ = function() {};
                MDCDismissibleDrawerFoundation.prototype.closed_ = function() {};
                MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function(callback) {
                    var _this = this;
                    cancelAnimationFrame(this.animationFrame_);
                    this.animationFrame_ = requestAnimationFrame(function() {
                        _this.animationFrame_ = 0;
                        clearTimeout(_this.animationTimer_);
                        _this.animationTimer_ = setTimeout(callback, 0);
                    });
                };
                MDCDismissibleDrawerFoundation.prototype.isElement_ = function(element) {
                    return Boolean(element.classList);
                };
                return MDCDismissibleDrawerFoundation;
            }(foundation_1.MDCFoundation);
            exports.MDCDismissibleDrawerFoundation = MDCDismissibleDrawerFoundation;
            exports.default = MDCDismissibleDrawerFoundation;
        },
        58: function(module, exports, __webpack_require__) {
            "use strict";
            var __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var focus_trap_1 = __importDefault(__webpack_require__(59));
            function createFocusTrapInstance(surfaceEl, focusTrapFactory) {
                if (focusTrapFactory === void 0) {
                    focusTrapFactory = focus_trap_1.default;
                }
                return focusTrapFactory(surfaceEl, {
                    clickOutsideDeactivates: true,
                    escapeDeactivates: false,
                    initialFocus: undefined,
                    returnFocusOnDeactivate: false
                });
            }
            exports.createFocusTrapInstance = createFocusTrapInstance;
        },
        59: function(module, exports, __webpack_require__) {
            var tabbable = __webpack_require__(111);
            var xtend = __webpack_require__(112);
            var activeFocusTraps = function() {
                var trapQueue = [];
                return {
                    activateTrap: function(trap) {
                        if (trapQueue.length > 0) {
                            var activeTrap = trapQueue[trapQueue.length - 1];
                            if (activeTrap !== trap) {
                                activeTrap.pause();
                            }
                        }
                        var trapIndex = trapQueue.indexOf(trap);
                        if (trapIndex === -1) {
                            trapQueue.push(trap);
                        } else {
                            trapQueue.splice(trapIndex, 1);
                            trapQueue.push(trap);
                        }
                    },
                    deactivateTrap: function(trap) {
                        var trapIndex = trapQueue.indexOf(trap);
                        if (trapIndex !== -1) {
                            trapQueue.splice(trapIndex, 1);
                        }
                        if (trapQueue.length > 0) {
                            trapQueue[trapQueue.length - 1].unpause();
                        }
                    }
                };
            }();
            function focusTrap(element, userOptions) {
                var doc = document;
                var container = typeof element === "string" ? doc.querySelector(element) : element;
                var config = xtend({
                    returnFocusOnDeactivate: true,
                    escapeDeactivates: true
                }, userOptions);
                var state = {
                    firstTabbableNode: null,
                    lastTabbableNode: null,
                    nodeFocusedBeforeActivation: null,
                    mostRecentlyFocusedNode: null,
                    active: false,
                    paused: false
                };
                var trap = {
                    activate: activate,
                    deactivate: deactivate,
                    pause: pause,
                    unpause: unpause
                };
                return trap;
                function activate(activateOptions) {
                    if (state.active) return;
                    updateTabbableNodes();
                    state.active = true;
                    state.paused = false;
                    state.nodeFocusedBeforeActivation = doc.activeElement;
                    var onActivate = activateOptions && activateOptions.onActivate ? activateOptions.onActivate : config.onActivate;
                    if (onActivate) {
                        onActivate();
                    }
                    addListeners();
                    return trap;
                }
                function deactivate(deactivateOptions) {
                    if (!state.active) return;
                    removeListeners();
                    state.active = false;
                    state.paused = false;
                    activeFocusTraps.deactivateTrap(trap);
                    var onDeactivate = deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate;
                    if (onDeactivate) {
                        onDeactivate();
                    }
                    var returnFocus = deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate;
                    if (returnFocus) {
                        delay(function() {
                            tryFocus(state.nodeFocusedBeforeActivation);
                        });
                    }
                    return trap;
                }
                function pause() {
                    if (state.paused || !state.active) return;
                    state.paused = true;
                    removeListeners();
                }
                function unpause() {
                    if (!state.paused || !state.active) return;
                    state.paused = false;
                    updateTabbableNodes();
                    addListeners();
                }
                function addListeners() {
                    if (!state.active) return;
                    activeFocusTraps.activateTrap(trap);
                    delay(function() {
                        tryFocus(getInitialFocusNode());
                    });
                    doc.addEventListener("focusin", checkFocusIn, true);
                    doc.addEventListener("mousedown", checkPointerDown, {
                        capture: true,
                        passive: false
                    });
                    doc.addEventListener("touchstart", checkPointerDown, {
                        capture: true,
                        passive: false
                    });
                    doc.addEventListener("click", checkClick, {
                        capture: true,
                        passive: false
                    });
                    doc.addEventListener("keydown", checkKey, {
                        capture: true,
                        passive: false
                    });
                    return trap;
                }
                function removeListeners() {
                    if (!state.active) return;
                    doc.removeEventListener("focusin", checkFocusIn, true);
                    doc.removeEventListener("mousedown", checkPointerDown, true);
                    doc.removeEventListener("touchstart", checkPointerDown, true);
                    doc.removeEventListener("click", checkClick, true);
                    doc.removeEventListener("keydown", checkKey, true);
                    return trap;
                }
                function getNodeForOption(optionName) {
                    var optionValue = config[optionName];
                    var node = optionValue;
                    if (!optionValue) {
                        return null;
                    }
                    if (typeof optionValue === "string") {
                        node = doc.querySelector(optionValue);
                        if (!node) {
                            throw new Error("`" + optionName + "` refers to no known node");
                        }
                    }
                    if (typeof optionValue === "function") {
                        node = optionValue();
                        if (!node) {
                            throw new Error("`" + optionName + "` did not return a node");
                        }
                    }
                    return node;
                }
                function getInitialFocusNode() {
                    var node;
                    if (getNodeForOption("initialFocus") !== null) {
                        node = getNodeForOption("initialFocus");
                    } else if (container.contains(doc.activeElement)) {
                        node = doc.activeElement;
                    } else {
                        node = state.firstTabbableNode || getNodeForOption("fallbackFocus");
                    }
                    if (!node) {
                        throw new Error("You can't have a focus-trap without at least one focusable element");
                    }
                    return node;
                }
                function checkPointerDown(e) {
                    if (container.contains(e.target)) return;
                    if (config.clickOutsideDeactivates) {
                        deactivate({
                            returnFocus: !tabbable.isFocusable(e.target)
                        });
                    } else {
                        e.preventDefault();
                    }
                }
                function checkFocusIn(e) {
                    if (container.contains(e.target) || e.target instanceof Document) {
                        return;
                    }
                    e.stopImmediatePropagation();
                    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
                }
                function checkKey(e) {
                    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
                        e.preventDefault();
                        deactivate();
                        return;
                    }
                    if (isTabEvent(e)) {
                        checkTab(e);
                        return;
                    }
                }
                function checkTab(e) {
                    updateTabbableNodes();
                    if (e.shiftKey && e.target === state.firstTabbableNode) {
                        e.preventDefault();
                        tryFocus(state.lastTabbableNode);
                        return;
                    }
                    if (!e.shiftKey && e.target === state.lastTabbableNode) {
                        e.preventDefault();
                        tryFocus(state.firstTabbableNode);
                        return;
                    }
                }
                function checkClick(e) {
                    if (config.clickOutsideDeactivates) return;
                    if (container.contains(e.target)) return;
                    e.preventDefault();
                    e.stopImmediatePropagation();
                }
                function updateTabbableNodes() {
                    var tabbableNodes = tabbable(container);
                    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
                    state.lastTabbableNode = tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
                }
                function tryFocus(node) {
                    if (node === doc.activeElement) return;
                    if (!node || !node.focus) {
                        tryFocus(getInitialFocusNode());
                        return;
                    }
                    node.focus();
                    state.mostRecentlyFocusedNode = node;
                    if (isSelectableInput(node)) {
                        node.select();
                    }
                }
            }
            function isSelectableInput(node) {
                return node.tagName && node.tagName.toLowerCase() === "input" && typeof node.select === "function";
            }
            function isEscapeEvent(e) {
                return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
            }
            function isTabEvent(e) {
                return e.key === "Tab" || e.keyCode === 9;
            }
            function delay(fn) {
                return setTimeout(fn, 0);
            }
            module.exports = focusTrap;
        },
        60: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var _extendStatics = function extendStatics(d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return _extendStatics(d, b);
                };
                return function(d, b) {
                    _extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var foundation_1 = __webpack_require__(38);
            var MDCModalDrawerFoundation = function(_super) {
                __extends(MDCModalDrawerFoundation, _super);
                function MDCModalDrawerFoundation() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MDCModalDrawerFoundation.prototype.handleScrimClick = function() {
                    this.close();
                };
                MDCModalDrawerFoundation.prototype.opened_ = function() {
                    this.adapter_.trapFocus();
                };
                MDCModalDrawerFoundation.prototype.closed_ = function() {
                    this.adapter_.releaseFocus();
                };
                return MDCModalDrawerFoundation;
            }(foundation_1.MDCDismissibleDrawerFoundation);
            exports.MDCModalDrawerFoundation = MDCModalDrawerFoundation;
            exports.default = MDCModalDrawerFoundation;
        },
        7: function(module, exports, __webpack_require__) {
            "use strict";
            var __extends = this && this.__extends || function() {
                var _extendStatics = function extendStatics(d, b) {
                    _extendStatics = Object.setPrototypeOf || {
                        __proto__: []
                    } instanceof Array && function(d, b) {
                        d.__proto__ = b;
                    } || function(d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return _extendStatics(d, b);
                };
                return function(d, b) {
                    _extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            var __assign = this && this.__assign || function() {
                __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s) {
                            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                        }
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var foundation_1 = __webpack_require__(0);
            var constants_1 = __webpack_require__(10);
            var ELEMENTS_KEY_ALLOWED_IN = [ "input", "button", "textarea", "select" ];
            function isNumberArray(selectedIndex) {
                return selectedIndex instanceof Array;
            }
            var MDCListFoundation = function(_super) {
                __extends(MDCListFoundation, _super);
                function MDCListFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCListFoundation.defaultAdapter, adapter)) || this;
                    _this.wrapFocus_ = false;
                    _this.isVertical_ = true;
                    _this.isSingleSelectionList_ = false;
                    _this.selectedIndex_ = constants_1.numbers.UNSET_INDEX;
                    _this.focusedItemIndex_ = constants_1.numbers.UNSET_INDEX;
                    _this.useActivatedClass_ = false;
                    _this.ariaCurrentAttrValue_ = null;
                    _this.isCheckboxList_ = false;
                    _this.isRadioList_ = false;
                    return _this;
                }
                Object.defineProperty(MDCListFoundation, "strings", {
                    get: function get() {
                        return constants_1.strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCListFoundation, "cssClasses", {
                    get: function get() {
                        return constants_1.cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCListFoundation, "numbers", {
                    get: function get() {
                        return constants_1.numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCListFoundation, "defaultAdapter", {
                    get: function get() {
                        return {
                            addClassForElementIndex: function addClassForElementIndex() {
                                return undefined;
                            },
                            focusItemAtIndex: function focusItemAtIndex() {
                                return undefined;
                            },
                            getAttributeForElementIndex: function getAttributeForElementIndex() {
                                return null;
                            },
                            getFocusedElementIndex: function getFocusedElementIndex() {
                                return 0;
                            },
                            getListItemCount: function getListItemCount() {
                                return 0;
                            },
                            hasCheckboxAtIndex: function hasCheckboxAtIndex() {
                                return false;
                            },
                            hasRadioAtIndex: function hasRadioAtIndex() {
                                return false;
                            },
                            isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {
                                return false;
                            },
                            isFocusInsideList: function isFocusInsideList() {
                                return false;
                            },
                            isRootFocused: function isRootFocused() {
                                return false;
                            },
                            notifyAction: function notifyAction() {
                                return undefined;
                            },
                            removeClassForElementIndex: function removeClassForElementIndex() {
                                return undefined;
                            },
                            setAttributeForElementIndex: function setAttributeForElementIndex() {
                                return undefined;
                            },
                            setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {
                                return undefined;
                            },
                            setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {
                                return undefined;
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCListFoundation.prototype.layout = function() {
                    if (this.adapter_.getListItemCount() === 0) {
                        return;
                    }
                    if (this.adapter_.hasCheckboxAtIndex(0)) {
                        this.isCheckboxList_ = true;
                    } else if (this.adapter_.hasRadioAtIndex(0)) {
                        this.isRadioList_ = true;
                    }
                };
                MDCListFoundation.prototype.setWrapFocus = function(value) {
                    this.wrapFocus_ = value;
                };
                MDCListFoundation.prototype.setVerticalOrientation = function(value) {
                    this.isVertical_ = value;
                };
                MDCListFoundation.prototype.setSingleSelection = function(value) {
                    this.isSingleSelectionList_ = value;
                };
                MDCListFoundation.prototype.setUseActivatedClass = function(useActivated) {
                    this.useActivatedClass_ = useActivated;
                };
                MDCListFoundation.prototype.getSelectedIndex = function() {
                    return this.selectedIndex_;
                };
                MDCListFoundation.prototype.setSelectedIndex = function(index) {
                    if (!this.isIndexValid_(index)) {
                        return;
                    }
                    if (this.isCheckboxList_) {
                        this.setCheckboxAtIndex_(index);
                    } else if (this.isRadioList_) {
                        this.setRadioAtIndex_(index);
                    } else {
                        this.setSingleSelectionAtIndex_(index);
                    }
                };
                MDCListFoundation.prototype.handleFocusIn = function(_, listItemIndex) {
                    if (listItemIndex >= 0) {
                        this.adapter_.setTabIndexForListItemChildren(listItemIndex, "0");
                    }
                };
                MDCListFoundation.prototype.handleFocusOut = function(_, listItemIndex) {
                    var _this = this;
                    if (listItemIndex >= 0) {
                        this.adapter_.setTabIndexForListItemChildren(listItemIndex, "-1");
                    }
                    setTimeout(function() {
                        if (!_this.adapter_.isFocusInsideList()) {
                            _this.setTabindexToFirstSelectedItem_();
                        }
                    }, 0);
                };
                MDCListFoundation.prototype.handleKeydown = function(evt, isRootListItem, listItemIndex) {
                    var isArrowLeft = evt.key === "ArrowLeft" || evt.keyCode === 37;
                    var isArrowUp = evt.key === "ArrowUp" || evt.keyCode === 38;
                    var isArrowRight = evt.key === "ArrowRight" || evt.keyCode === 39;
                    var isArrowDown = evt.key === "ArrowDown" || evt.keyCode === 40;
                    var isHome = evt.key === "Home" || evt.keyCode === 36;
                    var isEnd = evt.key === "End" || evt.keyCode === 35;
                    var isEnter = evt.key === "Enter" || evt.keyCode === 13;
                    var isSpace = evt.key === "Space" || evt.keyCode === 32;
                    if (this.adapter_.isRootFocused()) {
                        if (isArrowUp || isEnd) {
                            evt.preventDefault();
                            this.focusLastElement();
                        } else if (isArrowDown || isHome) {
                            evt.preventDefault();
                            this.focusFirstElement();
                        }
                        return;
                    }
                    var currentIndex = this.adapter_.getFocusedElementIndex();
                    if (currentIndex === -1) {
                        currentIndex = listItemIndex;
                        if (currentIndex < 0) {
                            return;
                        }
                    }
                    var nextIndex;
                    if (this.isVertical_ && isArrowDown || !this.isVertical_ && isArrowRight) {
                        this.preventDefaultEvent_(evt);
                        nextIndex = this.focusNextElement(currentIndex);
                    } else if (this.isVertical_ && isArrowUp || !this.isVertical_ && isArrowLeft) {
                        this.preventDefaultEvent_(evt);
                        nextIndex = this.focusPrevElement(currentIndex);
                    } else if (isHome) {
                        this.preventDefaultEvent_(evt);
                        nextIndex = this.focusFirstElement();
                    } else if (isEnd) {
                        this.preventDefaultEvent_(evt);
                        nextIndex = this.focusLastElement();
                    } else if (isEnter || isSpace) {
                        if (isRootListItem) {
                            var target = evt.target;
                            if (target && target.tagName === "A" && isEnter) {
                                return;
                            }
                            this.preventDefaultEvent_(evt);
                            if (this.isSelectableList_()) {
                                this.setSelectedIndexOnAction_(currentIndex);
                            }
                            this.adapter_.notifyAction(currentIndex);
                        }
                    }
                    this.focusedItemIndex_ = currentIndex;
                    if (nextIndex !== undefined) {
                        this.setTabindexAtIndex_(nextIndex);
                        this.focusedItemIndex_ = nextIndex;
                    }
                };
                MDCListFoundation.prototype.handleClick = function(index, toggleCheckbox) {
                    if (index === constants_1.numbers.UNSET_INDEX) {
                        return;
                    }
                    if (this.isSelectableList_()) {
                        this.setSelectedIndexOnAction_(index, toggleCheckbox);
                    }
                    this.adapter_.notifyAction(index);
                    this.setTabindexAtIndex_(index);
                    this.focusedItemIndex_ = index;
                };
                MDCListFoundation.prototype.focusNextElement = function(index) {
                    var count = this.adapter_.getListItemCount();
                    var nextIndex = index + 1;
                    if (nextIndex >= count) {
                        if (this.wrapFocus_) {
                            nextIndex = 0;
                        } else {
                            return index;
                        }
                    }
                    this.adapter_.focusItemAtIndex(nextIndex);
                    return nextIndex;
                };
                MDCListFoundation.prototype.focusPrevElement = function(index) {
                    var prevIndex = index - 1;
                    if (prevIndex < 0) {
                        if (this.wrapFocus_) {
                            prevIndex = this.adapter_.getListItemCount() - 1;
                        } else {
                            return index;
                        }
                    }
                    this.adapter_.focusItemAtIndex(prevIndex);
                    return prevIndex;
                };
                MDCListFoundation.prototype.focusFirstElement = function() {
                    this.adapter_.focusItemAtIndex(0);
                    return 0;
                };
                MDCListFoundation.prototype.focusLastElement = function() {
                    var lastIndex = this.adapter_.getListItemCount() - 1;
                    this.adapter_.focusItemAtIndex(lastIndex);
                    return lastIndex;
                };
                MDCListFoundation.prototype.preventDefaultEvent_ = function(evt) {
                    var target = evt.target;
                    var tagName = ("" + target.tagName).toLowerCase();
                    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
                        evt.preventDefault();
                    }
                };
                MDCListFoundation.prototype.setSingleSelectionAtIndex_ = function(index) {
                    if (this.selectedIndex_ === index) {
                        return;
                    }
                    var selectedClassName = constants_1.cssClasses.LIST_ITEM_SELECTED_CLASS;
                    if (this.useActivatedClass_) {
                        selectedClassName = constants_1.cssClasses.LIST_ITEM_ACTIVATED_CLASS;
                    }
                    if (this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
                        this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
                    }
                    this.adapter_.addClassForElementIndex(index, selectedClassName);
                    this.setAriaForSingleSelectionAtIndex_(index);
                    this.selectedIndex_ = index;
                };
                MDCListFoundation.prototype.setAriaForSingleSelectionAtIndex_ = function(index) {
                    if (this.selectedIndex_ === constants_1.numbers.UNSET_INDEX) {
                        this.ariaCurrentAttrValue_ = this.adapter_.getAttributeForElementIndex(index, constants_1.strings.ARIA_CURRENT);
                    }
                    var isAriaCurrent = this.ariaCurrentAttrValue_ !== null;
                    var ariaAttribute = isAriaCurrent ? constants_1.strings.ARIA_CURRENT : constants_1.strings.ARIA_SELECTED;
                    if (this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
                        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, ariaAttribute, "false");
                    }
                    var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue_ : "true";
                    this.adapter_.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
                };
                MDCListFoundation.prototype.setRadioAtIndex_ = function(index) {
                    this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, true);
                    if (this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
                        this.adapter_.setAttributeForElementIndex(this.selectedIndex_, constants_1.strings.ARIA_CHECKED, "false");
                    }
                    this.adapter_.setAttributeForElementIndex(index, constants_1.strings.ARIA_CHECKED, "true");
                    this.selectedIndex_ = index;
                };
                MDCListFoundation.prototype.setCheckboxAtIndex_ = function(index) {
                    for (var i = 0; i < this.adapter_.getListItemCount(); i++) {
                        var isChecked = false;
                        if (index.indexOf(i) >= 0) {
                            isChecked = true;
                        }
                        this.adapter_.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
                        this.adapter_.setAttributeForElementIndex(i, constants_1.strings.ARIA_CHECKED, isChecked ? "true" : "false");
                    }
                    this.selectedIndex_ = index;
                };
                MDCListFoundation.prototype.setTabindexAtIndex_ = function(index) {
                    if (this.focusedItemIndex_ === constants_1.numbers.UNSET_INDEX && index !== 0) {
                        this.adapter_.setAttributeForElementIndex(0, "tabindex", "-1");
                    } else if (this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== index) {
                        this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_, "tabindex", "-1");
                    }
                    this.adapter_.setAttributeForElementIndex(index, "tabindex", "0");
                };
                MDCListFoundation.prototype.isSelectableList_ = function() {
                    return this.isSingleSelectionList_ || this.isCheckboxList_ || this.isRadioList_;
                };
                MDCListFoundation.prototype.setTabindexToFirstSelectedItem_ = function() {
                    var targetIndex = 0;
                    if (this.isSelectableList_()) {
                        if (typeof this.selectedIndex_ === "number" && this.selectedIndex_ !== constants_1.numbers.UNSET_INDEX) {
                            targetIndex = this.selectedIndex_;
                        } else if (isNumberArray(this.selectedIndex_) && this.selectedIndex_.length > 0) {
                            targetIndex = this.selectedIndex_.reduce(function(currentIndex, minIndex) {
                                return Math.min(currentIndex, minIndex);
                            });
                        }
                    }
                    this.setTabindexAtIndex_(targetIndex);
                };
                MDCListFoundation.prototype.isIndexValid_ = function(index) {
                    var _this = this;
                    if (index instanceof Array) {
                        if (!this.isCheckboxList_) {
                            throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
                        }
                        if (index.length === 0) {
                            return true;
                        } else {
                            return index.some(function(i) {
                                return _this.isIndexInRange_(i);
                            });
                        }
                    } else if (typeof index === "number") {
                        if (this.isCheckboxList_) {
                            throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
                        }
                        return this.isIndexInRange_(index);
                    } else {
                        return false;
                    }
                };
                MDCListFoundation.prototype.isIndexInRange_ = function(index) {
                    var listSize = this.adapter_.getListItemCount();
                    return index >= 0 && index < listSize;
                };
                MDCListFoundation.prototype.setSelectedIndexOnAction_ = function(index, toggleCheckbox) {
                    if (toggleCheckbox === void 0) {
                        toggleCheckbox = true;
                    }
                    if (this.isCheckboxList_) {
                        this.toggleCheckboxAtIndex_(index, toggleCheckbox);
                    } else {
                        this.setSelectedIndex(index);
                    }
                };
                MDCListFoundation.prototype.toggleCheckboxAtIndex_ = function(index, toggleCheckbox) {
                    var isChecked = this.adapter_.isCheckboxCheckedAtIndex(index);
                    if (toggleCheckbox) {
                        isChecked = !isChecked;
                        this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
                    }
                    this.adapter_.setAttributeForElementIndex(index, constants_1.strings.ARIA_CHECKED, isChecked ? "true" : "false");
                    var selectedIndexes = this.selectedIndex_ === constants_1.numbers.UNSET_INDEX ? [] : this.selectedIndex_.slice();
                    if (isChecked) {
                        selectedIndexes.push(index);
                    } else {
                        selectedIndexes = selectedIndexes.filter(function(i) {
                            return i !== index;
                        });
                    }
                    this.selectedIndex_ = selectedIndexes;
                };
                return MDCListFoundation;
            }(foundation_1.MDCFoundation);
            exports.MDCListFoundation = MDCListFoundation;
            exports.default = MDCListFoundation;
        }
    });
});
//# sourceMappingURL=mdc.drawer.js.map