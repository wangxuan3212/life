// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: "none",
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true,      // 是否自动切换
    circular: true,      // 是否采用衔接滑动
    interval: 3000,      // 自动切换时间间隔
    duration: 1000,      // 滑动动画时长
    product:[],
    imgUrls: [],
    index:"",
    number:1,
    cart:[]
  },
  numberChange(e){
   this.setData({
     number:e.detail
   })
  },
  onClickButton() { 
        var cart=this.data.cart;
        var product = this.data.product
        var index=this.data.index;
        var addProduct = {
          price: product.price,
          pic: product.image,
          number: this.data.number,
          name: product.title,
          isSelect: false,
          index:this.data.index
        }
    var index = addProduct.index;
    if (cart.length > 0) {
      for (var j in cart) {
        if (cart[j].index == index) { 
          cart[j].number = cart[j].number + 1;
          this.setData({ cart: cart })
          wx.setStorage({
            key: "cart",
            data: this.data.cart
          })
          wx.switchTab({ url: '../car/car' })
          return;
        }  
      }
      cart.unshift(addProduct); 
    } else {
      cart.unshift(addProduct);
    }    
    this.setData({ cart: cart })
    wx.setStorage({
      key: "cart",
      data: cart
    })
    wx.switchTab({ url: '../car/car' })
  },

  theSize(e){
    this.setData({
      status: "block"
    })
   
   
   
  },
  
  clear(){
    this.setData({
      status: "none"
    })
  },
  onClickIcon() {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var product = wx.getStorageSync('product');
    var index=product.index;
    var products=product.product[index];
    var images = products.image;
    this.setData({
      product:products,
      index:index,
      imgUrls: [images, images, images],

    })

  
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
    var cart = wx.getStorageSync('cart');
    this.setData({ cart: cart })
    wx.setStorage({
      key: "cart",
      data: this.data.cart
    })
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