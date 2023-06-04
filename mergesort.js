function mergeSort(arr) {
	if (arr.length <= 1) {
		return [arr[0]];
	} else {
		const mid = Math.floor(arr.length / 2);
		const left = mergeSort(arr.slice(0, mid));
		const right = mergeSort(arr.slice(mid));

		return merge(left, right);
	}
}

function merge(left, right) {
	const sorted = [];

	let i = 0;
	let j = 0;

	while (i < left.length || j < right.length) {
		if (!left[i] || left[i] >= right[j]) {
			sorted.push(right[j++]);
		} else if (!right[j] || left[i] < right[j]) {
			sorted.push(left[i++]);
		}
	}

	return sorted;
}

console.log(mergeSort([1]));
