const express = require('express')
const app = express()
app.use(express.urlencoded())
app.get('/', (req, res) => {
    res.send('' +
        '<form method="post">' +
          '<input type="text" placeholder="Nombre" name="nombre">'+
          '<input type="text" placeholder="Apellido paterno" name="ap">'+
          '<input type="text" placeholder="Apellido materno" name="am">'+
          '<input type="submit" value="Aceptar">'+
        '</form>'
    )
    console.log(req.query)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send("POR POST")
})

app.listen(3000, () => console.log('Server ready'))
