const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'client'),
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      publicPath: '/build/',
    },
    historyApiFallback: true,
    port: 8080,
    proxy: {
      '/**': { target: 'http://localhost:3000' },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: 'styles.css',
    }),
  ],
};
