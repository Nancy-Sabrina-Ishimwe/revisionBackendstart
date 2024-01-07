require('dotenv').config();
const express = require('express');
const houseRoutes = require('./routes/house.routes');
const app = express();


app.use(express.json());
app.use('api/house1/House',houseRoutes)



app.listen(process.env.PORT, () => {
console.log(`listening on port ${process.env.PORT}`);
});
