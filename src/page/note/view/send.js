/**
 * Created by saturn on 2018/4/8.
 */
var Notes = require('../model/note');
var NoteCollection = require('../model/notes');
var NoteCollectionView = require('../view/notes');
var html = require('../html/note.htm');

var SendView = Backbone.View.extend({
  el: '#noteText',
  events: {
    'click #send': 'send'
  },
  send: function () {
    var msg = this.$el.find('#msg').val();
    var note = new Notes({msg: msg});

    this.noteCollection.add(note);
    console.log('send', this.noteCollection.toJSON());
  },
  initialize: function () {
    this.noteCollection = new NoteCollection();
    new NoteCollectionView({collection: this.noteCollection});

    this.template = _.template(html);
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = SendView;