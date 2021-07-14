// pages/zc1.js
Page({
  data: {
    username: '',
    gender: '',
    age: '',
    height: '',
    weight: ''
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
  inputAge(e) {
    this.setData({
      age: e.detail.value,
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