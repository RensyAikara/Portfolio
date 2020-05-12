var express = require("express");
var path = require("path");

var router = express.Router();

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
});

router.get("/projects", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/projects.html"));
});


module.exports = router;