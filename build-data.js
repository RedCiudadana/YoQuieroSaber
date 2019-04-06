/* eslint-env node */

/**
 * Usage: node build-data.js
 */

const Tabletop = require('tabletop');
const jsonfile = require('jsonfile');
const fs = require('fs');
const path = require('path');

var targetPath = 'public/static-files/';

// Inicialmente eliminar archivos
fs.readdirSync(targetPath).forEach((file) => {
  fs.unlinkSync(path.join(targetPath, file));
});

Tabletop.init({
  key: fs.readFileSync('public/data-spreadsheet-url', 'utf-8').trim(),
  callback: function(sheets) {
    Object.keys(sheets).forEach(function(key) {
      var file = targetPath + key + '.json';
      
      jsonfile.spaces = 2;
      jsonfile.writeFileSync(file, sheets[key].elements);
    });
  }
});

Tabletop.init({
  key: fs.readFileSync('public/config-spreadsheet-url', 'utf-8').trim(),
  callback: function(sheets) {
    Object.keys(sheets).forEach(function(key) {
      var file = targetPath + key + '.json';
      
      jsonfile.spaces = 2;
      jsonfile.writeFileSync(file, sheets[key].elements);
    });
  }
});
