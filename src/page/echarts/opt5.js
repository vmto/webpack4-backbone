option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['最高气温', '最低气温'],
    textStyle: {
      color: '#ccc'
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    splitLine: {
      show: false
    },
    "axisLine": {
      lineStyle: {
        color: '#5c5d89'
      }
    },
    "axisTick": {
      "show": false
    },
    axisLabel: {
      textStyle: {
        color: '#5c5d89'
      }
    },
    data: ['6/1', '6/4', '6/7', '6/10', '6/13', '6/16', '6/19', '6/21', '6/24', '6/27', '6/30', '7/2', '7/5', '7/8', '7/11']
  },
  yAxis:
    [
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#5c5d89'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#5c5d89'
          }
        },
        name: '销售量：张',
        position: 'left',
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#5c5d89'
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: '#5c5d89'
          }
        },
        name: '销售额：万元',
        min: 0,
        max: 500,
        position: 'right',
        axisLabel: {
          formatter: '{value}'
        }
      },
    ],

  series: [
    {
      name: '月度解决率',
      type: 'line',
      itemStyle: {
        normal: {
          color: '#a173ed',
        },
      },
      data: [92, 96, 99, 91, 96, 103, 100, 92, 96, 99, 91, 96, 103, 100, 115],
      markPoint: {
        data: [
          {
            type: 'max', name: '最大值',
            itemStyle: {
              normal: {
                color: '#d90051',
              },
            },
          },
          {
            type: 'min', name: '最小值',
            itemStyle: {
              normal: {
                color: '#01bc8f',
              },
            },
          }
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    },
    {
      name: '累计解决率',
      type: 'line',
      itemStyle: {
        normal: {
          color: '#02b5d5',
        },
      },
      data: [31, 40, 96, 51, 86, 93, 40, 81, 90, 96, 81, 86, 93, 90, 100],
      markPoint: {
        data: [
          {
            type: 'max', name: '最大值',
            itemStyle: {
              normal: {
                color: '#d90051',
              },
            },
          },
          {
            type: 'min', name: '最小值',
            itemStyle: {
              normal: {
                color: '#01bc8f',
              },
            },
          }
        ]
      },
      markLine: {
        data: [
          {type: 'average', name: '平均值'}
        ]
      }
    }
  ]
};

module.exports = option;