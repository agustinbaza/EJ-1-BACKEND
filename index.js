import express from 'express';
import cors from 'cors'
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';

dotenv.config();

const app = express();

app.set('PORT', process.env.PORT || 4001);

app.listen(app.get('PORT'), ()=>{
    console.log('Estoy en el puerto '+ app.get('PORT'))
});

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended:true})); 
app.use(cors()); 
app.use(morgan('dev')); 

// rutas
//  http://localhost:4001/prueba
app.get('/prueba', (req, res )=>{
    res.send('Esta es una prueba de mi ruta GET')
})