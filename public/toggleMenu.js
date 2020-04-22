const menuButton = document.querySelector(".navbar__links__menuButton");
const toggleMenu = document.querySelector(".navbar_toggleMenu");
const MENU = document.querySelector(".navbar__links");
let isMenuOpen = false;

menuButton.addEventListener("click", toggleMenuFunction);

window.addEventListener("click", hideMenuOnClickElsewhere);

function toggleMenuFunction() {
  if (toggleMenu.classList.contains("hidden")) {
    isMenuOpen = true;
    isExpandedAriaLabelControl();
    toggleMenu.classList.remove("hidden");
  } else {
    isMenuOpen = false;
    isExpandedAriaLabelControl();
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
      isExpandedAriaLabelControl();
      toggleMenu.classList.add("hidden");
    }
  }
}

function isExpandedAriaLabelControl() {
  if (isMenuOpen) {
    MENU.setAttribute("aria-expanded", true);
  } else {
    MENU.setAttribute("aria-expanded", false);
  }
}
