const TODO=require('../models/todoModel')

exports.createTask = async (req, res) => {
    console.log(req.body)
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
    const task=req.query.task
    try {
        const taskObj = await TODO.findOne({task});
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
            return res.status(404).send({
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
    const task=req.query.task
    try {
        const taskObj = await TODO.findOneAndDelete({task});
        if (!taskObj) {
            res.status(404).send({
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
