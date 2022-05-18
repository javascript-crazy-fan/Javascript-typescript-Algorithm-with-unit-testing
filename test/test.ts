const { expect } = require('chai');
import 'mocha';
const { calcFibo } = require('../src/fibo');
const { calcMultiple } = require('../src/multiple');

describe('Should calculate the sum for multiple function', () => {
	it('Calculate sum below 10', () => {
		const sum: number = calcMultiple(10);
		expect(sum).to.be.equal(23);
	});

	it('Calculate sum below 1000', () => {
		const sum: number = calcMultiple(1000);
		expect(sum).to.be.equal(233168);
	});
});

describe('Should calculate the sum for fibo sequence function', () => {
	it('Calculate sum below 20', () => {
		const sum: number = calcFibo(20);
		expect(sum).to.be.equal(10);
	});

	it('Calculate sum below 4000000', () => {
		const sum: number = calcFibo(4000000);
		expect(sum).to.be.equal(4613732);
	});
});
