// components/detailPage/bodys/participant/participant.js
Component({
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
        user: {
          id: 0,
          sex: 0,
          avatar: 'https://himg.bdimg.com/sys/portraitn/item/e8f234333231e0cbe0cbe0cbe0cbac8d',
          name: '周文鲜',
          school: '福州理工学院',
          auth: {
            code: 0,
            text: '创办者'
          }
        }
      },
      {
        user: {
          id: 1,
          sex: 1,
          avatar: 'https://himg.bdimg.com/sys/portraitn/item/e8f234333231e0cbe0cbe0cbe0cbac8d',
          name: 'juln',
          school: '福州理工学院',
          auth: {
            code: 1,
            text: '管理员'
          }
        }
      },
      {
        user: {
          id: 2,
          sex: 1,
          avatar: 'https://himg.bdimg.com/sys/portraitn/item/e8f234333231e0cbe0cbe0cbe0cbac8d',
          name: '陈国豪',
          school: '福州理工学院',
          auth: {
            code: 2,
            text: '参与者'
          }
        }
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toOtherCenter(e) {
      const userId = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/otherMine/otherMine?id=${userId}`,
      })
    }
  }
})
