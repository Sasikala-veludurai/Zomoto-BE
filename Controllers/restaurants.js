const restaurants=require("../Models/restaurant")

exports.getRestaurantBylocation = (req, response) => {
    const locationId=req.params.locationId;
    restaurants.find({location_id:Number(locationId)})
    .then((res)=>response.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurants: res}))
   .catch(err=>console.log(err))

}

exports.getRestaurant= (req, response) => {
    const restaurant_id=req.params.restaurant_id;
    restaurants.findById(restaurant_id)
    .then((res)=>response.status(200).json({ message: "Restaurant Fetched Sucessfully", restaurants: res}))
   .catch(err=>console.log(err))

}

exports.getRestaurantCount = (payload) => {
    return new Promise((resolve, reject) => {
      restaurants.find(payload).count()
        .then((count) => {
          resolve(count);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

exports.filterRestaurants=(req,res)=>{
// const requestBody=req.body;
const {mealtype_id,location_id,lcost,hcost,sort,page,cuisine}=req.body;
console.log("filter",req.body);
let payload;

const sortOrder=sort;
let pagination=Number(page);
pagination=page==1?0:page;
if(pagination!=0) pagination=(pagination-1)*2;

if(mealtype_id){
    payload={mealtype_id:mealtype_id}
}
if(location_id){
    payload={...payload,location_id:location_id}
}
if(cuisine?.length!=0){
//     let cuisineRes=[];
//     for(let i = 0; i < cuisine.length; i++){
//         cuisineRes.push({
//         $elemMatch: {
//             "id": { $numberInt: cuisine[i]}
//           }
//         });
//     }
    payload={...payload,cuisine:cuisine}
//     console.log(payload)
}
if(lcost && hcost)
{
    payload={...payload,min_price:{$lte:hcost,$gte:lcost}}

}

 let finalres;
restaurants.find(payload).sort({min_price:Number(sortOrder?sortOrder:-1)}).skip(pagination).limit(2)
   .then(response=>{
    this.getRestaurantCount(payload)
    .then((count) => {
      // Handle the count value here
      finalres=count;
      res.status(200).json({message:"filter applied successfully",restaurants:response,pagecounts:finalres})

    })
    .catch((err) => {
      // Handle any errors here
      console.error(err);
    });



   })
   .catch(err=>{
      res.status(500).json({error:payload})
   })

}