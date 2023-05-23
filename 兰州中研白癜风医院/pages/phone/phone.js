// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onCall(){
    wx.makePhoneCall({
      phoneNumber: '0931-8185032'
    })
  },
  onPhone(){
    wx.makePhoneCall({
      phoneNumber: '15693151293'
    })
    
  },
  onTabItemTap: function (item) {
    console.log(item);
    wx.showModal({
      title: '电话咨询',
      content: '拨号后会有专业客服为您接电，有任何问题都能帮您解答',
      success(res){
        console.log(res); 
        if(res.confirm==true){
          wx.makePhoneCall({
            phoneNumber: '0931-8185032'
          })
        }else{
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
      }
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})