<template>
  <div class="">
    <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-cloumn label="姓名" props="username" align="center"> 
      </el-table-cloumn>
    </el-table> -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" align="center" width="60">
      </el-table-column>
      <el-table-column label="序号" prop="sortNum" align="center">
      </el-table-column>
      <el-table-column label="姓名" prop="username" align="center">
      </el-table-column>
      <el-table-column label="籍贯" prop="address" align="center" >
          <template slot-scope="scope">
              <span style="color: #00d053">+{{scope.row.address}}</span>
          </template>
      </el-table-column>
      <el-table-column
        label="投入时间"
        prop="createTime"
        align="center"
        sortable
      >
      </el-table-column>
      <el-table-column
        label="收入类型"
        align="center"
        :formatter="formatterType"
        :filters="typeFilters"
        :filter-method="filterType"
      >
      </el-table-column>
      <el-table-column label="收入" prop="income" align="center" sortable>
          <template slot-scope="scope">
              <span style="color: #00d053">+{{scope.row.income}}</span>
          </template>
      </el-table-column>
      <el-table-column label="支出" prop="pay" align="center" sortable>
          <template slot-scope="scope">
              <span style="color: #f56767">+{{scope.row.pay}}</span>
          </template>
      </el-table-column>
      <el-table-column label="账户现金" prop="accoutCash" align="center">
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="paginations.pageIndex"
      :page-sizes="paginations.pageSizes"
      :page-size="paginations.pageSize"
      :layout="paginations.layout"
      :total="paginations.total"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<script>
import { getMoneyIncomPay } from '@/api/money'
export default {
  name: '',
  data () {
    return {
      tableData: [],
      paginations: {
        total: 0,
        pageIndex: 1,
        pageSize: 5,
        pageSizes: [5, 10, 15, 20],
        layout: "total, sizes, prev, pager, next, jumper",
      },
      format_type_list: {
        0: '提现',
        1: '提现手续费',
        2: '提现锁定',
        3: '理财服务退出',
        4: '购买宜定盈',
        5: '充值',
        6: '优惠券',
        7: '充值礼券',
        8: '转账'
      },
      typeFilters: [{
        text: '提现',
        value: 0
      }, {
        text: '提现手续费',
        value: 1
      }, {
        text: '提现锁定',
        value: 2
      }, {
        text: '理财服务退出',
        value: 3
      }, {
        text: '购买宜定盈',
        value: 4
      }, {
        text: '充值',
        value: 5
      }, {
        text: '优惠券',
        value: 6
      }, {
        text: '充值礼券',
        value: 7
      }, {
        text: '转账',
        value: 8
      }]
    }
  },
  methods: {
    getMoneyList () {
      let para = {
        page: this.paginations.pageIndex,
        limit: this.paginations.pageSize
      }
      getMoneyIncomPay(para).then((res) => {
        window.console.log('page-fundList-res', res)
        if (res.code === 200) {
          this.tableData = res.data.moneyList
          this.paginations.total = res.data.total
        }
      })
    },
    // 格式化数据：重新复制
    formatterType (row) {
      // window.console.log('page-fundList-value,row, column, cellValue, index',row)
      let index = parseInt(row.incomePayType)
      return this.format_type_list[index]
    },
    // 筛选数组:每一行都做匹配，如果return true，返回当前行
    filterType (value, row) {
      window.console.log('page-fundList-value, row, column', value, row)
      const type = parseInt(row.incomePayType)
      return this.format_type_list[value] == this.format_type_list[type]
    },
    // 切换页码
    handleCurrentChange (e) {
      this.paginations.pageIndex = e
      this.getMoneyList()
    }
  },
  created () { },
  mounted () {
    this.getMoneyList()
  },
}
</script>

<style scoped lang='less'>
</style>