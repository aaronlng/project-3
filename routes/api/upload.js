const express = require('express');
const multer = require('multer');
const cors = require('cors');
const router = require("express").Router();
const app = express();


app.use(express.static('public'))
app.use(cors());

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../client/public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })

  var upload = multer({ storage: storage })
   
  

app.post('/api/upload', upload.single('file'), function (req, res, next) {
    console.log("successful upload");
  })

module.exports = router;