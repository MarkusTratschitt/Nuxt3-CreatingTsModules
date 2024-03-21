"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateKeyMappings = void 0;
var generateBinary_1 = require("./generateBinary");
var keyLabels_1 = require("../arrays/keyLabels");
var generateKeyMappings = function () {
    var mappings = [];
    var keysPerRow = 14;
    for (var i = 0; i < keyLabels_1.keyLabels.length; i++) {
        var row = Math.floor(i / keysPerRow) + 1;
        var column = (i % keysPerRow) + 1;
        mappings.push({
            row: (0, generateBinary_1.generateBinary)(row, 4),
            column: (0, generateBinary_1.generateBinary)(column, 4),
            label: keyLabels_1.keyLabels[i]
        });
    }
    return mappings;
};
exports.generateKeyMappings = generateKeyMappings;
