"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var difference = exports.difference = function difference(a, b) {
    var s = new Set(b);
    return a.filter(function (x) {
        return !s.has(x);
    });
};

//example of usage difference([1, 2, 3], [1, 2, 4]); // [3]