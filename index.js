const express = require('express'); // create require
const userRouter = require('./routes/airport.routes');

const PORT = process.env.PORT || 8080; // port from system envs or default

const app = express(); // create server

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));