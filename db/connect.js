const mongoose = require('mongoose')

mongoose
    .connect(url)
    .then(()=> console.log(`connected to db`))
    .catch((err)=>console.log(err))
