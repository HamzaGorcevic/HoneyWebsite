let ul = document.querySelector("ul");
let burger = document.querySelector(".burger");
burger.addEventListener("click", toggler);

function toggler(el) {}
console.log(ul.classList, ul.classList.value == "displayNone", "muda");
console.log(ul.innerHTML);
const icons = document.querySelectorAll(".icon");
icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    icon.classList.toggle("open");
    ul.classList.toggle("displayNone");
    console.log(ul.classList);
  });
});
if (window.screen.availWidth > 1299) {
  ul.classList?.remove("displayNone");
}

console.log(window.screen);
