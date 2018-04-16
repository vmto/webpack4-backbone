/**
 * Created by saturn on 2018/4/8.
 */
var html = require('../html/box.htm');

var BoxView = Backbone.View.extend({
  el: '#homeBody',
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