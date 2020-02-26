const http = require("http");
const fs = require("fs");

const PORT = 65535;

let server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function () {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {
        case "/":
            return loadPage("index.html", res);
        case "/index.html":
            return loadPage("index.html", res);
        case "/food":
            return loadPage("food.html", res);
        case "/food.html":
            return loadPage("food.html", res);
        case "/movies":
            return loadPage("movies.html", res);
        case "/css":
            return loadPage("css.html", res);
        default:
            return display404(path, res);
    }
}

// Create a function for handling the requests and responses coming into our server
function loadPage(file, res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/" + file, function (err, data) {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(data);
    });
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, res) {
    var myHTML = "<html>" +
        "<body><h1>404 Not Found </h1>" +
        "<p>The page you were looking for: " + url + " can not be found</p>" +
        "</body></html>";

    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, {
        "Content-Type": "text/html"
    });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
}