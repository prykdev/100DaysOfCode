const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Phone:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    cpassword:{
        type: String,
        required:true
    }

})

const User = mongoose.model('USER',userSchema);

module.exports = User;

//We