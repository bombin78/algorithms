const tree = [
    {
        value: 4,
        children: [
            {
                value: 10,
            },
            {
                value: 14,
            },
        ],
    },
    {
        value: 6,
        children: [
            {
                value: 15,
                children: [
                    {
                        value: 11,
						children: [
							{
								value: 1,
							},
							{
								value: 10,
							},
						],
                    },
                ],
            },
            {
                value: 9,
                children: [
                    {
                        value: 5,
                        children: [
                            {
                                value: 12,
                            },
                        ],
                    },
                ],
            },
        ],
    },
	{
        value: 3,
    },
];

// Итеративный обход дерева для подсчета суммы всех значений
const iteration = (tree) => {
	if(!tree.length) {
		return 0;
	}

	let sum = 0;

	// Используем массив как стек (LIFO - LAST IN LAST OUT)
	// Это необходимо для имитации работы стека вызовов - 
	// механизма используемого при рекурсии внутри движка JS
	let stack = [];
	tree.forEach((node) => stack.push(node));

	while (stack.length) {
		const node = stack.pop();

		sum += node.value;

		if(node.children) {
			node.children.forEach((child) => stack.push(child));
		}
	}

	return sum;
};

// Рекурсивный обход дерева для подсчета суммы всех значений
const recursive = (tree) => {
	let sum = 0;

	tree.forEach((node) => {
		sum += node.value;

		if(!node.children) {
			return node.value;
		}

		sum += recursive(node.children);
	});

	return sum;
};

console.log('iteration result =', iteration(tree));
console.log('recursive result =', recursive(tree));
