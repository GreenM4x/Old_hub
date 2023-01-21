/* loop throw all elements with the class (.hidden , .hidden_right, .hidden_left) 
and adds an class show if visable on screen and removes it when not */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".hidden , .hidden_right, .hidden_left"
);
hiddenElements.forEach((el) => observer.observe(el));
