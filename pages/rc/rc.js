// pages/rc/rc.js
Page({
  data: {
    selected: false,
    bg: "s3",
    array1: [{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"}],
    array2: [{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"}],
    array3: [{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"}],
    array4: [{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"}],
    array5: [{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"}],
    array6: [{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"}],
    array7: [{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"},{text:"",color:"s1"}],
  },
  select:function() {
    var selected=this.data.selected
    if (this.data.bg==="s3"){
      this.data.bg="s0"
    } else if (this.data.bg==="s0") {
      this.data.bg="s3"
    }
    this.setData({
      bg: this.data.bg,
      selected: !selected
    })
  },
  changeColor1:function(e) {
    var idx=e.currentTarget.dataset.index
    var selected=this.data.selected
    if (selected) {
      if (this.data.array1[idx].color==="s1"){
        this.data.array1[idx].color="s2"
      } else if (this.data.array1[idx].color==="s2") {
        this.data.array1[idx].color="s1"
      }
      this.setData({
        array1: this.data.array1
      })
    }
  },
  changeColor2:function(e) {
    var idx=e.currentTarget.dataset.index
    var selected=this.data.selected
    if (selected) {
      if (this.data.array2[idx].color==="s1"){
        this.data.array2[idx].color="s2"
      } else if (this.data.array2[idx].color==="s2") {
        this.data.array2[idx].color="s1"
      }
      this.setData({
        array2: this.data.array2
      })
    }  
  },
  changeColor3:function(e) {
    var idx=e.currentTarget.dataset.index
    var selected=this.data.selected
    if (selected) {
      if (this.data.array3[idx].color==="s1"){
        this.data.array3[idx].color="s2"
      } else if (this.data.array3[idx].color==="s2") {
        this.data.array3[idx].color="s1"
      }
      this.setData({
        array3: this.data.array3
      })
    }
  },
  changeColor4:function(e) {
    var idx=e.currentTarget.dataset.index
    var selected=this.data.selected
    if (selected) {
      if (this.data.array4[idx].color==="s1"){
        this.data.array4[idx].color="s2"
      } else if (this.data.array4[idx].color==="s2") {
        this.data.array4[idx].color="s1"
      }
      this.setData({
        array4: this.data.array4
      })
    }
  },
  changeColor5:function(e) {
    var idx=e.currentTarget.dataset.index
    var selected=this.data.selected
    if (selected) {
      if (this.data.array5[idx].color==="s1"){
        this.data.array5[idx].color="s2"
      } else if (this.data.array5[idx].color==="s2") {
        this.data.array5[idx].color="s1"
      }
      this.setData({
        array5: this.data.array5
      })
    }
  },
  changeColor6:function(e) {
    var idx=e.currentTarget.dataset.index
    var selected=this.data.selected
    if (selected) {
      if (this.data.array6[idx].color==="s1"){
        this.data.array6[idx].color="s2"
      } else if (this.data.array6[idx].color==="s2") {
        this.data.array6[idx].color="s1"
      }
      this.setData({
        array6: this.data.array6
      })
    }
  },
  changeColor7:function(e) {
    var idx=e.currentTarget.dataset.index
    var selected=this.data.selected
    if (selected) {
      if (this.data.array7[idx].color==="s1"){
        this.data.array7[idx].color="s2"
      } else if (this.data.array7[idx].color==="s2") {
        this.data.array7[idx].color="s1"
      }
      this.setData({
        array7: this.data.array7
      })
    }
  },
  goTorc1:function(e) {
    wx.navigateTo({
      url: '../rc1/rc1',
    })
  },
})