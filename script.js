const themed = document.getElementsByClassName("themed");

for (let theme of themed) {
  theme.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
}

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
