// pages/sq1/sq1.js
Page({
  data: {

  },

  back:function() {
    wx.navigateBack()
  },
  goToSq1a:function() {
    wx.navigateTo({
      url: '../sq1a/sq1a',
    })
  },
})