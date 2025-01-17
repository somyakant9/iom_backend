const mongoose = require("mongoose");

const Schema = new mongoose.Schema({

    name:{type:"String", required:[true, "Product should have a name."]},
    image:{type:"String", required:[true, "Product should have a image"]},
    descriptions:{type:"String"}
})