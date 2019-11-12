var config = require('../../http');
Page({
  data: {
    alarms: [],
    curPage: 1,
    pageSize: 20,
  },
  onLoad: function (options) {
    wx.request({
      url: config.service.url + `api/devices/events/realAlert?page=${this.data.curPage}&pageSize=${this.data.pageSize}`,
      header: config.service.header,
      success: res => {
        console.log("报警列表:  ", res)
        if (res.data && res.data.results && res.data.results.length > 0) {
          this.setData({
            alarms: res.data.results
          });

        }
      }
    })

  },
  onShow: function () {},
  
  //下拉加载数据
  onReachBottom() {
    var oldData = this.data.alarms;
    var page = this.data.curPage;

    wx.showLoading({
      title: "加载中"
    })
    this.setData({
      curPage: ++page
    })
  

    wx.request({
      url: config.service.url + `api/devices/events/realAlert?page=${this.data.curPage}&pageSize=${this.data.pageSize}`,
      header: config.service.header,
      success: res => {
        console.log("上拉加载:  ", res)
        if (res.data && res.data.results && res.data.results.length > 0) {
          this.setData({
            alarms: oldData.concat(res.data.results)
          });

          wx.hideLoading();

        }
      }
    })



  }

})