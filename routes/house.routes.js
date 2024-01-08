const express = require('express');
const{create,findByEmail,list,findById,remove,update} = require('../controllers/house.controllers');
const houseRoutes = express.Router();

houseRoutes.get('/list',list);

houseRoutes.post('/add',create);

houseRoutes.get('/findByEmail',findByEmail);

houseRoutes.get('/findByEmail',findByEmail);

houseRoutes.put('/update',update);

houseRoutes.get('/delete',remove); 

module.exports = houseRoutes;