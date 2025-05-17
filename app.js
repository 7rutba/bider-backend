const express = require("express");
require("dotenv").config();
const cors = require("cors");
const sequelize = require("./src/config/dbconnect");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  try {
    console.log(`server is running on port ${PORT}`);

    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.log("error", error);
  }
});
