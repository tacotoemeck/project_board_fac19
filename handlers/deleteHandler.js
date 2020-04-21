const model = require("../model");

function deleteHandler(req, res) {
  //   let body = "";
  const projectId = parseInt(req.url.match(/\d+/)[0]);

  model.deleteRepo(projectId).then((_) => {
    res.writeHead(302, { location: "/" });
    res.end();
  });
}

module.exports = deleteHandler;
