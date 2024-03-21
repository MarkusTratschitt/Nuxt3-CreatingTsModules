import { displayKeyMappingsForInput } from '../functions/displayKeyMappingsForInput';
import { generateKeyMappings } from '../functions/generateKeyMappings';

const keyMappings = generateKeyMappings();
const inputString = "GÜNSTIGER! Nur heute 50% Rabatt auf Tiernahrung";

const results = displayKeyMappingsForInput(inputString, keyMappings);

console.table(results);