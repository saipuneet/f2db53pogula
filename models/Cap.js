const mongoose = require("mongoose")
const CapSchema = mongoose.Schema({
    Cap_Name: {type: String,required: [true, 'Name of the shoe cannot be empty']},
    Cap_Company: {type: String,required: [true,'Company of the Cap cannot be empty']},
    Cap_Size:{type: String,required:[true,'Size of the Cap cannot be empty']},
    Cap_Rating:{type: String,required:[true,'Rating of the Cap cannot be empty']}
})


module.exports = mongoose.model("Cap",CapSchema)