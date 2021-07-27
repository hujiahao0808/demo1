// pages/sq1/sq1.js
Page({
  data: {
    name:"sunny",
    sport:"羽毛球",
    member:"4/4",
    message:"明天羽毛球要考试了，来练练发球？",
    day:"8.3",
    time:"18:30-20:30",
    place:"紫金港风雨球场",
    color:"pink",
    join:true,
    joinbutton:"",
  },
  onLoad: function (options) {
    var join = this.data.join
    if (join) {
      this.setData({
        joinbutton:"加入"
      })
    } else {
      this.setData({
        joinbutton:"退出"
      })
    }
  },


  
})