const menuButton = document.querySelector(".navbar__links__menuButton");
const toggleMenu = document.querySelector(".navbar_toggleMenu");
let isMenuOpen = false;

menuButton.addEventListener("click", toggleMenuFunction);

window.addEventListener("click", hideMenuOnClickElsewhere);

function toggleMenuFunction() {
  if (toggleMenu.classList.contains("hidden")) {
    isMenuOpen = true;
    toggleMenu.classList.remove("hidden");
  } else {
    isMenuOpen = false;
    toggleMenu.classList.add("hidden");
  }
}

function hideMenuOnClickElsewhere(e) {
  if (isMenuOpen) {
    if (
      e.target.parentNode.classList.contains("navbar_toggleMenu") ||
      e.target.classList.contains("navbar__links__menuButton")
    ) {
      return;
    } else {
      toggleMenu.classList.add("hidden");
    }
  }
}
