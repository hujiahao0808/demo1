// pages/sq3/sq3.js
Page({
  data: {

  },

  back:function() {
    wx.navigateBack()
  },
  goToSq3a:function() {
    wx.navigateTo({
      url: '../sq3a/sq3a',
    })
  },
})