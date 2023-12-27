// Линейный поиск со сложностью алгоритма O(n)
const arr = [9, 3, 45, 1, 0, 7, 12, 11, 7, 8, 9, 17, 5, 4, 10, 23, 20, 19, 17, 15, 2, 45, 44, 42, 13, 30, 22, 33, 24, 26]; // 30 элементов
let count = 0;

function linearSearch(arr, item) {
	for(let i = 0; i < arr.length; i++) {
		count++;
		if(arr[i] === item) {
			return i;
		}
	}
	return -1;
}

console.log('result =', linearSearch(arr, 26));
console.log('count =', count);
