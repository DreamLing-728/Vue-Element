import Mock from 'mockjs'

let List = []
let count = 1000
let typeList = ['移动', '联通', '电信', '铁通'];
for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        address: Mock.mock('@county(true)'),
        areaId: /\d{7}/,
        createTime: Mock.Random.datetime(),
        email: Mock.Random.email(),
        id: Mock.Random.guid(),
        ip: Mock.mock('@ip'),
        'isp|1': typeList,
        region: Mock.mock('@region'),
        username: Mock.Random.cname(),
        sortnum: i + 1,
        updateTime: Mock.Random.now()
    }))
}

export default {

    /** 
    *获取用户列表
    *@param name page limit ,name可以不填，page/limit有默认值 
    *@return {{code: number,, data: { total: number, userList: []}}}
    */
    getUserList: config => {
        // window.console.log('mock-user-config', config)
        const { limit, page } = JSON.parse(config.body)
        let mockList = List
        window.console.log('limit,limit, page',limit, page, mockList)
        // 过滤出当前显示页的内容
        let userList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
        return {
            code: 200,
            data: {
                total: mockList.length,
                userList: userList
            }
        }
    }
}