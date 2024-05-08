const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
    item: String,
    quantity: Number,
    total_paid: Number,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Sale", SaleSchema);