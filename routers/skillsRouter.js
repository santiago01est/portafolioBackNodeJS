import express from 'express'
import ConnectionDB from '../settings/connectionDB.js'

const routerSkills= express.Router();

routerSkills.get('/',async (req, res) =>{
    try {
        const query = "SELECT sectors.sector, ARRAY_AGG(skills.name) as skills FROM sectors JOIN skills ON sectors.id = skills.sector_id GROUP BY sectors.id, sectors.sector;";
        const result = await ConnectionDB.query(query);
        return res.status(200).json(result.rows);
    } catch (err) {
        console.log(err);
        res.status(400).json({ respuesta: "Error en la consulta" });
    }
})

export default routerSkills;