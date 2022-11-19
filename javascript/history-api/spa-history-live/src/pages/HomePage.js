import { request } from "../api.js";

export default function HomePage({ $target }) {
  const $home = document.createElement("div");

  // $target.appendChild 하지 않음 왜?
  // route함수에서 HomePage Component를 어떤것을 렌더링할지 정하기 때문에

  this.render = () => {
    request("/products").then((products) => {
      $home.innerHTML = `
        <h1>Home Page</h1>
        <ul>
          ${products
            .map(
              (product) => `
              <li>
                <a class="link" href="/products/${product.id}">
                  ${product.name}
                </a>
              </li>
            `
            )
            .join("")}
        </ul>
      `;

      $target.appendChild($home);
    });
  };
}
