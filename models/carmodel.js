var mongoose = require('mongoose');
var CarSchema = mongoose.Schema(
   {
      name:{
         type:String,
      },
      category:{
         type:String,
      },
      image:{
         type:String,
      },
      price:{
         type:String,
      }
   }
);
var carmodel = mongoose.model('car', CarSchema, 'car');
module.exports = carmodel;