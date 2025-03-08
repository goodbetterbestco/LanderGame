const path = require('path');

module.exports = {
  entry: './src/core/game.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname), // Serve files from the project root
    },
    port: 8080,
  },
};
