const model = require("../model");

function submitPostHandler(req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    const repo = new URLSearchParams(body);
    const repoObject = Object.fromEntries(repo);
    console.log(repoObject);
    model
      .saveRepo(repoObject)
      .then(() => {
        res.writeHead(302, { location: "/" });
        res.end();
      })
      .catch((err) => console.error(err));
  });
}

module.exports = submitPostHandler;
