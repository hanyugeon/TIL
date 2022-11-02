function double(arr) {
  // 명령형에 가깝게?
  // "어떻게" 처리하는지에 대한 묘사.
  // 어느함수는 이렇게 하고, 어느함수는 저렇게 하고, 유지보수 힘들어짐.
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") results.push(arr[i] * 2);
  }

  return results;
}

// 2, 4, 6, 10
document.querySelector("main").innerHTML = double([1, 2, 3, "", "a", 5]);

function triple(arr) {
  // 선언형에 가깝게!
  // "무엇을" 원하는지에 대한 묘사.
  // "무엇"이 나타나야하는지를 묘사.
  return arr
    .filter((param) => typeof param === "number")
    .map((number) => number * 3);
  // 한번씩 끊어서 사용하면 편함
  // 항상 인지하고 훈련이 필요!
}

// 3, 6, 9, 15
document.querySelector("main").innerHTML = triple([1, 2, 3, "", "a", 5]);
