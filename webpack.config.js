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
    echarts: 'echarts',
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
    // hot:true,
    open: true
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/[name].css'),
    new cleanPlugin(['dist']),
    new htmlPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['vendors', 'echarts', 'app'],
      hash: true,
      minify: {
        collapseWhitespace: false
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      _: 'underscore',
      Backbone: 'backbone',
      echarts: 'echarts'
    })
  ],
  optimization: {
    //拆分公共包
    splitChunks: {
      cacheGroups: {
        // 打包被引入2次以上的自定义组件
        // default:{
        //   minChunks: 2,
        //   priority: -20,
        //   reuseExistingChunk: true,
        //
        //   chunks: "initial",
        //   name: "common",
        //   enforce: true
        // },

        // 打包第三方组件：node_modules
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,

          chunks: "initial",
          name: "vendors",
          enforce: true
        },

        // 打包指定组件
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
  }
};