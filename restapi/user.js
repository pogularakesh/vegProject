var promise=require('bluebird')
var bodyparser=require('body-parser')
var express=require('express')

var router=express.Router()

var option={promiseLib:promise}
var pgp=require('pg-promise')(option)

router.use(bodyparser.urlencoded({extended:true}))
router.use(bodyparser.json())

var cs="postgres://postgres:root@localhost:5432/postgres"

router.get('/:userid/:password',(req,res,next)=>{
    var u=req.params.userid;
    var p=req.params.password;
    var mydb=pgp(cs)
    mydb.any('select * from register where userid=$1 and password=$2',[u,p]).then((data)=>{
        res.send(data)
    })
    pgp.end();
})

module.exports=router