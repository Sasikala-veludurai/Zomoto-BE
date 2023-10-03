

const mealtypes=require("../Models/mealtypes")

exports.getmealtypes = (req, response) => {
    mealtypes.find().then((res)=>response.status(200).json({ message: "Mealtypes Fetched Sucessfully", mealtypes: res}))
   .catch(err=>console.log(err))

}