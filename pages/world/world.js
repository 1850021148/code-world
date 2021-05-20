// pages/world/world.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempDownloadImage: '',
    show: false,
    showProgress: false,
    progressPercent: 0,
    showActionsheet: false,
    activeSheetGroups: [
      { text: '下载图片', value: 0 }
    ],
    navBarList: [
      { 'text': '论坛' },
      { "text": "活动" },
      { "text": "聊天" }
    ],
    blogs: [
      {
        author: {
          id: 0,
          name: '推推车的玛卡玛卡',
          following: true,
          avatar: 'https://profile.csdnimg.cn/3/7/A/0_ef_ef'
        },
        image: 'https://profile.csdnimg.cn/3/7/A/0_ef_ef',
        goodsNum: 194,
        addGood: false,
        collect: false,
        comments: [
          {
            id: 0,
            user: {
              id: 0,
              name: '推推车的玛卡玛卡',
              following: false,
              avatar: 'https://profile.csdnimg.cn/3/7/A/0_ef_ef'
            },
            content: '这这这!',
            addGood: false
          }
        ]
      }
    ]
  },
  
  toOtherCenter(e) {
    const userId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/otherMine/otherMine?id=${userId}`,
    })
  },
  onImageClick(e) {
    const image = e.currentTarget.dataset.image
    this.setData({
      tempDownloadImage: image,
      showActionsheet: true
    })
  },
  closeActiveSheet() {
    this.setData({
        showActionsheet: false
    })
  },
  handleDownloadImage() {
    wx.showToast({
      title: '图片下载中...',
      icon: 'loading'
    })
    wx.getImageInfo({
      src: this.data.tempDownloadImage,
      success(res) {
        const filePath = res.path
        wx.saveImageToPhotosAlbum({
          filePath,
          complete(res) {
            console.log(res)
          },
          success(res) {
            console.log(res)
          }
        })
      }
    })
    this.closeActiveSheet()
  },
  handelCreateBlog() {
    wx.chooseImage({
      count: 1,
      success(res) {
        wx.navigateTo({
          url: `/pages/createBlog/createBlog?image=${res.tempFilePaths}`
        })
      }
    })
  },
  handleToComments() {
    wx.navigateTo({
      url: `/pages/comments/comments?id=${1}`,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.mode === 'send') {
      this.setData({
        showProgress: true
      })
      options.image
      // 上传图片
      // 实时修改进度
      // 结束后隐藏，并修改this.data.blogs
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      show: true
    })
    setTimeout(() => {
      wx.stopPullDownRefresh({
        success: (res) => {},
        fail: (res) => {},
        complete: (res) => {
          this.setData({
            show: false
          })
        },
      })
    }, 1000)
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