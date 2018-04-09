"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var capitalizeEveryWord = exports.capitalizeEveryWord = function capitalizeEveryWord(str) {
  return str.replace(/\b[a-z]/g, function (char) {
    return char.toUpperCase();
  });
};

//example of usage capitalizeEveryWord('hello world!'); // 'Hello World!'