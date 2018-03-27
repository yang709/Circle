var config = require('config.json');
var express = require('express');
var router = express.Router();
var missionService = require('services/mission.service');

router.post('/create', create);
router.get('/', getAll);
router.put('/:_id', update);
router.delete('/:_id', _delete);
router.get('/:_id', getById);
// router.get('/find/:title', getByTitle);
// router.get('/find/:user', getByUser);
router.get('/find/:titlesAndTags', getAllByTitleAndTags);

module.exports = router;

function create(req, res) {
    missionService.create(req.body)
        .then(function (_id) {
            // console.log(_id)
            res.send(_id);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAll(req, res) {
    missionService.getAll()
        .then(function (missions) {
            res.send(missions);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getAllByTitleAndTags(req, res) {
    // console.log(req.params);
    missionService.getAllByTitleAndTags(req.params.titlesAndTags)
        .then(function (missions) {
            res.send(missions);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    missionService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    missionService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getById(req, res) {
    missionService.getById(req.params._id)
        .then(function (mission) {
            if (mission) {
                res.send(mission);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
/*
function getByTitle(req, res) {
    missionService.getByTitle(req.params.title)
        .then(function (mission) {
            if (mission) {
                res.send(mission);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}*/
/*
function getByUser(req, res) {
    missionService.getByUser(req.params.user)
        .then(function (mission) {
            if (mission) {
                res.send(mission);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
*/

