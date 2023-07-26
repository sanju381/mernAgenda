const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    backend_:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('ToDo',todoSchema)