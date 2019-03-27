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

router.get("/:userid/:vid", (req, res, next) => {
    var userid = req.params.userid;
    var vid = req.params.vid;
    var db = pgp(cs)
    db.any('select * from cart where userid=$1 and vid=$2', [userid, vid]).then((data) => {
        res.send(data);
    });
    pgp.end();
})


router.get('/:userid', (req, res, next) => {
    var db = pgp(cs)
    var userid = req.params.userid;
    db.any(' select v.vname,v.quantity,v.price,v.discount,v.vimage,v.vid from vegetable v join cart c on v.vid=c.vid where c.userid=$1', [userid]).then
        ((data) => {
            res.send(data);
        });
    pgp.end();
})


router.post('/:userid/:vid', (req, res, next) => {

    var userid = req.params.userid;
    var vid = req.params.vid;
    console.log(userid + ":" + vid)
    var db = pgp(cs);
    db.none("insert into cart(userid,vid) values($1,$2)", [userid, vid]).then((data) => {
        res.send(data);
    });
    pgp.end();
})

router.delete('/:vid/:userid', (req, res, next) => {
    var vid = req.params.vid
    var userid = req.params.userid
    var db = pgp(cs)
    db.any('delete from cart where vid=$1 and userid=$2', [vid, userid]).then(data => {
        res.send(data)
        res.send({ messagae: "deleted" })
    })
})


module.exports = router