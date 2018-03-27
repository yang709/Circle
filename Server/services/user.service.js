var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
var uuid = require('uuid/v4');
db.bind('users');

var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;
service.find_user = find_user;
service.addCridit = addCridit;
service.subCridit = subCridit;


module.exports = service;

function authenticate(email, password) {
    var deferred = Q.defer();

    db.users.findOne({ email: email }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user && bcrypt.compareSync(password, user.hash)) {
            // authentication successful
            var d = new Date();
            var calculatedExpiresIn = 60*60*12 // token expires in 12 hours
            deferred.resolve({
                _id: user._id,
                updatedTimeStamp:user.updatedTimeStamp,
                accountType: user.accountType,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                nickname: user.nickname,
                gender: user.gender,
                birthday: user.birthday,
                creditLevel: user.creditLevel, // Your credit level
                circleCoin: user.circleCoin, // Circle main currency, Circle Coin
                phone: user.phone,
                address: user.address,
                note: user.note, // not in use now
                works: user.works, // not in use now
                skills: user.skills,
                personalWeb: user.personalWeb, // not in use
                postedMissions: user.postedMissions,
                acceptedMissions: user.acceptedMissions,
                historyMissions: user.historyMissions,
                chatters: user.chatters,
                contacts: user.contacts,
                blockedUsers: user.blockedUsers,
                avatar:user.avatar,
                myPictures:user.myPictures,
                notice:user.notice,
                token: jwt.sign({ sub: user._id,  "iat": (new Date().getTime()) }, config.secret, { expiresIn: calculatedExpiresIn })
            });
        } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();

    db.users.find().toArray(function (err, users) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return users (without hashed passwords)
        users = _.map(users, function (user) {
            return _.omit(user, 'hash');
        });

        deferred.resolve(users);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            // return user (without hashed password)
            deferred.resolve(_.omit(user, 'hash'));
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();

    // validation
    db.users.findOne(
        { email: userParam.email },
        function (err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                // email already exists
                deferred.reject('email "' + userParam.email + '" is already taken');
            } else {
                createUser();
            }
        });

    function createUser() {
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, ['_id','password']);
        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);
        user._id = uuid();
        db.users.insert(
            user,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function update(_id, userParam) {
    var deferred = Q.defer();
    // validation
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        if (user === null || userParam === null) updateUser(); // for a mysterious bug
        
        if (user.email !== userParam.email) {
            // email has changed so check if the new email is already taken
            db.users.findOne(
                { email: userParam.email },
                function (err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (user) {
                        // email already exists
                        deferred.reject('email "' + req.body.email + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    function updateUser() {
        // fields to update
        var set = {
            // firstName: userParam.firstName,
            // lastName: userParam.lastName,
            // email: userParam.email,
            // birthday: userParam.birthday,
            updatedTimeStamp: userParam.updatedTimeStamp,
            nickname: userParam.nickname,
            gender: userParam.gender,
            phone: userParam.phone,
            address: userParam.address,
            creditLevel: userParam.creditLevel, // Your credit level
            circleCoin: userParam.circleCoin, // Circle main currency, Circle Coin
            skills: userParam.skills,
            accountType: userParam.accountType,
            contacts: userParam.contacts,
            blockedUsers: userParam.blockedUsers,
            note: userParam.note,
            works: userParam.works,
            personalWeb: userParam.personalWeb,
            acceptedMissions: userParam.acceptedMissions,
            postedMissions: userParam.postedMissions,
            historyMissions: userParam.historyMissions,
            chatters: userParam.chatters,
            contacts: userParam.contacts,
            blockedUsers: userParam.blockedUsers,
            avatar: userParam.avatar,
            myPictures: userParam.myPictures,
            notice: userParam.notice
        };

        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        db.users.update(
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

    db.users.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}
function find_user(userParam){
    var deferred = Q.defer();
    db.users.findOne({email: userParam}, function(err, user){
        if(err){
            deferred.reject(err.name + ': ' + err.message);
        }else{
            deferred.resolve(_.omit(user, 'hash'));
        }
    });
    return deferred.promise;
    
}

function addCridit(credit, _id){
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            var oldCri = user.credit;
            var newCri = oldCri + credit;
            var set = {
                credit: newCri
            };
            db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function subCridit(credit){
    var deferred = Q.defer();

    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user) {
            var oldCri = user.credit;
            var newCri = oldCri - credit;
            var set = {
                credit: newCri
            };
            db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
        } else {
            // user not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}