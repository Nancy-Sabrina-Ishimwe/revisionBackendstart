const {string} = require('joi');
const mongoose = require('mongoose');




 const houseSchema = new mongoose.Schema({
    HouseName:{required:true, type:String},
    email:{required:true, type:String},
    password:{required:true, type:String},
    phone:{required:true, type:String},
    houseType:{required:true, type:String},
    picture:{required:true, type:String},
    role:{
        enum:{
        values: [" FirstHouser", "LastHouse","middleHouse"],
        message:"{values} is not a valid house",
        }
    },
    createDate:{required:true, type:Date,default:new Date(),},
    updateTime:{required:true, type:Date},
    
 });
 module.exports = mongoose.model('House', houseSchema);  