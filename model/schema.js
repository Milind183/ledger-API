const mongoose = require('mongoose')

const khataSchema = new mongoose.Schema({
    name: {type:String , require:true , minLength : 2, trim :true},
    udhari:{type : Number , default : 3 }
})

module.exports = mongoose.model('khata',khataSchema)
