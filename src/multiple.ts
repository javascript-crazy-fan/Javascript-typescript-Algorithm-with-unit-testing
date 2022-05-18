export const calcMultiple = (n: number): number => {
	var sum: number = 0;
	for (let i: number = 1; i < n; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}
