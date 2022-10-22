/**
 * 그래프
 * 예시: 지하철 노선도, 페이지 랭크
 *
 * 정점은 여러 개의 간선을 가질 수 있다.
 * 크게 방향 그래프와 무방향 그래프로 나눌 수 있다.
 * 간선은 가중치를 가질 수 있다.
 * 사이클이 발생할 수 있다.
 */

/**
 * 무방향 그래프
 * 방향 그래프
 * 연결 그래프
 * 비연결 그래프
 * 완전 그래프
 * 사이클
 */

/**
 * 구현 방법
 * 인접 행렬
 * 인접 리스트
 */

// 인접 행렬
const graph01 = Array.from(Array(5), () => Array(5).fill(false));
graph01[0][1] = true; // 0 -> 1
graph01[0][3] = true; // 0 -> 3
graph01[1][2] = true; // 1 -> 2
graph01[2][0] = true; // 2 -> 0
graph01[2][4] = true; // 2 -> 4
graph01[3][2] = true; // 3 -> 2
graph01[4][0] = true; // 4 -> 0
// 간선에 가중치를 넣고 싶다면 null 과 임의의 가중치 값 넣어주면 됨.

// 인접 리스트
const graph02 = Array.from(Array(5), () => []);
graph02[0].push(1); // 0 -> 1
graph02[0].push(3); // 0 -> 3
graph02[1].push(2); // 1 -> 2
graph02[2].push(0); // 2 -> 0
graph02[2].push(4); // 2 -> 4
graph02[3].push(2); // 3 -> 2
graph02[4].push(0); // 4 -> 0
// console.log(graph02);

// 문제 풀이
// // 강사님 풀이
// 키워드는 "간선"과 "노드"
class Queue {
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

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(n, edge) {
  // 인접 리스트 만들기.
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }
  // 그래프 완성.

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // 가장 멀리 떨어진 노드 배열 구하기.
  // BFS: 너비 우선 탐색 ( <-> DFS: 깊이 우선 탐색 )
  // 최대한 넓게 이동한 다음 이동할 수 없을 때, 아래로 이동.

  // const queue = [1];

  const queue = new Queue();
  queue.enqueue(1);

  while (!queue.isEmpty()) {
    // 배열로 했을 때의 while문 조건: queue.length > 0
    const src = queue.dequeue();
    // shift는 O(n)의 선형시간을 갖음, 하지만 요소가 적을때는 JS에서 최적화를 해준다.

    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  /**
   * console.log(distance)
   * >>> [0, 1, 2, 2, 3, 3, 3]
   */

  const max = Math.max(...distance);

  return distance.filter((item) => item === max).length;
}
