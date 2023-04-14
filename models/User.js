const mongoose = require('mongoose')

//added this to remove the DeprecationWarning
mongoose.set("strictQuery", true);

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const usermodel = mongoose.model('Users' , userSchema)

module.exports = usermodel