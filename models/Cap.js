const mongoose = require("mongoose")
const CapSchema = mongoose.Schema({
Cap_Name: String,
Cap_Company: String,
Cap_Size: Number,
Cap_Rating: Number
})

module.exports = mongoose.model("Cap",
CapSchema)