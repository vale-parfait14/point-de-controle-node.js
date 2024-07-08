

// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Bonjour Node !!!!</h1>\n');
});

server.listen(3000, () => {
    console.log('Le serveur est en cours d\'écoute sur le port 3000');
});

console.log(server);