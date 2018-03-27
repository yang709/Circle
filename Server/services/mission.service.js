var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
var uuid = require('uuid/v4');
db.bind('missions');

var service = {};

service.create = create;
service.getAll = getAll;
service.delete = _delete;
service.update = update;
service.getById = getById;
// service.getByTitle = getByTitle;
// service.getByUser = getByUser;
service.getAllByTitleAndTags =getAllByTitleAndTags;

module.exports = service;

function create(param) {
    var deferred = Q.defer();


        // set user object to userParam without the cleartext password
    var mission = param;
        // add hashed password to user object
    mission._id = uuid();
    db.missions.insert(
        mission,
        function (err, doc) {
               if (err) deferred.reject(err.name + ': ' + err.message);
            deferred.resolve(mission._id);
        });


    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.missions.find().toArray(function (err, missions) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return missions
        missions = _.map(missions, function (mission) {
            return mission;
        });

        deferred.resolve(missions);
    });

    return deferred.promise;
}


function getAllByTitleAndTags(param) {
    var deferred = Q.defer();
    console.log(param);
    db.missions.find({'$text':{'$search': param}}).toArray(function(err, missions) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        missions = _.map(missions, function(mission) {
            console.log("here");
            return mission;
        });
        console.log(missions);
        deferred.resolve(missions);
    });
    return deferred.promise;
}

function update(_id, param) {
    var deferred = Q.defer();
    // validation
    db.missions.findById(_id, function (err, mission) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        updateMission();
    });

    function updateMission() {
        // fields to update
        var set = {
            
            // posterNickname: param.posterNickname,
            candidates: param.candidates,
            acceptors: param.acceptors,
            maxAcceptor: param.maxAcceptor,
            minAcceptor: param.minAcceptor,
            updatedTimeStamp: param.updatedTimeStamp,
            title: param.title,
            location: param.location,
            payment: param.payment,
            startDate: param.startDate,
            endDate: param.endDate,
            description: param.description,
            tags: param.tags,
            urgency: param.urgency,
            applyNotes: param.applyNotes,
            status: param.status,
            // 0. REQUESTING (wait for people to accept the task)
            // 1. WAITING (wait for poster to confirm acceptor),
            // 2. ONGOING (working in progress),
            // 3. FINISHED (acceptor confirm finished),
            // 4. CASE_CLOSED (poster confirm mission accomplished)
            // 5. FAILED (acceptor(s) do not confirm before due date)
            // 6. NO_CONFIRM (acceptor confirmed but poster did not confirm),
            // 7. EXPIRED (no one accept before the due date).
            comments: param.comments
        };

        db.missions.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.missions.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.missions.findById(_id, function (err, mission) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (mission) {
            deferred.resolve(mission);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}
/*
function getByTitle(param){
    var deferred = Q.defer();
    db.missions.findOne({title: param}, function(err, mission){
        if(err){
            deferred.reject(err.name + ': ' + err.message);
        }else{
            deferred.resolve(mission);
        }
    });
    return deferred.promise;
}*/
/*
function getByUser(param){
    var deferred = Q.defer();
    db.missions.findOne({posterNickname: param}, function(err, mission){
        if(err){
            deferred.reject(err.name + ': ' + err.message);
        }else{
            deferred.resolve(mission);
        }
    });
    return deferred.promise;
}

*/
