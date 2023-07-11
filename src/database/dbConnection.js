import mongoose from "mongoose";

const uri = 'mongodb://localhost:27017/ListaTareas';

mongoose.connect(uri);

const datosConexion = mongoose.connection;

datosConexion.once('open', ()=>{
    console.log('BD conectada');
});











