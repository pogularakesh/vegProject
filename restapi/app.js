var path=require('path')
var fs=require('fs')
var express=require('express');
var vg=require('./veg');
var reg=require('./register');
var upd=require('./update');

var promise=require('bluebird')
var adm=require('./loginmod')
var us=require('./user')
var ct=require('./cart')


 var app=express()
 
 app.all('*', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", '*');

    res.header("Access-Control-Allow-Headers", "Cache-Control,Pragma, Origin, Authorization, Content-Type, X-Requested-With");

    res.header("Access-Control-Allow-Methods", "*");

    return next();
});
 app.set('port',process.env.PORT||4500)
 app.use('/ulogin',us)

app.use('/admin',adm)
 app.use('/veg',vg);
 app.use('/register',reg);
 app.use('/cart',ct);
 app.use('/update',upd)
 //app.use('/schedule',sch);
  app.use(express.static(path.join(__dirname,"pics")))

 app.listen(app.get('port'),(err)=>{
    if(err){
        console.log("server error..")
    }
    else{
        console.log("server is started...  http://localhost:"+app.get('port'))
    }
})