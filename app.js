// get the http module:
var http = require('http');
//fs module allows us to read and write content for responses!
var fs = require('fs');
//creating a server using http module: ((CRUCIAL LINE))
var server = http.createServer(function(request, response){
    //see what URL the clients are requesting
    console.log('client request URL:', request.url);
    //this is how we do routing:
    // if(request.url === '/'){
    //     fs.readFile('./views/index.html', 'utf8', function(errors, contents){
    //         response.writeHead(200, {'Content-Type': 'text/html'});//send data on response
    //         response.write(contents); //send response body
    //         response.end(); //finished!
    //     });
    // }
    if (request.url === '/cars/new'){
        fs.readFile('./views/new_car.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars'){
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cars/acura-nsx.jpg'){
        fs.readFile('./images/cars/acura-nsx.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats'){
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cats/cool-cat.jpg'){
        fs.readFile('./images/cats/cool-cat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cats/floating-cat.jpg'){
        fs.readFile('./images/cats/floating-cat.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url == '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    //if request didn't match anything
    else{
        response.writeHead(404);
        response.end('(404 error): File not found!!!');
    }
});

//tell server which port to run on
server.listen(6789);
//print to terminal window
console.log("Running in localhost at port 6789");