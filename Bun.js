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
            return new Response(Bun.file("./content/signup.html"));
            
        case "/profile":
            return new Response(Bun.file("./content/profile.html"));
            
        case "/cart":
            return new Response(Bun.file("./content/cart.html"));
            
        case "/checkout":
            return new Response(Bun.file("./content/checkout.html"));
            
        case "/orders":
            return new Response(Bun.file("./content/orders.html"));
            
        case "/categories":
            return new Response(Bun.file("./content/categories.html"));
            
        case "/chat":
            return new Response(Bun.file("./content/chat.html"));
        case "/contact":
            return new Response(Bun.file("./content/contact.html"));
        case "/about":
           return new Response(Bun.file("./content/about.html"))
            
        default:
            return new Response("Page not found");
            break;
    }

    }
})

console.log(`Listening on http://localhost:${server.port}`)

