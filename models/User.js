const mongoose=require('mongoose')
const {isEmail}=require('validator')
const bcrypt=require('bcrypt')
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
//(mongoose hook) fire a function before user doc is saved to db
userSchema.pre('save',async function(next){
    const salt= await bcrypt.genSalt()
    this.password= await bcrypt.hash(this.password,salt)
next();// to call the next function after this
})
//collection model
const User= new mongoose.model('user',userSchema)
module.exports=User;