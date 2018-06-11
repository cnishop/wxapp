// pages/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  playFun:function(){
      console.log('开始播放')
  },
  pauseFun: function () {
    console.log('播放暂停')
  },
  timeUpdateFun: function (event) {
    console.log('时间轴更新了',event)
  },
  endedFun: function () {
    console.log('播放结束')
  },
  errFun: function (event) {
    console.log('播放出错', event)
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
      this.audio=wx.createAudioContext('theAudio')
      //this.audio.play()
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