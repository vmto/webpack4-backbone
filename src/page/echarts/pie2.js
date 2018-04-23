var placeHolderStyle = {
  normal: {
    label: {
      show: false,
      position: "center"
    },
    labelLine: {
      show: false
    },
    color: "rgba(255,255,255,.1)"
  }
};

var piePostion=["35%","50%"];

var option = {
  title : {
    textStyle:{
      color:'#fff',
      fontSize:14
    },
    bottom:20,
    right:40
  },
  color: ['#994ae4','#2dbcff','#00cd97'],
  legend: {
    orient: 'vertical',
    right:40,
    top: 'center',
    itemWidth:10,
    itemHeight:10,
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    data: ['男   70%', '女   40%', '未知   40%'] // 需要数据
  },
  series: [{
    name: '男',
    type: 'pie',
    clockWise: true, //顺时加载
    hoverAnimation: false, //鼠标移入变大
    radius: [10,20],
    center:piePostion,
    labelLine:{
      normal: {
        show: false
      }
    },
    data: [
      {
        value: 7,
        itemStyle:{
          normal: {
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            color: "#00cd97"
          }
        }
      },
      {
        value: 3,
        itemStyle: placeHolderStyle
      }]
  },
    {
      name: '女',
      type: 'pie',
      clockWise: true, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [30, 40],
      center:piePostion,
      labelLine:{
        normal: {
          show: false
        }
      },
      data: [
        {
          value: 4,
          itemStyle:{
            normal: {
              label: {
                show: false,
                position: "center"
              },
              labelLine: {
                show: false
              },
              color: "#2dbcff"
            }
          }
        },
        {
          value: 6,
          itemStyle: placeHolderStyle
        }]
    },
    {
      name: '未知',
      type: 'pie',
      clockWise: true, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      radius: [50, 60],
      center:piePostion,
      labelLine:{
        normal: {
          show: false
        }
      },
      data: [
        {
          value: 4,
          itemStyle:{
            normal: {
              label: {
                show: false,
                position: "center"
              },
              labelLine: {
                show: false
              },
              color: "#994ae4"
            }
          }
        },
        {
          value: 6,
          itemStyle: placeHolderStyle
        }]
    },
    {
      type: 'pie',
      data: [{
        value: '',
        name: '男   70%'
      }, {
        value: '',
        name: '女   40%'
      }, {
        value: '',
        name: '未知   40%'
      }]
    }
  ]
};

module.exports = option;