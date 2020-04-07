const deleteHandler = require("./handlers/deleteHandler");
const homeHandler = require("./handlers/homeHandler.js");
const missingHandler = require("./handlers/missingHandler.js");
const publicHandler = require("./handlers/publicHandler.js");
const addRepoHandler = require("./handlers/formPageDisplay.js");
const checkRepoHandler = require("./handlers/checkRepo.js");
const submitPostHandler = require("./handlers/submitPost.js");

function router(request, response) {
  const url = request.url;
  const method = request.method;

  if (url === "/" && method === "DELETE") {
    deleteHandler(request, response);
  } else if (url === "/") {
    homeHandler(request, response);
  } else if (url === "/addRepo" && method === "GET") {
    addRepoHandler(request, response);
  } else if (url === "/addRepo/check" && method === "POST") {
    checkRepoHandler(request, response);
  } else if (url === "/submit" && method === "POST") {
    submitPostHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}

module.exports = router;
