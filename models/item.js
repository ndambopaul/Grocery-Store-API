const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Item", ItemSchema);

