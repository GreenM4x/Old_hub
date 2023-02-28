/* const themed = document.getElementsByClassName("themed");

for (let theme of themed) {
  theme.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
} */

function myfunction(e) {
  const doc = document.documentElement;
  doc.classList.toggle("dark");

  document.querySelectorAll(".inverted").forEach((result) => {
    result.classList.toggle("invert");
  });

  const img = e.currentTarget.querySelector("img");
  if (doc.classList.contains("dark")) {
    img.src = "/svg/moon-bold.svg";
  } else {
    img.src = "/svg/sun-medium.svg";
  }
}
const btn = document.querySelector(".btn");
btn.addEventListener("click", myfunction);
/* import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

const octokit = new Octokit({ 
  auth: "",
});

const result = await octokit.request(
  "GET /repos/GreenM4x/projekt_gamedesign/languages",
  {
    owner: "GreenM4x",
    repo: "projekt_gamedesign",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
  }
);

console.log("result", result);
 */
