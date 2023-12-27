// Быстрая сортировка (сортировка Хоара) со сложностью алгоритма O(log n * n)
const arr = [9, 3, 24, 1, 0, 7, 12, 11, 7, 8, 9, 17, 5, 4, 10, 23, 20, 19, 17, 15, 2, 45, 44, -8, 13, 30, 22, 33, 24, 26]; // 30 элементов
let count = 0;

function quickSort(arr) {
	if(arr.length <= 1) {
		return arr;
	}

	let pivotIdx = Math.floor(arr.length / 2);
	let pivot = arr[pivotIdx];
	let less = [];
	let greater = [];

	for(let i = 0; i < arr.length; i++) {
		count++;

		if(i === pivotIdx) continue;
		if(arr[i] < pivot) {
			less.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}

	return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log('sorting result =', quickSort(arr));
console.log('count =', count);