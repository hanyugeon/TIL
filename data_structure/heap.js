/**
 * 힙 ( Heap )
 *
 * FIFO와는 달리 우선순위가 있는 우선순위 큐
 * 우선순위 큐는 자료구조가 아닌 개념이다!
 *
 * 이진트리의 형태를 가지며 우선순위가 높은 요소가 먼저 나기기 위해
 * 요소가 삽입, 삭제될 때 바로 정렬이 되는 특징을 가지고 있다.
 *
 * 우선순위가 높은 요소가 먼저 나가는 특징을 가진다.
 * 루트가 가장 큰 값이 되는 최대힙(Max Heap)이 있고 가장 작은 값이 되는 최소힙(Min Heap)이 있다.
 * JavaScript에서는 아쉽게도 직접 구현해야 한다.
 */

/**
 * 힙의 요소 추가
 *
 * 요소가 추가 될때는 트리의 가장 마지막 정점에 위치한다.
 * 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
 * 이 과정을 반복하면 결국 가장 우선순위가 높은 정점이 루트가 된다.
 * 완전 이진 트리의 높이는 logN 이기에 힙 요소 추가 알고리즘은 O(logN)의 시간복잡도를 갖는다.
 *
 *
 * 힙의 요소 제거
 *
 * 요소 제거는 루트 정점만 가능하다.
 * 루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치한다.
 * 루트 정점의 두 자식 정점 중 우선순위가 높은 정점과 바꾼다.
 * 두 자식 정점이 우선순위가 더 낮을때 까지 반복한다.
 * 완전 이진 트리의 높이는 logN이기 때문에 힙 요소 제거 알고리즘은 O(logN)의 시간복잡도를 갖는다.
 */

// 힙 요소 추가
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    // 추가 로직을 진행할 때 규칙에 따라 힙의 가지막 요소를 추가한다.
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    // 부모가 더 우선순위가 낮거나 루트가 아닐때까지 부모와 지식의 순서를 바꾸어 줌
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    // 임시로 상수에 저장, 루트 정점을 가장 마지막 정점으로 설정
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    // 루트로부터 아래로 내려가기 위한 변수를 미리 설정
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 하위 정점들이 현재 정점보다 우선순위가 낮을 때 종료
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      // 왼쪽 정점보다 오른쪽 정점보다 우선순위가 더 높은 경우에 오른쪽 정점과 바꾼다.
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }

      // 왼쪽 정점의 위치와 오른쪽 정점의 위치를 다시 구한다.
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log("heap >>>", heap.heap);
console.log("==============================");

const array = [];
array.push(heap.pop());
console.log("heap >>>", heap.heap);
array.push(heap.pop());
console.log("heap >>>", heap.heap);
array.push(heap.pop());
console.log("heap >>>", heap.heap);
array.push(heap.pop());
console.log("heap >>>", heap.heap);
array.push(heap.pop());
console.log("heap >>>", heap.heap);
console.log("array >>>", array);

// 과제 최소 힙을 구현해 보세요.
