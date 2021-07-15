Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#7A7E83",
    list: [{
      pagePath: "/pages/home/home",
      iconPath: "/image/icon_component.png",
      selectedIconPath: "/image/icon_component.png",
      text: "主页"
    }, {
      pagePath: "/pages/rc/rc",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API.png",
      text: "日程"
    }, {
      pagePath: "/pages/dk/dk",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API.png",
      text: "打卡"
    }, {
      pagePath: "/pages/sq/sq",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API.png",
      text: "社区"
    }, {
      pagePath: "/pages/wd/wd",
      iconPath: "/image/icon_API.png",
      selectedIconPath: "/image/icon_API.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})