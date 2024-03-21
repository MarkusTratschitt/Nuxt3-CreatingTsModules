"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayKeyMappingsForInput = void 0;
var generateKeyMappings_1 = require("./generateKeyMappings");
var KeyMapping = (0, generateKeyMappings_1.generateKeyMappings)();
var displayKeyMappingsForInput = function (input, mappings) {
    var characters = input.split('');
    var results = characters.map(function (char) {
        var keyMapping = mappings.find(function (mapping) { return mapping.label === char; });
        if (keyMapping) {
            var binaryCode = "".concat(keyMapping.row).concat(keyMapping.column);
            return { Character: char, Binärcode: binaryCode };
        }
        else {
            console.error("Diese Eingabe ".concat(char, " ist mit der vorhandenen Tastatur unm\u00F6glich!"));
            return { Character: char, Binärcode: 'Nicht verfügbar!' };
        }
    });
    return results;
};
exports.displayKeyMappingsForInput = displayKeyMappingsForInput;
