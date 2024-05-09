const attendance = require("../models/attendance");
const Attendance = require("../models/attendance");

const getAttendances = async(req, res) => {
    const attendances = await Attendance.find({})
    res.send({"count": attendance.length, "attendances": attendances})
};


const recordAttendance = async(req, res) => {
    const attendance = await Attendance.create(req.body);

    if(!attendance) return res.status(400).send({error: "Attendance could not be recorded!"})
    res.send({ attendance }).status(201)
}

module.exports = {
    getAttendances,
    recordAttendance
}