<template>
    <div class="layout_content">
        <left-Menu></left-Menu>
        <router-view></router-view>
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
</style>
