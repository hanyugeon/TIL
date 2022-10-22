/**
 * 트리
 *
 * 방향 그래프의 일종으로 종점을 가르키는 간선이 하나 밖에 없는 구조를 가지고있음.
 *
 * 루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가진다.
 * 정점이 N개인 트리는 반드시 N - 1개의 간선을 가진다.
 * 루트에서 특정 정점으로 가는 루트는 유일하다.
 *
 * 그래프와 마찬가지로 인접 행렬, 인접 리스트 두 가지 방식으로 트리를 구현할 수 있다.
 */

/**
 * 이진 트리
 *
 * 각 정점이 최대 2개의 자식을 가지는 트리를 의미한다.
 *
 * 이진트리, 완전 이진 드리, 포화 이진 트리, 편향 트리
 * 완전 이진 트리: 마지막 레벨을 제외하고 모든 정점이 채워져 있는 트리
 * 편향 트리: 한쪽 방향으로만 뻗어진 트리
 *
 * 정점이 N개인 이진트리는 최악의 경우 높이가 N이 될 수 있다.
 * 정점이 N개인 포화 또는 완전 이진 트리의 높이는 logN 이다 ( 이때 log의 밑은 2 이다. )
 * 높이가 h인 포화 이진 트리는 2^h - 1의 정점을 가진다.
 * 일반적인 이진 트리 사용하는 경우는 많지 않다. 다음 자료구조에 이용된다.
 * 이진 탐색 트리, 힙, AVL트리, 레드 블랙 트리
 */

// JavaScript에서 구현 방법
// 0번 인덱스는 편의를 위해 비워둔다.
/**
 * left: index * 2
 * right: index * 2 + 1
 * parent: floor(index / 2)
 */
const treeArray = [
  undefined,
  // 1
  9,

  // 1*2, 1*2 + 1
  3,
  8,

  // 1*4, 1*4 + 1, 1*4 + 2, 1*4 + 3
  2,
  5,
  undefined,
  7,

  // 1*8, 1*8 + 1, 1*8 + 2, 1*8 + 3, ... , 1*8 + 7
  undefined,
  undefined,
  undefined,
  4,
];

// 이진 트리 ( Linked List )
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    const queue = new Queue();
    queue.enqueue(this.root);

    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);

      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

console.log(tree.root.left.right.right);

// 과제
// 전위 순회, 중위 순회, 후위 순회를 검색해서 직접 구현해 보세요. (힌트: 스택, 재귀 호출)
