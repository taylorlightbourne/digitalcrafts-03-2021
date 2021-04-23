const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3007;
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("Welcome to my address book!")
   })

// Create
app.post("/grocerylist", async (req, res) => {
    try {
        const { description } = req.body;

      const newGroceryItemInDB = await pool.query(
        "INSERT INTO grocerylist (description) VALUES($1)",
        [description]
      );
  
      res.json(newGroceryItemInDB);
    } catch (err) {
      console.error(err.message);
    }
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});