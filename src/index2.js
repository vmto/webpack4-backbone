/**
 * Created by saturn on 2018/4/8.
 */

require('./static/scss/app.scss');
var $ = require('jquery');
var easing = require('jquery-easing');
var Backbone = require('backbone');
var Notes = require('./page/note/model/note');
var NoteCollection = require('./page/note/model/notes');
var NoteCollectionView = require('./page/note/view/notes');
var SendView = require('./page/note/view/send');
var BoxView = require('./page/home/view/box');

var Router = Backbone.Router.extend({
  routes: {
    "home": "pageHome",
    "note": "pageNote",
    "note/:id": "pageNote"
  },
  initialize: function () {
    console.log('Backbone initialize');
  },
  pageHome: function () {
    $('.app').stop().animate({left: 0}, 600, 'easeOutQuart');
  },
  pageNote: function (id) {
    $('.app').stop().animate({left: '-100%'}, 600, 'easeOutQuart');

    if (typeof id === "string" && id.length === 6) {
      console.log('id:', id);
    }
  }
});

$(function () {
  new Router;                // 初始化路由
  Backbone.history.start();  // 开启历史记录

  new BoxView();  // home网格

  var note1 = new Notes({msg: '111111'});
  var note2 = new Notes({msg: '222222'});

  var noteCollection = new NoteCollection([note1, note2]);  // 实例化集合
  new NoteCollectionView({collection: noteCollection});     // 实例化集合视图

  new SendView(); // 点击事件
});