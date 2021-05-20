// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navBarList: [
      { "text": "详情" },
      { "text": "信息" },
      { "text": "人员" },
      { "text": "地址" }
    ],
    scrollY: 0,
    id: -1,
    detail: {
      id: 1,
      state: {
        code: 1,
        name: '报名中'
      },
      time: {
        start: '2021.04.25',
        end: '2021.04.25'
      },
      participant: {
        limitTotal: 12,
        total: 12
      },
      siteName: '图书馆二楼服务台',
      title: '【爱笑服务】图书馆志愿者（ 4.25 第二场 ）',
      cover: 'https://profile.csdnimg.cn/3/7/A/0_ef_ef'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
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

  onPageScroll(e) {
    this.setData({
      scrollY: e.scrollTop/4
    })
  }
})