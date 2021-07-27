// pages/dk/dk.js
    var myDate = new Date();
    var day0 = myDate.getDate();
    var month0 = myDate.getMonth() + 1;
Page({
  data: {
    month:'',
    day:'',
    date:"",
    daystyle:[],
    complete:'0',
    selected:[3,1,2,2,1,1,3,2,2,3,1,2,2,1,1,3,2,2,3,1,2,2,2,1,2,3]
  },
  onLoad: function (options) {
    var daystyle = this.data.daystyle
    var date = month0 + "月" + day0 + "日"
    daystyle.push({month: 'current', day: day0, color: 'red', background: '#ffffff'});
    for(var i = 1; i < day0; i++) {
      var selected=this.data.selected[i-1]
      if (selected==3) {
        daystyle.push({month: 'current', day: i, color: 'white', background: 'green'});
      } else if (selected==2) {
        daystyle.push({month: 'current', day: i, color: 'white', background: 'orange'});
      } else if (selected==1) {
        daystyle.push({month: 'current', day: i, color: 'white', background: 'pink'});
      } else {
        daystyle.push({month: 'current', day: i});
      }
    }
    this.setData({
      daystyle: this.data.daystyle,
      date: date
    })
  },
  dayClick: function (e) {
    console.log(e.detail);
    var month1 = e.detail.month;
    var day1 = e.detail.day;
    var date1 = month1 + "月" + day1 + "日";
    this.setData({
      date: date1
    })
  },
  goTodk1: function() {
    wx.navigateTo({
      url: '../dk1/dk1',
    })
  }
})