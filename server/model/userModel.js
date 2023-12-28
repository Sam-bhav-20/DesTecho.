const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 6,
        max: 20,
        unique: true,
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        max:69,
    },
    password:{
        type:String,
        required:true,
        min:8,
    }
    
});

module.exports = mongoose.model("Users",userSchema);