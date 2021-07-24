// pages/sq3a/sq3a.js
Page({
  data: {
    sport: '1',
    day: '1',
    time: '1',
    place: '1',
    people: '1',
    others: '1',
  },
  join:function() {
    console.log(this.data)
    wx.navigateBack()
  },
  back:function() {
    wx.navigateBack()
  },
})