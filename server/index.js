const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const jsonData = fs.readFileSync("api.json", "utf-8");
  const objData = JSON.parse(jsonData);
  if (req.url === "/") {
    res.end("My first server using nodejs");
  } else if (req.url === "/download") {
    res.end("Download page");
  } else if (req.url === "/about") {
    res.end(objData[0].name);
  } else {
    res.end("404: Page not found");
  }
});

server.listen(8000, () => {
  console.log("server started on posrt 8000");
});
