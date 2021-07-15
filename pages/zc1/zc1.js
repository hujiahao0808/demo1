// pages/zc1.js
Page({
  data: {
    username: '',
    gender: '请选择>',
    age: '',
    height: '',
    weight: '',
    select: false,
  },

  inputUsername(e) {
    this.setData({
      username: e.detail.value,
    })
  },
  inputGender(e) {
    this.setData({
      gender: e.detail.value,
    })
  },
  inputHeight(e) {
    this.setData({
      height: e.detail.value,
    })
  },
  inputWeight(e) {
    this.setData({
      weight: e.detail.value,
    })
  }, 
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      gender: name,
      select: false
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
      url: '../zc2/zc2',
    })
  }
})