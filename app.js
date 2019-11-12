var http = require('http');
App({
  onLaunch: function () {},
  globalData: {
    //userInfo: null,
    userid: '',
    username: '',
    departcode: '',
    defaultLng: '',
    defaultLat: '',
    sockettask: {},
    callback: function () { },
    locReportFlag: false,
    locReporInterval: {},
    locReporIntervalPerSec: 60000,
    msgNumber: 0
  }
})