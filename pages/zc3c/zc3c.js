// pages/zc3c/zc3c.js
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