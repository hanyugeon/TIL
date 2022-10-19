/**
 * 과제
 * SinglyLinkedList 클래스를 참고하여 DoubleLinkedList를 구현해보자.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.next = null;
  }
}
