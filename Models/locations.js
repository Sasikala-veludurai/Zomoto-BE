const mongoose=require('mongoose');


const Schema=mongoose.Schema;


const locationSchema=new Schema({   //schema is usefull while creating a new structure
name:{
    type:String,
    required:false
},
city_id:{
    type:String,
    required:false
},
location_id:{
    type:String,
    required:false
},
city_name:{
    type:String,
    required:false
},
country_name:{
    type:String,
    required:false
}

});

module.exports=mongoose.model("locations",locationSchema);


