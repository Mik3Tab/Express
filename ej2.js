const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Listado de productos:")
});

//RUTAS PRODUCTOS
app.post('/Producto', (req,res)=>{
res.send("Mostrar un producto");
})

app.put('/Producto', (req,res)=>{
    res.send("Actualizar un producto.");
})

app.delete('/Producto', (req,res)=>{
    res.send("Borrar un producto.");
})

//RUTAS USUARIOS
app.get('/Usuarios', (req,res)=>{
    res.send("Listado de usuarios:");
})

app.post('/Usuarios', (req, res) =>{
    res.send("Crear un usuario");
})

app.put('/Usuarios',(req, res) =>{
    res.send("Actualizar un usuario");
})

app.delete('/Usuario', (req,res)=>{
    res.send("Borrar un usuario");
})

app.listen('5000', () =>{
    console.log('Ejercicio 2 Express Node.js');
})