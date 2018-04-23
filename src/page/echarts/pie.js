option = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  color: ['#994ae4', '#2dbcff', '#00cd97', '#e38980', '#f7db88'],
  legend: {
    orient: 'vertical',
    align: 'left',
    right:40,
    top:'center',
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    data: [{
      name: '小小黑   20%'
    },
    {
      name: '小小黑   35%'
    },
    {
      name: '小小黑   45%'
    }]
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: ['38%', '60%'],
      center: ['35%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: false,
          textStyle: {
            fontSize: '20',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        {value: 640, name: '小小黑   20%'},
        {value: 3100, name: '小小黑   35%'},
        {value: 3200, name: '小小黑   45%'}
      ]
    }
  ]
};

module.exports = option;