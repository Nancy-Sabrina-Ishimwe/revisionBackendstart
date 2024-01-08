const houseModel = require('../models/house.models');

const create = async (req, res, next) => {
try {
    console.log(req.body);
    // const savedHouse = await houseModel.create(req.body);
    var savedHouse = await  houseModel.create(req.body);
    res.status(201).json({
    message:'house created successfully',
    house:savedHouse
    })
}catch (error) {
res.status(500).send(error.message);
}
};
const update = async (req, res, next) => {
    
}

const remove = async (req, res, next) => {
    
}

const findById= async (req, res, next) => {
    
}
const list = async (req, res, next) => {
    try{

    var house = await houseModel.find({});
    res.status(200).json({ house:house});
    }catch(error){
    res.status(500).send("Error fetching house");
}
}
const findByEmail = async (req, res, next) => {
    
}

module.exports = {
    create,update,remove,findById,list,findByEmail
}