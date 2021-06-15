const express = require('express');
const router = express.Router();
const User = require("../model/userSchema");
router.get('/',(req,res)=>{
    res.send(`Hello world from Server router js`);
});

router.post('/register',(req,res)=> {
    console.log(req.body);
    res.json({message:req.body});

   /* const { name, email,phone,work,password,cpassword}=req.body;
    if(!name || !name || !email || !phone|| !work || !password || !cpassword){
    return res.json({error:"plz files details"});
    }

    User.findOne({email:email})
    .then((userExist) =>{
        if(userExist){
            return res.status(422).json({error:"Email exiist already"});
        }
        const user = new User({name, email,phone, work,password,cpassword})
        user.save().then(()=>{
            res.status(201).json({message:"User registered sucessfully"});

        }).catch((err)=> res.sendStatus(500).json({error:"Failed to register"}));
    }).catch(err => {console.log(err); });*/

});



/*
router.post('/register',async(req,res)=> {

    const { name, email,phone,work,password,cpassword}=req.body;
    if(!name || !name || !email || !phone|| !work || !password || !cpassword){
    return res.json({error:"plz files details"});
    }

    try{
        const userExist = await User.findOne({email:email});
        if (userExist){
            return res.status(422).json({error:"Email exiist already"});

        }
        const { name, email ,phone,work,password,cpassword}=req.body;
 
        const userRegister = await user.save()
        if(userExist){
            res.status(201).json({message:"User registered sucessfully"});

        }
        else{
            res.sendStatus(500).json({error:"Failed to register"})
        }

    }catch(err){
        console.log(err);
    }

});

//login route

router.post('/signin',async(req,res)=>{
    console.loog(req.body);
    res.json({message:"awesome"});

    try{

        const{email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({error :"please fill the data"});
        }
        const userLogin = await User.findOne({email:email});

        console.log(userLogin);
        if(userLogin){
            res.status(400).json({error:"user error"});
        }else{
            res.json({message:"user Signin Sucessfully"});
        }
    }catch(err){
        console.log(err);
    }
});
*/
module.exports = router;