"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.foo = void 0;
var react_1 = require("react");
var react_2 = require("react");
function foo() {
    var val = (0, react_2.useRef)("hi there ");
    (0, react_2.useEffect)(function () {
        val.current = 20;
    }, []);
    return <div>
        Ref demo
    </div>;
}
exports.foo = foo;
