const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({
    taskId:{
        type :String,
       // required: true,
      //  default : 0
    },
    name:{
        type :String,
        required: true   
    },
    description:
    {
        type :String,
        required : true
    },
    startDate:
    {
        type :Date,
        default : Date.now,
        //required: true
    },
    endDate:{
        type : Date,
        default : Date.now,
       // required: true

    },
    status:{
        type : String,
       // default: "Pending",
       // required : true
    },
    priority:{
        type :String,
       // required : true
    },
    ownerName:{
        type :String,
       // required: true,
      //  default :""
    }

})

module.exports = mongoose.model('Tasks',TasksSchema);