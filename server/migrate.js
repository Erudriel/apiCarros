'use strict';
let server = require('./server');
let mysql = server.dataSources.mysql;

let appModels =  Object.keys(server.models);

console.log('criando base ', appModels);

mysql.isActual(appModels, function(err, actual) {
    if (!actual) {
      mysql.autoupdate(appModels, function(err) {
        if (err) throw (err);
      });
    }
    console.log('migrated');
    return;
  });
  