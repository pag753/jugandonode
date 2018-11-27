
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'classicmodels'
});

connection.connect();

connection.query('SELECT * FROM customers', function (error, results, fields) {
  if (error) throw error;
  //console.log(results);
  //console.log(results[0]);
  for (var i = 0; i < results.length; i++)
  {
    //console.log("Registro ",(i + 1),": ",results[i]);
    console.log("Nombre: ",results[i].customerName);
  }
});
connection.end();

for (var i = 0; i < array.length; i++) {
  array[i]
}
