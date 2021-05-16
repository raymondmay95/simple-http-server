const http = require("http");

const port = 3000;

function cycle(req, res) {
  return res.end();
}
let server = http.createServer(cycle);

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
