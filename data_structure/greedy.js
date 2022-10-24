/**
 * 그리디
 *
 * 매 선택에서 지금 이 순간 가장 최적인 답을 선택하는 알고리즘
 * 최적 해를 보장해주지 않는다.
 *
 * 보통 최적해를 구하는 알고리즘보다 빠른 경우가 많다.
 * 크루스칼, 다익스트라 알고리즘 등에 사용된다.
 * 직관적인 문제 풀이에 적합하다.
 *
 * ex: 동전 반환 문제
 *
 * 큰 단위인 지폐, 동전 순으로 거스름돈을 만들면 된다.
 * 가장 쉽고 직관적인 그리디 문제.
 */

// 실습
// N이 백만이면 O(N), O(N log N)
// 빠른 방법을 찾아내야...
// 큰 값이 나오면 이전 값 중 작은 값을 전부다 삭제한다.
// 즉, 스택의 바닥에서부터 탑은 큰 수 부터 작은 수로 나열 되어야한다.
function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count += 1;
    }

    stack.push(item);
  }

  while (count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join("");
}
