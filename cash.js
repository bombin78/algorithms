function cashFunc(fn) {
	const cash = {};

	return function (n) {
		if(cash[n]) {
			console.log('Следующее значение из кэша');
			return cash[n];
		}

		let result = fn(n);
		cash[n] = result;
		return result;
	};
}

function factorial(n) {
	let result = 1;

	while (n != 1 ) {
		result *= n;
		n -= 1;
	}

	return result;
}

const cashFactorial = cashFunc(factorial)

console.log(cashFactorial(5));
console.log(cashFactorial(8));
console.log(cashFactorial(5));
console.log(cashFactorial(8));
console.log(cashFactorial(3));

