const { parse } = require("cookie");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

let token = false;

function checkIfAdminIsLoggedIn(request) {
  if (request.headers.cookie) {
    token = parse(request.headers.cookie).FAC19;
    return true;
  } else {
    token = false;
    return false;
  }
}

function verifyPassword(request, response, handler) {
  jwt.verify(token, secret, (err, decoded) => {
    console.log(token);
    if (err) {
      response.writeHead(302, {
        location: "/login",
      });
      response.end();
    } else {
      console.log(decoded);
      handler(request, response);
    }
  });
}

module.exports = { checkIfAdminIsLoggedIn, verifyPassword };
