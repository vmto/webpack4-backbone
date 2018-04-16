#### webpack 4.5浅析 - 模块化篇
> webpack实现模块化、打包压缩

#### 一个最low场景：留言板
> 1、默认把留言数组渲染成一个列表；<br>
> 2、输入留言，点击按钮提交留言内容；<br>
> 3、也可以增加一个删除留言的功能；<br>

#### webpack基础配置
````javascript
var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.htm$/,
        loader: "html-loader"
      }
    ]
  }
};
````

#### module
````bash
npm i -D html-loader
npm i -D style-loader
npm i -D css-loader
npm i -D file-loader

module: {
    rules: [
      {
        test: /\.html/,
        loader: "html-loader"
      }
    ]
  }
````

#### plugin
````bash
npm i -D html-webpack-plugin
npm i -D clean-webpack-plugin

plugins:[
    // new cleanWebpackPlugin(['dist']),
    new htmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      chunks:['index'],
      hash:true,
      minify:{
        collapseWhitespace:true
      }
    })
  ]
````

#### server
````bash
npm i -D webpack-dev-server

devServer:{
    contentBase: path.resolve(__dirname, 'dist'),
    host:'localhost',
    port:8088,
    open:true
  }
````

#### css\sass\scss
````bash
npm i -D extract-text-webpack-plugin
npm i -D sass-loader
npm i -D sass-loader

module: {
  rules: [
    {
      test: /\.(css|scss|sass)$/,
      use:ExtractTextPlugin.extract({
        fallback:'style-loader',
        use: ['css-loader','sass-loader'],
        publicPath:'../'
      })
    }
  ]
}
````

#### postcss/autoprefixer
````bash
npm i -D postcss-loader 
npm i -D autoprefixer

# postcss.config.js
var autoprefixer = require('autoprefixer');
module.exports = {
  plugins: [autoprefixer]
};

#webpack.config.js
module: {
  rules: [
    {
      test: /\.(css|scss|sass)$/,
      use:ExtractTextPlugin.extract({
        fallback:'style-loader',
        use: ['css-loader','sass-loader','postcss-loader'],
        publicPath:'../'
      })
    }
  ]
}
````

#### echarts模块化，告别700kb+
> before：700k VS after:250k+90k
````bash
// webpack.config.js
entry: {
  echarts: 'echarts/lib/echarts',
}

plugins: [
  new webpack.ProvidePlugin({
    echarts: 'echarts/lib/echarts'
  })
]

optimization: {
  //拆分公共包
  splitChunks: {
    cacheGroups: {
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
}

// index.js
require('echarts/lib/component/title');       // 标题
require('echarts/lib/component/tooltip');     // 提示框
require('echarts/lib/component/legend');      // 标签
require('echarts/lib/chart/bar');             // 柱状图
require('echarts/lib/chart/line');            // 折线图
require('echarts/lib/chart/pie');             // 折线图

var v1 = echarts.init(this.$el.find('.v1-bd')[0]);
var v2 = echarts.init(this.$el.find('.v2-bd')[0]);
var arrEl = [];
arrEl.push(v1);
arrEl.push(v2);

_.each(arrEl,function (item) {
  item.showLoading({
    text: '加载中...',
    color: '#00c4ff',
    textColor: '#fff',
    maskColor: 'rgba(255,255,255,.1)'
  });
});

v1.setOption(opt);
v2.setOption(opt2);

v1.hideLoading();
v2.hideLoading();
````









