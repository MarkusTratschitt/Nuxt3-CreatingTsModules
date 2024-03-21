import type { KeyMapping } from '../types/KeyMapping';
import { generateBinary } from './generateBinary';
import { keyLabels } from '../arrays/keyLabels';

export const generateKeyMappings = (): KeyMapping[] => {
	const mappings: KeyMapping[] = [];
	const keysPerRow = 14;
	
	for (let i = 0; i < keyLabels.length; i++) {
		
		const row = Math.floor(i / keysPerRow) +1;
		const column = (i % keysPerRow) +1;
		
		mappings.push({
			row: generateBinary(row, 4),
			column: generateBinary(column, 4),
			label: keyLabels[i]
		});
	}
	return mappings;
};