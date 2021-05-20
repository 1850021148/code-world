// pages/createActivity/createActivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker: {
      range: [
        [0,10,20,50,100,'无限'],
        '到',
        [0,10,20,50,100,'无限']
      ],
      value: [0,0,5]
    }
  },

  handleChangeNumber(e) {
    this.setData({
      picker: {
        ...this.data.picker,
        value: e.detail.value
      }
    })
  },
})