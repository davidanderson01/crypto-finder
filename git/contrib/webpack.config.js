const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans the output directory before each build
  },

  // Mode: 'development' or 'production'
  mode: 'development',

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
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

  // Development server configuration
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true, // Automatically open the browser
    hot: true, // Enable hot module replacement
  },

  // Resolve extensions for imports
  resolve: {
    extensions: ['.js', '.json'],
  },
};