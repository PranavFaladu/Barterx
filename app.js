const http = require("http")

const server = http.createServer((req, res) => {
    console.log(`${req.method} at ${req.url}`);
    res.setHeader("Content-Type", "text/plain"); // Set response type to plain text

    switch (req.url.trim()) {
        case "/":
            res.write("Welcome to BarterX");
            break;
        case "/products":
            res.write("Here are the products up for sale in BarterX");
            break;
        case "/login":
            res.write("Login to BarterX");
            break;
        case "/signup":
            res.write("Sign up to BarterX");
            break;
        case "/profile":
            res.write("Trader Profile");
            break;
        case "/cart":
            res.write("Your Shopping Cart is here");
            break;
        case "/checkout":
            res.write("Let's start shipping");
            break;
        case "/orders":
            res.write("Your Orders are here");
            break;
        case "/categories":
            res.write("Browse Categories");
            break;
        case "/chat":
            res.write("Your chat with fellow traders");
            break;
        case "/contact":
            res.write("Contact us here");
            break;
        case "/about":
            res.write("The modern approach to trading commodities");
            break;
        default:
            res.write("Page not found");
            break;
    }

    res.end(); // End the response
});

const PORT = 8050;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
