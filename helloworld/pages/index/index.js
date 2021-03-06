//index.js
//获取应用实例
const app = getApp()
var helloiwen = require('../data/hellodata.js')

Page({
  data: {
    motto: 'Hello World',
    message:'hello 小程序！!!',
    id:"",
    isshow : 55,
    a:1,
    b:2,
    colorArray:[ {value:'red'},
            {value:'yellow'},
            {value:'black'},
            {value:'white'}
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('--index.js--onload---页面加载')
    this.setData({
      hello:helloiwen.helloData
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  onReady:function(){
    console.log('--index.js--onReady---页面初次渲染完成')
  },
  onShow: function () {
    console.log('--index.js--onShow---页面显示')
  },
  onHide: function () {
    console.log('--index.js--onHide---页面隐藏')
  },
  onUnload: function () {
    console.log('--index.js--onUnload---页面卸载')
  },
  onReachBottom: function () {
    console.log('--index.js--onReachBottom---页面上拉触底')
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  tapName:function(event){
    console.log(event)
    this.setData({
      message:'好吧，我居然被点了',
    })
  }

}


)
