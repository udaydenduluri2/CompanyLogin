const path = require('path');

module.exports = {
    entry: './src/authenticate.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    mode: 'development'
};