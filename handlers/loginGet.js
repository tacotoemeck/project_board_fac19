const templates = require("../templates/templates");

function loginGetHandler(request, response, loggedIn) {
  response.writeHead(200, {
    "content-type": "text/html",
  });
  response.end(templates.loginPage("", loggedIn));
}

module.exports = loginGetHandler;
