import Mock from 'mockjs'
import userAPT from './user'
import moneyAPT from './money'

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
})

// user相关
Mock.mock(/\/user\/list\/get/, 'get', userAPT.getUserList)

// money相关
Mock.mock(/\/money\/get/, 'get', moneyAPT.getMoneyList)

export default Mock