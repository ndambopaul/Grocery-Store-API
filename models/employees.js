const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone_number: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Employee", EmployeeSchema);