const path = require('path');

module.exports = {
  entry: './src/core/game.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/' // Serve bundled files from /dist/
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname) // Serve static files from project root
    },
    port: 8080,
    open: true // Automatically open the browser
  }
};
