var fs=require('fs')
var path=require('path')
var express=require('express')
var promise=require('bluebird')
var bp=require('body-parser')
var options={promiseLib:promise}
var pgp=require('pg-promise')(options)
var router=express.Router()
var router=express()
  
 
 router.use(bp.urlencoded({extended:true}))
 router.use(bp.json())
 var cs="postgres://postgres:root@localhost:5432/postgres"


 router.get('/',(req,res,next)=>{
     var myDb=pgp(cs)
     myDb.any('select * from register').then((data)=>{
         res.send(data)
     })
     pgp.end()
 })

 router.get('/:id',(req,res,next)=>{
     var i=req.params.id
    var myDb=pgp(cs)
    myDb.any('select * from register where userid=$1',i).then((data)=>{
        res.send(data)
    })
    pgp.end()
})

 router.delete('/:id',(req,res,next)=>{
     var i=(req.params.id)
     var myDb=pgp(cs)
     myDb.none('delete from register where userid=$1',i).then((data)=>{
         res.send({"message":"deleted successfully"})
     })
     pgp.end()
 })

router.post('/',(req,res,next)=>{
    var i=req.body.userid
    var p=req.body.password
    
   var myDb=pgp(cs)
   myDb.none("insert into register values($1,$2)",[i,p]).then((data)=>{
       res.send({"message":"inserted succesfully"})
   })
   pgp.end()
})
router.put('/',(req,res,next)=>{
    var i=req.body.userid
    var p=req.body.password

var myDb=pgp(cs)
   myDb.none("update register set password=$1 where userid=$2",[p,i]).then((data)=>{
       res.send({"message":"updated succesfully"})
   })
   pgp.end()
})
module.exports=router