// pages/main/main.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/1.jpg',
      'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/2.jpg',
      'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/3.jpg',
      'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/4.jpg',
      
    ],
    imgs:[
      'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/10.jpg',
      'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/11.jpg',
      'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/12.jpg',
      'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/13.jpg',
    ],
    product: [
      { title: '全棉高支床品套件', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/18.jpg', price: '290', sale: '78' },
      { title: ' 水洗棉四件套床上用品套件床单被套', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/19.jpg', price: '198', sale: '147' },
      { title: ' 舒适印花亲肤双人床单被套四件套 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/20.jpg', price: '198', sale: '554' },
      { title: '北欧简约风全棉高支床上用品套件 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/21.jpg', price: '228', sale: '328' }
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true,      // 是否自动切换
    circular: true,      // 是否采用衔接滑动
    interval: 3000,      // 自动切换时间间隔
    duration: 1000,      // 滑动动画时长
  
  },
  theCase(){
    wx.switchTab({ url: '../product/product' })
  },
  jumpPage(e) {
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