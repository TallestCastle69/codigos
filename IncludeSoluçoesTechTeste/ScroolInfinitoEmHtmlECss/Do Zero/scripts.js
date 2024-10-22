let elemScroll = document.querySelector(".scroll");
let elemContainer = elemScroll.querySelector(".scroll__container");
let elemFilhos = Array.from(elemContainer.children);

elemFilhos.forEach((item) => {
  let elemDuplicado = item.cloneNode(true);
  elemDuplicado.setAttribute("aria-hidden", true);

  elemContainer.appendChild(elemDuplicado);
});

// console.log(elemFilhos);
