const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3005;
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to server for project list");
  });

  // Create
app.post("/productlist", async (req, res) => {
    try {
        const { description } = req.body;

      const productItem = await pool.query(
        "INSERT INTO productlist (id) VALUES($1)",
        [description]
      );
  
      res.json(productItem);
    } catch (err) {
      console.error(err.message);
    }
  });
// Real All
app.get("/read_productlist", async (req, res) => {
    try {
      const readProductItem = await pool.query(
        "SELECT * from productlist ORDER BY product_id"
      );
      res.json(readProductItem.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  // Read One
  app.get("/read_productlist/:id", async (req, res) => {
    try {
      const { id } = req.params; // this looks at the url for whatever you put in :
  
      const readSingleProductItem = await pool.query(
        "SELECT * from todo WHERE product_id = ($1)",
        [id]
      );
      res.json(readSingleProductItem);
    } catch (err) {
      console.error(err.message);
    }
  });
  // Update One
  app.put("/update_productlist/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
  
      const updateProductItems = await pool.query(
        "UPDATE todo SET description = $1 WHERE product_id = $2",
        [description, id]
      );
  
      res.json("Updated the product list!");
    } catch (err) {
      console.error(err.message);
    }
  });
  // Delete One
  app.delete("/delete_productlist/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProductItems = await pool.query(
        "DELETE FROM productlist WHERE product_id = $1",
        [id]
      );
      res.json("product list was successfully deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});