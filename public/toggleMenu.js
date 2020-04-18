const menuButton = document.querySelector(".navbar__links__menuButton");
const toggleMenu = document.querySelector(".navbar_toggleMenu");

menuButton.addEventListener("click", toggleMenuFunction);

function toggleMenuFunction() {
  if (toggleMenu.classList.contains("hidden")) {
    toggleMenu.classList.remove("hidden");
  } else {
    toggleMenu.classList.add("hidden");
  }
}
