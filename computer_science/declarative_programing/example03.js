// UI를 구성하는데 왜 선언형이 더 중요한것인가?

/**
 * 버튼 3개를 만들자.
 * 만든 버튼을 화면에 그린다
 * 버튼을 클릭하면 삭선이 그어진다.
 */

// // 명령형
// 버튼 3개를 만들자.
const $button01 = document.createElement("button");
$button01.textContent = "Button01";

const $button02 = document.createElement("button");
$button02.textContent = "Button02";

const $button03 = document.createElement("button");
$button03.textContent = "Button03";

//  만든 버튼을 화면에 그린다.
const $main = document.querySelector("main");

$main.appendChild($button01);
$main.appendChild($button02);
$main.appendChild($button03);

// 버튼을 클릭하면 삭선이 그어진다.
const toggleButton = ($button) => {
  if ($button.style.textDecoration === "line-through") {
    $button.style.textContent = "none";
  } else {
    $button.style.textContent = "line-through";
  }
};

document.querySelectorAll("button").forEach(($button) =>
  $button.addEventListener("click", (e) => {
    const { target } = e;
    toggleButton(target);
  })
);

// $button01.addEventListener("click", () => {
//   if ($button01.style.textDecoration === "line-through") {
//     $button01.style.textDecoration = "none";
//   } else {
//     $button01.style.textDecoration = "line-through";
//   }
// });

// $button02.addEventListener("click", () => {
//   if ($button02.style.textDecoration === "line-through") {
//     $button02.style.textDecoration = "none";
//   } else {
//     $button02.style.textDecoration = "line-through";
//   }
// });

// $button03.addEventListener("click", () => {
//   if ($button03.style.textDecoration === "line-through") {
//     $button03.style.textDecoration = "none";
//   } else {
//     $button03.style.textDecoration = "line-through";
//   }
// });

// // 선언형
// 독립적으로 실행 될 수 있게...
// Components 형식으로 추상화 하기.
// 유지 보수 쉬워짐.
function ToggleButton({ $target, text }) {
  const $button = document.createElement("button");
  let isInit = false;

  this.render = () => {
    $button.textContent = text;

    if (!isInit) {
      $target.appendChild($button);

      $button.addEventListener("click", () => {
        if ($button.style.textDecoration === "line-through") {
          $button.style.textDecoration = "none";
        } else {
          $button.style.textDecoration = "line-thourgh";
        }
      });

      isInit = true;
    }
  };
}

const $app = document.querySelector("#app");

new ToggleButton({
  $target: $app,
  text: "Button01",
});

new ToggleButton({
  $target: $app,
  text: "Button02",
});

new ToggleButton({
  $target: $app,
  text: "Button03",
});

/**
 * 기능 추가하기
 *
 * 3번 클릭할 때마다 alert 띄우기
 * ToggleButton 외에 5초 뒤에 자동 토글 되는 버튼 만들기
 * ButtonGroup 만들기
 */
