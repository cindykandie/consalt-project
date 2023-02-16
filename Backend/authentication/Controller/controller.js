const { serviceAddUser } = require("../Services/addUserService");
const { serviceLogin } = require("../Services/loginService")
const {joiSchemaAddUser,joiSchemaLogin} = require('../JoiConfig/JoiConfig');
const e = require("express");
const jwt  = require('jsonwebtoken')
const env = require('dotenv')
env.config('../')



const login = async (req,res)=>{
    const {username,password} = req.body;
  
    const valid = joiSchemaLogin.validate({username,password})
    if(valid.error != undefined){
        return res.status(401).json({message: valid.error.message})
    }     
   
    let result = await serviceLogin({username,password});
    if (result.recordset.length === 1){
        let token = jwt.sign(
            {
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                username,
                password
            },
            process.env.SECRET_KEY,)
        return res.status(200).json({token});
    }
    else {
        return res.status(401).json({message: "Invalid credentials"});
    }
}

const addUser = async (req, res) => {
    try {
        const {firstName, secondName, lastName, 
            username, email, role, password, phoneNumber, idNumber} = req.body;
        let valid = joiSchemaAddUser.validate({firstName, secondName, lastName, 
                username, email, role, password, phoneNumber, idNumber})    
        if(valid.error != undefined){
            console.log(valid.error.message);
            return res.status(401).json({message: valid.error.message})
        }
        await serviceAddUser({firstName, secondName, lastName, 
            username, email, role, password, phoneNumber, idNumber});
        return res.status(200).json({message: "OK"});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
        
}


module.exports = {login, addUser}