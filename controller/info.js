const path = require('path')
const khata = require('../model/schema')


const getInfo = (req,res) => {
    res.sendFile(path.join(__dirname,'../public/index.html'))
}


const getAllName = async(req,res) => {
    const allKh = await khata.find({})
    res.render('pages/list',{data:allKh,head:'listofall'})
}


const sendInfo = async (req,res) => {
    const {nama,udhari} = req.body
    const data = await khata.find({name:nama})
    if(data.length){
        return res.send(`${nama} Already exists`)
    }
    const k = await khata.create({name:nama,udhari:udhari})
    res.status(201).json(k)
}


const delewala = (req,res) => {
    res.sendFile(path.join(__dirname,'../public/deletwala.html'))
}


const dlkhata = async (req,res) => {
    const {nama} = req.body
    const exist = await khata.findOneAndDelete({name:nama})
    console.log(`exist`,exist)

    if(!exist) {
        return res.send(`ee kon hai be`)
    }

    res.send(`name '${nama}' deleted successfully abb khuch nahi ho sakta bhai`)
}


const add = async (req,res) => {
    res.sendFile(path.join(__dirname,'../public/updatewala.html'))
}


const addudhari = async (req,res) => {
    const {nama,udhari} = req.body
    const x = await khata.findOneAndUpdate({name:nama},{$set:{udhari : udhari}},{new : true, runValidators : true})
    console.log(nama)
    if(!x){
       return res.send(` Who is ${nama}  -_-  ?`)
    }

    console.log(x)
    res.send(`${nama} your udhari has been updated to ${udhari}`)
}


const toseeudhari = async (req,res) => {
    const {nama} = req.params
    const show = await khata.findOne({name:nama})

    if(!show){
        res.send(` name not in the list`)
    }

    console.log(nama)
    res.status(200).json(show)

}


module.exports = {getInfo,sendInfo,getAllName,dlkhata,addudhari,add,delewala,toseeudhari}



