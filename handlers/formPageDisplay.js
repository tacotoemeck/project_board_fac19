const templates = require("../templates/templates");

function addRepoHandler(req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(templates.showFormPage());
}

module.exports = addRepoHandler;
