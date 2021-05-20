// pages/school/school.js
Page({
  
  data: {
    
  },

  handleSearch(e) {
    const keyword = e.detail.value
    wx.navigateTo({
      url: `/pages/searchActivity/searchActivity?keyword=${encodeURI(keyword)}`
    })
  },
  handleCreateActivity() {
    wx.navigateTo({
      url: '/pages/createActivity/createActivity',
    })
  }

})