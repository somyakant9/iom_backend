const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const authRoutes = require("./routes/authRoutes");
const protect = require("./middlewares/protect");
const app = express();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", protect);

// MongoDB Connectiona
mongoose
  .connect(DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
