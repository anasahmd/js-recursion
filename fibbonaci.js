function fibs(num) {
	const fib = [0, 1];

	for (let i = 2; i < num; i++) {
		fib.push(fib[i - 1] + fib[i - 2]);
	}

	return fib;
}

function fibsRec(num) {
	if (num == 1) {
		return [0];
	}
	if (num == 2) {
		return [0, 1];
	}
	return [...fibsRec(num - 1), fibsRec(num - 1).pop() + fibsRec(num - 2).pop()];
}

console.log(fibsRec(8));
