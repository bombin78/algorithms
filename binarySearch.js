// Бинарный поиск со сложностью алгоритма O(log n). 
// Работает только с отсортированными данными
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 23, 24, 25, 26, 27, 28, 39, 40]; // 20 элементов
let count = 0;

function binarySearch(arr, item) {
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

function recursiveBinarySearch(arr, item, low, high) {
	let mid = Math.floor((low + high)/2);
	count++;

	if(low >= high) return -1;

	if(arr[mid] === item) return mid;

	if(arr[mid] > item) {
		return recursiveBinarySearch(arr, item, 0, mid - 1);
	} else {
		return recursiveBinarySearch(arr, item, mid + 1, high);
	}
}

// console.log('position for 11 =', binarySearch(arr, 11));
// console.log('count for 11 =', count);
// console.log('position for 101 =', binarySearch(arr, 101));
// console.log('count for 101 =', count);

console.log('position for 11 =', recursiveBinarySearch(arr, 11, 0, arr.length - 1));
console.log('count for 11 =', count);
// console.log('position for 101 =', recursiveBinarySearch(arr, 101, 0, arr.length));
// console.log('count for 101 =', count);
