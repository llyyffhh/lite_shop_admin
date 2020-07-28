import request from '@/utils/request'

const logApi = {
  logList: '/user/log/list'
}


export function list (queryParam) {
  return request({
    url : logApi.logList,
    method : 'get',
    params : queryParam
  })
}