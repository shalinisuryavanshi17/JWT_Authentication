const mongoose=require('mongoose')
//schema of user
const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        minlength:6,
        required:true
    }
})
//collection model
const User= new mongoose.model('user',userSchema)
module.exports=User;