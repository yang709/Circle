// This nodejs backend is based on Jasonwatmore's blog. Thanks to the Sydney developer's tutorial.
require('rootpath')();
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
app.use(expressJwt({
    secret: config.secret,
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({ path: ['/users/authenticate', '/users/register'] }));


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
// routes
app.use('/users', require('./controllers/users.controller'));
app.use('/missions', require('./controllers/missions.controller'));
app.use('/chat', require('./controllers/chat.controller'));

// start server
var port = process.env.NODE_ENV === 'production' ? 80 : 5000;
var server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});