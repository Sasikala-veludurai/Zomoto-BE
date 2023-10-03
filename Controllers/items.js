const items=require("../Models/items");

exports.getItemsByRestaurantId = (req, response) => {
    const restaurant_id=req?.params?.restaurant_id;
      console.log(restaurant_id);
     items.find({restaurantId:restaurant_id})
  .then((items)=>response.status(200).json({ message: "Items Fetched Sucessfully", items: items}))
   .catch(err=>console.log(err))

}