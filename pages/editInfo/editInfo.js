// pages/editInfo/editInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    mode: ''
  },

  handleEditorReady() {
    const that = this
    wx.createSelectorQuery().select('.editor').context(res => {
      res.context.setContents({
        html: this.data.content
      })
    }).exec()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: decodeURI(options.title),
      content: decodeURI(options.content),
      mode: options.mode
    })
  }

})