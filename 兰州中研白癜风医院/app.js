// app.js
App({
  // onLaunch() {
  //   // 展示本地存储能力
  //   const logs = wx.getStorageSync('logs') || []
  //   logs.unshift(Date.now())
  //   wx.setStorageSync('logs', logs)
  //   // 登录
  //   wx.login({
  //     success: res => {
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //       console.log(res);
  //       const code=res.code
  //       wx.request({
  //         url: '后端接口',
  //         data: {
  //           code: code
  //         },
  //         header: {
  //           'content-type': 'application/json'
  //         },
  //         success: (res) => {
  //           // 请求成功，获取返回结果
  //           const session_key = res.data.session_key;
  //           const openid = res.data.openid;
    
  //           // 将 session_key 和 openid 存储在本地缓存中
  //           wx.setStorageSync('session_key', session_key);
  //           wx.setStorageSync('openid', openid);
  //         },
  //         fail: (err) => {
  //           console.log('请求失败', err);
  //         }
  //       })
  //     }
  //   })
  // }
})
