// pages/testView/testView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    intoView:"v1"
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
  
  },
  scrolltoupperFun: function (e) {
    console.log('滚动都了顶部差20像素内, 事件对象内容为：')
    console.log(e)
  },
  scrolltolowerFun: function (e) {
    console.log('滚动都了底部差30像素内, 事件对象内容为：')
    console.log(e)
  },

  scrollToV1:function(){
    this.setData({
      intoView:'v1'
    })
    console.log('滚动到 v1')
  },

  scrollToV2: function () {
    this.setData({
      intoView: 'v2'
    })
    console.log('滚动到 v2')
  },

  scrollToV3: function () {
    this.setData({
      intoView: 'v3'
    })
    console.log('滚动到 v3')
  },

})