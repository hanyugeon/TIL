/**
 * 백트래킹
 *
 * 모든 경우의 수를 탐색하는 알고리즘
 * DFS나 BFS를 이용할 수 있다.
 * 가지치기(Pruning): 효율을 위해 탐색하지 않아도 되는 곳을 미리 막는 것   ***핵심***
 * DFS: JavaScript는 재귀 효율이 나쁘기 때문에 DFS를 구현할 경우 Stack을 이용하는 것이 좋다.
 *  => 코테에선 이를 고려하여 재귀로 작성해도 풀 수 있도록 문제를 출제하는 경우도 있다.
 * 탐색에서 순환(Cycle)이 발생할 수 있다면 BFS를 이용하는 것이 편하다.
 *
 * 우선 모든 경우의 수를 찾을 수 있도록 코딩
 * 이후 문제에서 특정한 조건을 만족하는 것만 탐색하고 나머지는 탐색하지 않도록 조건문 작성
 * 즉, 절대로 답이 될 수 없는 것은 탐색을 종료
 */

// // N_Queen
// 길이가 N인 체스판 위에 N개의 퀸이
// 서로를 공격할 수 없도록 배치할 수 있는 경우의 수는?

const check = (queen, row) => {
  for (let i = 0; i < row; i += 1) {
    if (
      queen[i] === queen[row] ||
      Math.abs(queen[i] - queen[row]) === row - i
    ) {
      return false;
    }
  }

  return true;
};

const search = (queen, row) => {
  const n = queen.length;
  let count = 0;

  if (n === row) {
    return 1;
  }

  for (let column = 0; column < n; column += 1) {
    queen[row] = column;

    if (check(queen, row)) {
      count += search(queen, row + 1);
    }
  }

  return count;
};

function solution(n) {
  return search(
    Array.from({ length: n }, () => 0),
    0
  );
}

// console.log(Array.from({ length: 4 }));
