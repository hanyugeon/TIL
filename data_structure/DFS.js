/**
 * DFS ( 깊이 우선 탐색 )
 *
 * 그래프 탐색 알고리즘으로 최대한 깊은 정점부터 탐색하는 알고리즘
 *
 * Stack을 이용하여 구현 가능
 * 시작 정점에서 깊은 것 부터 찾는다
 * V가 정점의 수, E가 간선의 수일 때 BFS의 시간복잡도는 O(V+E)이다.
 */

// 실습
// 항상 "ICN" 공항에서 출발
// DFS ( 깊이 우선 탐색, stack 이용하기 )

function solution(tickets) {
  // // 그래프 만들기
  // 인접 리스트로 그래프를 구성합니다.
  const graph = {};
  for (const [src, dest] of tickets) {
    if (graph[src] === undefined) {
      graph[src] = [];
    }
    graph[src].push(dest);
  }

  for (const key in graph) {
    // 역순으로 문자열들을 정렬합니다.
    graph[key].sort((a, b) => (a > b ? -1 : 1));
  }
  // 그 다음은 어떻게 해야할까?

  // // DFS 구현
  const stack = ["ICN"]; // DFS를 위한 스택
  const answer = []; // 경로를 저장하기 위한 리스트

  // DFS 시작
  while (stack.length > 0) {
    const src = stack[stack.length - 1]; // Top 요소를 확인합니다.

    // 갈 수 있는 경로가 있다면
    if (graph[src] && graph[src].length > 0) {
      // 갈 수 있는 경로 중 알파벳 순으로 앞선 것을 먼저 방문합니다.
      // 역순으로 정렬했기에 pop을 하면 알파벳 순입니다.
      stack.push(graph[src].pop());
    } else {
      // 더 이상 갈 수 있는 경로가 없다면
      // 경로를 추가합니다.
      answer.push(stack.pop());
    }
  }

  // 스택 결과를 넣은 것이기 때문에 역순으로 결과를 반환합니다.
  return answer.reverse();
}

// 지금 고민인 것.
// 문제는 뭔말인지 알겠음 => 여기서 어떻게 무슨 알고리즘, 자료구조를 써야 풀 수 있는건지 감이 1도 안옴
// 어떻게 해결해야하나? 사실 강의 듣느라 다른거 못하겠음 (사실 게을러서 그런것같긴함.)
// 그냥 꼬라박기 식으로 문제 많이 풀다보면 익숙해 지는건가?
// 프로그래머스 유형별 문제를 정말 쉬운것부터 풀어보는게 좋을것같음
// 시간을 어떻게 만들어서 진행할 것인가?
// 좀 효율적으로 부캠 강의 쪽 듣고, 내 부족한 개인공부 너무 하고싶음
// (부캠이 싫다는게 절대 아니라 내가 부족한게 너무 많은것같다는 말.)
// ㄹㅇ 미치겠네 ㅆㅂ
