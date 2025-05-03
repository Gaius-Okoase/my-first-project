//* Creating a basic HTTP Server

// Import the built-in module
const http = require('http')  

//Instantiate the http.Server EventEmitter to listen to url requests
const server = http.createServer((request, response) => {
    console.log(`Received request for ${request.url}, with Method: ${request.method}`)
    //Set the HTTP status code and reponse header for the browser
    response.writeHead(200, {"content-type": "text/html"});
    //Send a piece of reponse to the browser request
    response.write(`
       <html>
        <head>
            <style>#h1 { 
            background-color: skyblue;
            border: 5px solid blue; 
            border-radius: 5px; 
            padding: 10px;
            text-align: center;}</style>
        </head>
        <body>
            <h1 id="h1">Hello, World.<br>This wasn't so easy to do. </h1>
        </body>
       </html>
    `);
    //End the response
    response.end(() => {
        console.log('Response complete.')
    });
})
//Start the server on a local host 
server.listen(3333, () => {
    console.log('Server running on http://localhost:3333/');
});
//Listen for uncaught errors
server.on('error', (err) => {if (err) throw err});