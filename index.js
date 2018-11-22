//comentario
/*
hola
hola2
hola3
*/
/*
var a = {
  nombre: "Pablo",
  apaterno: "González",
  amaterno: "Alvarado"
}
console.log(a)
var b = [0,1,2,3,4,5,6,7,8,9]
for (var i = 0; i < b.length; i++) {
  console.log(b[i] + "\n")
}
var c = 5.41
if (c == 5) {
console.log("c es 5")
}
else {
  console.log("No lo es")
}
switch (c) {
  case 5.4:
    console.log("ok")
    break;
  default:
  console.log("nop")
}
*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'classicmodels'
});

connection.connect();
/*
connection.query('SHOW TABLES', function (error, results, fields) {
  if (error) throw error;
  //console.log(results);
  for (var i = 0; i < results.length; i++)
  {
    console.log("Tabla número " + (i + 1) + ": " +  results[i].Tables_in_classicmodels);
  }
});
*/

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
