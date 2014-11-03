var express             = require('express'),
    app                 = express(),
    bodyParser          = require('body-parser'),
    mongoose            = require('mongoose'),
    meetupsController   = require('./server/controllers/meetups-controller');

mongoose.connect('mongodb://localhost:27017/meetup');

app.use(bodyParser());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

app.post('/api/meetups', meetupsController.create);

app.listen(3000, function() {
    console.log('Now listening...');
});