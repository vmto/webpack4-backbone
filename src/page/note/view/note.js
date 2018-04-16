/**
 * Created by saturn on 2018/4/8.
 */
var html = require('../html/note-ul-li');

var NoteView = Backbone.View.extend({
  tagName: 'li',
  initialize: function () {
    // var html = $('#demo').html();
    this.template = _.template(html);
  },
  render: function (vm) {
    // var data = vm.attributes;
    var data = this.model.toJSON();
    this.$el.html(this.template(data));

    return this;
  }
});

module.exports = NoteView;