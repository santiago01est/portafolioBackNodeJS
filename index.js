import express from 'express'
import {config} from 'dotenv'
import routerProyects from './routers/projectsRouter.js'
import routerSkills from './routers/skillsRouter.js'

config()

const app= express()

//Routers
app.use('/api/projects', routerProyects)

app.use('/api/sectors', routerSkills)

app.get('/', (req, res)=>{
    res.send('Hola mundo')
})



const PUERTO= process.env.PORT || 3000;
app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
})


