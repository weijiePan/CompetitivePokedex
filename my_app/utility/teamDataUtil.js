const postgres = require("postgres");
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, env_path} = process.env;
require('dotenv').config({path:"../.env"})
const sql = postgres(
    {
        host: PGHOST,
        database: PGDATABASE,
        username: PGUSER,
        password: PGPASSWORD,
        port: 5432,
        ssl: 'require',
    }
)
