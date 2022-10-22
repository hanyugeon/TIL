/**
 * 해시 테이블
 *
 * 해시 테이블은 한정된 배열 공간에
 * kay를 index로 변환하여 값을 넣는다.
 *
 * 키와 값을 받아 hashing하여 나온 index에 값을 저장하는 선형 자료구조
 * 이때 삽입은 O(1)이며 키를 알고 있다면 삭제, 탐색도 O(1)로 수행
 */

/**
 * 해시 함수
 * 입력받은 값을 특정 범위 내 숫자로 변경하는 함수
 * 이 함수는 내 맘대로 구현해도 됨
 * 단, 해시 함수의 결과가 동일해서 겹치면? ㅈ됨. (해시 충돌)
 */

/**
 * 해시 충돌 회피 방법
 *
 * 선형 탐사법
 * 충돌이 발생하면 옆으로 한 칸 이동.
 *
 * 제곱 탐사법
 * 충돌이 발생하면 충돌이 발생한 횟수의 제곱만큼 옆으로
 *
 * 이중 해싱
 * 충돌이 발생하면 다른 해시 함수를 이용
 *
 * 분리 연결법
 * 버킷의 값을 LinkedList로 사용하여 충돌이 발생하면 리스트에 값을 추가
 * 최악의 경우 하나의 버킷이 무한정으로 늘어날 수 있다.
 */

/**
 * 예시: 출석부
 * 연결리스트를 사용하면 학생 정보가 알고 싶을 때 O(n) 시간복잡도가 발생
 * 배열은 인덱스를 모를 경우 탐색에 O(n)이 걸린다
 * 해시테이블을 사용하면 O(1)에 찾을 수 있다.
 * 연결리스트나 배열보다는 안정적
 */

// Hash Table: JavaScript Array
// 단 올바른 사용법은 아님
const tableArray = [];
tableArray["key"] = 100;
tableArray["key2"] = "hello";
console.log(tableArray["key"]);
tableArray["key"] = 556;
console.log(tableArray["key"]);
delete tableArray["key"];
console.log(tableArray["key"]);

// Hash Table: JavaScript Object
// 가장 정석적으로 올바른 방법
const tableObject = {};
tableObject["key"] = 100;
tableObject["key2"] = "hello";
console.log(tableObject["key"]);
tableObject["key"] = 556;
console.log(tableObject["key"]);
delete tableObject["key"];
console.log(tableObject["key"]);

// Map
// 다양한 타입을 넣고 싶다면...
// 편한 메서드 사용가능, 순회 편리

// Set

// 실습
// // 나의 풀이 는 못품.
// // 강사님 풀이
function solution(genre, plays) {
  // 같은 장르 끼리 묶어야 해요.
  // 장르내에서 재생순으로 정렬해야 해요. (이때, 배열로 묶는게 좋을것 같음. [plays, index])
  // 가장 많이 재생된 장르 구해야 해요.
  // 장르내에서 가장 많이 재생된 2가지 노래 선별 해야 해요.
  const genrePlayedTable = {};
}

// // 강사님 풀이
function solution(genre, plays) {
  const genreMap = new Map();

  genre
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}
