// const script = require("../public/fetchAPI");

function sharedContent(content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn Fetch & Promises</title>
        <link rel="stylesheet" href="./public/styles.css" />
      </head>
      <body>
        <div class="container">
          ${content}
        </div>

        <template id="projectCardTemplate">
          <div class="projectCard">
            <h3 class="projectCard_week"></h3>
            <h3 class="projectCard_title"></h3>
            <div class="projectCard_image_div"></div>
            <div class="projectCard_colaborators"></div>
            <a class="projectCard_github" href="">SEE PROJECT'S REPO</a>
          </div>
        </template>
        <script src="./public/formValidator.js"></script>
        <script src="./public/script.js"></script>
      </body>
    </html>
  `;
}

function mainPageContent(projects_array) {
  return `
    <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 1</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array.map((project) => {
          if (project.week === "1") {
            return showProject(project);
          }
        })}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 2</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array.map((project) => {
          if (project.week === "2") {
            return showProject(project);
          }
        })}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 3</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array.map((project) => {
          if (project.week === "3") {
            return showProject(project);
          }
        })}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 4</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array.map((project) => {
          if (project.week === "4") {
            return showProject(project);
          }
        })}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 5</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array.map((project) => {
          if (project.week === "5") {
            return showProject(project);
          }
        })}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 6</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array.map((project) => {
          if (project.week === "6") {
            return showProject(project);
          }
        })}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 7</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array.map((project) => {
          if (project.week === "7") {
            return showProject(project);
          }
        })}
        </div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 8</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard">
        ${projects_array.map((project) => {
          if (project.week === "8") {
            return showProject(project);
          }
        })}
        </div>
      </section>
    `;
}

function mainPageDisplay(project_object) {
  return sharedContent(mainPageContent(project_object));
}

// genereate projects

function showProject(project_object) {
  return `
    <div class="projectCard">
    <h3 class="projectCard_title">${project_object.project_name}</h3>
    <img class="projectCard_image" src=${project_object.project_screenshot}/>
    <div class="projectCard_colaborators">${JSON.parse(
      project_object.collaborators
    ).map((collaborator) => showCollaborators(collaborator))}</div>
    <a class="projectCard_github" href=${
      project_object.project_link
    }>SEE PROJECT'S REPO</a>
  </div>
    `;
}

function showCollaborators(collaborator) {
  return `<div class="projectCard_colaborators--div">
  <img src=${collaborator.github_img} class="projectCard_colaborators--image"/>
  <a href=${collaborator.github_link} class="projectCard_colaborators--link">GITHUB</a>
  </div>`;
}

// form page

function showFormPage() {
  return sharedContent(formFetchPage());
}

function formFetchPage() {
  return `
  <div class="ProjectsForm">
  <form class="ProjectsForm__form" id="projectNameForm">
      <label for="project_name">Repository name:<span aria-hidden="true">*</span></label>
      <div id="repositoryNameRequirements" class="ProjectsForm__form__requirements">Please make sure the spelling and letter sizes are EXACTLY the same as github repo title!</div>
      <input id="project_name" name="project_name" placeholder="enter EXACT spelling from your github repo" aria-describedby="repositoryNameRequirements" required>
      <div id="project_name--error"></div>
      <button class="form__button" id="projectNameForm__submit" type="submit">FETCH</button>
  </form>
  <form class="ProjectsForm__form hiddenForm" id="projectScreenshootForm">
      <label for="project_img">Add URL:<span aria-hidden="true">*</span></label>
      <div id="screenshotNameRequirements" class="ProjectsForm__form__requirements">Please enter valid URL path of your screenshoot</div>
      <input id="project_img" name="project_img" placeholder="add screenshoot URL" aria-describedby="screenshotNameRequirements" minlength="4" required>
      <div id="project_img--error"></div>
      <button class="form__button" id="projectScreenshootForm__submit" type="submit">ADD IMAGE</button>
  </form>
  <form class="ProjectsForm__form hiddenForm" id="projectAddWeekForm">
      <label for="project_week">Add URL:<span aria-hidden="true">*</span></label>
      <div id="screenshotNameRequirements" class="ProjectsForm__form__requirements">Please enter the week when project was completed</div>
      <input id="project_week" name="project_week" placeholder="what week? - must be a number!" aria-describedby="screenshotNameRequirements" required >
      <div id="project_week--error"></div>
      <button class="form__button" id="projectAddWeektForm__submit" type="submit" >ADD WEEK</button>
  </form>
  <div class="weekProjectDisplay_projectBoard"></div>
</div>
<button id="add_project_button" disabled>ADD!</button>
`;
}

function loginPage(message) {
  return sharedContent(
    `
      <form class="loginForm" action="login" method="POST">
        <h2 class="form">Admin login</h2>
        <label for="login_username"> Username:  <span aria-hidden="true">*</span> </label>
        <input
          id="login_username"
          name="login_username"
          placeholder="Username please"
          required
        />
        <label for="login_password"> Password:<span aria-hidden="true">*</span> </label>
        <input
          id="login_password"
          name="login_password"
          placeholder="Hidden password, I see you..."
          type="password"
          required
        />
        <div id="loginForm--error" class="form_validation_fail">${
          message || ""
        }</div>
        <button class="form__button" type="submit">
          login </button> </form >
        </button>
      </form>
    `,
    `<a href="/" class="navbar__links" aria-label="Go back to Home">Home</a>`
  );
}

module.exports = {
  sharedContent,
  mainPageDisplay,
  showFormPage,
  loginPage,
};
