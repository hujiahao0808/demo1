// pages/zc3b/zc3b.js
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