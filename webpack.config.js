// var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: './app/main.js',

  output: {
    path:'./app',
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.scss$/,
        loader: 'ignore-loader'
      }
    ]
  }
};

module.exports = config;