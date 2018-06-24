var express = require('express')
var os = require('os')


var app = express()

//app.use('/',express.static(__dirname+'/public'))

app.use('/',function(req,res){
    res.json({
        ip:req.connection.remoteAddress,
        osType : os.type(),
        platform : os.platform(),
        arch : os.arch()
    })
})

app.listen(8080)