const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    checkin_time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Attendance", AttendanceSchema);