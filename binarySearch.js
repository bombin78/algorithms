// Бинарный поиск со сложностью алгоритма O(log n). 
// Работает только с отсортированными данными
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 23, 24, 25, 26, 27, 28, 39, 40]; // 20 элементов
let count;

function binarySearch(arr, item) {
	count = 0;

	let low = 0;
	let high = arr.length - 1;
	let mid;
	let position = -1;

	while(low <= high) {
		count++;
		mid = Math.floor((low + high)/2);

		if(arr[mid] === item) {
			position = mid;
			return position;
		}
		if(arr[mid] > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return position;
}

console.log('position for 10 =', binarySearch(arr, 10));
console.log('count for 10 =', count);
console.log('position for 101 =', binarySearch(arr, 101));
console.log('count for 101 =', count);
