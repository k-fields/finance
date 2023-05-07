const expenseEntry = require('./controller/controller')
const fs = require('fs');

const http = require('http')
const routes = {
    '/':home,
    '/register':register,
    '/login':login,
    '/entry':entry,
    '/edit':edit,
    '/list':list,
    '/dashboard':dashboard
};

function handleRequest(req,res) {
    const {pathname} = new URL(req.url,'http://localhost');
    const route = routes[pathname]; //assigns the corresponding function to the route constant
    if (route) {
        route(req,res);
    }else if (pathname){
        try{
            console.log(`GET ${req.url}`);
            const file = fs.readFileSync('.'+pathname,'utf-8');
            res.end(file);
        }
        catch (e){
            res.writeHead(404,{'Content-Type':'text/plain'}); //This set the response code and type of content returned
            res.end('Not found'); //Ends the request with this response
        }
    }
}

function register(req, res){
    console.log("Not implemented.");
    //call register controller
}

function login(req,res){
    console.log("Not implemented.");
    //call login controller
}

function entry(req,res){
    let body = '';

    req.on('data', data => {body += data;});
    req.on('end', () => {
        //pass the body to the controler.
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('OK');
    })

    
}

function edit(req, res){
    console.log("Not implemented.");
}

function list(req,res){
    console.log("Not implemented.");
}

function dashboard(req,res){
    console.log("Not implemented.");
}

function home (req, res) {
    const index = fs.readFileSync('./index.html','utf-8');
    
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(index)
}

const server = http.createServer(handleRequest);
server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000');
})