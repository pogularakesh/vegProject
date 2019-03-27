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

router.put('/:vid', (req, res, next) => {
    console.log(req.body)
  

    var db = pgp(cs);
    var i = parseInt(req.params.vid)
    var vn = req.body.vname;
    var q = req.body.quantity;
    var p = req.body.price;
    var d = req.body.discount;
    var db = pgp(cs);
    db.any('update vegetable set vname=$1,quantity=$2,price=$3,discount=$4 where vid=$5',
        [vn,q, p, d,i]).then((data) => {
            console.log(data)
            res.send('updated...')
        })
    pgp.end();
})

module.exports = router