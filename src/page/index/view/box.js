/**
 * Created by saturn on 2018/4/8.
 */
var opt = require('./opt');
var html = require('../html/box');

var BoxView = Backbone.View.extend({
  el: '#homeBody',
  initialize: function () {
    this.template = _.template(html);
    this.render();
    var v1 = echarts.init(this.$el.find('.v0')[0]);
    var arrEl = [];
    arrEl.push(v1);
    _.each(arrEl,function (item) {
      item.showLoading({
        text: '加载中...',
        color: '#00c4ff',
        textColor: '#fff',
        maskColor: 'rgba(255,255,255,.1)'
      });
    });
    v1.setOption(opt);
    v1.hideLoading();
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = BoxView;