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
var HomeView = require('./page/home/view/box');
var HeaderView = require('./page/layout/view/header');

var Router = Backbone.Router.extend({
  routes: {
    "home": "pageHome",
    "map": "pageMap",
    "map/:id": "pageMap",
    "note": "pageNote",
    "video": "pageVideo",
    "tenant": "pageTenant",
    "public": "pagePublic"
  },
  initialize: function () {
    console.log('Backbone initialize');
  },
  pageHome: function () {
    $('.app').stop().animate({left: 0}, 600, 'easeOutQuart');
  },
  pageMap: function (id) {
    $('.app').stop().animate({left: '-100%'}, 600, 'easeOutQuart');
    if (typeof id === "string" && id.length === 6) {}
  },
  pageNote: function (id) {
    $('.app').stop().animate({left: '-200%'}, 600, 'easeOutQuart');
    if (typeof id === "string" && id.length === 6) {}
  },
  pageVideo:function () {
    $('.app').stop().animate({left: '-300%'}, 600, 'easeOutQuart');
  },
  pageTenant:function () {
    $('.app').stop().animate({left: '-400%'}, 600, 'easeOutQuart');
  },
  pagePublic:function () {
    $('.app').stop().animate({left: '-500%'}, 600, 'easeOutQuart');
  }
});

$(function () {
  new Router;                // 初始化路由
  Backbone.history.start();  // 开启历史记录

  new HeaderView();  // header
  new HomeView();    // home

  var note1 = new Notes({msg: '111111'});
  var note2 = new Notes({msg: '222222'});

  var noteCollection = new NoteCollection([note1, note2]);  // 实例化集合
  new NoteCollectionView({collection: noteCollection});     // 实例化集合视图

  new SendView(); // 点击事件
});