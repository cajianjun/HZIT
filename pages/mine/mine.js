const app = getApp()

Page({
  data: {
    balance: 0,
    freeze: 0,
    score: 0,
    score_sign_continuous: 0
  },
  onLoad() {

  },
  onShow() {
    this.getUserInfo();
  },
  getUserInfo: function (cb) {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              userInfo: res.userInfo
            });
          }
        })
      }
    })
  },
  aboutUs: function () {
    wx.showModal({
      title: '关于我们',
      content: '关于我们不清楚，关于理想我从来没选择放弃！',
      showCancel: false
    })
  }
  
  
})