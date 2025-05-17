const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  try {
    console.log(`server is running on port ${PORT}`);
  } catch (error) {
    console.log("error", error);
  }
});
