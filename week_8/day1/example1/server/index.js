const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3008;
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to server for pizza list");
  });

// Create
  app.post("/pizzalist", async (req, res) => {
    try {
        const { description } = req.body;

      const pizzaType = await pool.query(
        "INSERT INTO pizza (description) VALUES($1)",
        [description]
      );
  
      res.json(pizzaType);
    } catch (err) {
      console.error(err.message);
    }
  });

// Read All
app.get("/read_pizzalist", async (req, res) => {
    try {
      const readProductItem = await pool.query(
        "SELECT * from pizza ORDER BY pizza_id"
      );
      res.json(readProductItem.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  // Read One
  app.get("/read_pizzalist/:id", async (req, res) => {
    try {
      const { id } = req.params; // this looks at the url for whatever you put in :
  
      const readSingleProductItem = await pool.query(
        "SELECT * from pizza WHERE pizza_id = ($1)",
        [id]
      );
      res.json(readSingleProductItem);
    } catch (err) {
      console.error(err.message);
    }
  });
  // Update One
  app.put("/update_pizzalist/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
  
      const updatePizzaItems = await pool.query(
        "UPDATE pizza SET description = $1 WHERE pizza_id = $2",
        [description, id]
      );
  
      res.json("Updated the pizza list!");
    } catch (err) {
      console.error(err.message);
    }
  });
  // Delete One
  app.delete("/delete_pizzalist/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletePizzaItems = await pool.query(
        "DELETE FROM pizza WHERE pizza_id = $1",
        [id]
      );
      res.json("pizza list was successfully deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});