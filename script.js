//Funktion Theme [Dark to light]
function myfunction(e) {
  const doc = document.documentElement;
  doc.classList.toggle("dark");

  document.querySelectorAll(".inverted").forEach((result) => {
    result.classList.toggle("invert");
  });

  const img = e.currentTarget.querySelector("img");
  if (doc.classList.contains("dark")) {
    img.src = "svg/moon-bold.svg";
  } else {
    img.src = "svg/sun-medium.svg";
  }
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", myfunction);
