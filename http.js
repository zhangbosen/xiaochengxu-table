
var host = 'http://192.168.1.100:7777/';
var header = {
  'X-Link-Tenant': '1234567890',
  'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ='
}






var config = {
  service: {
    url: host,
    header: header
  }
};

module.exports = config;