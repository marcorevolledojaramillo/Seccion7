const http = require('http');

http.createServer((req, res)=>{
    res.write('Hola Mundo');
    res.end();
})
.listen(9050)

console.log('Escuchando el puerto', 9000)