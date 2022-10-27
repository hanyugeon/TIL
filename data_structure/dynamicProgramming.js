/**
 * DP ( 동적 계획법 )
 *
 * 해결한 작은 문제로 큰 문제를 해결하는 문제 풀이 방식
 * 그리디나 백트래킹처럼 특정 알고리즘이 아닌 문제 해결 방식을 의미한다.
 * 메모리를 많이 사용하는 대신 빠른 성능을 자랑한다.
 * 두 가지 방법론: 메모이제이션, 타뷸레이션
 */

/**
 * 메모이제이션 ( 하양식 접근법 )
 *
 * DP에서 작은 문제들의 결과는 항상 같다.
 * 따라서 이 결과들을 메모리에 저장해 필요할 때 꺼내 쓰는 것이 메모이제이션.
 *
 * ex: 피보나치 수열
 */

/**
 * 타뷸레이션 ( 상향식 접근법 )
 *
 * 필요한 값들을 미리 계산해두는 것
 * 메모이제이션은 필요할 때 계산한다면 ( Lazy evaluation )
 * 타뷸레이션은 미리 계산해둔다 ( Eager evaluation )
 * 보통 코테에서는 메모이제이션을 쓰는 경우가 대부분
 */

/**
 * DP 문제 접근법?
 *
 * DP 유형은 키워드만으로 DP 문제임을 알기 어렵다.
 * 그렇기 떄문에 문제 유형을 알 수 없다면 다음을 확인해 보기
 *  - 가장 작은 문제를 정의할 수 있는지?
 *  - 작은 문제를 통해 큰 문제를 해결할 수 있는 규칙이 있는지?
 * 위 두가지가 가능하다면 DP 문제이다.
 * 간혹 메모리를 너무 사용하여 통과 못하는 경우도 있다.
 *  - 이런 경우엔 백트래킹을 이용할 수 있지만 보통 코딩 테스트에서 자주 나오진 않음.
 */

// 실습 문제
function solution(strs, t) {
  const dp = Array.from({ length: t.length + 1 }, () => 0);

  const strsSet = new Set(strs);

  for (let i = 1; i < t.length + 1; i += 1) {
    dp[i] = Infinity;

    for (let j = 1; j < Math.min(i + 1, 6); j += 1) {
      const start = i - j;
      const end = i;

      if (strsSet.has(t.slice(start, end))) {
        dp[i] = Math.min(dp[i], dp[i - j] + 1);
      }
    }
  }

  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}
