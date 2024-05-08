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

// base route
app.get("/", (req, res) => {
    res.send({"message": "Server is up and runing!!!"}).status(200);
});


app.use("/items", itemsRoutes);
app.use("/sales", salesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`)
});