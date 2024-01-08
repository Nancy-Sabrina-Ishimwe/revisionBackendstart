const mongoose = require('mongoose');
// const Schema = mongoose.Schema();


 const houseSchema = new mongoose.Schema({
    houseName:{required:true, type:String,trim:true},
    email:{required:true, type:String,unique:true,
    match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    'provide valid email',]},
    phone:{required:true, type:String,unique:true},
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