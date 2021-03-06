var path = require('path'); //This creates and absolute path for webpack can use //


module.exports = {
  entry: {
   App: './app/assets/scripts/App.js',
   Vendor: './app/assets/scripts/Vendor.js' //checks lazyload and picturefill //
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'), //This is the final product of the absolute path //
    filename: '[name].js'
  },
  module: {
    loaders: [
       {
         loader: 'babel-loader',   /*babel objects */
         query: {
           presets: ['es2015']
         },
         test: /\.js$/,
         exclude: /node_modules/
      }
    ]
  }
}
