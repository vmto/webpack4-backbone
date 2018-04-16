/**
 * Created by saturn on 2018/4/8.
 */

require('./static/scss/index.scss');
require('jquery-easing');

var HeaderView = require('./page/app/view/header');
var HomeView = require('./page/_home/view/body');
var MapView = require('./page/_map/view/body');

var Notes = require('./page/_note/model/note');
var NoteCollection = require('./page/_note/model/notes');
var NoteCollectionView = require('./page/_note/view/notes');
var NoteSendView = require('./page/_note/view/send');

var PublicView = require('./page/_public/view/body');
var TenantView = require('./page/_tenant/view/body');
var VideoView = require('./page/_video/view/body');

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
  new MapView();     // Map

  var note1 = new Notes({msg: '111111'});
  var note2 = new Notes({msg: '222222'});
  var noteCollection = new NoteCollection([note1, note2]);  // 实例化集合
  new NoteCollectionView({collection: noteCollection});     // 实例化集合视图
  new NoteSendView(); // 点击事件

  new PublicView();  // Public
  new TenantView();  // Tenant
  new VideoView();   // Video
});