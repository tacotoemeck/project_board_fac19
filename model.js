const db = require("./db/connection");

function saveRepo(repo) {
  console.log(repo.project_name);
  return db.query("INSERT INTO  projects(project_name) VALUES($1)", [
    repo.project_name,
  ]);
}

module.exports = { saveRepo };
