// Сортировка выбором со сложностью алгоритма O(n * n), а если более точно то O(1 / 2 * n * n)
const arr = [9, 3, 24, 1, 0, 7, 12, 11, 7, 8, 9, 17, 5, 4, 10, 23, 20, 19, 17, 15, 2, 45, 44, -8, 13, 30, 22, 33, 24, 26]; // 30 элементов
let count = 0;

function selectionSort(arr) {
	for(let i = 0; i < arr.length; i++) {
		let minIdx = i;
		for(let j = i + 1; j < arr.length; j++) {
			count += 1;

			if(arr[j] < arr[minIdx]) {
				minIdx = j;
			}
		}
		let tmp = arr[i];
		arr[i] = arr[minIdx];
		arr[minIdx] = tmp;
	}
	return arr;
}

console.log('sorting result =', selectionSort(arr));
console.log('count =', count);