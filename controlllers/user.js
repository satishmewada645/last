const User = require('../models/user')

async function handleUserSignup(req,res){
    const { name ,email,password} = req.body;
    await User.create({
        name,
        email,
        password,
    })
    return res.json("ok fine");


}
module.exports ={
    handleUserSignup,
}