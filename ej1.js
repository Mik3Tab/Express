const express = require("express");

const app = express();
const puerto = "4000";
app.listen(puerto, () =>{
    if(puerto == 4000){
        console.log(`Servidor levantado en el puerto ${puerto}`);   
    }else{
        console.log("Servidor no encontrado");
    }
})