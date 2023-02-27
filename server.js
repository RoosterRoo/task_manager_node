const express = require('express')
const path = require('path')
const taskRouter = require('./routes/tasks/tasks.routes')
require('dotenv').config()
const connectDB = require('./db/connect')

const app = express()

const PORT = 3000

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

app.get('/hello',(req, res) => {
    return res.send("Welcome to the home page!!!")
})

app.use('/api/v1/tasks', taskRouter)

const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

startServer()

