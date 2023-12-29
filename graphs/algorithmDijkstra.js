// Алгоритм Дейкстры для поиска кратчайшего пути
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
	// Объект (таблица) для хранения кратчайших путей
	const costs = {};
	// Массив для хранения уже проверенных узлов
	const processed = [];
	// Объект для хранения соседних вершин рассматриваемого узла
	let neighbors = {};

	Object.keys(graph).forEach((node) => {
		if(node !== low) {
			// При первом обходе значение будет найдено
			// только для graph['a']['c'] и graph['a']['b']
			// Поэтому в costs попаду следующие данные:
			// { b: 2, c: 1, d: 100000000, e: 100000000, f: 100000000, g: 100000000 }
			let value = graph[low][node];
			costs[node] = value || 100000000;
		}
	});

	// Находим вершину с минимальной стоимостью/весом/кратчайшим путем до нее
	let node = findNodeLowersCost(costs, processed);

	console.log('costs:', costs);

	while (node) {
		const cost = costs[node];
		neighbors = graph[node];
		Object.keys(neighbors).forEach((neighbor) => {
			let newCost = cost + neighbors[neighbor];
			if(newCost < costs[neighbor]) {
				costs[neighbor] = newCost;
			}
		});
		processed.push(node);
		node = findNodeLowersCost(costs, processed);
		console.log('costs:', costs);
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
