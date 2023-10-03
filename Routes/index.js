const express=require('express');
const locationcontrollers=require('../Controllers/locations');
const mealtypecontroller=require('../Controllers/mealtypes');
const restaurantController=require("../Controllers/restaurants");
const userController=require('../Controllers/user');
const paymentController=require('../Controllers/payment');
const itemsController=require('../Controllers/items');
const router=express.Router();

router.get('/locations',locationcontrollers.getlocations);
router.get('/mealtypes',mealtypecontroller.getmealtypes);
router.get('/restaurantBylocation/:locationId',restaurantController.getRestaurantBylocation);
router.post('/filter',restaurantController.filterRestaurants);
router.get('/details/:restaurant_id',restaurantController.getRestaurant);
router.post('/userSignup',userController.signUpUser);
router.post('/userLoginIn',userController.loginUser);
router.get('/restaurantbyid/:restaurant_id',restaurantController.getRestaurant);
router.get('/getmenuitembyrestaurantid/:restaurant_id',itemsController.getItemsByRestaurantId);

router.post('/payment',paymentController.payment);



module.exports=router;