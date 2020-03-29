const http = require("http");
const port = process.env.PORT || 3000;
const hostName = process.env.HOSTNAME || "0.0.0.0";
const router = require("./router");

const server = http.createServer(router).listen(port, hostName, () => {
  console.log(`listening http://${hostName}:${port}`);
});
