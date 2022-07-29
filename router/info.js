const express = require('express')

const router = express.Router()

const {getInfo,sendInfo,getAllName,dlkhata,addudhari,add,delewala,toseeudhari} = require('../controller/info')

router.route('/').get(getInfo).post(sendInfo)

router.route('/allkhat').get(getAllName)

router.route('/delet').get(delewala).post(dlkhata)

router.route('/add').get(add).post(addudhari)

router.route('/seeYourUdhari/:nama').get(toseeudhari)

module.exports = router
