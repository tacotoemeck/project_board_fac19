// const db = require("../db/connection");
const model = require("../model.js");
const getBody = require("../getBody");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function loginPostHandler(request, response) {
  getBody(request).then((body) => {
    const params = new URLSearchParams(body);
    const username = params.get("login_username");
    const password = params.get("login_password");
    console.log("Login attempt:", username, password);

    model
      .getUser(username)
      .then((dbUser) => {
        console.log(
          `This is password ${password} and this is dbpassword ${dbUser.user_password} and this is the id ${dbUser.id}`
        );
        const dbID = dbUser.id;
        bcrypt
          .compare(password, dbUser.user_password)
          .then((match) => {
            if (!match) throw new Error("Password does not match!");
            console.log("Great! You have succeeded!");

            const cookie = jwt.sign(
              {
                id: dbID,
                userCookie: username,
                passwordCookie: password,
              },
              "SECRETCODE"
            );
            response.writeHead(302, {
              Location: "/",
              "Set-Cookie": `FAC19=${cookie}; HttpOnly`,
            });
            return response.end();
          })

          .catch((err) => {
            response.writeHead(401, {
              "content-type": "text/plain",
            });
            response.end(err.message);
          });
      })

      .catch((err) => {
        response.writeHead(401, {
          "content-type": "text/plain",
        });
        response.end("User not found");
      });
  });
}

module.exports = loginPostHandler;
