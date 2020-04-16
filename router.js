const deleteHandler = require("./handlers/deleteHandler");
const homeHandler = require("./handlers/homeHandler.js");
const missingHandler = require("./handlers/missingHandler.js");
const publicHandler = require("./handlers/publicHandler.js");
const addRepoHandler = require("./handlers/formPageDisplay.js");
const checkRepoHandler = require("./handlers/checkRepo.js");
const submitPostHandler = require("./handlers/submitPost.js");
const loginGetHandler = require("./handlers/loginGet");
const loginPostHandler = require("./handlers/loginPost");
const logoutHandler = require("./handlers/logout");

const authorization = require("./public/authorizationHelper");

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/" && method === "DELETE") {
    deleteHandler(request, response);
  } else if (url === "/") {
    if (!authorization.checkIfAdminIsLoggedIn(request)) {
      homeHandler(request, response, false);
    } else {
      homeHandler(request, response, true);
    }
  } else if (url === "/addRepo" && method === "GET") {
    // verify if admin
    authorization.checkIfAdminIsLoggedIn(request);
    authorization.verifyPassword(request, response, addRepoHandler);
  } else if (url === "/addRepo/check" && method === "POST") {
    // verify if admin
    authorization.checkIfAdminIsLoggedIn(request);
    authorization.verifyPassword(request, response, checkRepoHandler);
  } else if (url === "/submit" && method === "POST") {
    // verify if admin
    authorization.checkIfAdminIsLoggedIn(request);
    authorization.verifyPassword(request, response, submitPostHandler);
  } else if (url === "/login" && method === "GET") {
    if (!authorization.checkIfAdminIsLoggedIn(request)) {
      loginGetHandler(request, response, false);
    } else {
      loginGetHandler(request, response, true);
    }
  } else if (url === "/login" && method === "POST") {
    loginPostHandler(request, response);
  } else if (url === "/logout") {
    logoutHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
