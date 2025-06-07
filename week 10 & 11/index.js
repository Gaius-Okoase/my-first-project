//* Creating a basic HTTP Server

// Import the built-in module
const http = require('http')  

//Instantiate the http.Server EventEmitter to listen to url requests
const server = http.createServer((request, response) => {
    console.log(`Received request for ${request.url}, with Method: ${request.method}`);
    //Handle basic routing with if statement
    if(request.url === '/'){
        //Set the HTTP status code and reponse header for the browser
        response.writeHead(200, {"content-type": "text/html"});
        //Send a piece of response to the browser request
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
    } else if(request.url === '/about') /*Route to '/about'*/ {
        //Set the HTTP status code and reponse header for the browser
        response.writeHead(200, {"content-type": "text/html"});
        //Send a piece of response to the browser request
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
                <h1 id="h1">Hello there. My name is Gaius.<br> The Backend guy behind this page. </h1>
            </body>
        </html>
        `);
        //End the response
   response.end(() => {
       console.log('Response complete.')
   });
   } else if(request.url === '/contact') /* Route to 'contact' */ {
        response.writeHead(200, {'content-Type' : 'application/json'});
        response.write(JSON.stringify({
            name : 'Gaius Okoase Oreoluwa',
            phone : '+2348012345678',
            email : 'gaiusonosetale@gmail.com'
        }))
        response.end(() => {
            console.log('Response complete.')
        });
   }  
   else /* Route to page we don't have. */ {
    response.writeHead(404, {'content-Type' : 'text/html'});
    response.write(`
        <html>
            <head>
                <style>h1 { 
                color: rgb(66, 1, 1);
                background-color:rgba(255, 0, 0, 0.6);
                border: 5px solid red; 
                border-radius: 5px; 
                padding: 10px;
                text-align: center;}</style>
            </head>
            <body>
                <h1>Oops! <br> Page not found.</h1>
            </body>
        </html>
        `)
        //End the response
   response.end(() => {
    console.log('Response complete.')
});
   }
})
//Start the server on a local host 
server.listen(3333, () => {
    console.log('Server running on http://localhost:3333/');
});
//Listen for uncaught errors
server.on('error', (err) => {if (err) throw err});