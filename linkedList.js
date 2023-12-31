class LinkedList {
	constructor() {
		// Размер списка
		this.size = 0;
		this.root = null;
	}
	 
	// Метод добавления значений в список
	add(value) {
		// Если размерность равна 0, 
		// то просто добавляем новый элемент в корень
		if(this.size === 0) {
			this.root = new Node(value);
			this.size += 1;
			return true;
		}

		let node = this.root;

		// Итерируемся по ссылкам до последнего элемента
		while (node.next) {
			node = node.next;
		}

		// Создаем новый элемент и
		let newNode = new Node(value);
		// добавляем на него ссылку в найденном выше,
		// последнем элементе
		node.next = newNode;
		// увеличиваем размерность на единицу.
		this.size += 1;
	}

	getSize() {
		return this.size;
	}

	// Функция для вывода результата в логи
	print() {
		let result = [];
		let node = this.root;

		while (node) {
			result.push(node.value);
			node = node.next;
		}

		console.log('result: ', result);
	}
}

class Node {
	constructor(value) {
		// Значение узла
		this.value = value;
		// Ссылка на следующий элемент в списке
		this.next = null;
	}
}

const list = new LinkedList();

list.add(5);
list.add(3);
list.add(2);
list.add(5);
list.add(7);

list.print();
