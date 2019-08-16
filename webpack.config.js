const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'index': path.join(__dirname, '/app/app.module.js')
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.join(__dirname, '/public/'),
    devtoolLineToLine: true,
    pathinfo: true,
    sourceMapFilename: '[name].js.map',
  },
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: 'body',
      minify: false
    }),
    new CopyWebpackPlugin([
      {from: 'app/img', to: 'img'},
      {from: 'app/phones', to: 'phones'},
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  }
};