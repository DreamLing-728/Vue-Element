<template>
  <div class="menu_left">
    <div class="menu_page_top cflex">
      <div class="title">小小梦</div>
    </div>
    <div class="menu_page_bottom is-scroll-left">
      <el-menu :default-openeds="['1', '1']">
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>导航一</template
          >
          <router-link to="/index">
            <el-menu-item index="1-1">首页</el-menu-item>
          </router-link>
          <router-link to="/userList">
            <el-menu-item index="1-1">用户列表</el-menu-item>
          </router-link>
          <router-link to="/fundList">
            <el-menu-item index="1-1">资金列表</el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: 'left-Menu',
  data () {
    return {}
  },
  components: {},
  methods: {},
  created () { },
  mounted () { }
}
</script>

<style scoped lang='less'>
.menu_left {
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.menu_page_top {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 2px 5px 0px rgba(230, 224, 224, 0.5);
}
.menu_page_bottom {
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1; //自适应剩余宽度
  margin-top: 3px;
  z-index: 10;
  box-shadow: 0 0 10px 0 rgba(230, 224, 224, 0.5);
}
</style>
