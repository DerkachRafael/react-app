"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var compact = exports.compact = function compact(arr) {
  return arr.filter(Boolean);
};

//example of usage compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]