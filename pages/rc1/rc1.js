// pages/rc1/rc1.js
Page({
  data: {
    array1: [{text:"打卡"},{text:"长跑"},{text:"3.5km"},{text:"20/48"}],
    array2: [{text:""},{text:""},{text:""},{text:""}],
    array3: [{text:""},{text:""},{text:""},{text:""}],
    array4: [{text:""},{text:""},{text:""},{text:""}],
    array5: [{text:""},{text:""},{text:""},{text:""}]
  },
  goTorc2:function(e) {
    wx.navigateTo({
      url: '../rc2/rc2',
    })
  },
  goTorc3:function(e) {
    wx.navigateTo({
      url: '../rc3/rc3',
    })
  },
  back:function(e) {
    wx.navigateBack()
  },
})