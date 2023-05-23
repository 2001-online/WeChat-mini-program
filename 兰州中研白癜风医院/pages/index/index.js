// pages/index/index.js
import api from '../../utils/login'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    telephone:"0931-8185032", //医院固话
    hasDoneSomething: false,  
    // 医院简介信息
    yiyuanjianjie:"  兰州中研白癜风医院是甘肃省一家省、市、区医保定点单位，医院坚持“以人为本”的就医理念，汇聚一批临床经验丰富、学识深厚，技术专业的白癜风医生，他们能够针对于白癜风患者的病情，来进行辨证施治，制定个体化的治疗方案，以专业全面诊疗水平，科学规范化的诊疗模式，优质有效的医疗服务，来帮助众多的白癜风患者重拾皮肤健康。",
    // 医生列表信息
    doctorList:[
      {
        image:'https://res.bdfai.com/koubei/dsf/xcx/lz/yx.jpg',
        name:'袁雄',
        zhiwu:'副主任医师',
        shangchang:'擅长：中西医结合、辨证分型治疗各种顽固性、遗传性白癜风，针对男性白癜风，针对儿童白癜风'
      },
      {
        image:'https://res.bdfai.com/koubei/dsf/xcx/lz/yhh.jpg',
        name:'杨红红',
        zhiwu:'白癜风医生',
        shangchang:'擅长：青少年及女性白癜风的临床分型、分期、分诊。对女性儿童白癜风症状有独到见解'
      },
      {
        image:'https://res.bdfai.com/koubei/dsf/xcx/lz/hhy.jpg',
        name:'侯慧永',
        zhiwu:'白癜风医生',
        shangchang:'擅长：各类型白癜风的诊断及治疗，熟练掌握多种白斑、白癜风的光化学治疗和多种手术治疗技术'
      },
      {
        image:'https://res.bdfai.com/koubei/dsf/xcx/lz/zj.jpg',
        name:'张剑',
        zhiwu:'白癜风医生',
        shangchang:'擅长：疑难白癜风、顽固白癜风、稳定期白癜风,男性白癜风，儿童白癜风等'
      },{
        image:'https://res.bdfai.com/koubei/dsf/xcx/lz/ncx.jpg',
        name:'牛晨曦',
        zhiwu:'白癜风医生',
        shangchang:'擅长：各种疑难白癜风病，以及对局限型、散发型、泛发型、肢端型白癜风病等'
      }
    ],
    // 热门问答
    PopularQ_A:[
      {
        id:"0",
        title:"Q：白癜风初期有什么症状，大致是什么样子?",
        state:false, // 热门问答内容展开收起状态
        content:"A：白癜风早期的症状多为浅白色或灰白色，随着病情的发展会逐渐加深，变成云白色、纯白色或瓷白色。白癜风早期白斑数量较少，一般为一片或两片，随着时间的推移，白斑数量会逐渐增加。白癜风早期是治疗黄金期治疗效果好，建议患者得了白癜风一定要早治疗早康复。"
      },
      {
        id:"1",
        title:"Q：早期白癜风吃什么中药能好吗?",
        state:false, // 热门问答内容展开收起状态
        content:"A：初期白癜风采用中药是可以有效控制白斑不发展的，需要注意的是，患者在用药时一定要遵照医嘱，每个患者发病情况不同，具体采用的药物也是有区别的，如果患者胡乱采用效果难保证不说，还有可能刺激白斑使得病情加重。"
      },
      {
        id:"2",
        title:"Q：得了白癜风吃什么能促进黑色素生长?",
        state:false, // 热门问答内容展开收起状态
        content:"A：白癜风的出现是由于身体中黑色素缺失形成的，因此可以利用食疗促进黑色素合成，常见饮食有：黑芝麻，黑米，黑豆，黑木耳，桑葚等含有丰富的黑色素，有利于促进黑色素合成，帮助患者辅助治疗。"
      },
      {
        id:"3",
        title:"Q：Recell术后多长时间白斑能好?",
        state:false, // 热门问答内容展开收起状态
        content:"A：通过临床数据表现，Recell术后一般需要三到六个月的时间能达到肉眼可见的效果，由于白癜风其发病机制较为复杂，各种诱发因素又互相联系、互为影响，加之个人的年龄、健康状况、发病部位的差异，以及接受治疗的耐心程度不同，疗效存在明显的差异。"
      },
      {
        id:"4",
        title:"Q：去医院需要提前挂号吗?",
        state:false, // 热门问答内容展开收起状态
        content:"A：你好，是要至少提前一天挂号的，小程序支持网上预约挂号，提前挂号可享受专家30分钟超长面诊服务。"
      }
    ]
  },
  // 预约点击事件
  toYuyue(){
    wx.switchTab({
      url: '/pages/yue/yue',
    })
  },
  //点击拨号事件
  onCall: function () {
    // wx.showModal({
    //   title: '电话咨询',
    //   content: '拨号后会有专业客服为您接电，有任何问题都能帮您解答',
    //   success(res){
    //     console.log(res); 
    //     if(res.confirm==true){
    //       wx.makePhoneCall({
    //         phoneNumber: '0931-8185032'
    //       })
    //     }
    //   }
    // }) 
    wx.makePhoneCall({
      phoneNumber: this.data.telephone
    })
  },
  Cshow(e){
    let state = this.data.PopularQ_A[e.target.dataset.id].state
    switch(e.target.dataset.id){
      case '0':
        if(state==false){
          this.setData({
            'PopularQ_A[0].state':true
          })
        }else{
          this.setData({
            'PopularQ_A[0].state':false
          })
        }
        break;
      case '1':
        if(state==false){
          this.setData({
            'PopularQ_A[1].state':true
          })
        }else{
          this.setData({
            'PopularQ_A[1].state':false
          })
        }
        break;
      case '2':
        if(state==false){
          this.setData({
            'PopularQ_A[2].state':true
          })
        }else{
          this.setData({
            'PopularQ_A[2].state':false
          })
        }
        break;
      case '3':
        if(state==false){
          this.setData({
            'PopularQ_A[3].state':true
          })
        }else{
          this.setData({
            'PopularQ_A[3].state':false
          })
        }
        break;
      case '4':
        if(state==false){
          this.setData({
            'PopularQ_A[4].state':true
          })
        }else{
          this.setData({
            'PopularQ_A[4].state':false
          })
        }
        break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // wx.showModal({
    //   title: '登录提示',
    //   content: '为了更好为您服务请先登录',
    //   showCancel:false
    // })
    //   if (this.hasDoneSomething) {  // 如果已经执行过了，就直接返回，不再执行方法体的代码
    //     return;
    //   }
    //   this.hasDoneSomething = true;  // 第一次执行完成后将变量设为 true
    // // 登录遮罩隐藏tabbar
    // wx.hideTabBar()
    // api.request({
    //   url: 'http://iwenwiki.com:3000/search/hot/detail',
    //   success(res){
    //     console.log("登录信息",res.data);
    //   }
    // })
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