option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    data: [
      {
        name: "已处理",
        textStyle: {
          color: "#95acbc"
        }
      },
      {
        name: "待处理",
        textStyle: {
          color: "#95acbc"
        }
      },
      {
        name: "完成率",
        textStyle: {
          color: "#95acbc"
        }
      }
    ],
    top: 10,
    right: 10,
    bottom: 10,
    icon: 'roundRect',  // bar rect roundRect circle
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: "#fff"
    }
  },
  grid: {
    left: 20,
    top: 60,
    right: 20,
    bottom: 20,
    containLabel: true,
    z: 22
  },
  xAxis: [
    {
      type: "category",
      data: ["4-16", "4-17", "4-18", "4-19", "4-20", "4-21", "4-22"],
      axisPointer: {
        type: "shadow"
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#fff"
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "rgba(255,255,255,.1)", // 底线
          type: 'dashed',                // dashed solide
          width: 1
        }
      }
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "",
      nameTextStyle: {
        color: "#7d838b"
      },
      min: 0,
      max: 20,
      interval: 10,
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ccc"
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "rgba(255,255,255,.1)",// 左侧线
          type: 'dashed',               // dashed solide
          width: 1
        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          type: 'dashed',  // dashed solide
          width: 1
        }
      }
    },
    {
      type: "value",
      name: "",
      nameTextStyle: {
        color: "#7d838b"
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#ccc"
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "rgba(255,255,255,.1)", // 右侧线
          type: 'dashed',                // dashed solide
          width: 1
        }
      },
      splitLine: {
        show: true,        // y网格线,
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
          type: 'dashed',  // dashed solide
          width: 1
        }
      }
    }
  ],
  series: [
    {
      name: "已处理",
      type: "bar",
      data: [15, 10, 7, 20, 8, 8, 6],
      barWidth: 10,
      itemStyle: {
        normal: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#28d9ff"
              },
              {
                offset: 0.5,
                color: "#28acff"
              }
            ],
            globalCoord: false
          }
        }
      },
      barGap: "0"
    },
    {
      name: "待处理",
      type: "bar",
      data: [0, 2, 0, 0, 0, 0, 0],
      barWidth: 10,
      itemStyle: {
        normal: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#fa6774"
              },
              {
                offset: 0.5,
                color: "#fa4959"
              }
            ],
            globalCoord: false
          }
        }
      }
    },
    {
      name: "完成率",
      type: "line",
      yAxisIndex: 1,
      data: [100, 80, 100, 100, 100, 100, 100],
      itemStyle: {
        normal: {
          color: "#ffaa00"
        }
      },
      smooth: true
    }
  ]
};

module.exports = option;