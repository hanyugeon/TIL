/**
 * 스택
 * LIFO 개념을 가진 선형 자료구조
 */

// Stack ( Array로 구현 )
// Push
const stack01 = [];
stack01.push(1);
stack01.push(2);
stack01.push(3);
console.log(stack01);

// Pop
stack01.pop();
console.log(stack01);

// Get Top
console.log(stack01[stack01.length - 1]);

// Stack ( LinkedList로 구현 )
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    node.next = this.top;
    this.top = node;
    this.length += 1;
  }

  pop() {
    const value = this.top.value;

    this.top = this.top.next;
    this.length -= 1;

    return value;
  }

  size() {
    return this.length;
  }
}

const stack02 = new Stack();

stack02.push(1);
stack02.push(2);
stack02.push(3);
console.log(stack02.size());
console.log(stack02.pop());
stack02.push(4);
console.log(stack02.pop());
console.log(stack02.pop());
console.log(stack02.size());

// 실습 (문제 풀이)
// 개선된 풀이
function solution(s) {
  // 선언부
  let status = 0;

  const updateStatus = (value) => {
    if (value === "(") {
      status += 1;
    } else if (value === ")") {
      status -= 1;
    } else {
      console.error("update error");
    }
  };

  const checkStatus = () => {
    if (status >= 0) return true;

    return false;
  };

  // 실행부
  if (s.length % 2 !== 0) return false; // s의 길이가 짝수가 아니면 false

  for (const char of s) {
    // Array s를 for of 문을 통해 반복문 실행
    updateStatus(char); // status 값을 업데이트

    if (!checkStatus()) break; // status 값을 체크
  }

  return status === 0; // 반복문 실행 이후에 status의 값이 0 이라면 true 반환 ( 0이 아니면 false )
}

// // 처음 풀이
// function solution(s){
//     let status = 0
//     let answer = 0

//     const getStack = (string) => {
//         const response = string.split("")

//         return response
//     }

//     const updateStatus = (stack) => {
//         const temp = stack.pop()
//         if (temp === ")") {
//             status += 1
//         } else if (temp === "(") {
//             status -= 1
//         } else {
//             return
//         }
//     }

//     const checkStatus = (stack) => {
//         if (status >= 0) return

//         return false
//     }

//     const stack = getStack(s)

//     if (stack.length % 2 !== 0) return false

//     while (stack.length > 0) {
//         updateStatus(stack)

//         if (checkStatus(stack) === false) {
//             answer = false
//             break
//         }

//         answer = true
//     }

//     return answer;
// }
