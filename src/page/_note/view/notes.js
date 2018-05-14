/**
 * Created by saturn on 2018/4/8.
 */
var NoteView = require('./note');

var NoteCollectionView = Backbone.View.extend({
  el: '#noteList',
  initialize: function () {
    this.collection.on('add', this.addOne, this);  // ?
    this.render();
  },
  render: function () {
    this.collection.each(this.addOne, this);       // ?
    return this;
  },
  addOne: function (note) {
    var noteView = new NoteView({model: note});   // ?
    this.$el.append(noteView.render().$el);
  }
});

module.exports = NoteCollectionView;