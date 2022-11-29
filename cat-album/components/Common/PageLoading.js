export default function PageLoading({ $target, isLoading }) {
  const $loading = document.createElement("div");
  $loading.classList.add("Loading");
  $target.appendChild($loading);

  this.state = isLoading;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $loading.innerHTML = `
      <div class="content">
        <img width="100%" src="https://cdn.roto.codes/images/nyan-cat.gif" alt="Loading..." />
      </div>
    `;

    $loading.style.display = this.state ? "block" : "none";
  };

  this.render();
}
