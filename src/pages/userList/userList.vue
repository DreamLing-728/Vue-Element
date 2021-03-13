<template>
  <div class="page_index">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="sortnum" label="序号" align="center">
      </el-table-column>
      <el-table-column prop="username" label="用户姓名" align="center">
      </el-table-column>
      <el-table-column prop="email" label="邮箱地址" align="center">
      </el-table-column>
      <el-table-column prop="address" label="注册地址" align="center">
      </el-table-column>
      <el-table-column prop="region" label="地区" align="center">
      </el-table-column>
      <el-table-column prop="isp" label="网络" align="center">
      </el-table-column>
      <el-table-column prop="ip" label="IP" align="center"> </el-table-column>
      <el-table-column prop="createTime" label="注册时间" align="center">
      </el-table-column>
      <el-table-column prop="updateTime" label="登录时间" align="center">
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="24">
        <div class="pagination">
          <el-pagination
            v-if="paginations.total > 0"
            :page-sizes="paginations.pageSizes"
            :page-size="paginations.pageSize"
            :layout="paginations.layout"
            :total="paginations.total"
            :current-page="paginations.pageIndex"
            @current-change="handleCurrentChange"  
            @size-change="handleSizeChange"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getUserList } from '@/api/user'
export default {
  name: '',
  data () {
    return {
      tableData: [],
      paginations: {
        total: 0, // 总数
        pageIndex: 1, // 当前页
        pageSize: 5, // 1页显示多少条
        pageSizes: [5, 10, 15, 20], // 每页显示多少条
        layout: "total, sizes, prev, pager, next, jumper" //翻页的摆放顺序
      }
    }
  },
  methods: {
    getUserList () {
      let para = {
        limit: this.paginations.pageSize,
        page: this.paginations.pageIndex
      }
      getUserList(para).then((res) => {
        window.console.log('page-getUserList', res)
        if (res.code === 200) {
          this.tableData = res.data.userList
          this.paginations.total = res.data.total
        }
      })
    },
    handleCurrentChange(e) {
      this.paginations.pageIndex = e
      this.getUserList()
    },
    handleSizeChange(e) {
      this.paginations.pageSize = e
      this.getUserList()
    }
  },
  created () { },
  mounted () {
    this.getUserList()
  },
}
</script>

<style scoped lang='less'>
.pagination {
  padding: 10px 20px;
  text-align: center;
}
</style>