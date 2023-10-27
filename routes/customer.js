var express = require('express');
var robotmodel = require("../models/robotmodel")
var figuremodel = require("../models/figuremodel")
var router = express.Router();
var express = require('express');
const UserModel = require('../models/usermodel');
var router = express.Router();
var carmodel = require("../models/carmodel")

router.get('/', async (req, res) => {
  var figures = await figuremodel.find();
  var robots = await robotmodel.find();
  var cars = await carmodel.find();
  console.log(figures);
  res.render('customer/index', { 
     figures: figures,
     robots: robots,
     cars:cars,
   });
})

router.get('/detail/:id', async (req, res) => {
  var id = req.params.id;
  var robot = await robotmodel.findById(id);
  res.render('customer/detail', { robot: robot });
})

router.get('/figure', async (req, res) => {
  var figures = await figuremodel.find();
   res.render('customer/figure', { figures: figures });
})
router.get('/car', async (req, res) => {
  var cars = await carmodel.find();
   res.render('customer/car', { cars: cars });
})

router.get('/robot', async (req, res) => {
  var robots = await robotmodel.find();
  res.render('customer/robot', { robots: robots });
})
module.exports = router;
