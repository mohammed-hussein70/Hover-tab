let buttons = document.querySelectorAll(".cont .links button");
let cont = document.querySelectorAll(".cont .tab-text .text");

buttons.forEach((button, index) => {
  button.addEventListener("mouseover", function () {
    cont.forEach((text) => {
      text.classList.add("hidden");
    });
    cont[index].classList.remove("hidden");
  });
});
