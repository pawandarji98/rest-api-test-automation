const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './server.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
    filename: 'bundle.js', // Output filename
  },
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
      "stream": require.resolve("stream-browserify"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "url": require.resolve("url/"),
      "util": require.resolve("util/"),
      "assert": require.resolve("assert/"),
      "http": require.resolve("stream-http"),
      "zlib": require.resolve("browserify-zlib"),
      "fs": false, // Set to false for fs polyfill, if required,
      "net": false, // Add the 'net' module to the fallback
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
