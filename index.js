const express = require('express') // create require

const PORT = process.env.PORT || 8080 // port from system envs or default
const app = express() // create server

app.get('/', (req , res) => {
    res.send('HI, POSTGRES + NODE')
})

app.listen(PORT, () => console.log(`server started on port ${PORT}`))