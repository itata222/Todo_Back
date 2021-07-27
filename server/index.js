const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT
const todoRouter = require('./routers/todoRouter')
require('./db/db')

app.use(cors());
app.use(express.json())
app.use(todoRouter)
app.listen(port, () => {
    console.log('server runs, port:', port)
})
