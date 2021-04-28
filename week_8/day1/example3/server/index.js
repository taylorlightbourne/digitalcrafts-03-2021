const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const pool = require("./db.js");
const es6Renderer = require("express-es6-template-engine");

const task = [
  { 
    todo_id: 1,
    description: "Wash Car",
  },
  { 
    todo_id: 2,
    description: "Clean Dog",
  },
  { 
    todo_id: 3,
    description: "Take out Trash",
  },
  { 
    todo_id: 4,
    description: "Fold Laundry",
  },
];

app.use(express.json());
app.use(cors());
app.engine("html", es6Renderer);
app.set("views", "../template");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("task");
});

// app.post("/todo", async (req, res) => {
//   try {
//     const { description } = req.body;
//     const newTodoInDB = await pool.query(
//       "INSERT INTO todo (description) VALUES($1)",
//       [description]
//     );

//     res.json(newTodoInDB);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.get("/read_todos", async (req, res) => {
//   try {
//     const readTodosFromDB = await pool.query(
//       "SELECT * from todo ORDER BY todo_id"
//     );
//     res.json(readTodosFromDB.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.get("/read_todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params; :

//     const readSingleTodoFromDB = await pool.query(
//       "SELECT * from todo WHERE todo_id = ($1)",
//       [id]
//     );
//     res.json(readSingleTodoFromDB);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.put("/update_todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;

//     const updateTodoInDB = await pool.query(
//       "UPDATE todo SET description = $1 WHERE todo_id = $2",
//       [description, id]
//     );

//     res.json("Updated the todos yay!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// app.delete("/delete_todo/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteTodoInDB = await pool.query(
//       "DELETE FROM todo WHERE todo_id = $1",
//       [id]
//     );
//     res.json("Todo was successfully deleted!");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

app.listen(PORT, () => 
console.log(`Access server on port ${PORT}`));