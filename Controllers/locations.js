const location=require("../Models/locations")

exports.getlocations = (req, response) => {
   location.find().then((res)=>response.status(200).json({ message: "City Fetched Sucessfully", locations: res}))
   .catch(err=>console.log(err))

}