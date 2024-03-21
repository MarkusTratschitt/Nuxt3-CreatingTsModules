import type { KeyMapping } from '../types/KeyMapping';
import { generateKeyMappings } from './generateKeyMappings';

const KeyMapping = generateKeyMappings();

export const displayKeyMappingsForInput = (input: string, mappings: KeyMapping[]) => {
	const characters = input.split('');
	
	const results = characters.map(char => {
		const keyMapping = mappings.find(mapping => mapping.label === char);
		
		if (keyMapping) {
			const binaryCode = `${keyMapping.row}${keyMapping.column}`;
			return { Character: char, Binärcode: binaryCode };
		} else { 
			console.error(`Diese Eingabe ${char} ist mit der vorhandenen Tastatur unmöglich!`);
			return { Character: char, Binärcode: 'Nicht verfügbar!' };
		}
	});
	return results;
};