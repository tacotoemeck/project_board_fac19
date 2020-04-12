// const models = require("../model.js");
// // import { saveRepo } from "../model.js";

let templateCollaboratorsDiv = document.getElementById(
  "projectCard_colaborators"
);
const week1_project_board = document.querySelector(
  ".weekProjectDisplay_projectBoard"
);
const projectCardTemplate = document.getElementById("projectCardTemplate");

// Get a list of repos of #fac19

const getUser = (username) =>
  fetch(`https://api.github.com/users/${username}`).then((response) =>
    response.json()
  );

// Get desired repos
const getRepos = (user) =>
  // "?page=1&per_page=100" - this needs to be added to the url so it returns more than default 30 results
  fetch(user.repos_url + "?page=1&per_page=100").then((response) => {
    repo_fetched = true;
    return response.json();
  });

const getColaborators = (repo) =>
  fetch(repo).then((response) => response.json());

const selectRepo = (array, repo_name) => {
  // create a main template here
  console.log(array);
  let filterArray = array.filter((repo) => repo.name === repo_name);
  let docFrag = projectCardTemplate.content.cloneNode(true);
  // project name
  docFrag.querySelector(".projectCard").dataset.title = repo_name;
  docFrag.querySelector(".projectCard_title").innerText = repo_name;
  docFrag.querySelector(".projectCard_github").href = filterArray[0].html_url;

  week1_project_board.appendChild(docFrag);
  return filterArray;
};

const createUserThumbFromTemplate = (arr, repo_name) => {
  // let docFrag = projectCardTemplate.content.cloneNode(true);
  arr.forEach((user) => {
    // create a parent div
    let collaboratorsDiv = document.createElement("DIV");
    collaboratorsDiv.classList.add("projectCard_colaborators--div");
    // create an image and append to parent div
    let thumbImg = document.createElement("img");
    thumbImg.src = user.avatar_url;
    thumbImg.classList.add("projectCard_colaborators--image");
    collaboratorsDiv.appendChild(thumbImg);
    // create a hover on link and append to parent div
    let thumbLink = document.createElement("a");
    thumbLink.innerText = `GITHUB`;
    thumbLink.setAttribute("href", `${user.html_url}`);
    thumbLink.classList.add("projectCard_colaborators--link");
    collaboratorsDiv.appendChild(thumbLink);
    // append parent div
    document
      .querySelector(`[data-title=${repo_name}]`)
      .children[3].appendChild(collaboratorsDiv);
  });
};

// show collaborators for a given repository
function showCollaborators(name) {
  let result;
  return (result = getUser("fac19")
    .then((res) => {
      console.log(res);
      return getRepos(res);
    })
    .then((repo_array) => selectRepo(repo_array, name)[0].contributors_url)
    .then(getColaborators)
    .then((array) => createUserThumbFromTemplate(array, name))
    .catch((error) => {
      repo_fetched = false;
      console.error(error);
    }));
}

// form functionality
// use let instead of const as below variables won't exist on all pages
let fetch_submit_button =
  document.querySelector("#projectNameForm__submit") || undefined;
let addImage_submit_button =
  document.querySelector("#projectScreenshootForm__submit") || undefined;
let addWeek_submit_button =
  document.querySelector("#projectAddWeektForm__submit") || undefined;
let add_repo_button = document.querySelector("#add_project_button");

// fetch repo
fetch_submit_button.addEventListener("click", (event) => {
  event.preventDefault();
  fetchFormValidator(event.target, showCollaborators);
});

// add image
addImage_submit_button.addEventListener("click", (event) => {
  event.preventDefault();
  let img_URL = project_img.value;
  let projectCard_img_div = document.querySelector(".projectCard_image_div");
  projectCard_img_div.classList.add("form_image_loader");
  let new_img = new Image();
  new_img.classList.add("projectCard_image_div_IMG");
  new_img.onload = function () {
    imgFormValidatorSuccess();
  };
  new_img.onerror = function () {
    // if image doesn't load
    imgFormValidatorFail();
    new_img.src =
      "https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png";
  };
  new_img.src = img_URL;

  // check if the div is empty
  if (!projectCard_img_div.hasChildNodes()) {
    projectCard_img_div.appendChild(new_img);
  } else {
    // if it is remove current img ( showing url doesn't exist image )
    projectCard_img_div.firstChild.remove();
    // then add the found image
    projectCard_img_div.appendChild(new_img);
  }
});

addWeek_submit_button.addEventListener("click", (event) => {
  event.preventDefault();
  let week = project_week.value;
  if (weekFormValidator(week)) {
    document.querySelector(".projectCard_week").innerHTML = week;
    document.getElementById("add_project_button").disabled = false;
  }
});

// save project

// create and object that can then be save into a database
add_repo_button.addEventListener("click", () => {
  let project_week = document.querySelector(".projectCard_week").innerHTML;
  let project_name = document.querySelector(".projectCard_title").innerHTML;
  let project_screenshot = document.querySelector(".projectCard_image_div_IMG")
    .src;
  let project_link = document.querySelector(".projectCard_github").href;
  let project_collaborators = document.querySelectorAll(
    ".projectCard_colaborators--div"
  );
  // approach 1 - create an object
  // create a repo obj
  let repo_obj = {
    project_week: project_week,
    project_name: project_name,
    project_screenshot: project_screenshot,
    project_collaborators: [],
    github_link: project_link,
  };
  // push collaborators into nested array within repo obj
  project_collaborators.forEach((collab) => {
    let collaborator_obj = {
      github_img: collab.firstChild.src,
      github_link: collab.lastChild.href,
    };
    repo_obj.project_collaborators.push(collaborator_obj);
  });
  // add save to database logic
  objToForm(repo_obj);
  // approach 2 - create a form
});

function objToForm(obj) {
  let form = document.createElement("form");
  let body = document.querySelector("body");
  form.method = "post";
  form.action = "submit";
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && key !== "project_collaborators") {
      let input = document.createElement("input");
      input.type = "text";
      input.name = key;
      input.value = `${obj[key]}`;
      form.appendChild(input);
    }
    if (obj.hasOwnProperty(key) && key === "project_collaborators") {
      let input = document.createElement("input");
      input.type = "text";
      input.name = key;
      input.value = `${JSON.stringify(obj[key])}`;
      form.appendChild(input);
    }
  }

  body.appendChild(form);
  form.submit();
}
