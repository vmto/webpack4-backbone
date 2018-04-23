/**
 * Created by saturn on 2018/4/8.
 */
require('jquery-slimscroll');
var pie = require('../../echarts/pie');
var pie2 = require('../../echarts/pie2');
var line = require('../../echarts/line');
var pie4 = require('../../echarts/pie4');
var pie5 = require('../../echarts/pie5');
var HeaderView = require('../view/header');
var html = require('../html/body');

var BoxView = Backbone.View.extend({
  el: '.home-bd',
  initialize: function () {
    new HeaderView();

    this.template = _.template(html);
    this.render();

    var v1 = echarts.init(this.$el.find('.v1-bd')[0]);
    var v2 = echarts.init(this.$el.find('.v2-bd')[0]);
    var v3 = echarts.init(this.$el.find('.v3-bd')[0]);
    var v4 = echarts.init(this.$el.find('.v4-bd')[0]);

    var v5 = echarts.init(this.$el.find('.v5-bd')[0]);
    var v6 = echarts.init(this.$el.find('.v6-bd')[0]);
    var v7 = echarts.init(this.$el.find('.v7-bd')[0]);
    var v8 = echarts.init(this.$el.find('.v8-bd')[0]);
    var v9 = this.$el.find('.v9-scroll');

    var arrEl = [];
    arrEl.push(v1);
    arrEl.push(v2);
    arrEl.push(v3);
    arrEl.push(v4);
    arrEl.push(v5);
    arrEl.push(v6);
    arrEl.push(v7);
    arrEl.push(v8);

    _.each(arrEl, function (item) {
      item.showLoading({
        text: '加载中...',
        color: '#00c4ff',
        textColor: '#fff',
        maskColor: 'rgba(255,255,255,.1)'
      });
    });

    v1.setOption(pie);
    v2.setOption(pie);
    v3.setOption(pie2);

    pie2.title.text = '客户总数：2000';
    v4.setOption(pie2);

    v5.setOption(pie4);

    v6.setOption(line);
    v7.setOption(line);
    v8.setOption(pie5);

    _.each(arrEl, function (item) {
      item.hideLoading();
    });

    v9.slimScroll({
      width: '100%',
      height: 'auto',
      railVisible: true,
      alwaysVisible: true
    });

    var bgData = [
      {id: 'fac926b4f24e46b5888ac9b14e3ebc4a', color: '#b28850', node: '#SVGID_bg01', name: '蒋村街道'},
      {id: '9be8d1f66acf42afb31a30ea0e52a5d7', color: '#f19ec2', node: '#SVGID_bg02', name: '文新街道'},
      {id: '3e13d4d421e84836a7079908398a5c0e', color: '#d6bb6b', node: '#SVGID_bg03', name: '古荡街道'},
      {id: '0fb4d17b2109448bacc65a114637b658', color: '#94ccc9', node: '#SVGID_bg04', name: '翠苑街道'},
      {id: '2fcabf3e9a1c4b3d9ebae90c1f849770', color: '#30c269', node: '#SVGID_bg05', name: '西溪街道'},
      {id: '35871a031e8a48ca9a49f3a476ca4414', color: '#84ccc9', node: '#SVGID_bg06', name: '留下街道'},
      {id: '9968083770824bb4a5612c371045635b', color: '#f19ec2', node: '#SVGID_bg07', name: '灵隐街道'},
      {id: '7e680fe93c464c8b8aca3323db7c82aa', color: '#b28850', node: '#SVGID_bg08', name: '北山街道'},
      {id: '2fffecb777a64d01b432bed19570b453', color: '#E89ABB', node: '#SVGID_bg09', name: '转塘街道'},
      {id: '0ff850a1aa694a86804aeaa0ca8e618c', color: '#80c269', node: '#SVGID_bg10', name: '三墩镇'},
      {id: '7e2175f854e14041b3843adc254b5336', color: '#d6bb6b', node: '#SVGID_bg11', name: '双浦镇'}
    ];
    var cData = [
      {id: 'fac926b4f24e46b5888ac9b14e3ebc4a', color: '#fff', node: '#SVGID_txt01', name: '蒋村街道'},
      {id: '9be8d1f66acf42afb31a30ea0e52a5d7', color: '#fff', node: '#SVGID_txt02', name: '文新街道'},
      {id: '3e13d4d421e84836a7079908398a5c0e', color: '#fff', node: '#SVGID_txt03', name: '古荡街道'},
      {id: '0fb4d17b2109448bacc65a114637b658', color: '#fff', node: '#SVGID_txt04', name: '翠苑街道'},
      {id: '2fcabf3e9a1c4b3d9ebae90c1f849770', color: '#fff', node: '#SVGID_txt05', name: '西溪街道'},
      {id: '35871a031e8a48ca9a49f3a476ca4414', color: '#fff', node: '#SVGID_txt06', name: '留下街道'},
      {id: '9968083770824bb4a5612c371045635b', color: '#fff', node: '#SVGID_txt07', name: '灵隐街道'},
      {id: '7e680fe93c464c8b8aca3323db7c82aa', color: '#fff', node: '#SVGID_txt08', name: '北山街道'},
      {id: '2fffecb777a64d01b432bed19570b453', color: '#fff', node: '#SVGID_txt09', name: '转塘街道'},
      {id: '0ff850a1aa694a86804aeaa0ca8e618c', color: '#fff', node: '#SVGID_txt10', name: '三墩镇'},
      {id: '7e2175f854e14041b3843adc254b5336', color: '#fff', node: '#SVGID_txt11', name: '双浦镇'}
    ];
    var mergeData = _.union(bgData, cData);

    var _this = this;
    _.map(bgData, function (v) {
      _this.fnHover(v.node, v.color);
    });

    _.map(cData, function (v) {
      _this.fnHover(v.node, v.color);
    });

    _.map(mergeData, function (v) {
      _this.fnClick(v.node, v);
    });
  },
  setFill: function (obj, color) {
    $(obj).css('fill', color);
  },
  fnHover: function (el, color) {
    this.setFill(el, color);
    var _this = this;
    $(el).hover(function () {
      _this.setFill(el, '#0093ff');
    }, function () {
      _this.setFill(el, color);
    });
  },
  fnClick: function (el, item) {
    var wsData = {
      type: '2',
      reqType: '2',
      payload: '{"isSend": "1"}',
      // userId: APP.wsData.userId,
      screenType: '1',
      screenId: item.id
    };
    $(el).on('click', function () {
      if (item.id) {
        router.navigate('map/' + item.id, {
          trigger: true
        });
      } else {
        router.navigate('map', {
          trigger: true
        });
      }
      // WS.send(JSON.stringify(wsData));
    });
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = BoxView;