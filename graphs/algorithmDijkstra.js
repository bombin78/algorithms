// Алгоритм Дейкстры для поиска кратчайшего пути 
// со сложностью алгоритма  в простейшем случае O(n * n).
// Здесь, в отличии от поиска в ширину, также учитывается
// и вес, поэтому граф будет иметь следующий вид:
const graph = {};
graph.a = {'b': 2, 'c': 1};
graph.b = {'f': 7};
graph.c = {'d': 5, 'e': 2};
graph.d = {'f': 2};
graph.e = {'f': 1};
graph.f = {'g': 1};
graph.g = {};

function shortPath(graph, low) {
	// Объект (таблица) для хранения кратчайших путей/минимальных стоимостей всех ребер
	const costs = {};
	// Массив для хранения уже проверенных узлов
	const processed = [];
	// Объект для хранения соседних вершин/узлов рассматриваемого узла
	let neighbors = {};

	// Добавляем в costs значения тех вершин в которые можно попасть со стартовой вершины,
	// Остальным вершинам присваиваем бесконечное значение, в нашем случае достаточно 100000000
	Object.keys(graph).forEach((node) => {
		if(node !== low) {
			// При обходе, значение будет найдено только для graph['a']['c']
			// и graph['a']['b']. Поэтому в costs попадут следующие данные:
			// { b: 2, c: 1, d: 100000000, e: 100000000, f: 100000000, g: 100000000 }
			let value = graph[low][node];
			costs[node] = value || 100000000;
		}
	});

	// Выводим объект costs после первичного заполнения
	console.log('costs:', costs);

	// Находим в costs вершину/узел с минимальной стоимостью/весом/кратчайшим путем до нее
	let node = findNodeLowersCost(costs, processed);

	while (node) {
		const cost = costs[node];
		neighbors = graph[node];

		// Обработка смежных вершин и
		Object.keys(neighbors).forEach((neighbor) => {
			let newCost = cost + neighbors[neighbor];
			if(newCost < costs[neighbor]) {
				// их добавление в costs
				costs[neighbor] = newCost;
			}
		});
		// На каждой итерации выводим объект costs после обработки смежных вершин
		console.log('costs:', costs);

		processed.push(node);
		node = findNodeLowersCost(costs, processed);
	}

	return costs;
}

// Поиск смежной вершины с наиболее коротким путем (наименьшим весом/стоимостью) до нее
function findNodeLowersCost(costs, processed) {
	let lowestCost = 100000000;
	let lowestNode;

	Object.keys(costs).forEach((node) => {
		let cost = costs[node];
		if(cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestNode = node;
		}
	});

	return lowestNode;
}

console.log('result:', shortPath(graph, 'a'));
