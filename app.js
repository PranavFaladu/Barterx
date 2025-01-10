const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(`${req.method} at ${req.url}`);

  // Normalize the request URL by trimming
  const url = req.url.trim();

  // Set default content type
  res.setHeader("Content-Type", "text/plain");

  switch (url) {
    case "/":
      res.writeHead(200);
      res.end("Welcome to BarterX");
      break;
    case "/products":
      res.writeHead(200);
      res.end("Here are the products up for sale in BarterX");
      break;
    case "/login":
      res.writeHead(200);
      res.end("Login to BarterX");
      break;
    case "/signup":
      res.writeHead(200);
      res.end("Sign up to BarterX");
      break;
    case "/profile":
      res.writeHead(200);
      res.end("Trader Profile");
      break;
    case "/cart":
      res.writeHead(200);
      res.end("Your Shopping Cart is here");
      break;
    case "/checkout":
      res.writeHead(200);
      res.end("Let's start shipping");
      break;
    case "/orders":
      res.writeHead(200);
      res.end("Your Orders are here");
      break;
    case "/categories":
      res.writeHead(200);
      res.end("Browse Categories");
      break;
    case "/chat":
      res.writeHead(200);
      res.end("Your chat with fellow traders");
      break;
    case "/contact":
      res.writeHead(200);
      res.end("Contact us here");
      break;
    case "/about":
      // Serve the about.html file
      const filePath = path.join(__dirname, "public", "about.html");
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
      break;
    default:
      res.writeHead(404);
      res.end("Page not found");
      break;
  }
});

const PORT = 8050;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
