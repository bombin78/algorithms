// Бинарное дерево поиска - у каждого узла может быть только два потомка,
// при этом правая часть дерева выстраивается с большими значениями а 
// левая - с меньшими
// Сложность алгоритма для операций поиска, вставки и удаления O(log n)

class BinaryTree {
	constructor() {
		this.root = null;
	}

	add(value) {
		// Если размерность равна 0, 
		// то просто добавляем новый элемент в корень
		if(!this.root) {
			this.root = new TreeNode(value);
		} else {
			let node = this.root;
			let newNode = new TreeNode(value);

			// Находим ноду в самом низу дерева
			while(node) {
				if(value > node.value) {
					// Если ссылки на правое поддерево
					// нет, то останавливаем цикл
					if(!node.right) {
						break;
					}
					node = node.right;
				} else {
					// Если ссылки на левое поддерево
					// нет, то останавливаем цикл
					if(!node.left) {
						break;
					}
					node = node.left;
				}
			}

			if(value > node.value) {
				node.right = newNode;
			} else {
				node.left = newNode;
			}
		}
	}

	print(node = this.root) {
		if(!node) {
			return true;
		}

		console.log(node.value);

		this.print(node.right);
		this.print(node.left);
	}
}

class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

const tree = new BinaryTree();

tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);

tree.print();
