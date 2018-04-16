/**
 * Created by saturn on 2018/4/8.
 */
var Note = Backbone.Model.extend({
  defaults: {
    msg: 'hello world'
  },
  initialize: function (defaults) {
    // this -> 初始化的对象
    //console.log(defaults);
    //console.log(this.get('msg'));
    //console.log('\n');

    this.on('change', function (model, options) {
      //console.log(model);
      //console.log(options);
      //console.log('\n');
    });

    this.on('change:msg', function (model, options) {
      //console.log(model);
      //console.log(options);
      //console.log('\n');
    });
  },
  validate: function (attributes, options) {
    if (attributes.msg == '') {
      return '不能为空'
    }
  }
});

module.exports = Note;