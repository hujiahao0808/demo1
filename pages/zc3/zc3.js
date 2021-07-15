// pages/zc3/zc3.js
Page({
  data: {

  },

  nexta() {
    const {
      username,
      gender,
      age,
      height,
      weight,
    } = this.data;

    wx.navigateTo({
      url: '../zc3a/zc3a',
    })
  } ,

  nextb() {
    const {
      username,
      gender,
      age,
      height,
      weight,
    } = this.data;

    wx.navigateTo({
      url: '../zc3b/zc3b',
    })
  } ,

  nextc() {
    const {
      username,
      gender,
      age,
      height,
      weight,
    } = this.data;

    wx.navigateTo({
      url: '../zc3c/zc3c',
    })
  } ,

  next() {
    const {
      username,
      gender,
      age,
      height,
      weight,
    } = this.data;
    wx.navigateBack({ 
      delta: 10,
    })
  } 
})