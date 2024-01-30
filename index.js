import express from 'express'

const app= express()

app.get('/', (req, res)=>{
    res.send('Hola mundo')
})

const PUERTO= process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
})