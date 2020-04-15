// const db = require("../db/connection");
const model = require("../model.js");
const getBody = require("../getBody");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
const templates = require("../templates/templates");

function loginPostHandler(request, response) {
  getBody(request).then((body) => {
    const params = new URLSearchParams(body);
    const username = params.get("login_username");
    const password = params.get("login_password");

    model
      .getUser(username)
      .then((dbUser) => {
        const dbID = dbUser.id;
        bcrypt
          .compare(password, dbUser.user_password)
          .then((match) => {
            if (!match) {
              response.writeHead(401, {
                "content-type": "text/html",
              });
              response.end(templates.loginPage("Password does not match"));
            }
            const cookie = jwt.sign(
              {
                id: dbID,
                userCookie: username,
                passwordCookie: password,
              },
              secret
            );
            response.writeHead(302, {
              Location: "/",
              "Set-Cookie": `FAC19=${cookie}; HttpOnly`,
            });
            return response.end();
          })
          .catch((err) => {
            response.writeHead(401, {
              "content-type": "text/html",
            });
            response.end(templates.loginPage(err));
          });
      })
      .catch((err) => {
        response.writeHead(401, {
          "content-type": "text/html",
        });
        response.end(templates.loginPage("User does not match"));
      });
  });
}

module.exports = loginPostHandler;
