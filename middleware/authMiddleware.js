const jwt=require('jsonwebtoken')
const requireAuth =(req,res,next)=>{
    const token=req.cookies.jwt
    //check for token and check is token verified
    if(token)
    {
     jwt.verify(token,"this is my secret",(err,decodedToken)=>{
         if(err)
         {
             console.log(err.message)
                res.redirect('/login')
         }
         else{
            console.log(decodedToken)
             next();
         }
     })
    }
    else{
        res.redirect('/login')
    }
}
module.exports={requireAuth}