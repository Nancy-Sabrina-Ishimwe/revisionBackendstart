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
}

const list = async (req, res, next) => {
    try{

    var house = await houseModel.find({});
    res.status(200).json({ house:house});
    }catch(error){
    res.status(500).send("Error fetching house");
}
}

const findById = async (req, res, next) => {
    try{
        console.log(req.query);
        let houseId = req.query.id;
        var findHouse = await houseModel.findById({houseId});
        res.status(200).json({ house:findHouse});
        }catch(error){
        res.status(500).send(Error);
    }
}
const findByEmail = async (req, res, next) => {
    try{
        let adminEmail = req.query.email;
                var findHouse = await houseModel.findById({email:req.query.email});
                res.status(200).json({ house:findHouse});
                }catch(error){
                res.status(500).send("Error fetching house");
            } 
}
const update = async (req, res, next) => {
    try{
        var findHouse = await houseModel.findOneAndUpdate({_id:req.query.id}, req.body);
        var house = await houseModel.find(findHouse._id);
        res.status(200).json({house});
        }catch(error){
        res.status(500).send("Error fetching house");
    }
}

const remove = async (req, res, next) => {
    try{
        var deletedHouse = await houseModel.findByIdAndDelete(req.query.id);
        if(deletedHouse){
            res.status(200).json({
                message: "Deleted"
            });
        }
        else{
            res.status(404).send("house not found!");
        }
    }
    catch(error){
        res.status(500).send(error);
    }
}


module.exports = {
    create,update,remove,list,findById,findByEmail
}