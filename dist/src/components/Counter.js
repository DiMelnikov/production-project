var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import clasess from './Counter.module.scss';
export var Counter = function () {
    var _a = React.useState(0), count = _a[0], setCount = _a[1];
    var increment = function () {
        setCount(count + 1);
    };
    return (_jsxs("div", __assign({ className: clasess.btn }, { children: [_jsx("h1", { children: count }, void 0), _jsx("button", __assign({ onClick: increment }, { children: "increment" }), void 0)] }), void 0));
};
