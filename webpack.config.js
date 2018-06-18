const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
    entry: ['jquery', 'babel-polyfill', './src/authenticate.js', './src/search.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins:[
        new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/login.html'
    }),
        new HtmlWebpackPlugin({
            filename: 'myPage.html',
            template: './src/myPage.html'
        })
        
        ],
    module: {
        rules: [
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: 'babel-loader'
               }
            
           },
            {
              test: /jquery.+\.js$/,
                use: [{
                    loader: 'expose-loader',
                    options: 'jquery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]   
            }
        ],
    }

        
};
