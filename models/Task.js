const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Task', taskSchema)