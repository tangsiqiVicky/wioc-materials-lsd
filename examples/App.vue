<template lang="html">
  <div class="html-container" style="height:100%">
    <el-container style="height:100%">
      <el-header height="40">
        <header-model></header-model>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <menu-model></menu-model>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>

</style>

<script>
import HeaderModel from './components/header'
import MenuModel from './components/menu'
export default {
  components: {
    HeaderModel,
    MenuModel
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
