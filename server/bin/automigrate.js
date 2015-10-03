var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var events = [
  {
    time: 8,
    description: 'Eat a fuckin breakfast burrito',
    personId: 1
  },
  {
    time: 9,
    description: 'Get pitted',
    personId: 1
  }
];

var people = [
  {
    email: 'test@test.com',
    firstName: 'Daniel',
    password: 'test',
    dayPublic: true
  },
  {
    email: 'test2@test.com',
    firstName: 'Cru',
    password: 'test',
    dayPublic: true
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

dataSource.automigrate('Person', function(err) {
  if (err) console.log(err);

  var Person = app.models.Person;
  var count = people.length;

  people.forEach(function(user) {
    Person.create(user, function(err, record) {
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