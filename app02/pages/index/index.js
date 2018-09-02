//index.js
//获取应用实例
const app = getApp();
var com = require('../../utils/common');
Page({
  data: {
    msg:'传前一个画面的参数',
    motto: 'Hello World',
    nav: '点击进入导航界面',
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
    console.log(com)
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
  },
  navto: function (event) {
    console.log(event)
    wx.navigateTo({
      url: '../../pages/navigate/navigate'
    })
  },
  change2: function () {
    var stringTemplateTxt= "字符串模板数据"//定义一个变量并初始化值      
    console.log(`我是${stringTemplateTxt}`)//将stringTemplateTxt变量的值输出到控制台 
    this.setData({
      msg: '111'
    })
  },

  fnUserState:function() {
    this.setData({
      msg: com.echoHello('james')
    })
  },
  fnUserState2(){
    this.setData({
      msg: com.echoBye('blue')
    })
  },

}


)
