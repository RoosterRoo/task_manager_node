const express = require('express')
const path = require('path')
const taskRouter = require('./routes/tasks/tasks.routes')
const notFound = require('./middleware/notFound')
require('dotenv').config()
const connectDB = require('./db/connect')

const app = express()

const PORT = 3000

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

app.use('/api/v1/tasks', taskRouter)
app.use(notFound)

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

