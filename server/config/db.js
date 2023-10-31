const mongoose = require("mongoose");

require("dotenv").config();

// const connection = mongoose.connect(process.env.DATABASE);
const connection = mongoose.connect("mongodb+srv://streamon:5SNxzReteHwM8tzt@cluster0.ryuoxmr.mongodb.net/streamon");
module.exports = { connection };
