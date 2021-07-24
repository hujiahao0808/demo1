// pages/sq2/sq2.js
Page({
  data: {
    sport: '',
    day: '',
    time: '',
    place: '',
    people: '',
    others: '',
  },

  inputSport(e) {
    this.setData({
      sport: e.detail.value,
    })
  },
  inputDay(e) {
    this.setData({
      day: e.detail.value,
    })
  },
  inputTime(e) {
    this.setData({
      time: e.detail.value,
    })
  },
  inputPlace(e) {
    this.setData({
      place: e.detail.value,
    })
  },
  inputPeople(e) {
    this.setData({
      people: e.detail.value,
    })
  }, 
  inputOthers(e) {
    this.setData({
      others: e.detail.value,
    })
  }, 

  back() {
    const {
      sport,
      time,
      place,
      people,
      others,
    } = this.data;

    wx.navigateBack()
  }
})