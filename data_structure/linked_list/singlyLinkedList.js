class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.next = null;
    this.length = 0;
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);

    if (node >= this.length) {
      newNode.next = node.next;
    } else {
      newNode.next = node.next;
      node.next = newNode;
    }

    this.length += 1;
  }

  remove(value) {
    let previousNode = this.head;

    while (previousNode.next.value !== value) {
      previousNode = previousNode.next;
    }

    if (previousNode.next !== null) {
      previousNode.next = previousNode.next.next;
      this.length -= 1;
    }

    if (this.length === 0) {
      this.head = null;
      this.next = null;
    }
  }

  display() {
    let currentNode = this.head;
    let displayString = "[";

    if (this.length === 0) {
      return console.log("[]");
    }

    while (currentNode !== null) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }

    displayString = displayString.substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }

  size() {
    return this.length;
  }
}

const linkedList = new SinglyLinkedList();

linkedList.display();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
linkedList.size();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.size();
// linkedList.find(4);
linkedList.insert(6, 10);
linkedList.display();
linkedList.size();

/**
 * 과제
 * size method 추가하기
 * 예외 처리가 되어있지 않음, 예외가 발생해도 동작하도록 찾고 수정하기
 *
 * 구현 해야할 것
 * 존재하지 않는 값을 find() 할 때
 * 초과된 node에 insert 하려 할 때
 *
 * 구현 한 것
 * size() 기능 추가
 * 빈 리스트 display() 할 때
 */
