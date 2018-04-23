var option = {
  color: ['#219dd0','#a0b751'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {          // 坐标轴指示器
      type: 'line'          // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    orient: 'horizontal',
    right:40,
    top: 10,
    icon: 'roundRect',  // bar rect roundRect
    itemWidth:20,
    itemHeight:10,
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    data: ['报警户数', '报警次数'] // 需要数据
  },
  grid: {
    left: 20,
    top: 50,
    right: 20,
    bottom: 20,
    containLabel: true,
    z: 22
  },
  xAxis: {
    data: ['4-16', '4-17', '4-18', '4-19', '4-20', '4-21', '4-22'],
    boundaryGap: true, // 坐标轴两边不留空白
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      color: '#fff',
      interval: 0, // 强制显示
      textStyle: {
        color: '#fff',
        fontSize: 12
      }
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: true, // y网格线,
      lineStyle: {
        color: '#1b3d64',
        type: 'solide',  // dashed solide
        width: 1
      }
    },
    min: 0,
    max: 400,
    // interval:10,// 行高
    boundaryGap: true,
    axisLabel: {
      formatter: '{value}',
      textStyle: {
        color: '#fff',
        fontSize: 12
      }
    },
    axisLine: {
      lineStyle: {
        onZero: false,
        width: 0 // y细线
      }
    }
  },
  series: [
    {
      name: '报警户数',
      type: 'line',
      symbolSize: 12,
      smooth: true,
      itemStyle: {
        normal: {
          lineStyle: {
            width: 2,          //折线宽度
            color: '#FF9933'   //折线颜色
          },
          label: {
            show: false,
            formatter: '{c}',
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          }
        }
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '报警次数',
      type: 'line',
      symbolSize: 12,
      smooth: true,
      itemStyle: {
        normal: {
          lineStyle: {
            width: 2,          //折线宽度
            color: '#3399FF'   //折线颜色
          },
          label: {
            show: false,
            formatter: '{c}',
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
          }
        }
      },
      data: [120, 182, 191, 234, 290, 330, 310]
    }
  ]
};

module.exports = option;