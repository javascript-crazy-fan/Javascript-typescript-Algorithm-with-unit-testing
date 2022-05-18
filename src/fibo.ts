export const calcFibo = (n: number): number => {
	var a: number = 1, b: number = 2, c: number = 3, sum: number = 2;
	while (c < n) {
		if (c % 2 === 0) {
			sum += c;
		}
		c = a + b;
		a = b;
		b = c;
	};
	return sum;
}
