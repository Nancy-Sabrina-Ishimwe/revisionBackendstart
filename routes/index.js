const express = require('express');
const houseRoutes = require('./house.routes');
const app = express();
const allRoutes = express.Router();


const houseRoutes =  require('./house.routes');
// const userRoutes =  require('./user.routes');


allRoutes.use('/house',houseRoutes);
// allRoutes.use('/user',houseRoutes);


module.exports = allRoutes;