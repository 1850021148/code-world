// components/DateTimePicker/DateTimePicker.js
Component({
  properties: {
    title: {
      type: String,
      value: 'title'
    },
    show: {
      type: Boolean,
      value: false,
    },
    timevalue: {
      type: Array,
      value: "标题"
    },
    years: {
      type: Array,
      value: "年"
    },
    months: {
      type: Array,
      value: "月"
    },
    days: {
      type: Array,
      value: "日"
    },
    hours: {
      type: Array,
      value: "点"
    },
    minutes: {
      type: Array,
      value: "分"
    }
  },
  /** 组件的方法列表 **/
  methods: {
    handleShowPicker() {
      this.setData({
        show: true,
      })
    },
    //取消
    canslebtn(){
      this.setData({
        show: false,
      })
      this.triggerEvent("canslebtn");
    },
    //确认
    closebtn() {
      this.setData({
        show: false,
      })
      this.triggerEvent("closebtn");
    },
 // 调用父组件  事件
    fnbindChange(e){
      this.triggerEvent("bindChangeEvent",e.detail);
    }
  }
})