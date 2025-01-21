const { Schema } = require("mongoose");

const wineSchema = new Schema({
  name:{
    type:String
  },
  oldPrice:{
    type:Number
  },
  newPrice:{
    type:Number
  },
  imageUrl:{
    type:String
  }
}, { timestamps: true });

module.exports = wineSchema

