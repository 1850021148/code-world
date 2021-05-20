// pages/selfInfo/selfInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showActionsheet: false,
    activeSheetGroups: [
        { text: '拍照', value: 0 },
        { text: '从相册选择', value: 1 }
    ],
    rows: [
      {
        title: '昵称',
        content: 'juln',
        mode: 'common'
      },
      {
        title: '性别',
        content: "男",
        mode: 'gender'
      },
      {
        title: '家乡',
        content: '晋江',
        mode: 'common'
      },
      {
        title: '所在地',
        content: '福州',
        mode: 'common'
      },
      {
        title: '身份认证',
        content: '代码圈圈主',
        mode: 'auth'
      },
      {
        title: '介绍自己',
        content: '你好，我是代码圈圈主，欢迎来到代码圈',
        mode: 'common'
      }
    ]
  },
  
  closeActiceSheet() {
    this.setData({
        showActionsheet: false
    })
  },
  onActionTap(e) {
      console.log(e.detail.groupindex)
      this.closeActiceSheet()
      wx.chooseImage({
        count: 1,
        success (res) {
          const src = res.tempFilePaths
          wx.navigateTo({
            url: `/pages/editAvatar/editAvatar?image=${src}`
          })
        }
      })
  },
  handleEditAvatar() {
    this.setData({
        showActionsheet: true
    })
  },
  handleEdit(e) {
    const {title,content} = this.data.rows[e.currentTarget.dataset.index]
    const mode = e.currentTarget.dataset.mode
    console.log(`/pages/editInfo/editInfo?title=${encodeURI(title)}&content=${encodeURI(content)}&mode=${mode}`)
    wx.navigateTo({
      url: `/pages/editInfo/editInfo?title=${encodeURI(title)}&content=${encodeURI(content)}&mode=${mode}`,
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