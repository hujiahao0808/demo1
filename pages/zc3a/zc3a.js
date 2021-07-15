// pages/zc3a/zc3a.js
Page({
  data: {

  },
  
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