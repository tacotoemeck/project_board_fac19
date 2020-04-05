const templates = require("../templates/templates");

function homeHandler(req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(templates.mainPageDisplay());
}

module.exports = homeHandler;
