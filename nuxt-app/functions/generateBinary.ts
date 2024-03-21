export const generateBinary = (num: number, length: number): string => {
	return num.toString(2).padStart(length, '0');
}