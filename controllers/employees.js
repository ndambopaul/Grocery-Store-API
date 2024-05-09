const Employee = require("../models/employees");

const getEmployees = async(req, res) => {
    const employees = await Employee.find({})
    res.send({"count": employees.length, "employees": employees}).status(200);
};

const newEmployee = async(req, res) => {
    const employee = await Employee.create(req.body)
    if(!employee) return res.status(400).send({error: "Employee could not be created!!"})
    res.send({ employee }).status(201)
};

module.exports = {
    getEmployees,
    newEmployee
}