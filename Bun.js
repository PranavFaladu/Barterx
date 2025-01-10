const http = require("http")
const path = require("path")
const fs = require("fs")
// const { url } = require("inspector")

const server = Bun.serve({
    port:8050,
    fetch(req){
       const url = new URL(req.url);

       
       switch (url.pathname) {
        case "/":
            return new Response(Bun.file("./content/index.html"));
            
        case "/products":
            return new Response(Bun.file("./content/products.html"));
            
        case "/login":
            return new Response(Bun.file("./content/login.html"));
            
        case "/signup":
            return new Response("Sign up to BarterX");
            
        case "/profile":
            return new Response("Trader Profile");
            
        case "/cart":
            return new Response("Your Shopping Cart is here");
            
        case "/checkout":
            return new Response("Let's start shipping");
            
        case "/orders":
            return new Response("Your Orders are here");
            
        case "/categories":
            return new Response("Browse Categories");
            
        case "/chat":
            return new Response("Your chat with fellow traders");
            
        case "/contact":
            return new Response("Contact us here");
            
        case "/about":
           return new Response(Bun.file("./content/about.html"))
            
        default:
            return new Response("Page not found");
            break;
    }

    }
})

console.log(`Listening on http://localhost:${server.port}`)

