// Поиск в ширину в однонаправленном графе
// Объект, поля которого - это вершины
// Значение каждого поля - это массив вершин для которых вершина(поле) является смежной
const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];
let count = 0;

function breadthFirstSearch (graph, low, high) {
	let queue = [];

	queue.push(low);

	while(queue.length > 0) {
		count++;

		const current = queue.shift();
		if(!graph[current]) {
			// Присваиваем пустой массив.
			// Это говорит о том, что из этой вершины ни куда пути нет.
			graph[current] = []
		}
		if(graph[current].includes(high)) {
			return true;
		} else {
			queue = [...queue, ...graph[current]];
		}
		console.log('queue', queue);
	}
	return false;
}

// 'a' - начальная вершина, 'g' - искомая вершина
console.log(breadthFirstSearch(graph, 'a', 'g'));
console.log('count', count);