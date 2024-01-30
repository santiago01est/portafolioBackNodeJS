import pg from 'pg'
import {config} from 'dotenv'
//BD
config()

const ConnectionDB= new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
})

export default ConnectionDB;