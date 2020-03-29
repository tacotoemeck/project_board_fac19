let templateCollaboratorsDiv = document.getElementById(
  "projectCard_colaborators"
);
const week1_project_board = document.querySelector(
  ".weekProjectDisplay_projectBoard"
);
const projectCardTemplate = document.getElementById("projectCardTemplate");

// Get a list of repos of #fac19

const getUser = username =>
  fetch(`https://api.github.com/users/${username}`).then(response =>
    response.json()
  );

// Get desired repos
const getRepos = user =>
  fetch(user.repos_url).then(response => response.json());

const getColaborators = repo => fetch(repo).then(response => response.json());

const selectRepo = (array, repo_name) => {
  // create a main template here
  let filterArray = array.filter(repo => repo.name === repo_name);
  console.log(filterArray[0].url);
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
  arr.forEach(user => {
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
      .children[2].appendChild(collaboratorsDiv);
  });
};

// show collaborators for a given repository
function showCollaborators(name) {
  let result;
  return (result = getUser("fac19")
    .then(getRepos)
    .then(repo_array => selectRepo(repo_array, name)[0].contributors_url)
    .then(getColaborators)
    .then(array => createUserThumbFromTemplate(array, name))
    .catch(console.error));
}

showCollaborators("week1-hklo");
showCollaborators("week1-cica");
showCollaborators("week3-JICG");
