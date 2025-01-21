const express = require("express");
const cors = require("cors");
const connectToDb = require("./config/db");
const router = require("./routes/winerRouter");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

connectToDb();

app.use("/api/wines",router)

app.listen(PORT,()=>{
    console.log(`server runned in ${PORT}`);
})