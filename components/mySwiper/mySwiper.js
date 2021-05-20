// components/mySwiper/mySwiper.js
Component({
  options: {
    // 启动多个插槽的使用
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    size: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    swiperIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange(e) {
      this.setData({
        swiperIndex: e.detail.current
      })
    }
  }
})
