// Быстрая сортировка (сортировка Хоара) со сложностью алгоритма O(log n * n)
const arr = [9, 3, 24, 1, 0, 7, 12, 11, 7, 8, 9, 17, 5, 4, 10, 23, 20, 17, 15, 2, 45, 44, -8, 13, 30, 22, 33, 24, 26]; // 30 элементов
const arr2 = [999, ...arr];
arr.push(888);

let count1;
let count2 = 0;

arr2.sort((a,b) => {
	count2++;
	return a - b;
});

function quickSort1(arr) {
	if(arr.length <= 1) {
		return arr;
	}

	let pivotIdx = Math.floor(arr.length / 2);
	let pivot = arr[pivotIdx];
	let less = [];
	let greater = [];

	for(let i = 0; i < arr.length; i++) {
		count1++;

		if(i === pivotIdx) continue;
		if(arr[i] < pivot) {
			less.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
		count2++;
	}

	return [...quickSort1(less), pivot, ...quickSort1(greater)];
}

function quickSort2(arr) {
	if(arr.length <= 1) {
		return arr;
	}

	let pivotIdx = Math.floor(arr.length / 2);
	let pivot = arr[pivotIdx];
	let less = [];
	let greater = [];

	arr.forEach((item, idx) => {
		count1++;

		if(idx === pivotIdx) return;
		if(item < pivot) {
			less.push(item);
		} else {
			greater.push(item);
		}
		count2++;
	});

	return [...quickSort2(less), pivot, ...quickSort2(greater)];
}

console.log('built-in sort function:');
console.log('result =', arr2);
console.log('Количество элементов =', arr2.length);
console.log('Количество итераций = не известно');
console.log('Вызов блока сравнения =', count2);
console.log('-----------');

count1 = 0;
count2 = 0;
console.log('quickSort1:');
console.log('result =', quickSort1(arr));
console.log('Количество элементов =', arr.length);
console.log('Количество итераций =', count1);
console.log('Вызов блока сравнения =', count2);
console.log('-----------');

count1 = 0;
count2 = 0;
console.log('quickSort2:');
console.log('result =', quickSort2(arr));
console.log('Количество элементов =', arr.length);
console.log('Количество итераций =', count1);
console.log('Вызов блока сравнения =', count2);
console.log('-----------');
