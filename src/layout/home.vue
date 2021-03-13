<template>
    <div class="home">
        <div class="left"><left-Menu></left-Menu></div>
        <div class="right"><router-view></router-view></div>
    </div>
</template>
<script>
import LeftMenu from './leftMenu'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    LeftMenu
  },
  methods: {},
  created () { },
  mounted () { }
}
</script>

<style scoped lang='less'>
.home {
  position: absolute;
  top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
.home .left {
  width: 15%;
  height: 100%;
}
.home .right {
  width: 90%;
  height: 90%;
}
</style>
