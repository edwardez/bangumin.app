/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") module.exports = factory(); else if (typeof define === "function" && define.amd) define([], factory); else if (typeof exports === "object") exports["ripple"] = factory(); else root["mdc"] = root["mdc"] || {}, 
    root["mdc"]["ripple"] = factory();
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
        return __webpack_require__(__webpack_require__.s = 136);
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
        136: function(module, exports, __webpack_require__) {
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
            var util = __importStar(__webpack_require__(3));
            exports.util = util;
            __export(__webpack_require__(5));
            __export(__webpack_require__(4));
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
        3: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var supportsCssVariables_;
            var supportsPassive_;
            function detectEdgePseudoVarBug(windowObj) {
                var document = windowObj.document;
                var node = document.createElement("div");
                node.className = "mdc-ripple-surface--test-edge-var-bug";
                document.body.appendChild(node);
                var computedStyle = windowObj.getComputedStyle(node);
                var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === "solid";
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                return hasPseudoVarBug;
            }
            function supportsCssVariables(windowObj, forceRefresh) {
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                var CSS = windowObj.CSS;
                var supportsCssVars = supportsCssVariables_;
                if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
                    return supportsCssVariables_;
                }
                var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
                if (!supportsFunctionPresent) {
                    return false;
                }
                var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
                var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
                if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
                    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
                } else {
                    supportsCssVars = false;
                }
                if (!forceRefresh) {
                    supportsCssVariables_ = supportsCssVars;
                }
                return supportsCssVars;
            }
            exports.supportsCssVariables = supportsCssVariables;
            function applyPassive(globalObj, forceRefresh) {
                if (globalObj === void 0) {
                    globalObj = window;
                }
                if (forceRefresh === void 0) {
                    forceRefresh = false;
                }
                if (supportsPassive_ === undefined || forceRefresh) {
                    var isSupported_1 = false;
                    try {
                        globalObj.document.addEventListener("test", function() {
                            return undefined;
                        }, {
                            get passive() {
                                isSupported_1 = true;
                                return isSupported_1;
                            }
                        });
                    } catch (e) {}
                    supportsPassive_ = isSupported_1;
                }
                return supportsPassive_ ? {
                    passive: true
                } : false;
            }
            exports.applyPassive = applyPassive;
            function getNormalizedEventCoords(evt, pageOffset, clientRect) {
                if (!evt) {
                    return {
                        x: 0,
                        y: 0
                    };
                }
                var x = pageOffset.x, y = pageOffset.y;
                var documentX = x + clientRect.left;
                var documentY = y + clientRect.top;
                var normalizedX;
                var normalizedY;
                if (evt.type === "touchstart") {
                    var touchEvent = evt;
                    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
                    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
                } else {
                    var mouseEvent = evt;
                    normalizedX = mouseEvent.pageX - documentX;
                    normalizedY = mouseEvent.pageY - documentY;
                }
                return {
                    x: normalizedX,
                    y: normalizedY
                };
            }
            exports.getNormalizedEventCoords = getNormalizedEventCoords;
        },
        4: function(module, exports, __webpack_require__) {
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
            var constants_1 = __webpack_require__(6);
            var util_1 = __webpack_require__(3);
            var ACTIVATION_EVENT_TYPES = [ "touchstart", "pointerdown", "mousedown", "keydown" ];
            var POINTER_DEACTIVATION_EVENT_TYPES = [ "touchend", "pointerup", "mouseup", "contextmenu" ];
            var activatedTargets = [];
            var MDCRippleFoundation = function(_super) {
                __extends(MDCRippleFoundation, _super);
                function MDCRippleFoundation(adapter) {
                    var _this = _super.call(this, __assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
                    _this.activationAnimationHasEnded_ = false;
                    _this.activationTimer_ = 0;
                    _this.fgDeactivationRemovalTimer_ = 0;
                    _this.fgScale_ = "0";
                    _this.frame_ = {
                        width: 0,
                        height: 0
                    };
                    _this.initialSize_ = 0;
                    _this.layoutFrame_ = 0;
                    _this.maxRadius_ = 0;
                    _this.unboundedCoords_ = {
                        left: 0,
                        top: 0
                    };
                    _this.activationState_ = _this.defaultActivationState_();
                    _this.activationTimerCallback_ = function() {
                        _this.activationAnimationHasEnded_ = true;
                        _this.runDeactivationUXLogicIfReady_();
                    };
                    _this.activateHandler_ = function(e) {
                        return _this.activate_(e);
                    };
                    _this.deactivateHandler_ = function() {
                        return _this.deactivate_();
                    };
                    _this.focusHandler_ = function() {
                        return _this.handleFocus();
                    };
                    _this.blurHandler_ = function() {
                        return _this.handleBlur();
                    };
                    _this.resizeHandler_ = function() {
                        return _this.layout();
                    };
                    return _this;
                }
                Object.defineProperty(MDCRippleFoundation, "cssClasses", {
                    get: function get() {
                        return constants_1.cssClasses;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "strings", {
                    get: function get() {
                        return constants_1.strings;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "numbers", {
                    get: function get() {
                        return constants_1.numbers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
                    get: function get() {
                        return {
                            addClass: function addClass() {
                                return undefined;
                            },
                            browserSupportsCssVars: function browserSupportsCssVars() {
                                return true;
                            },
                            computeBoundingRect: function computeBoundingRect() {
                                return {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                                    width: 0,
                                    height: 0
                                };
                            },
                            containsEventTarget: function containsEventTarget() {
                                return true;
                            },
                            deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
                                return undefined;
                            },
                            deregisterInteractionHandler: function deregisterInteractionHandler() {
                                return undefined;
                            },
                            deregisterResizeHandler: function deregisterResizeHandler() {
                                return undefined;
                            },
                            getWindowPageOffset: function getWindowPageOffset() {
                                return {
                                    x: 0,
                                    y: 0
                                };
                            },
                            isSurfaceActive: function isSurfaceActive() {
                                return true;
                            },
                            isSurfaceDisabled: function isSurfaceDisabled() {
                                return true;
                            },
                            isUnbounded: function isUnbounded() {
                                return true;
                            },
                            registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
                                return undefined;
                            },
                            registerInteractionHandler: function registerInteractionHandler() {
                                return undefined;
                            },
                            registerResizeHandler: function registerResizeHandler() {
                                return undefined;
                            },
                            removeClass: function removeClass() {
                                return undefined;
                            },
                            updateCssVariable: function updateCssVariable() {
                                return undefined;
                            }
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRippleFoundation.prototype.init = function() {
                    var _this = this;
                    var supportsPressRipple = this.supportsPressRipple_();
                    this.registerRootHandlers_(supportsPressRipple);
                    if (supportsPressRipple) {
                        var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
                        requestAnimationFrame(function() {
                            _this.adapter_.addClass(ROOT_1);
                            if (_this.adapter_.isUnbounded()) {
                                _this.adapter_.addClass(UNBOUNDED_1);
                                _this.layoutInternal_();
                            }
                        });
                    }
                };
                MDCRippleFoundation.prototype.destroy = function() {
                    var _this = this;
                    if (this.supportsPressRipple_()) {
                        if (this.activationTimer_) {
                            clearTimeout(this.activationTimer_);
                            this.activationTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                        }
                        if (this.fgDeactivationRemovalTimer_) {
                            clearTimeout(this.fgDeactivationRemovalTimer_);
                            this.fgDeactivationRemovalTimer_ = 0;
                            this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                        }
                        var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
                        requestAnimationFrame(function() {
                            _this.adapter_.removeClass(ROOT_2);
                            _this.adapter_.removeClass(UNBOUNDED_2);
                            _this.removeCssVars_();
                        });
                    }
                    this.deregisterRootHandlers_();
                    this.deregisterDeactivationHandlers_();
                };
                MDCRippleFoundation.prototype.activate = function(evt) {
                    this.activate_(evt);
                };
                MDCRippleFoundation.prototype.deactivate = function() {
                    this.deactivate_();
                };
                MDCRippleFoundation.prototype.layout = function() {
                    var _this = this;
                    if (this.layoutFrame_) {
                        cancelAnimationFrame(this.layoutFrame_);
                    }
                    this.layoutFrame_ = requestAnimationFrame(function() {
                        _this.layoutInternal_();
                        _this.layoutFrame_ = 0;
                    });
                };
                MDCRippleFoundation.prototype.setUnbounded = function(unbounded) {
                    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
                    if (unbounded) {
                        this.adapter_.addClass(UNBOUNDED);
                    } else {
                        this.adapter_.removeClass(UNBOUNDED);
                    }
                };
                MDCRippleFoundation.prototype.handleFocus = function() {
                    var _this = this;
                    requestAnimationFrame(function() {
                        return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                MDCRippleFoundation.prototype.handleBlur = function() {
                    var _this = this;
                    requestAnimationFrame(function() {
                        return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                    });
                };
                MDCRippleFoundation.prototype.supportsPressRipple_ = function() {
                    return this.adapter_.browserSupportsCssVars();
                };
                MDCRippleFoundation.prototype.defaultActivationState_ = function() {
                    return {
                        activationEvent: undefined,
                        hasDeactivationUXRun: false,
                        isActivated: false,
                        isProgrammatic: false,
                        wasActivatedByPointer: false,
                        wasElementMadeActive: false
                    };
                };
                MDCRippleFoundation.prototype.registerRootHandlers_ = function(supportsPressRipple) {
                    var _this = this;
                    if (supportsPressRipple) {
                        ACTIVATION_EVENT_TYPES.forEach(function(evtType) {
                            _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
                        });
                        if (this.adapter_.isUnbounded()) {
                            this.adapter_.registerResizeHandler(this.resizeHandler_);
                        }
                    }
                    this.adapter_.registerInteractionHandler("focus", this.focusHandler_);
                    this.adapter_.registerInteractionHandler("blur", this.blurHandler_);
                };
                MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function(evt) {
                    var _this = this;
                    if (evt.type === "keydown") {
                        this.adapter_.registerInteractionHandler("keyup", this.deactivateHandler_);
                    } else {
                        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(evtType) {
                            _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                        });
                    }
                };
                MDCRippleFoundation.prototype.deregisterRootHandlers_ = function() {
                    var _this = this;
                    ACTIVATION_EVENT_TYPES.forEach(function(evtType) {
                        _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
                    });
                    this.adapter_.deregisterInteractionHandler("focus", this.focusHandler_);
                    this.adapter_.deregisterInteractionHandler("blur", this.blurHandler_);
                    if (this.adapter_.isUnbounded()) {
                        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
                    }
                };
                MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function() {
                    var _this = this;
                    this.adapter_.deregisterInteractionHandler("keyup", this.deactivateHandler_);
                    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function(evtType) {
                        _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                    });
                };
                MDCRippleFoundation.prototype.removeCssVars_ = function() {
                    var _this = this;
                    var rippleStrings = MDCRippleFoundation.strings;
                    var keys = Object.keys(rippleStrings);
                    keys.forEach(function(key) {
                        if (key.indexOf("VAR_") === 0) {
                            _this.adapter_.updateCssVariable(rippleStrings[key], null);
                        }
                    });
                };
                MDCRippleFoundation.prototype.activate_ = function(evt) {
                    var _this = this;
                    if (this.adapter_.isSurfaceDisabled()) {
                        return;
                    }
                    var activationState = this.activationState_;
                    if (activationState.isActivated) {
                        return;
                    }
                    var previousActivationEvent = this.previousActivationEvent_;
                    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
                    if (isSameInteraction) {
                        return;
                    }
                    activationState.isActivated = true;
                    activationState.isProgrammatic = evt === undefined;
                    activationState.activationEvent = evt;
                    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
                    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function(target) {
                        return _this.adapter_.containsEventTarget(target);
                    });
                    if (hasActivatedChild) {
                        this.resetActivationState_();
                        return;
                    }
                    if (evt !== undefined) {
                        activatedTargets.push(evt.target);
                        this.registerDeactivationHandlers_(evt);
                    }
                    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
                    if (activationState.wasElementMadeActive) {
                        this.animateActivation_();
                    }
                    requestAnimationFrame(function() {
                        activatedTargets = [];
                        if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === " " || evt.keyCode === 32)) {
                            activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                            if (activationState.wasElementMadeActive) {
                                _this.animateActivation_();
                            }
                        }
                        if (!activationState.wasElementMadeActive) {
                            _this.activationState_ = _this.defaultActivationState_();
                        }
                    });
                };
                MDCRippleFoundation.prototype.checkElementMadeActive_ = function(evt) {
                    return evt !== undefined && evt.type === "keydown" ? this.adapter_.isSurfaceActive() : true;
                };
                MDCRippleFoundation.prototype.animateActivation_ = function() {
                    var _this = this;
                    var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
                    var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
                    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
                    this.layoutInternal_();
                    var translateStart = "";
                    var translateEnd = "";
                    if (!this.adapter_.isUnbounded()) {
                        var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
                        translateStart = startPoint.x + "px, " + startPoint.y + "px";
                        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
                    }
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
                    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
                    clearTimeout(this.activationTimer_);
                    clearTimeout(this.fgDeactivationRemovalTimer_);
                    this.rmBoundedActivationClasses_();
                    this.adapter_.removeClass(FG_DEACTIVATION);
                    this.adapter_.computeBoundingRect();
                    this.adapter_.addClass(FG_ACTIVATION);
                    this.activationTimer_ = setTimeout(function() {
                        return _this.activationTimerCallback_();
                    }, DEACTIVATION_TIMEOUT_MS);
                };
                MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function() {
                    var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
                    var startPoint;
                    if (wasActivatedByPointer) {
                        startPoint = util_1.getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
                    } else {
                        startPoint = {
                            x: this.frame_.width / 2,
                            y: this.frame_.height / 2
                        };
                    }
                    startPoint = {
                        x: startPoint.x - this.initialSize_ / 2,
                        y: startPoint.y - this.initialSize_ / 2
                    };
                    var endPoint = {
                        x: this.frame_.width / 2 - this.initialSize_ / 2,
                        y: this.frame_.height / 2 - this.initialSize_ / 2
                    };
                    return {
                        startPoint: startPoint,
                        endPoint: endPoint
                    };
                };
                MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function() {
                    var _this = this;
                    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
                    var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
                    var activationHasEnded = hasDeactivationUXRun || !isActivated;
                    if (activationHasEnded && this.activationAnimationHasEnded_) {
                        this.rmBoundedActivationClasses_();
                        this.adapter_.addClass(FG_DEACTIVATION);
                        this.fgDeactivationRemovalTimer_ = setTimeout(function() {
                            _this.adapter_.removeClass(FG_DEACTIVATION);
                        }, constants_1.numbers.FG_DEACTIVATION_MS);
                    }
                };
                MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function() {
                    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
                    this.adapter_.removeClass(FG_ACTIVATION);
                    this.activationAnimationHasEnded_ = false;
                    this.adapter_.computeBoundingRect();
                };
                MDCRippleFoundation.prototype.resetActivationState_ = function() {
                    var _this = this;
                    this.previousActivationEvent_ = this.activationState_.activationEvent;
                    this.activationState_ = this.defaultActivationState_();
                    setTimeout(function() {
                        return _this.previousActivationEvent_ = undefined;
                    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
                };
                MDCRippleFoundation.prototype.deactivate_ = function() {
                    var _this = this;
                    var activationState = this.activationState_;
                    if (!activationState.isActivated) {
                        return;
                    }
                    var state = __assign({}, activationState);
                    if (activationState.isProgrammatic) {
                        requestAnimationFrame(function() {
                            return _this.animateDeactivation_(state);
                        });
                        this.resetActivationState_();
                    } else {
                        this.deregisterDeactivationHandlers_();
                        requestAnimationFrame(function() {
                            _this.activationState_.hasDeactivationUXRun = true;
                            _this.animateDeactivation_(state);
                            _this.resetActivationState_();
                        });
                    }
                };
                MDCRippleFoundation.prototype.animateDeactivation_ = function(_a) {
                    var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
                    if (wasActivatedByPointer || wasElementMadeActive) {
                        this.runDeactivationUXLogicIfReady_();
                    }
                };
                MDCRippleFoundation.prototype.layoutInternal_ = function() {
                    var _this = this;
                    this.frame_ = this.adapter_.computeBoundingRect();
                    var maxDim = Math.max(this.frame_.height, this.frame_.width);
                    var getBoundedRadius = function getBoundedRadius() {
                        var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
                        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
                    };
                    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
                    this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
                    this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
                    this.updateLayoutCssVars_();
                };
                MDCRippleFoundation.prototype.updateLayoutCssVars_ = function() {
                    var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
                    this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
                    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
                    if (this.adapter_.isUnbounded()) {
                        this.unboundedCoords_ = {
                            left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                            top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                        };
                        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
                        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
                    }
                };
                return MDCRippleFoundation;
            }(foundation_1.MDCFoundation);
            exports.MDCRippleFoundation = MDCRippleFoundation;
            exports.default = MDCRippleFoundation;
        },
        5: function(module, exports, __webpack_require__) {
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
            var ponyfill_1 = __webpack_require__(2);
            var foundation_1 = __webpack_require__(4);
            var util = __importStar(__webpack_require__(3));
            var MDCRipple = function(_super) {
                __extends(MDCRipple, _super);
                function MDCRipple() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.disabled = false;
                    return _this;
                }
                MDCRipple.attachTo = function(root, opts) {
                    if (opts === void 0) {
                        opts = {
                            isUnbounded: undefined
                        };
                    }
                    var ripple = new MDCRipple(root);
                    if (opts.isUnbounded !== undefined) {
                        ripple.unbounded = opts.isUnbounded;
                    }
                    return ripple;
                };
                MDCRipple.createAdapter = function(instance) {
                    return {
                        addClass: function addClass(className) {
                            return instance.root_.classList.add(className);
                        },
                        browserSupportsCssVars: function browserSupportsCssVars() {
                            return util.supportsCssVariables(window);
                        },
                        computeBoundingRect: function computeBoundingRect() {
                            return instance.root_.getBoundingClientRect();
                        },
                        containsEventTarget: function containsEventTarget(target) {
                            return instance.root_.contains(target);
                        },
                        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                            return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
                        },
                        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                            return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
                        },
                        deregisterResizeHandler: function deregisterResizeHandler(handler) {
                            return window.removeEventListener("resize", handler);
                        },
                        getWindowPageOffset: function getWindowPageOffset() {
                            return {
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            };
                        },
                        isSurfaceActive: function isSurfaceActive() {
                            return ponyfill_1.matches(instance.root_, ":active");
                        },
                        isSurfaceDisabled: function isSurfaceDisabled() {
                            return Boolean(instance.disabled);
                        },
                        isUnbounded: function isUnbounded() {
                            return Boolean(instance.unbounded);
                        },
                        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                            return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
                        },
                        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                            return instance.root_.addEventListener(evtType, handler, util.applyPassive());
                        },
                        registerResizeHandler: function registerResizeHandler(handler) {
                            return window.addEventListener("resize", handler);
                        },
                        removeClass: function removeClass(className) {
                            return instance.root_.classList.remove(className);
                        },
                        updateCssVariable: function updateCssVariable(varName, value) {
                            return instance.root_.style.setProperty(varName, value);
                        }
                    };
                };
                Object.defineProperty(MDCRipple.prototype, "unbounded", {
                    get: function get() {
                        return Boolean(this.unbounded_);
                    },
                    set: function set(unbounded) {
                        this.unbounded_ = Boolean(unbounded);
                        this.setUnbounded_();
                    },
                    enumerable: true,
                    configurable: true
                });
                MDCRipple.prototype.activate = function() {
                    this.foundation_.activate();
                };
                MDCRipple.prototype.deactivate = function() {
                    this.foundation_.deactivate();
                };
                MDCRipple.prototype.layout = function() {
                    this.foundation_.layout();
                };
                MDCRipple.prototype.getDefaultFoundation = function() {
                    return new foundation_1.MDCRippleFoundation(MDCRipple.createAdapter(this));
                };
                MDCRipple.prototype.initialSyncWithDOM = function() {
                    var root = this.root_;
                    this.unbounded = "mdcRippleIsUnbounded" in root.dataset;
                };
                MDCRipple.prototype.setUnbounded_ = function() {
                    this.foundation_.setUnbounded(Boolean(this.unbounded_));
                };
                return MDCRipple;
            }(component_1.MDCComponent);
            exports.MDCRipple = MDCRipple;
        },
        6: function(module, exports, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.cssClasses = {
                BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
                FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
                FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
                ROOT: "mdc-ripple-upgraded",
                UNBOUNDED: "mdc-ripple-upgraded--unbounded"
            };
            exports.strings = {
                VAR_FG_SCALE: "--mdc-ripple-fg-scale",
                VAR_FG_SIZE: "--mdc-ripple-fg-size",
                VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
                VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
                VAR_LEFT: "--mdc-ripple-left",
                VAR_TOP: "--mdc-ripple-top"
            };
            exports.numbers = {
                DEACTIVATION_TIMEOUT_MS: 225,
                FG_DEACTIVATION_MS: 150,
                INITIAL_ORIGIN_SCALE: .6,
                PADDING: 10,
                TAP_DELAY_MS: 300
            };
        }
    });
});
//# sourceMappingURL=mdc.ripple.js.map