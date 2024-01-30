import express from 'express'
import ConnectionDB from '../settings/connectionDB.js'

const routerProyects= express.Router();

routerProyects.get('/', async(req, res) =>{
    try {
        const query = "select * from proyectos;";
        const result = await ConnectionDB.query(query);
        return res.status(200).json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(400).json({ respuesta: "Error en la consulta" });
    }
})

export default routerProyects;
