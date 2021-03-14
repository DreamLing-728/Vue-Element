import request from '@/utils/axios'

export function getMoneyIncomPay (params) {
    window.console.log('api-money-params', params)
    return request({
        url: '/money/get',
        method: 'get',
        data: params
    })
}