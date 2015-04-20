var path = require('path');

var blue = require('./processors/blue');
var red  = require('./processors/red');

module.exports = {
    target: 'node',
    context: __dirname,
    entry: './test.js',
    output: {
        path: path.join(__dirname, '..', 'build'),
        filename: 'test.js'
    },
    postcss: {
        defaults: [blue, red],
        blues:    [blue]
    }
};
