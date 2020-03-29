const homeHandler = require("./handlers/homeHandler");
const publicHandler = require("./handlers/publicHandler");

const router = (request, response) => {
  const url = request.url;
  if (request.url === "/") {
    homeHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(request, response);
  } else {
    response.writeHead(404, {
      "content-type": "text/html"
    });
    response.end("<h1>404 Not Found</h1>");
  }
};

module.exports = router;
