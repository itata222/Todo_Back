const express = require('express');
const { createTask, getTasks, toggleTask, deleteTask } = require('../controlers/TASKControler');

const router = new express.Router();

router.get('/get-todo',getTasks)

router.put('/create-todo', createTask )

router.patch('/toggle-todo', toggleTask)

router.delete('/delete-todo', deleteTask)

module.exports = router;