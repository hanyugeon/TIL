// 이벤트 루프

/**
 * javascript의 call stack은 하나만 존재: 싱글스레드로 동작
 * 그러면 어떠한 원리로 클릭 이벤트와 에니메이션 동작을 같이 처리할 수 있나?
 * => Event Loop
 *
 * 사실 위와같은 작업은 멀티스레드로 동작
 * javascript가 싱글스레드 일 뿐, 브라우저는 멀티스레드
 */

function foo() {
  console.log("foo");
}
function bar() {
  console.log("bar");
}

setTimeout(function () {
  bar();
}, 100);

foo();

setTimeout(function () {
  console.log("baz");
}, 100);

/**
 * 실행 결과
 * foo
 * bar
 * baz
 */

/**
 * 어떻게 이러한 과정이 나오는지
 * Call Stack, Web API, Task Queue
 * 이벤트 루프 과정 생각해보기.
 */

// 선택 과제
// 비동기 작업은 Task Queue 뿐만 아니라 Microtask Queue, Animation frames에도 등록됩니다.

// Microtask Queue와 Animation frame는 무엇일까?
