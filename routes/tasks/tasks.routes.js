const express = require('express')
const { getAllTasks, createTask, updateTask, deleteTask, getTask } = require('../../controllers/tasks/tasks.controller')

const taskRouter = express.Router()

taskRouter.get('/', getAllTasks).post('/', createTask)
taskRouter.get('/:id', getTask)
taskRouter.patch('/:id', updateTask)
taskRouter.delete('/:id', deleteTask)

module.exports = taskRouter