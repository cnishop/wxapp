// pages/switch/switch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        isChecked:false,
        //chosedType:'switch',
        sType:['switch','checkbox'],
        switchState:false,
        chosedIndex:0
  },
  stateChange:function(e){
    console.log(e)
    this.setData({
      switchState:e.detail.value
    })
    console.log('switchState:',this.data.switchState)
  },
  changeSwitchType:function(e){
    console.log('携带value值为:', e.detail.value)
    this.setData({
     // chosedType:this.data.sType[e.detail.value]
     chosedIndex:e.detail.value
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