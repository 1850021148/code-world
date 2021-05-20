// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    showBigBg: false,
    bigAvatarIsShow: false,
    navBarList: [
      { "text": "记录 0" },
      { 'text': '喜欢 0' },
      { "text": "评价 0" }
    ],
    info: {
      name: 'juln',
      auth: '代码圈圈主',
      bg: 'https://profile.csdnimg.cn/3/7/A/0_ef_ef',
      avatar: 'https://profile.csdnimg.cn/3/7/A/0_ef_ef'
    }
  },

  handleGetUserInfo(e) {
    // avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/bzxh5enD5mHIW6oibat8YfE1GlHF1xVZ7iaxLzUxDvUG3nWP2GYDSx2IRYrXZS0TNvTzLgLqbTRh0vclJxYSvrsA/132"
    // city: "Quanzhou"
    // country: "China"
    // gender: 1
    // language: "zh_CN"
    // nickName: "juln"
    // province: "Fujian"
    // 注册/登录
    const that = this
    wx.getUserProfile({
      lang: 'zh_CN',
      desc: "获取用户信息",
      complete(res) {
        console.log(res)
        that.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  handleShowBigBg() {
    this.setData({
      showBigBg: true
    })
    wx.hideTabBar()
  },
  handleHidBigBg() {
    this.setData({
      showBigBg: false
    })
    wx.showTabBar()
  },
  handleUpdateBg() {
    wx.chooseImage({
      count: 0,
      success(e) {
        const image = e.tempFilePaths
        wx.navigateTo({
          url: `/pages/editMineBg/editMineBg?image=${image}`
        })
      }
    })
  },
  showBigAvatar() {
    this.setData({
      bigAvatarIsShow: true
    })
    wx.hideTabBar()
  },
  hidBigAvatar() {
    this.setData({
      bigAvatarIsShow: false
    })
    wx.showTabBar()
  },
  toUserListPage() {
    wx.navigateTo({
      url: `/pages/userList/userList?id=${globalThis.id}`
    })
  },

  handleEdit() {
    wx.navigateTo({
      url: `/pages/selfInfo/selfInfo`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success(res){
        const code = res.code
        wx.request({
          url: 'http://127.0.0.1:8900/user/login?code='+code,
          success(res) {
            console.log(res)
          }
        })
      }
    })
    wx.getSetting({
      success (res) {
        console.log(res.authSetting)
        if(res.authSetting['scope.userInfo']) {
          console.log(123)

        }
      }
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

  }
})