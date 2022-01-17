const express = require('express');
const app = express();
app.use(express.json());
const items = [
    { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
    { id: 2, nombre: 'FIFA 22 PS5', precio: 1000 },
    { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
    { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
    { id: 5, nombre: 'Skin Valorant', precio: 120 },
    { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
];

app.get('/', (req, res) => {
    res.send(items);
})

app.post('/', (req, res) => {
    const item = { id: items.length + 1, nombre: 'Libreta ESLDA', precio: 301 };
    items.push(item);
    res.json(items);
    console.log(item);
})

app.put('/:id', (req, res) => {
    console.log(req.params.id)
    const found = items.some(producto => producto.id === +req.params.id);
console.log(found)
    if (found) {
        items.forEach(producto => {
            if (producto.id === +req.params.id) {
                producto.nombre = req.body.nombre ? req.body.nombre : producto.nombre,
                    producto.precio = req.body.precio ? req.body.precio : producto.precio
                res.json(producto);
            } 
        })
    }else {
        res.status(404).json({ msg: `Miembro con el id ${req.params.id} no encontrado` })
    }
})


app.listen('4000', () => {
    console.log("Ejercicio 3 operativo.");
})