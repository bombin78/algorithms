const factorial = (n) => {
	if (n === 1) {
		return 1;
	}
	return n * factorial(n - 1);
};

// Числа Фибоначчи: 1,1,2,3,5,8,13,21,34,55
const fibonacci = (n) => {
	if(n === 1 || n === 2) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
};

const num = 8;
console.log(`!${num} =`, factorial(num));
console.log(`Число Фибоначчи номер ${num} =`, fibonacci(num));
