//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady: function () {
    console.log('--logs.js--onReady---页面初次渲染完成')
  },
  onShow: function () {
    console.log('--logs.js--onShow---页面显示')
  },
  onHide: function () {
    console.log('--logs.js--onHide---页面隐藏')
  },
  onUnload: function () {
    console.log('--logs.js--onUnload---页面卸载')
  },
  onReachBottom: function () {
    console.log('--logs.js--onReachBottom---页面上拉触底')
  },


})
