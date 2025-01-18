const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required:[true, "Product should have a name."] },
  price: { type: Number, required:[true, "Product should have a image"] },
  image: { type: String, required: true },
  descriptions:{type:"String", required:true},
  quantity:{type:Number,default:1}
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
