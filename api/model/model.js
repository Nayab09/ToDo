const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({
    id:{
        type :String,
        required: true
    },
    Name:{
        type :String,   
    },
    description:
    {
        type :String,
        required : true
    },
    startDate:
    {
        type :Date,
        default : Date.now
    },
    endDate:{
        type : Date,
        default : Date.now.toString()

    },
    status:{
        type : String,
        default: false
    },
    priority:{
        type :Number
    },
    ownerName:{
        type :String
    },
    reminder:{
        type:Boolean,
        default:true,
        required : true
    }

})

module.exports = mongoose.model('Tasks',TasksSchema);