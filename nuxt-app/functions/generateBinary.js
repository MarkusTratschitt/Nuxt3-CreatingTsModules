"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateBinary = void 0;
var generateBinary = function (num, length) {
    return num.toString(2).padStart(length, '0');
};
exports.generateBinary = generateBinary;
