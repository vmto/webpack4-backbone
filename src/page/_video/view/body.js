/**
 * Created by saturn on 2018/4/8.
 */
require('echarts/lib/component/title');       // 标题
require('echarts/lib/component/tooltip');     // 提示框
require('echarts/lib/component/legend');      // 标签
require('echarts/lib/component/dataZoom');    // 比例条
require('echarts/lib/chart/bar');             // 柱状图
require('echarts/lib/chart/line');            // 折线图
require('echarts/lib/chart/pie');             // 饼图
require('echarts/lib/chart/pictorialBar');
require('echarts/lib/component/timeline');
require('echarts/lib/chart/graph');
require('echarts/lib/chart/scatter');

require('echarts/lib/component/geo');
require('echarts/lib/chart/map');
require('echarts/lib/chart/effectScatter');

var opt5 = require('../../echarts/opt5');
var opt6 = require('../../echarts/opt6');
var opt7 = require('../../echarts/opt7');
var opt8 = require('../../echarts/opt8');
var opt09 = require('../../echarts/opt09');

var data = require('../../echarts/data');
var data2 = require('../../echarts/data2');
var html = require('../html/body');

var BoxView = Backbone.View.extend({
  el: '.video-bd',
  initialize: function () {
    this.template = _.template(html);
    this.render();

    var v1 = echarts.init(this.$el.find('.v1-bd')[0]);
    var v2 = echarts.init(this.$el.find('.v2-bd')[0]);
    var v3 = echarts.init(this.$el.find('.v3-bd')[0]);
    var v4 = echarts.init(this.$el.find('.v4-bd')[0]);

    var arrEl = [];
    arrEl.push(v1);
    arrEl.push(v2);
    arrEl.push(v3);
    arrEl.push(v4);

    _.each(arrEl, function (item) {
      item.showLoading({
        text: '加载中...',
        color: '#00c4ff',
        textColor: '#fff',
        maskColor: 'rgba(255,255,255,.1)'
      });
    });

    echarts.registerMap('shandong', JSON.stringify(data));
    v1.setOption(opt8);

    echarts.registerMap('jiangxi', JSON.stringify(data2));
    v2.setOption(opt6);

    v3.setOption(opt5);
    v4.setOption(opt09);

    _.each(arrEl, function (item) {
      item.hideLoading();
    });

  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = BoxView;