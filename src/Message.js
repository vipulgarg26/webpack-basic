"use strict";
var Message = (function () {
    function Message() {
    }
    Message.prototype.show = function () {
        alert("Hello World!!!");
    };
    return Message;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Message;
