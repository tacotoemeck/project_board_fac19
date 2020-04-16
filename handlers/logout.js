function logoutHandler(request, response) {
  if (request.headers.cookie) {
    response.writeHead(302, {
      Location: "/",
      "Set-Cookie": `FAC19=0; HttpOnly; Max-Age=0`,
    });
  } else {
    response.writeHead(302, {
      Location: "/",
    });
  }
  return response.end();
}

module.exports = logoutHandler;
