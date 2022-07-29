require('./db/connect')
const express = require('express')
const app = express()
const port = 5000
const info = require('./router/info')
const bodyparser = require('body-parser')
// const ejs = require('ejs')

//ejs

app.set('view engine','ejs')

//index page 

app.get('/thisisejs',(req,res) => {
    // res.send('hello')
    res.render('pages/index.ejs')
})

//middleware 

app.use(express.json())

app.use(bodyparser.urlencoded({extended:true}))

app.use('/',info)

app.listen(port,()=>{
    console.log(`connected to port ${port}`);
})
