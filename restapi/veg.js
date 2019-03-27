var fs = require('fs')
var path = require('path')
var express = require('express')
var promise = require('bluebird')
var bodyparser = require('body-parser')
var router = express.Router()
var option = {
    promiseLib: promise
};
var pgp = require('pg-promise')(option)

router.use(bodyparser.urlencoded({ extended: true }))
router.use(bodyparser.json())
var cs = 'postgres://postgres:root@localhost:5432/postgres'

router.get('/', (req, res, next) => {
    var db = pgp(cs);
    db.any('select * from vegetable').then((data) => {
        res.send(data)
    })
    pgp.end();
})

router.get('/:id', (req, res, next) => {
    var i = req.params.id;
    var db = pgp(cs);
    db.any('select * from vegetable where vid= $1', i).then((data) => {
        res.send(data);
    })
    pgp.end();
})

// router.get('/:vname', (req, res, next) => {
//     var nm = req.body.vname
//     var db = pgp(cs)
//     db.any('select *from vegetable where vname=$1', vname).then((data) => {
//         res.send(data)
//     })
//     pgp.end()
// })

router.post('/', (req, res, next) => {
    var i = req.body.vid
    var vn = req.body.vname;
    var im = req.body.vimage;
    var q = req.body.quantity;
    var p = req.body.price;
    var d = req.body.discount;
 

    var dt = new Date()
    fName = dt.getFullYear() + '_' + dt.getMonth() + '_' + dt.getDate() + '_' + dt.getHours() + '_' + dt.getMinutes() + '_' + dt.getMilliseconds() + '.png'
    fNameW = path.join(__dirname, 'pics/' + fName)
    fs.writeFile(fNameW, im, 'base64', (err) => {
        if (err)
            console.log("Unable to upload file")
        else
            console.log("file uploaded")
    })
    var dbimgPath = 'http://localhost:4500/' + fName
    var db = pgp(cs);
    db.any('insert into vegetable(vid,vname,vimage,quantity,price,discount) values($1,$2,$3,$4,$5,$6)',
        [i, vn, dbimgPath, q, p, d]).then((data) => {
            res.send({ message: " inserted succesfully...." })
        })
    pgp.end();
})

router.delete('/:id', (req, res, next) => {
    var i = parseInt(req.params.id)
    var db = pgp(cs);
    db.none('delete from vegetable where vid=$1', i).then((data) => {
        res.send({ message: "deleted successfully...." })
    })
    pgp.end()
})
router.put('/:vid', (req, res, next) => {
    console.log(req.body)
  


    var dt = new Date()
    fName = dt.getFullYear() + '_' + dt.getMonth() + '_' + dt.getDate() + '_' + dt.getHours() + '_' + dt.getMinutes() + '_' + dt.getMilliseconds() + '.png'
    fNameW = path.join(__dirname, 'pics/' + fName)
    var im=req.body.vimage
    fs.writeFile(fNameW, im, 'base64', (err) => {
        if (err)
            console.log("Unable to upload file")
        else
            console.log("file uploaded")
    })
    var dbimgPath = 'http://localhost:4500/' + fName
    var db = pgp(cs);
    var i = parseInt(req.params.vid)
    var vn = req.body.vname;
    var q = req.body.quantity;
    var p = req.body.price;
    var d = req.body.discount;
    var db = pgp(cs);
    db.any('update vegetable set vname=$1,vimage=$2,quantity=$3,price=$4,discount=$5 where vid=$6',
        [vn,dbimgPath, q, p, d,i]).then((data) => {
            console.log(data)
            res.send('updated...')
        })
    pgp.end();
})

module.exports = router