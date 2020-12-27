const slide = document.querySelector("#dot"),
  toggle = document.querySelector("#theme-toggle"),
  theme = document.querySelector("#theme-style"),
  text = document.querySelector(".theme > h4");

toggle.addEventListener("click", () => {
  slide.style.transform =
    slide.style.transform === "translateX(0%)"
      ? "translateX(100%)"
      : "translateX(0%)";

  document.body.dataset.theme =
    document.body.dataset.theme === "light" ? "dark" : "light";

  text.innerText = text.innerText === "Light Mode" ? "Dark Mode" : "Light Mode";
});
