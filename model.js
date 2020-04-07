const db = require("./db/connection");

function getRepo() {
  return db.query(
    `
    SELECT * FROM projects;
    `
  );
}

function saveRepo(repo) {
  console.log(repo.project_name);
  return db.query(
    "INSERT INTO  projects( week, project_name, project_screenshot, collaborators, project_link) VALUES($1, $2, $3, $4, $5)",
    [
      repo.project_week,
      repo.project_name,
      repo.project_screenshot,
      repo.project_collaborators,
      repo.github_link,
    ]
  );
}

module.exports = { saveRepo, getRepo };
