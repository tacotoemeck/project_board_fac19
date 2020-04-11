const forms = document.querySelectorAll(".ProjectsForm__form");
const repoNameErrorMessage = document.querySelector("#project_name--error");
const imgErrorMessage = document.querySelector("#project_img--error");
const weekErrorMessage = document.querySelector("#project_week--error");
let repo_fetched = false;

// make all input fields invalid
project_name.setAttribute("aria-invalid", false);
project_img.setAttribute("aria-invalid", false);
project_week.setAttribute("aria-invalid", false);

// add validity logic
// project_img.addEventListener("invalid", handleInvalidInput);
// project_img.addEventListener("input", clearValidity);

// project_week.addEventListener("invalid", weekFormValidator);
// project_week.addEventListener("input", clearValidity);

// fetch repo form
async function fetchFormValidator(target, func) {
  target.setAttribute("novalidate", "");
  await func(project_name.value);
  if (!repo_fetched) {
    repoNameErrorMessage.innerHTML =
      "Failed to fetch... coule be a server... but is your spelling EXACT?";
    repoNameErrorMessage.classList.add("form_validation_fail");
    project_name.setAttribute("aria-invalid", true);
  } else {
    repoNameErrorMessage.innerHTML = "Success, we've got something back";
    repoNameErrorMessage.classList.add("form_validation_success");
    switchDisplayedForm(projectNameForm, projectScreenshootForm);
    project_name.setAttribute("aria-invalid", false);
  }
}

function imgFormValidatorFail() {
  imgErrorMessage.innerHTML = "Can't find image URL, check if path is correct";
  imgErrorMessage.classList.add("form_validation_fail");
  project_img.setAttribute("aria-invalid", true);
}

function imgFormValidatorSuccess() {
  imgErrorMessage.innerHTML = "Great, looks liek we found the image!";
  imgErrorMessage.classList.add("form_validation_success");
  switchDisplayedForm(projectScreenshootForm, projectAddWeekForm);
  project_img.setAttribute("aria-invalid", false);
}

function weekFormValidator(target) {
  if (isNaN(target) || target === "") {
    weekErrorMessage.innerHTML =
      "Please enter a number only value not bigger than 16";
    weekErrorMessage.classList.remove("form_validation_success");
    weekErrorMessage.classList.add("form_validation_fail");
    return false;
  } else {
    weekErrorMessage.innerHTML = "Great we've added a week";
    weekErrorMessage.classList.remove("form_validation_fail");
    weekErrorMessage.classList.add("form_validation_success");
    return true;
  }
}

function clearValidity(event) {
  const input = event.target;
  input.setAttribute("aria-invalid", "false");
  //   input.nextElementSibling.textContent = "";
}

function switchDisplayedForm(formToHide, formToDisplay) {
  formToHide.classList.add("hiddenForm");
  formToDisplay.classList.remove("hiddenForm");
}
