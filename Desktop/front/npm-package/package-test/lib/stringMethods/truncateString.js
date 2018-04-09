'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var truncateString = exports.truncateString = function truncateString(str, num) {
    return str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
};

//example of usage truncateString('boomerang', 7); // 'boom...'