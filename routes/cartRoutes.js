const express = require("express");
const router = express.Router();
const Cart = require("../Models/Cart");

// API to retrieve cart items
router.get("/", async (req, res) => {
  const userId = req.user.id;

  try {
    const cart = await Cart.find({userId });
    if (!cart) {
      return res.status(200).json({ message: "Cart is empty", items: [] });
    }

    res.status(200).json({ message: "Cart retrieved successfully", cart });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cart", error });
  }
});
// API to save cart items
router.post("/", async (req, res) => {
  const {items} = req.body;
  const userId = req.user.id;
console.log(items);
  if (!items) {
    return res.status(400).json({ message: "Invalid items format" });
  }
  try {
    let cart = new Cart({...items,userId });
    console.log(cart);
    await cart.save();
    res.status(200).json({ message: "Cart updated successfully", cart });
  } catch (error) {
    res.status(500).json({ message: "Error saving cart", error });
  }
});

module.exports = router;
