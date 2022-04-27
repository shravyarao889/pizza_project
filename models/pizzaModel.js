const mongoose = require("mongoose");
const pizzaSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    varients: [],
    prices: [],
    category: { type: String, require: true },
    image: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const pizzaModel = mongoose.model("pizzas", pizzaSchema);
module.exports = pizzaModel;
