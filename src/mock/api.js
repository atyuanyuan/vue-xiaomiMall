import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  'status': 0,
  'data': {
    'id|1-3': 12,
    'username': 'admin',
    'email': '870670355@qq.com',
    'phone': '15837950603',
    'role': '0',
    'createTime': '1479048325000',
    'updateTime': '1479048325000'
  }
})
