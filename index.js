require('dotenv').config();
const express = require('express');
const houseRoutes = require('./routes/house.routes');
const {connectDb} = require('./database/dbConnection');



const app = express();
connectDb();


app.use(express.json());
app.use('api/house1',allRoutes);



app.listen(process.env.PORT, () => {
console.log(`listening on port ${process.env.PORT}`);
});
