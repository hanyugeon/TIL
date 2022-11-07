/**
 * Promise
 *
 * Promise는 비동기 작업을 제어하기 위해 나온 개념으로,
 * callback hell 에서 어느정도 벗어날 수 있게 해줌.
 *
 * Promise로 정의된 작업끼리는 연결 가능,
 * 이를 통해 코드의 depth가 크게 증가하지 않는 효과
 */

// Promise에서는 then을 이용해 비동기 작업 이후 실행할 작업을 지정.
function asyncPromiseWork() {
  // code ...

  return new Promise((resolve, reject) => {
    // code ...

    return resolve("complete");
  });
}

// then의 result에는 resolve를 호출하여 넘긴 complete가 들어있음
asyncPromiseWork().then((result) => console.log(result));

// // 다른 예시
// asyncPromiseWork()
//   .then((result) => {
//     return secondPromiseWork(result);
//   })
//   .then((result) => {
//     return thirdPromiseWork(result);
//   })
//   .catch((error) => {
//     alert("에러가 발생했어요.");
//   });
//   .finally(() => {
//     alert("어쨋든 작업은 끝났습니다.")
//   })
