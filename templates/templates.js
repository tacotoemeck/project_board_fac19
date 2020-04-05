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
        <h3 class="projectCard_title"></h3>
        <img class="projectCard_image" />
        <div class="projectCard_colaborators"></div>
        <a class="projectCard_github" href="">SEE PROJECT'S REPO</a>
      </div>
    </template>

    <script src="./public/script.js"></script>
  </body>
</html>

    `;
}

function mainPageContent() {
  return `
    <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 1</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard"></div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 2</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard"></div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 3</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard"></div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 4</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard"></div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 5</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard"></div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 6</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard"></div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 7</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard"></div>
      </section>
      <section class="weekProjectDisplay">
        <h2 class="weekProjectDisplay_heading">week 8</h2>
        <h3 class="weekProjectDisplay_learningOutcomes">
          Learning outcomes: ---insert here---
        </h3>
        <div class="weekProjectDisplay_projectBoard"></div>
      </section>
   
    `;
}

function mainPageDisplay() {
  return sharedContent(mainPageContent());
}

// form page

function showFormPage() {
  return sharedContent(formFetchPage());
}

function formFetchPage() {
  return `
    <form class="form" id="projectNameForm">
        <label for="project_name">Repository name:</label>
        <input id="project_name" name="project_name" placeholder="enter EXACT spelling from your github repo" required>
        <button class="form__button" id="projectNameForm__submit" type="submit">FETCH</button>
    </form>
    <form class="form" id="projectScreenshootForm">
        <label for="project_img">Add URL:</label>
        <input id="project_img" name="project_img" placeholder="add screenshoot URL" required>
        <button class="form__button" id="projectScreenshootForm__submit" type="submit">FETCH</button>
    </form>
    <div class="weekProjectDisplay_projectBoard"></div>
    <button id="add_project_button">ADD!</button>
</form>

    `;
  //   <script src="./public/forms.js"></script>
}

// function checkRepoFormDisplay(arr) {
//   //   return script.showRepo("week1-hklo").then((str) => {
//   //     return ` <div id="images">
//   //             ${str}
//   //         </div>
//   //     `;
//   //   });
//   return `
//     <div id="images">
//     ${arr}
//     </div>
//     <script>

//     </script>
//       `;
// }

// function showEachCollaborator(obj) {
//   return `
//     <img class="projectCard_colaborators--image" src="${obj.avatar_url}" />
//     `;
// }

module.exports = {
  sharedContent,
  mainPageDisplay,
  showFormPage,
};
