let ul = document.querySelector("ul");
let burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  if (ul.classList.value != "") {
    ul.classList.remove("displayNone");
    console.log(ul.classList, "In else");
  } else {
    ul.classList.add("displayNone");
    console.log(ul.classList, "in if");
  }
});

console.log(ul.classList, ul.classList.value == "displayNone", "muda");
