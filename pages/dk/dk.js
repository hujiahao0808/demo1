// pages/dk/dk.js
    var myDate = new Date();
    var day0 = myDate.getDate();
    var month0 = myDate.getMonth();
Page({
  data: {
    month:'',
    day:'',
    daystyle:[],
    selected:[0,1,2,2,1,1,0,2,2,0,1,2,2,1,1,0,2,2,0,1,2,2]
  },
  onLoad: function (options) {
    var daystyle = this.data.daystyle
    daystyle.push({month: 'current', day: day0, color: 'red', background: '#ffffff'});
    for(var i = 1; i < day0; i++) {
      var selected=this.data.selected[i-1]
      if (selected==2) {
        daystyle.push({month: 'current', day: i, color: 'white', background: 'green'});
      } else if (selected==1) {
        daystyle.push({month: 'current', day: i, color: 'white', background: 'yellow'});
      } else {
        daystyle.push({month: 'current', day: i, color: 'white', background: 'pink'});
      }
    }
    this.setData({
      daystyle: this.data.daystyle
    })
  },
  dayClick: function (event) {
    console.log(event.detail);
  }
})