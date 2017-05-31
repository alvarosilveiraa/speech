const http = require("http")
  , url = require("url")
  , path = require("path")
  , fs = require("fs");
http.createServer((req, res) => {
  try {
    res.writeHead(200);
    let files = fs.createReadStream(path.join(__dirname, url.parse(req.url).pathname))
    files.pipe(res);
    files.on("error", err => {
      res.writeHead(400);
      res.end();
    })
  }catch(e) {
    res.writeHead(500);
    res.end();
  }
}).listen(80);
