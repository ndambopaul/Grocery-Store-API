const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 5000;
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(cors());

// Database Configuration
const { connect_database } = require("./db/connect");
connect_database();

//
const itemsRoutes = require("./routes/items");
const salesRoutes = require("./routes/sales");
const employeeRoutes = require("./routes/employees");
const attendanceRoutes = require("./routes/attendances");

// base route
app.get("/", (req, res) => {
    res.send({"message": "Server is up and runing!!!"}).status(200);
});


app.use("/items", itemsRoutes);
app.use("/sales", salesRoutes);
app.use("/employees", employeeRoutes);
app.use("/attendances", attendanceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`)
});