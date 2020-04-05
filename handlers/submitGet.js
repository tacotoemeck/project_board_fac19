const templates = require("../templates/templates");

function submitGetHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end(templates.submitPage());
}

module.exports = submitGetHandler;
