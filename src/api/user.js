import request from '@/utils/axios'

export function getUserList (reqData) {
    return request({
        url: '/user/list/get',
        method: 'get',
        data: reqData
    })
}

export function logout(params) {
    return request({
      url: '/user/logout',
      method: 'get',
      data:params
    })
  }
  
  
  export function getUserInfo(params) {
    return request({
      url: '/user/info/get',
      method: 'get',
      data:params
    })
  }
  