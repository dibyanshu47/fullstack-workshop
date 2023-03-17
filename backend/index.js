import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import Todo from "./todo.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('App is running')
})

app.get('/api/todo/', async function (req, res) {
    try {
        const todos = await Todo.find();
        res.send(todos);
    } catch (error) {
        console.log(error);
    }
})

app.post('/api/todo/', async function (req, res) {
    try {
        const todo = req.body;
        const addedTodo = await new Todo(todo).save();
        res.send(addedTodo);
    } catch (error) {
        console.log(error);
    }
})

app.delete('/api/todo/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete(id);
        res.send(todo);
    } catch (error) {
        console.log(error);
    }
})

const CONNECTION_URL = "mongodb+srv://dibyanshu47:0DjZlIP21PBGi05j@cluster0.qewkrvo.mongodb.net/?retryWrites=true&w=majority"; // paste your connection url from mongo db

// @ = %40
// # = %23

mongoose.connect(CONNECTION_URL).then(console.log("DB connected")).catch(error => console.log(error))

const PORT = 5000;
app.listen(PORT, function () {
    console.log("Server is running on PORT 5000");
})