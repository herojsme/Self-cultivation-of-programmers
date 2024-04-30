// pages/index/index.js
Page({
  data: {
  
  },
  
  fn_login(){
    /*wx.login({
      timeout: 5000,
      success(res){
        console.log('登录成功', res);
      },
      fail(){
        console.log('登录失败');
      }
    });*/

    wx.login({timeout: 5000}).then(res=>{
      console.log('登录成功', res);
    }, err=>{
      console.log('登录失败', err);
    });
  },



  onLoad: function (options) {
  
  },
  onReady: function () {
  
  },
  onShow: function () {
  
  },
  onHide: function () {
  
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
  
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {
  
  }
})