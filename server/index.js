const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
const router = require("./routes/userRoutes");

const corsOptions = {
  origin: "*",
};

app.use(express.json()); 
app.use(cors());
app.use(cors(corsOptions)); 

app.use("/api", router);

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  console.log(`The server is running at localhost : ${port}`);
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log("can't connect to db");
  }
});
