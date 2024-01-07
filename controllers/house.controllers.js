const houseModel = require('../house/house.model');

const create = async (req, res, next) => {
    try {
console.log(req.body);
// const savedHouse = await houseModel.create(req.body);
const newHouse = new houseModel(req.body);
const savedHouse = await newHouse.save();
console.log(savedHouse); 

await newHouse.save();



res.status(201).json({
    message:'house created successfully',
    house:savedHouse
});
}catch (error) {
res.status(500).send("failed to create");
}
}
const update = async (req, res, next) => {
    
}

const remove = async (req, res, next) => {
    
}

const findById= async (req, res, next) => {
    
}
const list = async (req, res, next) => {
    
}
const findByEmail = async (req, res, next) => {
    
}

module.exports = {
    create,update,remove,findById,list,findByEmail
}