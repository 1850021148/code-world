// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 请求数据
    wx.request({
      url: 'https://juln.icu/api/test.json',
      complete(res) {
        console.log(res)
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
