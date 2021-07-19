// pages/rc/rc.js
Page({
  data: {
    selected: false,
    bg: "s1",
    array1: [{text:"1",color:"s1"},{text:"2",color:"s1"},{text:"3",color:"s1"},{text:"4",color:"s1"},{text:"5",color:"s1"},{text:"6",color:"s1"},{text:"7",color:"s1"}],
    array2: [{text:"1",color:"s1"},{text:"2",color:"s1"},{text:"3",color:"s1"},{text:"4",color:"s1"},{text:"5",color:"s1"},{text:"6",color:"s1"},{text:"7",color:"s1"}],
    array3: [{text:"1",color:"s1"},{text:"2",color:"s1"},{text:"3",color:"s1"},{text:"4",color:"s1"},{text:"5",color:"s1"},{text:"6",color:"s1"},{text:"7",color:"s1"}],
    array4: [{text:"1",color:"s1"},{text:"2",color:"s1"},{text:"3",color:"s1"},{text:"4",color:"s1"},{text:"5",color:"s1"},{text:"6",color:"s1"},{text:"7",color:"s1"}],
    array5: [{text:"1",color:"s1"},{text:"2",color:"s1"},{text:"3",color:"s1"},{text:"4",color:"s1"},{text:"5",color:"s1"},{text:"6",color:"s1"},{text:"7",color:"s1"}]
  },
  select:function() {
    var selected=this.data.selected
    if (this.data.bg==="s1"){
      this.data.bg="s0"
    } else if (this.data.bg==="s0") {
      this.data.bg="s1"
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
  }
})