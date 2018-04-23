option = {
  title: [{
    text: '已处理   150',
    left: '30%',
    top: '80%',
    textAlign: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 14
    }
  }, {
    text: '未处理 5',
    left: '70%',
    top: '80%',
    textAlign: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 14
    }
  }],
  series: [{
    name: '已处理',
    type: 'pie',
    center: ['30%', '50%'],
    radius: ['40%', '50%'],
    labelLine: {
      normal: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        color: '#00cd97'
      }
    },
    data: [{
      value: 20,
      label: {
        normal: {
          formatter: '{d} %',
          position: 'center',
          show: true,
          textStyle: {
            fontSize: '20',
            // fontWeight: 'bold',
            color: '#fff'
          }
        }
      }
    }, {
      value: 80,
      hoverAnimation: false,
      tooltip: {
        show: false
      },
      itemStyle: {
        normal: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    }]
  }, {
    name: '未处理',
    type: 'pie',
    center: ['70%', '50%'],
    radius: ['40%', '50%'],
    labelLine: {
      normal: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        color: '#994ae4'
      }
    },
    data: [{
      value: 20,
      label: {
        normal: {
          formatter: '{d} %',
          position: 'center',
          show: true,
          textStyle: {
            fontSize: '20',
            // fontWeight: 'bold',
            color: '#fff'
          }
        }
      }
    }, {
      value: 80,
      hoverAnimation: false,
      tooltip: {
        show: false
      },
      itemStyle: {
        normal: {
          color: 'rgba(255,255,255,.1)'
        }
      }
    }]
  }]
};


module.exports = option;