// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:"",
    product:[
      { image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/44.jpg', title: "全棉加厚斜纹磨毛纯棉四件套被套 多花色", subtitle:"全棉磨毛 温暖舒适 多花色可选",price:"228"},
      { image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/45.jpg', title: "全棉四件套枕套床单被套", subtitle: "纯棉四件套 柔软 亲肤 舒适", price: "228"},
      { image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/46.jpg', title: "全棉磨毛加厚四件套", subtitle: "100%棉 加厚保暖", price: "228" }
      ]
  },
  toDetail(e){
    this.setData({
      index: e.target.dataset.id
    })
    wx.setStorage({
      key: "product",
      data: this.data

    }),
      wx.navigateTo({
        url: '../detail/detail'
      })
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})