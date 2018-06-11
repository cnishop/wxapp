// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoSrc:'video.mp4',
    textList:[
        {
        text:'小程序强大的弹幕第一单,0s',
        color:'#ff0000',
        time:0
        },
        {
          text: ' 很强大啊,1s',
          color: '#ff00ff',
          time:1
        }
      ]
  },

  submitFun:function(e){
      var danmuText=e.detail.value.danmuText
      this.theVideo.sendDanmu({
        text:danmuText,
        color:'#ffffff'
      })
  },

  getLocalVideoFun: function() {
    console.log('获取设备')
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: ['front', 'back'],
      success: function (res) {
        that.setData({
          videoSrc: res.tempFilePath
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      this.theVideo=wx.createVideoContext('theVideo' )
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})