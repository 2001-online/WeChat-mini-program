// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    img:'',
    code:"",
    access_token:"",
    userinfo:{
      Session_key:''
    },
    isShowMask: true,
    userPhone:''//用户登录手机号
  },
  // 将用户登录手机号存入本地
  onphone(e){
    const userPhone = e.detail.value;
    this.setData({
      userPhone,
    });
  },

  // 微信登录按钮点击事件
  // onLogin() {
  //   let that = this
  //   wx.login({
  //     success: function (res) {
  //       if (res.code) {
  //         // 发起网络请求，获取Session_key和openid
  //         wx.request({
  //           url: 'https://api.weixin.qq.com/sns/jscode2session',
  //           data: {
  //             appid:"wx0ff1651dfbbddb58",
  //             secret:"07100290cc4543dff7b55d433fb61363",
  //             js_code:res.code,
  //             grant_type:"authorization_code"
  //           },
  //           success: function (res) {
  //             console.log(res)
  //             // 将返回的openid，session_key存入本地，供下次登录使用
  //             wx.setStorageSync('openid', res.data.openid)
  //             wx.setStorageSync('session_key', res.data.session_key)
  //             wx.hideLoading()
  //           }
  //         })
  //       }
  //     }
  //   }),
  //   wx.getUserProfile({
  //     desc:'登录',
  //     success(res){
  //       console.log(res.userInfo);
  //       that.setData({
  //         name:res.userInfo.nickName,
  //         img:res.userInfo.avatarUrl
  //       }),
  //       //登录成功跳转至首页
  //       // wx.reLaunch({
  //       //   url: '/pages/index/index',
  //       // })
  //       wx.showModal({
  //         title: '登录成功',
  //         content: '',
  //         showCancel:false
  //       })
  //       // 登录成功显示tabbar
  //       wx.showTabBar()
  //       //登录成功隐藏登录遮罩层
  //       that.setData({
  //         isShowMask: false
  //       })
  //     },
  //   })
  // },
  // 手机号登录
  click(){
    if(/^1[3-9]\d{9}$/.test(this.data.userPhone)){
      //登录成功将用户手机号发送到后台
      wx.request({
        url: 'https://yiyuan.qiuyi.cn/m/yuyue.php?furl=lz_dsf_zzgh登录提交&phone='+this.data.userPhone,
        method:'POST',
        success(e){
          console.log(e);
        }
      })
      wx.showModal({
        title: '登录成功',
        content: '',
        showCancel:false
      })
      // 登录成功显示tabbar
      wx.showTabBar()
      // 登录成功隐藏遮罩层
      this.setData({
        isShowMask: false
      })
    }else{
      wx.showModal({
        title:'手机号格式不正确，请重新输入'
      })
    }
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