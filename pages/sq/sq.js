// pages/sq/sq.js
Page({
  data: {
    array: [
      {name:"sunny",sport:"羽毛球",member:"4/4",message:"明天羽毛球要考试了，来练练发球？",day:"8.3",time:"18:30-20:30",place:"紫金港风雨球场",color:"pink",join:true},
      {name:"小明",sport:"乒乓球",member:"1/2",message:"初级班选手，蹲一个人一起练发球。",day:"8.5",time:"9：00-11:00",place:"紫金港风雨球场",color:"yellow",join:false},
      {name:"",sport:"",member:"",message:"",day:"",time:"",place:"",color:"pink",join:false},
      {name:"",sport:"",member:"",message:"",day:"",time:"",place:"",color:"yellow",join:false},
      {name:"",sport:"",member:"",message:"",day:"",time:"",place:"",color:"pink",join:false},
    ],
  },
  goTosq1:function() {
    wx.navigateTo({
      url: '../sq1/sq1',
    })
  },
  goTosq2:function() {
    wx.navigateTo({
      url: '../sq2/sq2',
    })
  },
})