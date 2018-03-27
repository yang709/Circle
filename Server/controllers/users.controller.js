var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('services/user.service');

var moment = require('moment');
var jwtDecode = require('jwt-decode');
// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/find/:email', find_user);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:_id', getById);
router.put('/:_id', update);
router.delete('/:_id', _delete);
// router.put('/credit/add', addCredit);
// router.put('/credit/sub', subCredit);

module.exports = router;

function authenticate(req, res) {
    userService.authenticate(req.body.email, req.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful

            // console.log(moment(jwtDecode(user.token).exp).format('MMMM Do YYYY, h:mm:ss a'));
                res.send(user);
            } else {
                // authentication failed
                res.status(400).send('email or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function register(req, res) {
    userService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    userService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getById(req, res) {
    userService.getById(req.params._id)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


function getCurrent(req, res) {
    userService.getById(req.user.sub)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    userService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    userService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function find_user(req, res) {
    userService.find_user(req.params.email)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
/*
function addCredit(req, res) {
    userService.addCredit(req.params.credit, req.user.sub)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function subCredit(req, res) {
    userService.subCredit(req.params.credit, req.user.sub)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}*/