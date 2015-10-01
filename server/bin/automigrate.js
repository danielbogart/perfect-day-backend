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
var dataSource = app.dataSources.perfectDay;

dataSource.automigrate('Event', function(err) {
  if (err) console.log(err);

  var Event = app.models.Event;
  var count = events.length;

  events.forEach(function(account) {
    Event.create(account, function(err, record) {
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