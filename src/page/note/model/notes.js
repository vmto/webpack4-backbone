/**
 * Created by saturn on 2018/4/9.
 */
var Note = require('./note');

var NoteCollection = Backbone.Collection.extend({
  model: Note
});

module.exports = NoteCollection;