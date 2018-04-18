/**
 * Created by saturn on 2018/4/8.
 */
var html = require('../html/header');

var HeaderView = Backbone.View.extend({
  el: '.page-hd',
  initialize: function () {
    this.template = _.template(html);
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = HeaderView;