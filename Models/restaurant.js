const mongoose=require('mongoose');


const Schema=mongoose.Schema;


const restaurantShcema=new Schema({   //schema is usefull while creating a new structure
name:{
    type:String,
    required:false
},
city:{
    type:String,
    required:false
},
location_id:{
    type:Number,
    required:false
},
city_id:{
    type:Number,
    required:false
},
locality:{
    type:String,
    required:false
},
thumb:{
    type:Array,
    required:false
},
aggregate_rating:{
    type:String,
    required:false
},
rating_text:{
    type:String,
    required:false
},
min_price:{
    type:Number,
    required:false
},
contact_number:{
    type:String,
    required:false
},
cuisine:{
    type:Array,
    required:false
},
image:{
    type:String,
    required:false
},
mealtype_id:{
    type:Number,
    required:false
}


});


module.exports=mongoose.model("restaurants",restaurantShcema);


// name
// "Domino's"
// city
// "Delhi"
// location_id
// 1
// city_id
// 1
// locality
// "shalimar Bagh"

// thumb
// Array
// aggregate_rating
// "4.3"
// rating_text
// "very good"
// min_price
// 600
// contact_number
// "9194356782310"

// cuisine
// Array
// image
// "images/dinner1.jpg"
// mealtype_id
// 1