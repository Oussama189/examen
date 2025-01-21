const express = require ("express");
const config = require ("config");
const cors = require("cors");
const mongoose = require("mongoose");
const Users = require("./routes/api/Users");
const app = express();

app.use(express.json());

app.use(cors());

const mongo_url = config.get("mongo_URL");
mongoose.set('strictQuery',true);
mongoose
  .connect(mongo_url)
  .then(() => console.log("Mongo DB connected ..."))
  .catch ((err) => console.log(err));
  
  
  
  app.use("/api/users", Users);




const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));


