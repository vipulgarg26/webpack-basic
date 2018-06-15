const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path=require('path');
module.exports = {
    entry:{
        home: path.join(__dirname,'src','home.js'),
        events: path.join(__dirname,'src','events.js'),
        contact: path.join(__dirname,'src','contact.js'),
        app: path.join(__dirname,'src','app.js'),
        newapp: path.join(__dirname,'src','newapp.ts')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },
    watch: true,
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
              test: /\.ts$/,
              loader: 'ts-loader'
            },
          {
            test:/\.scss$/,
            loader:ExtractTextPlugin.extract({
              loader: 'css-loader?sourceMap!sass-loader?sourceMap'
            })
          }
        ]
    },
    plugins:[
      new ExtractTextPlugin({
        filename: '[name].bundle.css'
      })
    ]
};
