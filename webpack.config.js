/**
 * Created by saturn on 2018/4/8.
 */
var path = require('path');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
var cleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    echarts: 'echarts/lib/echarts',
    app: './src/index.js'
  },
  output: {
    filename: './js/[name].main.js',
    chunkFilename: './js/[name].main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 8088,
    open: true
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new cleanPlugin(['dist']),
    new htmlPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['vendors', 'echarts', 'app'],
      hash: true,
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore',
      Backbone: 'backbone',
      echarts: 'echarts/lib/echarts'
    })
  ],
  optimization: {
    //拆分公共包
    splitChunks: {
      cacheGroups: {
        // 第三方组件
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,

          chunks: "initial",
          name: "vendors",
          enforce: true
        },

        // 指定组件
        echarts: {
          test: "echarts",
          priority: 1,
          chunks: "initial",
          name: "echarts",
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.htm$/,
        loader: "html-loader"
      },
      {
        test: /\.(css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
          publicPath: '../'
        })
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath: '../'
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash:6]',
              outputPath: './img'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    // 免后缀
    extensions: ['.js', '.htm', '.json'],
    // 别名
    alias: {

    }
  }
};