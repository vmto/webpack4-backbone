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
// require('echarts/lib/component/timeline');

var opt = require('../../echarts/opt');
var opt2 = require('../../echarts/opt2');
var opt3 = require('../../echarts/opt3');
var opt4 = require('../../echarts/opt4');
var html = require('../html/body');

var BoxView = Backbone.View.extend({
  el: '.tenant-bd',
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

    v1.setOption(opt);
    v2.setOption(opt2);
    v3.setOption(opt3);
    v4.setOption(opt4);

    v1.hideLoading();
    v2.hideLoading();
    v3.hideLoading();
    v4.hideLoading();
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = BoxView;