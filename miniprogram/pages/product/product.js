// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:'',
    product:[
      { title: '全棉高支床品套件', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/18.jpg', price: '290', sale: '78'},
      { title: ' 水洗棉四件套床上用品套件床单被套', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/19.jpg', price: '198', sale: '147' },
      { title: ' 舒适印花亲肤双人床单被套四件套 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/20.jpg', price: '198', sale: '554'  },
      { title: '北欧简约风全棉高支床上用品套件 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/21.jpg', price: '228', sale: '328' }, { title: '自由自在 四件套纯棉家纺 床上用品床单被套 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/22.jpg', price: '345', sale: '112' }, { title: '四件套纯棉家纺 床上用品床单枕套双人 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/23.jpg', price: '298', sale: '223' },
      { title: '九洲鹿套件 全棉双人四件套 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/24.jpg', price: '188', sale: '225' },
      { title: ' ins被罩四件套水洗棉少女床单纯色四件套 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/35.jpg', price: '258', sale: '10' },
      { title: ' ins网红水洗冰丝四件套全棉北欧简约真丝被套 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/40.jpg', price: '278', sale: '55' },
      { title: ' 北欧简约床单四件套1.5m被套床单床笠被套 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/46.jpg', price: '268', sale: '36' },
      { title: '  四件套全棉纯棉简约床品套件 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/41.jpg', price: '248', sale: '43' },
      { title: '  床单式纯棉被套4件套 记忆碎片 ', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/42.jpg', price: '228', sale: '67' },
      { title: '  套件家纺 磨毛四件套 亲肤床上用品床单被套', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/43.jpg', price: '278', sale: '34' },
      { title: '  全棉三/四件套天使庄园 床单被套', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/44.jpg', price: '258', sale: '25' },
      { title: '   套件家纺 磨毛四件套 亲肤床上用品床单被套', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/45.jpg', price: '268', sale: '95' },
      { title: '  床上四件套纯棉舒适柔软全棉床品套件 花意天成', image: 'cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/5.jpg', price: '238', sale: '115' },
    ]
  },
  jumpPage(e){ 
    this.setData({
      index: e.target.dataset.id
    })
    wx.setStorage({
      key: "product",
      data:this.data
     
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