const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: [true, "Task is required"],
            trim: true,
        },
        complete: {
            type: Boolean,
            required: [true, "Complete is required"],
        },
    },
    {
        timestamps: true,
    }
);


const TODO = mongoose.model("TODO", todoSchema);

module.exports = TODO;