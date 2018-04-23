option = {
  color:['#2dbcff',
    '#994ae4',
    '#00cd97'],
  legend: {
    orient: 'vertical',
    align: 'left',
    right:40,
    top: 'center',
    itemWidth:10,
    itemHeight:10,
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    data:['APP使用率   40%','设备在线率   40%','网格员   500人']
  },
  series: [
    {
      type:'pie',
      selectedMode: 'single',
      radius: [0, '30%'],
      center:['35%','50%'],
      label: {
        normal: {
          show: false,
          position: 'inner'
        },
        emphasis: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data:[
        {value:500, name:'网格员   500人'}
      ]
    },
    {
      type:'pie',
      radius: ['50%', '70%'],
      center:['35%','50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: false
        }
      },

      data:[
        {value:310, name:'APP使用率   40%'},
        {value:234, name:'设备在线率   40%'}
      ]
    }
  ]
};

module.exports = option;