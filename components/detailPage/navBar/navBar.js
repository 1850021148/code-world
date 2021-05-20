// components/detailPage/navBar/navBar.js
Component({
  lifetimes: {
    attached() {
      this.setData({
        activeIndex: this.data.defaultActiveIndex
      })
    }
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
    activeIndex: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapNav(e) {
      const activeIndex = e.currentTarget.dataset.index
      this.setData({
        activeIndex
      })
      this.triggerEvent('changeNav', {
        activeIndex
      })
    }
  }
})
