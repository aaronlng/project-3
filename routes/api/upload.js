const multer = require("multer");
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("express").Router();

app.use(cors());


//set up multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./client/public/files")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.name)
    }
})

var upload = multer({ storage: storage }).single("file");

router
    .route("/")
    .post(upload);

module.exports = router;

// app.post("./api/upload", function (req, res) {
//     console.log("upload route hit")
//     upload(req, res, function (err) {
//         console.log(res);
//         if (err instanceof multer.MulterError) {
//             return res.status(500).json(err)
//         } else if (err) {
//             return res.status(500).json(err)
//         }
//         return res.status(200).send(req.file)
//     });
// });