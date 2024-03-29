const { Pool, Client } = require('pg')
const connectionString = 'postgresql://postgres:91upetiv@localhost:5432/airport'
const pool = new Pool({
    connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})

const client = new Client({
    connectionString,
})

client.connect()
client.query('SELECT * FROM passengers', (err, res) => {
    console.log(err, res)
    client.end()
})