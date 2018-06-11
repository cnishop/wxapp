// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      initValue:'初始化的文字内容',
      iTypes:["text","number","idcard","digit","time","date"],
      isPassword:false,
      placeholderText:"请输入文字",
      isDisabled:false,
      maxlength:20,
      isAutoFocus:false,
      isFocus:false,
      pickedTypeIndex:0,
  },

  inputKeypressEvent:function(e){
    console.log('输入了内容，事件对象为：',e.detail)
  },

  inputFocusEvent:function(){
    console.log('获取了焦点')
  },
  inputBlurEvent:function(){
    console.log('失去了焦点')
  },
  pickerChangeEvent:function(e){
    console.log('选择的type为：', e.detail.value)
    this.setData({
          pickedTypeIndex:e.detail.value
    })
  },
  switchPwdChangeEvent:function(e){
    this.setData({
      isPassword:e.detail.value
    })
  },
  switchDisChangeEvent:function(e){
      this.setData({
        isDisabled:e.detail.value
      })
  },
  sliderChangeEvent:function(e){
        this.setData({
          maxlength:e.detail.value
        })
  },

  textareaChangeEvent:function(e){
    console.log('textarea：', e)
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