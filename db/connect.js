const mongoose = require('mongoose')
const url = "mongodb+srv://milu:milu@nodeexpressapis.qq1wmbh.mongodb.net/khata?retryWrites=true&w=majority"

mongoose
    .connect(url)
    .then(()=> console.log(`connected to db`))
    .catch((err)=>console.log(err))
