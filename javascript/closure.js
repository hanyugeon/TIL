function closure01() {
  let i = 0;
  for (i = 0; i < 5; i += 1) {
    setTimeout(function () {
      console.log(i, "closure01");
    }, i * 100);
  }
}

// closure01();

/**
 * 실행 결과: 5, 5, 5, 5, 5
 */

function closure02() {
  for (let i = 0; i < 5; i += 1) {
    setTimeout(function () {
      console.log(i, "closure02");
    }, i * 100);
  }
}

closure02();

/**
 * 실행 결과: 0, 1, 2, 3, 4
 * why?
 * let은 블록수준 스코프 이기때문에
 * 매 루프마다 클로저가 생성된다.
 */

/**
 * 클로저란?
 *
 * 자바스크립트의 가장 강력한 특성중 하나.
 * 숙지해두면?
 * 작성하는 코드의 퀄리티, 품질 상승
 * 혹시 모를 잠재적인 버그, 메모리 누수 같은 문제 예방 가능
 */

function outterFunction() {
  const name = "kim";

  return function () {
    // alert(name);
  };
}

const printName = outterFunction();
printName(); // kim
// outterFunction 실행 이후 name 변수는 소멸해야하나 alert(name)이 잘 동작한다.

function Counter() {
  let count = 0;

  function increase() {
    count++;
  }

  function printCount() {
    console.log(`count: ${count}`);
  }

  return increase, printCount;
}

const counter = Counter();

counter.increase();
counter.increase();
counter.increase();
counter.increase();
counter.printCount();

// // 외부에서는 Counter 함수 내외의 count에 접근 불가.
// console.log(counter.count);
