"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var displayKeyMappingsForInput_1 = require("../functions/displayKeyMappingsForInput");
var generateKeyMappings_1 = require("../functions/generateKeyMappings");
var keyMappings = (0, generateKeyMappings_1.generateKeyMappings)();
var inputString = "GÜNSTIGER! Nur heute 50% Rabatt auf Tiernahrung";
var results = (0, displayKeyMappingsForInput_1.displayKeyMappingsForInput)(inputString, keyMappings);
console.table(results);
