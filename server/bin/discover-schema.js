var path = require('path');
var app = require(path.resolve(__dirname, '../server'));

var dataSource = app.dataSources.perfectDay;

dataSource.discoverSchema('event', {schema: 'public'},
    function(err, schema) {
  if (err) throw err;

  console.log(JSON.stringify(schema, null, '  '));

  dataSource.disconnect();
});

dataSource.discoverSchema('user', {schema: 'public'},
    function(err, schema) {
  if (err) throw err;

  console.log(JSON.stringify(schema, null, '  '));

  dataSource.disconnect();
});