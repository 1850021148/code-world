// components/acticities/activities.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list: [
      {
        id: 0,
        state: 1,
        stateName: '报名中',
        time: {
          start: '2021.04.25',
          end: '2021.04.25'
        },
        title: '【爱笑服务】图书馆志愿者（ 4.25 第二场 ）',
        cover: 'https://profile.csdnimg.cn/3/7/A/0_ef_ef'
      },
      {
        id: 1,
        state: 1,
        stateName: '报名中',
        time: {
          start: '2021.04.25',
          end: '2021.04.25'
        },
        title: '【爱笑服务】图书馆志愿者（ 4.25 第二场 ）111111111111111111111111111',
        cover: 'https://profile.csdnimg.cn/3/7/A/0_ef_ef'
      },
      {
        id: 2,
        state: 1,
        stateName: '报名中',
        time: {
          start: '2021.04.25',
          end: '2021.04.25'
        },
        title: '【爱笑服务】图书馆志愿者（ 4.25 第二场 ）',
        cover: 'https://profile.csdnimg.cn/3/7/A/0_ef_ef'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLinkTo(e) {
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}`
      })
    }
  }
})
