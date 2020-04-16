const templates = require("../templates/templates");
const model = require("../model");

function homeHandler(req, res, loggedIn) {
  model
    .getRepo()
    .then((result) => result.rows)
    .then((projects) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(templates.mainPageDisplay(projects, loggedIn));
    })
    .catch(console.error);
}

module.exports = homeHandler;
