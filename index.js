const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));

//admin routes
const adminRouter=require("./routes/admin/admin.routes");
app.use("/admin",adminRouter);

//Login routes
const loginRouter = require("./routes/login");
app.use("/main", loginRouter);

// Organization
const organizationRoutes = require("./routes/organization.routes");
app.use("/organization", organizationRoutes);

const donatorRoutes = require("./routes/donator/donator.routes.js");
app.use("/donator", donatorRoutes);

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb connection success!");
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

