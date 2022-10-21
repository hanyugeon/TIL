/**
 * 큐
 * FIFO
 * Linear Queue와 Circular Queue가 존재한다.
 *
 * front, rear, DeQueue, EnQueue
 */

// Linear Queue

/**
 * Linked List로 표현 가능
 * Front -> Head, Rear -> Tail
 */

// Array로 구현 ( 코테에서 사용 추천! )
// 하지만 front가 한없이 길어질 수 있다는 것을 꼭 명심할 것.
class LinearQueue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new LinearQueue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(8);
console.log(queue.size());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());

// LinkedList로 구현
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

const queueLinkedList = new QueueLinkedList();

queueLinkedList.enqueue(1);
queueLinkedList.enqueue(2);
queueLinkedList.enqueue(4);
console.log(queueLinkedList.dequeue());
queueLinkedList.enqueue(8);
console.log(queueLinkedList.size);
console.log(queueLinkedList.peek());
console.log(queueLinkedList.dequeue());
console.log(queueLinkedList.dequeue());
// shift 함수 쓰지 말자하...

// Circular Queue
// 꼭 사용될 상황은 거의 없지만....?
class CircularQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = [];
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }

  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full.");
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    this.size -= 1;
    return value;
  }
  isFull() {
    return this.size === this.maxSize;
  }
  peek() {
    return this.queue[this.front];
  }
}

const circularQueue = new CircularQueue(4);

circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(4);
circularQueue.enqueue(8);
circularQueue.enqueue(16);
console.log(circularQueue.dequeue());
console.log(circularQueue.dequeue());
console.log(circularQueue.size);
console.log(circularQueue.peek());
circularQueue.enqueue(16);
circularQueue.enqueue(32);
console.log(circularQueue.isFull());

// 실습 문제
// // 처음 풀이
// class Queue {
//   constructor() {
//     this.queue = [];
//     this.front = 0;
//     this.rear = 0;
//   }

//   enqueue(value) {
//     this.queue[this.rear++] = value;
//   }

//   dequeue() {
//     const value = this.queue[this.front];
//     delete this.queue[this.front];
//     this.front += 1;
//     return value;
//   }

//   peek() {
//     return this.queue[this.front];
//   }

//   size() {
//     return this.rear - this.front;
//   }
// }

// function solution(priorities, location) {
//   const queue = new Queue();
//   let priorityIndex = 0;
//   let answer = 0;

//   priorities.map((x) => queue.enqueue(x));

//   const getPriorityIndex = () => {
//     let temp = 0
//     let priority = 0

//     for (const node of queue.queue) {
//       temp += 1

//       if (node >= priority) {
//         priority = node
//         priorityIndex = queue.size() - temp
//       }
//     }

//     return
//   };

//   const dequeuePriority = (priorityIndex) => {
//     if (location === priorityIndex) {
//       answer += queue.size() - priorityIndex
//       return
//     }
//     for (let i = 1; i < priorityIndex; i += 1) {
//       updateLocation()
//       queue.dequeue()
//       queue.enqueue()
//     }

//     queue.dequeue()

//     return;
//   };

//   const updateLocation = () => {
//     if (location === queue.size() - 1) {
//       location = 0
//     } else {
//       location += 1
//     }
//   }

//   // 실행부
//   getPriorityIndex();
//   dequeuePriority(priorityIndex);

//   return answer;
// }

// // 참고한 풀이
// 연결 리스트 활용.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);

    this.length += 1;

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;

    this.length -= 1;

    return value;
  }

  peek() {
    return this.head.value;
  }

  size() {
    return this.length;
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  for (let i = 0; i < priorities.length; i += 1) {
    queue.enqueue([priorities[i], i]); // priorties, index
  }

  priorities.sort((a, b) => b - a); // 내림차순 정렬

  let count = 0;

  while (queue.size() > 0) {
    const currentValue = queue.peek();

    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;

      if (location === value[1]) {
        return count;
      }
    }
  }

  return count;
}
