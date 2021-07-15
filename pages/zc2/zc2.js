// pages/zc2/zc2.js
Page({

  data: {
    select1: false,
    tihuoWay1: '请选择>',
    select2: false,
    tihuoWay2: '请选择>'
  },

  bindShowMsg1() {
    this.setData({
      select1: !this.data.select1
    })
  },
  mySelect1(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay1: name,
      select1: false
    })
  },
  bindShowMsg2() {
    this.setData({
      select2: !this.data.select2
    })
  },
  mySelect2(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay2: name,
      select2: false
    })
  },

  next() {
    const {
      username,
      gender,
      age,
      height,
      weight,
    } = this.data;

    wx.navigateTo({
      url: '../zc3/zc3',
    })
  } 
})