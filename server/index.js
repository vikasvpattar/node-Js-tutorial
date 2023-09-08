const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("My first server using nodejs");
  } else if (req.url === "/download") {
    res.end("Download page");
  } else {
    res.end("404: Page not found");
  }
});

server.listen(8000, () => {
  console.log("server started on posrt 8000");
});
