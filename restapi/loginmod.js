var promise=require('bluebird')
var bodyparser=require('body-parser')
var express=require('express')

var router=express.Router()

var option={promiseLib:promise}
var pgp=require('pg-promise')(option)

router.use(bodyparser.urlencoded({extended:true}))
router.use(bodyparser.json())

var cs="postgres://postgres:root@localhost:5432/postgres"

router.get('/:aid/:apwd',(req,res,next)=>{
    var u=req.params.aid;
    var p=req.params.apwd;
    var mydb=pgp(cs)
    mydb.any('select * from admin where aid=$1 and apwd=$2',[u,p]).then((data)=>{
        res.send(data)
    })
    pgp.end();
})

module.exports=router