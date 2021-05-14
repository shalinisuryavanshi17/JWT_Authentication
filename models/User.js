const mongoose=require('mongoose')
const {isEmail}=require('validator')
//schema of user
const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:[true,"please enter an email"],
        unique:true,
        lowercase:true,
        validate:[isEmail,"please enter a valid email"]
    },
    password:{
        type:String,
        minlength:[6,"password must have minimum 6 characters"],
        required:[true,"please enter a password"]
        
    }
})
//collection model
const User= new mongoose.model('user',userSchema)
module.exports=User;