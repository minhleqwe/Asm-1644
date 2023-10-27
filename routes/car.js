var express = require('express');
var router = express.Router();

const carmodel = require('../models/carmodel');

router.get('/', async (req, res) => {
   var cars = await carmodel.find();
   res.render('car/index', { cars: cars });
})


router.get('/detail/:id', async (req, res) => {
   var id = req.params.id;
   var car = await carmodel.findById(id);
   res.render('car/detail', { car: car });
})

router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await carmodel.findByIdAndDelete(id);
   console.log('Delete car succeed');
   res.redirect('/toy');
})

router.get('/add', (req, res) => {
   res.render('car/add');
})

router.post('/add', async (req, res) => {
   var car = req.body;
   await carmodel.create(car);
   console.log('Add car succeed !');
   res.redirect('/car');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var car = await carmodel.findById(id);
   res.render('car/edit', { car: car })
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var car = req.body;
   await carmodel.findByIdAndUpdate(id, car);
   console.log('Update car succeed !');
   res.redirect('/car');
})

router.post('/search', async (req, res) => {
   var keyword = req.body.name;
   var cars = await carmodel.find({ name: new RegExp(keyword, "i") });
   res.render('car/index', { cars: cars });
})

module.exports = router;