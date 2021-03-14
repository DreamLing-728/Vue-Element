import Mock from 'mockjs'

let moneyList = []
let count = 100
let payType = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < count; i++) {
    moneyList.push(Mock.mock({
        accoutCash: Mock.Random.integer(0, 9999),
        address: Mock.mock('@county(true)'),
        createTime: Mock.Random.datetime(),
        id: Mock.Random.guid(),
        income: Mock.Random.integer(0, 9999),
        'incomePayType|1': payType,
        pay: Mock.Random.integer(0, 9999),
        username: Mock.Random.cname(),
        sortNum: i + 1
    }))
}
export default {
    /** 
    *获取资金列表
    *@param name page limit ,name可以不填，page/limit有默认值 
    *@return {{code: number, data: { total: number, userList: []}}}
    */
    getMoneyList: (config) => {
        window.console.log('mock-money-config', config)
        const { limit, page } = JSON.parse(config.body)
        let pageMoneyList = moneyList.filter((item, index) => index < page * limit && index >= (page - 1) * limit)
        return {
            code: 200,
            data: {
                total: moneyList.length,
                moneyList: pageMoneyList
            }
        }
    }
}