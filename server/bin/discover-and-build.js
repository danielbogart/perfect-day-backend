var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.perfectDay;

dataSource.discoverAndBuildModels('event', {schema: 'public'},
    function(err, models) {
  if (err) throw err;

  models.Event.find(function(err, events) {
    if (err) return console.log(err);

    console.log(events);

    dataSource.disconnect();
  });
});