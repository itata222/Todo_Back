const TODO=require('../models/todoModel')

exports.createTask = async (req, res) => {
    try {
        const task = new TODO(req.body);
        if (!task) {
            throw new Error('no Task added')
        }
        await task.save();
        res.send(task)
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error
        })
    }
}
exports.toggleTask = async (req, res) => {
    const id=req.query.id
    try {
        const taskObj = await TODO.findById(id);
        if (!taskObj) {
            res.status(404).send({
                status:404,
                message:'Task Not Found'
            })
        }
        taskObj.complete=!taskObj.complete;
        await taskObj.save();
        res.send(taskObj)
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }
}
exports.getTasks = async (req, res) => {
    try {
        const tasks = await TODO.find({});
        if (!tasks) {
            return res.status(400).send({
                status:400,
                message:'Bad request'
            })
        }
        res.send(tasks)
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error.message
        })
    }
}
exports.deleteTask = async (req, res) => {
    const id=req.query.id
    try {
        const taskObj = await TODO.findByIdAndDelete(id);
        if (!taskObj) {
            res.status(400).send({
                status:400,
                message:'Bad request'
            })
        }
        res.send(taskObj)
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: error
        })
    }
}
