const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const app = express();
const route = require('./routes/route')
const cors = require('cors')

require("dotenv").config();
app.use(express.json())
app.use(cors())

const PORT = process.env.port || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log(error);
  });

 app.use('/', route) 

app.listen(PORT, () => {
  console.log(`Express running on ${PORT}`);
});
