var express = require('express')
var os = require('os')


var app = express()

//app.use('/',express.static(__dirname+'/public'))

app.use('/',function(req,res){
    res.json({
        osType : os.type(),
        cpu:os.cpus(),
        platform : os.platform(),
        arch : os.arch()
    })
})

app.listen(8080)