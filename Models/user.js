const mongoose=require('mongoose');


const Schema=mongoose.Schema;


const userSchema=new Schema({   //schema is usefull while creating a new structure


email:{
    type:String,
    required:false
},
password:{
    type:String,
    required:true
},
firstname:{
    type:String,
    required:true
},
lastname:{
    type:String,
    required:false
},



});

module.exports=mongoose.model("user",userSchema);


