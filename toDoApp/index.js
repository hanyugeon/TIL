import App from "./App.js";

const DUMY = [
  {
    _id: 1,
    content: "Javascript 복습하기",
    isCompleted: true,
  },
  {
    _id: 2,
    content: "CSS 복습하기",
    isCompleted: false,
  },
];

const $target = document.querySelector("#app");

new App({ $target, DUMY });
