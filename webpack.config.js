const path = require('path');

module.exports = {
  entry: './bin/derp.js',
  mode: "production",
  output: {
    filename: 'fxcpds-kdp.js',
    path: path.resolve(__dirname, 'dist')
  }
};