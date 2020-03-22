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
  return array.filter(repo => repo.name === repo_name);
};

const createUserThumbFromTemplate = arr => {
  let docFrag = projectCardTemplate.content.cloneNode(true);
  arr.forEach(user => {
    let thumbImg = document.createElement("img");
    thumbImg.src = user.avatar_url;
    thumbImg.classList.add("projectCard_colaborators--image");
    docFrag.querySelector(".projectCard_colaborators").appendChild(thumbImg);
  });
  week1_project_board.appendChild(docFrag);
};

// show collaborators for a given repository
function showCollaborators(name) {
  let result;
  return (result = getUser("fac19")
    .then(getRepos)
    .then(repo_array => selectRepo(repo_array, name)[0].contributors_url)
    .then(getColaborators)
    .then(array => createUserThumbFromTemplate(array))
    .catch(console.error));
}

showCollaborators("week1-hklo");

function createListItemUsingTemplate(textAreaContent) {
  let docFrag = template.content.cloneNode(true);
  docFrag.querySelector(
    ".projectCard_colaborators"
  ).textContent = textAreaContent;
  listContainer.appendChild(docFrag);
}

//

// Promise.all([oliverPromise, starsuitPromise])
//   .then(console.log)
//   .catch(console.error);
