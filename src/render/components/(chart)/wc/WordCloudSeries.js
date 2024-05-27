import * as echarts from 'echarts'

echarts.extendSeriesModel({
  type: 'series.wordCloud',
  visualStyleAccessPath: 'textStyle',
  visualStyleMapper: function (model) {
    return {
      fill: model.get('color'),
    }
  },
  visualDrawType: 'fill',

  optionUpdated: function () {
    var option = this.option
    option.gridSize = Math.max(Math.floor(option.gridSize), 4)
  },

  getInitialData: function (option, ecModel) {
    var dimensions = echarts.helper.createDimensions(option.data, {
      coordDimensions: ['value'],
    })
    var list = new echarts.List(dimensions, this)
    list.initData(option.data)
    return list
  },

  // Most of options are from https://github.com/timdream/wordcloud2.js/blob/gh-pages/API.md
  defaultOption: {
    maskImage: null,

    // Shape can be 'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
    shape: 'square',
    keepAspect: false,

    left: 'center',

    top: 'center',

    width: '100%',
    height: '100%',
    right: null,
    bottom: null,

    sizeRange: [12, 60],

    rotationRange: [-90, 90],

    rotationStep: 45,

    gridSize: 8,

    drawOutOfBound: false,
    shrinkToFit: false,

    textStyle: {
      fontWeight: 'normal',
    },
  },
})
