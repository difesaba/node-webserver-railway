const http = require('http');

http.createServer((req, res) => {
    //res.writeHead(200,{'Content-Type':'application/json'})
    //res.setHeader('Content-Disposition','attachment; filename=lista.csv')
    //res.writeHead(200,{'Content-Type':'application/csv'})
    res.write('404 | page not found');
    res.end();
}).listen(3000);


console.log('Escuchando en el puerto 3000')


