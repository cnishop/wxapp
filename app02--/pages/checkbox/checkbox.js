// pages/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items1: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    items2: [
      { name: 'BEIJIN', value: '北京', checked: 'true' },
      { name: 'SHANGHAI', value: '上海' },
      { name: 'SHANGDONG', value: '山东' },
      { name: 'GUANGDONG', value: '广东' },
      { name: 'SHENGZHEN', value: '深圳' },
      { name: 'HANGZHOU', value: '杭州' },
    ],
    selectedItems1: [],
    selectedItems2: [],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国' },
      { name: 'BRA', value: '巴西' },
    ]  
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


  checkbox1Change: function (e) {
    var selectedItems = e.detail.value
    console.log('checkbox1 发生change事件，携带value值为:', selectedItems)
    this.setData({
      selectedItems1: selectedItems
    })
    console.log('data中selectedItems1的值:', this.data.selectedItems1)
  },

  checkbox2Change: function (e) {
    var selectedItems = e.detail.value
    console.log('checkbox2 发生change事件，携带value值为:', e.detail.value)
    this.setData({
      selectedItems2: selectedItems
    })
    console.log('data中selectedItems1的值:', this.data.selectedItems2)
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },  
})