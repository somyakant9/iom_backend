const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required:[true, "Product should have a name."] },
    price: { type: Number, required:[true, "Product should have a image"] },
    image: { type: String, required: true },
    descriptions:{type:"String", required:true}
  });

  const Product = mongoose.model("Product",productSchema);


module.exports = Product;