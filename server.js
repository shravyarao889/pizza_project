const express = require("express");
const app = express();
const db = require("./db");
app.use(express.json());
const Pizza = require("./models/pizzaModel");
const pizzasRoute = require("./routes/pizzasRoute");

app.use("/api/pizzas/", pizzasRoute);

app.get("/", (req, res) => {
  res.send("server working on " + port);
});

app.get("/getpizzas", (req, res) => {
  Pizza.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => `server running on port `);
