const mongoose = require("mongoose");
const wineSchema = require("../schemas/wineSchema");

const Wine = mongoose.model("wines",wineSchema);

module.exports=Wine