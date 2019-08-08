// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAllSelect: false,
    totalMoney: 0,
    product:[],
    // 商品详情介绍
    carts: [
      {index:"3" ,price: "228", pic: "cloud://web-test-01-c6gz2.7765-web-test-01-c6gz2/21.jpg", number: 1, name: "北欧简约风全棉高支床上用品套件 ", isSelect: false }],
   
  },
  //勾选事件处理函数 
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值 
    var Allprice = 0, i = 0;
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + this.data.carts[index].price * this.data.carts[index].number ;
    }
    else {
      this.data.totalMoney = this.data.totalMoney - this.data.carts[index].price * this.data.carts[index].number;
    }
    //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + this.data.carts[i].price;
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
   
  },
  //全选
  allSelect: function (e) {
  
    //处理全选逻辑
    let i = 0;
    if (!this.data.isAllSelect) {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney + this.data.carts[i].price * this.data.carts[i].number;
      }
    }
    else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  // 去结算
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  //数量变化处理
  add(e) {
    let id = e.currentTarget.dataset.id;
    let currentNumber = this.data.carts[id].number
    currentNumber++;
    let money=0
    for(var i=0;i<this.data.carts.length;i++){
      if (this.data.carts[i].isSelect==true){
        money+=this.data.carts[id].price*this.data.carts[id].number;
      }
    }
    this.data.carts[id].number = currentNumber;
    this.setData({
      carts: this.data.carts,
      totalMoney:money
    })
  },
  reduce(e) {
    let id = e.currentTarget.dataset.id;
    let select=this.data.carts[id].isSelect;
    let theMoney=this.data.totalMoney;
    let currentNumber = this.data.carts[id].number;
    let index = e.currentTarget.dataset.index; 
    let money = 0
     if (currentNumber > 1) {
      currentNumber--;
      this.data.carts[id].number = currentNumber; 
       for (var i = 0; i < this.data.carts.length; i++) {
         if (this.data.carts[i].isSelect == true) {
           money+= this.data.carts[i].price * this.data.carts[i].number;
         } 
       }
      this.setData({
        carts: this.data.carts,
        totalMoney:money

      })
    }else{
       this.delete (e)
    }
  
  },
  delete(e) {
    const index = e.currentTarget.dataset.id;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    });
    
    wx.switchTab({ url: '../car/car' })
    this.setData({
      carts: carts
    });
    wx.setStorage({
      key: "cart",
      data: this.data.carts
    })
    
  },
  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
      
          instance.close();
       
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var carts = wx.getStorage({
      key: 'cart',
      success: (res) => {
        this.setData({
          carts: res.data
        })
      }
    })
    wx.setStorage({
      key: "cart",
      data: this.data.carts
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
     var carts=wx.getStorage({
      key: 'cart',
      success: (res)=> {
        this.setData({
          carts:res.data
        })
        
        wx.setStorage({
          key: "cart",
          data: this.data.carts
        })
      },
     
     
    })

    wx.switchTab({ url: '../car/car' })
   
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