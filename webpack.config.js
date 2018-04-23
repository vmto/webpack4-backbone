/**
 * Created by saturn on 2018/4/8.
 */
var path = require('path');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
var cleanPlugin = require('clean-webpack-plugin');
var SpritesmithPlugin = require('webpack-spritesmith');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractCss = new ExtractTextPlugin('css/[name].css');
var ExtractScss = new ExtractTextPlugin('css/scss.css');

module.exports = {
  entry: {
    echarts: 'echarts/lib/echarts',
    d3: 'd3',
    app: './src/index.js'
  },
  output: {
    filename: './js/[name].main.js',
    chunkFilename: './js/[name].main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: '127.0.0.1',
    port: 8088,
    open: true
  },
  plugins: [
    ExtractCss,
    ExtractScss,
    new cleanPlugin(['dist']),
    new htmlPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['vendors', 'echarts', 'd3', 'app'],
      hash: true,
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'underscore',
      Backbone: 'backbone',
      d3: 'd3',
      echarts: 'echarts/lib/echarts'
    }),
    new SpritesmithPlugin({
      src: {       // 目标小图标
        cwd: path.resolve(__dirname, './src/static/icon'),
        glob: '*.png'
      },
      target: {    // 输出文件及样式文件
        image: path.resolve(__dirname, './dist/img/sprite.png'),
        css: path.resolve(__dirname, './dist/css/sprite.css')
      },
      apiOptions: {// 样式图地址
        cssImageRef: '../img/sprite.png'
      },
      spritesmithOptions: {
        algorithm: 'top-down',
        type: 'retina', // 'retina' and 'normal'
        normalName: 'normalName',
        retinaName: 'retinaName'
      }
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
        },
        d3: {
          test: "d3",
          priority: 1,
          chunks: "initial",
          name: "d3",
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
        test: /\.css$/,
        use: ExtractCss.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractScss.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: ['css-loader', 'sass-loader', 'postcss-loader']
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
    alias: {}
  }
};