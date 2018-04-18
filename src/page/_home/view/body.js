/**
 * Created by saturn on 2018/4/8.
 */

var opt = require('../../echarts/opt');
var opt2 = require('../../echarts/opt2');
var html = require('../html/body');

var BoxView = Backbone.View.extend({
  el: '.home-bd',
  initialize: function () {
    this.template = _.template(html);
    this.render();

    var width = 600;    //画布的宽度
    var height = 400;   //画布的高度

    var svg = d3.select("#svg")        // 选择文档中的body元素
      .append("svg")                   // 添加一个svg元素
      .attr("width", width)            // 设定宽度
      .attr("height", height);         // 设定高度

    var dataset = [250, 210, 170, 130, 90];
    var rectHeight = 50;              // 每个矩形所占的像素高度(包括空白)
    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", 50)                 // 每个矩形的起始x坐标
      .attr("y", function (d, i) {   // 每个矩形的起始y坐标
        return i * rectHeight;
      })
      .attr("width", function (d) {  // 每个矩形的宽度
        return d;
      })
      .attr("height", rectHeight - 2)// 每个矩形的高度
      .attr("fill", "steelblue");    // 填充颜色
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = BoxView;