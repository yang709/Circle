var express = require('express');
var config = require('config.json');
var router = express.Router();
var _ = require('lodash');
var app = express();
var server = require('http').createServer(app);
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
var io = require('socket.io')(server);

server.listen(4000);
db.bind('chat');

io.on('connection', function (socket) {
  console.log('User connected');
  socket.on('disconnect', function() {
    console.log('User disconnected');
  });
  socket.on('save-message', function (data) {
    console.log("databelow");
    console.log(data);
    io.emit('new-message',  data );
  });
});

router.get('/:room', function(req, res, next) {
  
  db.chat.find({ roomId: req.params.room }).toArray(function (err, chats) {
    if (err) return next(err);
    chats = _.map(chats, function (chat) {
            return chat;
        });
    res.send(chats);
  });
  
});

/* SAVE CHAT */
router.post('/', function(req, res, next) {
  console.log("savechat");
  db.chat.insert(
            req.body,
            function (err, post) {
                if (err) return next(err);
                console.log(post.ops[0]);
                res.send(post.ops[0]);
            });
  /*
  Chat.create(req.body, function (err, post) {
    if (err) return next(err);
    res.send(post);
  });
  */
});

module.exports = router;