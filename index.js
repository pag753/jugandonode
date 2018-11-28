//Servidor HTTP
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
//MYSQL o MARIADB
let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'classicmodels'
});
connection.connect();
connection.query('SELECT * FROM employees', function (error, results, fields) {
  if (error) throw error;
  //const server = http.createServer((req, res) => {
    const server = http.createServer(function(req, res) {
      res.statusCode = 200;

    if (req.method == 'GET') {
        res.setHeader('Content-Type', 'text/HTML; charset=utf-8');
      let cadena = "";
        for (let i = 0; i < results.length; i++) {
            cadena += JSON.stringify(results[i]) + ",\n";
        }
        //res.end(cadena);
        res.end("" +
            "<form method='post'>" +
            "  <input type='text' name='texto'>" +
            "  <input type='submit' value='Aceptar' name='botón'>" +
            "</form>" +
            "")
    }
    if (req.method == 'POST') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
            console.log(body);
            res.end('ok');
        });
      //res.end("ES POR POST")
        //console.log(req.on())
    }
    console.log(`${req.method}\n`)

    //res.end(`<script>console.log(${cadena})</script>`);
    //res.end('Hello, World!\n');
  });
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    //console.log(results);
  });
});
connection.end();
