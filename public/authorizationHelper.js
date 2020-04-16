const { parse } = require("cookie");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

let token = false;

// function serveTemplatesAccordingtoLoggedStatus(request, response, handler, value) {

// }

function checkIfAdminIsLoggedIn(request) {
  if (request.headers.cookie && request.headers.cookie.includes("FAC19")) {
    token = parse(request.headers.cookie).FAC19;
    return true;
  } else {
    token = false;
    return false;
  }
}

function verifyPassword(request, response, handler) {
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      response.writeHead(302, {
        location: "/login",
      });
      response.end();
    } else {
      handler(request, response);
    }
  });
}

module.exports = { checkIfAdminIsLoggedIn, verifyPassword, token };
