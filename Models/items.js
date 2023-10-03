const mongoose=require('mongoose');


const Schema=mongoose.Schema;


const itemSchema=new Schema({   //schema is usefull while creating a new structure
name:{
    type:String,
    required:false
},
description:{
    type:String,
    required:false
},
ingridients:{
   type:Array,
required:false
},
restaurantId:{
    type:String,
    required:false
},
image:{
    type:String,
    required:false
},
restaurantId:{
    type:String,
    required:false
},
foodtype:{
    type:String,
    required:false
},
qty:{
    type:Number,
    required:false
},
price:{
    type:Number,
    required:false
}


});


module.exports=mongoose.model("items",itemSchema);


