const express = require("express");
const User = require('../model/User');
const router =express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { hash } = require("bcryptjs");
var jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser");

const JWT_Secret="Iamgood";

router.post('/createuser',[
    body('email','enter correct email').isEmail(),
    body('name','enter correct name').isLength({ min : 3}),
    body('password','enter password min 5 characters').isLength({  min : 5 }),
],async (req,res)=>{
   let success=false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user= await User.findOne({email:req.body.email})
    if(user){
      success=false
        return  res.status(400).json({success,error:"sorry a user with the email already exist"})
    }
    const salt= await bcrypt.genSalt(10);

    SecPass= await bcrypt.hash(req.body.password,salt);
     user= await User.create({
        name: req.body.name,
        password: SecPass,
        email: req.body.email,
      }) 
      const data={
        user:{
          id:user.id
        }
      }
     const authToken = jwt.sign(data,JWT_Secret);
    success=true
     res.json({success,authToken})

    } catch (error) {
      console.error(error.message)
      res.status(500).send("Some Error Occured")
    }
      
    
})
// checking dor login
router.post('/login',[
  
  body('email','enter correct email').isEmail(),
 
  body('password','enter password min 5 characters').exists(),
],async(req,res)=>{
let success=false
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body;
    try {
         let user= await User.findOne({email:req.body.email});
    if(!user){
      success=false

    return res.status(400).json({error: "enter valid email"})  
    }
    const comparepassword= await bcrypt.compare(password,user.password);
    if(!comparepassword){
      success=false

      return res.send(400).json({success,error: "enter valid password"})  
    }
    const data={
      user:{
        id:user.id
      }
    }
   const authToken = jwt.sign(data,JWT_Secret);
  success=true;
   res.json({success,authToken})

  }catch (error) {
    console.error(error.message)
    res.status(500).send("Internal error")
  }

})
//Router 3 for getting user

router.post('/getuser',fetchuser,async(req,res)=>{
  try {
   const userid=req.user.id;
    const user=await User.findById(userid)
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(401).send("Enter valid token")
  }
})

module.exports=router;


