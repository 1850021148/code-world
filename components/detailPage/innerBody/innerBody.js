// components/detailPage/innerBody/innerBody.js
Component({
  lifetimes: {
    attached() {
      this.setData({
        activeIndex: this.data.defaultActiveIndex
      })
    }
  },
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array,
    defaultActiveIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChangeNav(e) {
      this.setData({
        activeIndex: e.detail.activeIndex
      })
    }
  }
})
