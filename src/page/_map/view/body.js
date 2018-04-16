/**
 * Created by saturn on 2018/4/8.
 */
var opt = require('../../echarts/opt');
var opt2 = require('../../echarts/opt2');
var html = require('../html/body');

var BoxView = Backbone.View.extend({
  el: '#mapBody',
  initialize: function () {
    this.template = _.template(html);
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = BoxView;