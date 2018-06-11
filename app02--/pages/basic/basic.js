// pages/basic/basic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:[
    'success','info','warn','waiting','safe_success','safe_warn',
    'success_circle','success_no_circle','waiting_circle','circle','download',
    'info_circle','cancel','search','clear'
    ],
    percent:0
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
    this.startPercent()
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
  startPercent:function(){
    var that= this
    that.setData({
      percent:0
    })
    var interval=setInterval(function(){
      if(that.data.percent<100){
        that.setData({
          percent:that.data.percent+1
        })
      }else{
        clearInterval(interval)
      }
    },30)

  }
})