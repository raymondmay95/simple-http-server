const http = require("http");

const port = 3000;

function cycle(req, res) {
  if (req.url === "/OK") {
    res.writeHead(200);
    console.log("Inbound 'OK' request being processed...");
  } else if (req.url === "/Bad-Request") {
    res.writeHead(400);
    console.log("404 Bad Request");
  } else if (req.url === "/Created") {
    res.writeHead(201);
    console.log("201 Created");
  } else if (req.url === "/Forbidden") {
    res.writeHead(403);
    console.log("403 Forbidden");
  } else if (req.url === "/Found") {
    res.writeHead(302);
    console.log("302 Found");
  } else if (req.url === "/Gateway-Timeout") {
    res.writeHead(504);
    console.log("504 Gateway Timeout");
  } else if (req.url === "/Internal-Server-Error") {
    res.writeHead(500);
    console.log("500 Internal Server Error");
  } else if (req.url === "/Moved-Permanently") {
    res.writeHead(301);
    console.log("301 Moved Permanently");
  } else if (req.url === "/Unauthorized") {
    res.writeHead(401);
    console.log("401 Unauthorized");
  } else {
    res.writeHead(404);
    console.log("404 Not Found");
  }
  return res.end();
}
let server = http.createServer(cycle);

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
