/**
 * Find minimum and maximum values in array
 *
 * @param arr array of numbers
 * @returns [min, max] if found or [NaN, NaN] if array is empty
 */
export const minMax = (arr: number[]): [min: number, max: number] => {
	if (arr.length === 0) return [NaN, NaN];

	let min = arr[0];
	let max = arr[0];

	for (let i of arr) {
		if (i < min) min = i;
		if (i > max) max = i;
	}

	return [min, max];
};

