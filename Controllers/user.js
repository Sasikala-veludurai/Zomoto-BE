const user=require('../Models/user');

exports.signUpUser =(req,res)=>{
  const {email,password,firstname,lastname}=req.body;
  const userObj=new user({email:email,password:password,firstname:firstname,lastname:lastname});

  userObj.save()
  .then(response=>{
    res.status(200).json({message:"user registered successfully",user:response});
  })
  .catch(err=> {
    res.status(500).json({error:err})
  })
}


exports.loginUser=(req,res)=>{
    const {email,password}=req.body;


    user.find({email:email,password:password})
    .then(response=>{
        if(response.length!=0){
            res.status(200).json({message:"user LoggedIn successfully",user:response,IsloggedIn:true});
        }
        else{
            res.status(200).json({message:"Combination of emailId and password is wrong",user:response,IsloggedIn:false});
        }

    })
    .catch(err=> {
      res.status(500).json({error:err})
    })
  }