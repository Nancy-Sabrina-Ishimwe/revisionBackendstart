const mongoose = require('mongoose');
// const Schema = mongoose.Schema();


 const houseSchema = new mongoose.Schema({
    houseName:{required:true, type:String},
    email:{required:true, type:String},
    phone:{required:true, type:String},
    houseType:{required:true, type:String},
    picture:{required:false, type:String},
    role:{
        type:String,
        required:false,
        enum:{
        values: [" FirstHouser", "LastHouse","middleHouse"],
        message:"{values} is not a valid house",
        }
    },
    createDate:{ type:Date,default:new Date(),},
    updateTime:{required:false, type:Date},
    
 });
 module.exports = mongoose.model('House', houseSchema);  