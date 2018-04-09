"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var union = exports.union = function union(a, b) {
  return Array.from(new Set([].concat(_toConsumableArray(a), _toConsumableArray(b))));
};

//example of usage union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]