const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans the output directory before each build
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', // Dynamically set mode
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Handle image files
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 3000,
    open: true, // Automatically open the browser
    hot: true,  // Enable hot module replacement
  },
  resolve: {
    extensions: ['.js', '.json'], // Resolve these extensions
  },
};