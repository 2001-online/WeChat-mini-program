Page({
  data: {
    hospital: '兰州中研白癜风医院',
    bumen:'兰州中研',
    sex:['男','女'], //性别
    selectedSex:'',
    doctorList: ['副主任医师 - 袁雄', 
                '白癜风医生 - 杨红红', 
                '白癜风医生 - 侯慧永',
                '白癜风医生 - 张剑',
                '白癜风医生 - 牛晨曦'
              ], // 下拉选择列表数据
    selectedDoctor: '副主任医师 - 袁雄', // 默认选择的医生
    dateString:'', //预约最早日期
    selectedDate: '', // 默认预约时间为空
    name: '', // 患者姓名
    phone: '', // 联系电话
    age: '', // 年龄
  },
  onDoctorChange: function(e) { // 医生选择器值改变触发事件
    const index = e.detail.value;
    const selectedDoctor = this.data.doctorList[index];
    this.setData({
      selectedDoctor,
    });
  },
  onShow(){
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let dateString = `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`;
    console.log(dateString);
    this.setData({
      dateString,
    })
  },
  onDateChange: function(e) { // 日期选择器值改变触发事件
    const selectedDate = e.detail.value;
    this.setData({
      selectedDate,
    });
  },
  onNameInput: function(e) { // 姓名输入框输入触发事件
    const name = e.detail.value;
    this.setData({
      name,
    });
  },
  onPhoneInput: function(e) { // 联系电话输入框输入触发事件
    const phone = e.detail.value;
    this.setData({
      phone,
    });
  },
  onGenderInput: function(e) { // 性别输入框值改变触发事件
    console.log(e);
    const index = e.detail.value;
    const selectedSex = this.data.sex[index];
    this.setData({
      selectedSex,
    });
  },
  onAgeInput: function(e) { // 年龄输入框输入触发事件
    const age = e.detail.value;
    this.setData({
      age,
    });
  },
  onSubmit: function() { // 提交按钮点击触发事件
    let furl = 'lz_dsf_zzgh挂号提交'
    let baseURL = 'https://yiyuan.qiuyi.cn/m/yuyue.php'
    let BDcontent = this.data.selectedDate
    let BDname = this.data.name
    let BDphone = this.data.phone
    let BDage = this.data.age
    let BDbumen = this.data.bumen
    let url = baseURL+ '?content=' + BDcontent + '&name=' + BDname + '&phone=' + BDphone + '&age=' + BDage + '&bumen=' + BDbumen + '&furl=' + furl
    // console.log(url);
    console.log(this.data.selectedDate.length);
    //判断用户是否完整填写信息
    if(this.data.name=='' || this.data.age=='' || !this.data.selectedDate || this.data.phone==''){
      wx.showModal({
        title: '请完整填写就诊人信息',
        showCancel:false
        // content: '挂号成功',
      })
    }else{
      //判断手机号格式是否正确
    if(/^1[3-9]\d{9}$/.test(this.data.phone)){
      // 手机号正确
      wx.request({
        url: url,
        // url: 'https://yiyuan.qiuyi.cn/m/biaodan.php',
        method:"POST",
        // data:{
        //   'content': this.data.selectedDate,
        //   'name': this.data.name,
        //   'phone': this.data.phone,
        // },
        success(e){
          console.log(e);
          //挂号成功弹窗
          wx.showToast({
            title: '挂号成功'
          })
        }
      })
      wx.hideToast()
    }else{
      wx.showModal({
        title: '手机号格式不正确',
        content:'请重新输入手机号',
        showCancel:false
      })
    }
  }
    

    const appointmentInfo = {
      hospital: this.data.hospital,
      doctor: this.data.selectedDoctor,
      date: this.data.selectedDate,
      name: this.data.name,
      phone: this.data.phone,
      gender: this.data.gender,
      age: this.data.age,
    };
    // console.log('提交预约信息：', appointmentInfo);
    // 这里可以进行数据保存等操作
    // ...
  },
});