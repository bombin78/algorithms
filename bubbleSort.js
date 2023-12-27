// Сортировка пузырьком со сложностью алгоритма O(n * n)
const arr = [9, 3, 24, 1, 0, 7, 12, 11, 7, 8, 9, 17, 5, 4, 10, 23, 20, 19, 17, 15, 2, 45, 44, -8, 13, 30, 22, 33, 24, 26]; // 30 элементов
let count = 0;

function bubbleSort(arr) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length; j++) {
			if(arr[j + 1] < arr[j]) {
				let tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}

			count++;
		}

	}
	return arr;
}

console.log('sorting result =', bubbleSort(arr));
console.log('count =', count);
