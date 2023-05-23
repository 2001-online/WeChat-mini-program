const request = (url, data = {}, method = 'GET') => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "http://iwenwiki.com:3000",
      data: data,
      method: method,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          reject("请求失败");
        }
      },
      fail: (err) => {
        reject("请求失败");
      }
    })
  })
}

module.exports = {
  request: request
}