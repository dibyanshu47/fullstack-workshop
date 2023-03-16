import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    text: String
})

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;