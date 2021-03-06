const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const pool = require('./db')

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//write todo
app.post("/todos", async(req, res) => {
    try {
        //deconstructing description variable from req.body
        const {description} = req.body;
        //creating query variable that will directly access our pool database command...
        //also using 
        const newToDo = await pool.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING *",
            [description])
        res.json(newToDo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//get all todos
app.get("/todos", async(req, res) => {
    try {
        const allToDo = await pool.query("SELECT * FROM todo")
        res.json(allToDo.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a todo
app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query(
            "SELECT * FROM todo WHERE todo_id = $1",
            [id])
            res.json(todo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})
//update todo
app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const {description} = req.body;
        const updateToDo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        res.json(`Todo has been updated, BRUH!!! 👍`)
    } catch (err) {
        console.error(err.message)
    }
})

//delete todo
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const deleteToDo = await pool.query(
            "DELETE FROM todo WHERE todo_id = $1",
            [id])
            res.json(`Todo has been delted, CUSSSSZZZZZZ!!! 🔥😯`)
    } catch (err) {
        console.error(err.message)
    }
})

//listen call to port
app.listen(port, () => {
    console.log(`🌎 postgresql_to-do running on Port ${port}`)
})