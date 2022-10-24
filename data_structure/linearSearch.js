/**
 * 선형 탐색
 *
 * 순서대로 하나씩 찾는 탐색 알고리즘
 * O(n) 시간복잡도가 걸린다
 *
 *
 * 이진 탐색
 * 정렬 되어 있는 요소들을 반씩 제외하며 찾는 알고리즘
 * O(log N)의 시간복잡도가 걸린다.
 * ex: up down 게임
 *
 * 반드시 정렬되어 있어야 사용 가능
 * 배열 혹은 이진 트리를 이용하여 구현할 수 있다.
 * O(log n)시간복잡도인 만큼 상당히 빠르다.
 */

/**
 * 이진 탐색 트리를 이용한 구현 방법
 * 배열을 이용하면 중간의 요소를 추가하거나 삭제하게 되면 선형시간을 가지게 됨.
 * 이를 해결하기 위한 방법: 이진 탐색 트리
 *
 * 이진 탐색을 위한 이진 트리로 왼쪽 서브 트리는 루트보다 작은 값이 모여있고
 * 오른쪽 서브트리는 루트보다 큰 값이 모여있다.
 *
 * 정점 삭제할 떄
 *
 * 단말 정점을 삭제하는 경우:
 * 별다른 처리 없이 부모 정점과의 연결을 끊으면 된다.
 *
 * 하나의 서브트리를 가지는 경우:
 * 제거되는 정점의 부모 간선을 자식 정점을 가르키게 바꾸면 된다.
 *
 * 두개의 서브트리를 가지는 경우:
 * 왼쪽 서브 트리의 가장 큰 값 혹은 오른쪽 서브트리의 가장 작은 값과 교체하면 된다.
 * 이 경우 교체된 정점의 좌우 자식이 없다면 제거되는 정점의 링크로 교체된다.
 *
 * 이진 탐색 트리의 문제점:
 * 최악의 경우 한쪽으로 편한된 트리가 될 수 있다.
 * 그런 경우 순차 탐색과 동일한 시간복잡도를 가진다.
 * 이를 해결하기 위해 다음과 같은 자료구조를 이용할 수 있다.
 * ex: AVL트리, 레드-블랙 트리
 */

// Array활용
const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712];

function binarySearch(array, findValue) {
  // left, right, mid를 설정
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  // 만약 left값이 right값과 일치하거나 커지면 loop탈출
  while (left < right) {
    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

console.log(binarySearch(array, 2876));
console.log(binarySearch(array, 1));
console.log(binarySearch(array, 500));

// Binary Search Tree 활용
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);
console.log(tree.has(8));
console.log(tree.has(1));

// 과제
// 이진 탐색 트리의 요소 제거 부분을 작성해보기.

// 실습 문제
// 정신이 아득해지네...

// 강사님 풀이
// 시간복잡도 고민해보기
// log n 으로 하는게 제일 좋아보임
// 떠오르는 알고리즘... => 이진 탐색 (ex: up down게임 / 정렬된 배열만 사용 가능)
// ( 결정문제 = 이진 탐색 = 파라메트릭 서치)

// 최소 1분에서 10억분 * n 사이
// 처리가능한 입국자 n보다 작다면, 분을 올려야하고,
// 입국자 n보다 크다면 분을 낮춰야 함.
function solution(n, times) {
  const sortedTimes = times.sort((a, b) => a - b); // O(n(log n))
  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // 시간 / 심사시간 = 해당 심사관의 처리 가능한 입국자 수
    const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    // Math.reduce(): 배열 각 요소에 함수를 실행하고 누적된 값을 출력할 때 용이함.

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
