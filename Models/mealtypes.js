const mongoose=require('mongoose');


const Schema=mongoose.Schema;


const mealtypeSchema=new Schema({   //schema is usefull while creating a new structure
name:{
    type:String,
    required:false
},
content:{
    type:String,
    required:false
},
images:{
    type:String,
    required:false
},
meal_type:{
    type:Number,
    required:false
}


});


module.exports=mongoose.model("mealtypes",mealtypeSchema);


