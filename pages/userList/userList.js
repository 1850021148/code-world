// pages/userList/userList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        user: {
          id: 0,
          sex: 0,
          avatar: 'https://himg.bdimg.com/sys/portraitn/item/e8f234333231e0cbe0cbe0cbe0cbac8d',
          name: '周文鲜',
          school: '福州理工学院'
        }
      },
      {
        user: {
          id: 1,
          sex: 1,
          avatar: 'https://himg.bdimg.com/sys/portraitn/item/e8f234333231e0cbe0cbe0cbe0cbac8d',
          name: 'juln',
          school: '福州理工学院'
        }
      },
      {
        user: {
          id: 2,
          sex: 1,
          avatar: 'https://himg.bdimg.com/sys/portraitn/item/e8f234333231e0cbe0cbe0cbe0cbac8d',
          name: '陈国豪',
          school: '福州理工学院'
        }
      }
    ]
  },

  toOtherCenter(e) {
    const userId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/otherMine/otherMine?id=${userId}`,
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