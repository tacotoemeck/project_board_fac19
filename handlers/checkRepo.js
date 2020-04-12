const templates = require("../templates/templates");

function checkRepoHandler(req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    const repo = new URLSearchParams(body);
    const repoObj = Object.fromEntries(repo);

    res.writeHead(200, { "content-type": "text/html" });
    res.end(
      script
        .showRepo("week1-hklo")
        .then((arr) => templates.checkRepoFormDisplay(arr))
        .then((str) => str)
    );
  });
}

module.exports = checkRepoHandler;
