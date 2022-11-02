/**
 * 기능 추가하기
 *
 * 3번 클릭할 때마다 alert 띄우기
 * ToggleButton 외에 5초 뒤에 자동 토글 되는 버튼 만들기
 * ButtonGroup 만들기
 */

// // 선언형
// 독립적으로 실행 될 수 있게...
// Components 형식으로 추상화 하기.
// 유지 보수 쉬워짐.
function TimerButton({ $target, text, timer = 5000 }) {
  const button = new ToggleButton({
    $target,
    text,
    onClick: () => {
      setTimeout(() => {
        button.setState({
          ...button.state,
          toggled: !button.state.toggled,
        });
      }, timer);
    },
  });
}

function ToggleButton({ $target, text, onClick }) {
  const $button = document.createElement("button");
  $target.appendChild($button);

  this.state = {
    clickCount: 0,
    toggled: false,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $button.textContent = text;

    $button.style.textDecoration = this.state.toggled ? "line-through" : "none";
  };

  $button.addEventListener("click", () => {
    this.setState({
      clickCount: this.state.clickCount + 1,
      toggled: !this.state.toggled,
    });

    if ($button.style.textDecoration === "line-through") {
      $button.style.textDecoration = "none";
    } else {
      $button.style.textDecoration = "line-thourgh";
    }

    if (onClick) {
      onClick(this.state.clickCount);
    }
  });

  this.render();
}

function ButtonGroup({ $target, buttons }) {
  const $group = document.createElement("div");
  let isInit = false;

  this.render = () => {
    if (!isInit) {
      buttons.forEach(({ type, ...props }) => {
        if (type === "toggle") {
          new ToggleButton({ $target: $group, ...props });
        } else if (type === "timer") {
          new TimerButton({ $target: $group, ...props });
        }
      });

      $target.appnedChild($group);
      isInit = true;
    }
  };

  this.render();
}

const $app = document.querySelector("#app");

new ButtonGroup({
  $target: $app,
  button: [
    {
      type: "toggle",
      text: "토글 버튼",
    },
    {
      type: "toggle",
      text: "토글 버튼",
    },
    {
      type: "timer",
      text: "타이머 버튼",
      timer: 3000,
    },
  ],
});

new ToggleButton({
  $target: $app,
  text: "Button01",
  onClick: (clickCount) => {
    if (clickCount % 3 === 0) {
      alert("3번째 클릭.");
    }
  },
});

new ToggleButton({
  $target: $app,
  text: "Button02",
});

new ToggleButton({
  $target: $app,
  text: "Button03",
});

new TimerButton({
  $target: $app,
  text: "5초 뒤에 자동으로!",
});
