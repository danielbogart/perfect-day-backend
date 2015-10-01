var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var events = [
  {
    time: '8',
    description: 'Eat a fuckin breakfast burrito'
  },
  {
    time: '9',
    description: 'Get pitted'
  }
];

var users = [
  {
    email: 'test@test.com',
    password: 'test'
  },
  {
    email: 'test2@test.com',
    password: 'test'
  }
];

var dataSource = app.dataSources.perfectDay;

dataSource.automigrate('Event', function(err) {
  if (err) console.log(err);

  var Event = app.models.Event;
  var count = events.length;

  events.forEach(function(event) {
    Event.create(event, function(err, record) {
      if (err) return console.log(err);

      console.log('Record created:', record);

      count--;

      if (count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});

dataSource.automigrate('User', function(err) {
  if (err) console.log(err);

  var User = app.models.User;
  var count = users.length;

  users.forEach(function(user) {
    User.create(user, function(err, record) {
      if (err) return console.log(err);

      console.log('Record created:', record);

      count--;

      if (count === 0) {
        console.log('done');
        dataSource.disconnect();
      }
    });
  });
});