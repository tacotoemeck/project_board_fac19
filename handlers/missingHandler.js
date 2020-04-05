const templates = require("../templates/templates");

function missingHandler(request, response) {
  response.writeHead(404, { "content-type": "text/html" });
  response.end();
}

module.exports = missingHandler;
