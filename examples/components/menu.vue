<template lang="html">
  <section class="menu-model">
   ﻿ <el-menu default-active="1" :unique-opened="true" :default-openeds="['1', '2', '3']" :default-active="defaultActive"  :router="true">
        <el-submenu index="0">
            <section slot="title">
              <span>开发指南</span>
            </section>
            <el-menu-item-group>
              <el-menu-item index="/guide/install">安装</el-menu-item>
              <el-menu-item index="/guide/quikeStart">快速上手</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="1">
            <section slot="title">
                <span>通用模块</span>
            </section>
            <el-submenu index="10">
                <section slot="title">卡片</section>
                <el-menu-item index="/card1">卡片1</el-menu-item>
            </el-submenu>
            <el-submenu index="11">
                <section slot="title">选项卡</section>
                <el-menu-item index="/tab1">选项卡1</el-menu-item>
            </el-submenu>
            <el-submenu index="12">
                <section slot="title">菜单</section>
                <el-menu-item index="/menu1">菜单1</el-menu-item>
            </el-submenu>
            <el-submenu index="13">
                <section slot="title">数字指标展示</section>
                <el-menu-item index="/dagitalText1">数字指标1</el-menu-item>
            </el-submenu>
            <el-submenu index="14">
                <section slot="title">图表指标展示</section>
                <el-menu-item index="/bar">柱形图</el-menu-item>
                <el-menu-item index="/pie">饼状图</el-menu-item>
                <el-menu-item index="/line">折线图</el-menu-item>
                <el-menu-item index="/com">复合图</el-menu-item>
                <el-menu-item index="/radar">雷达图</el-menu-item>
                <el-menu-item index="/words">词云图</el-menu-item>
            </el-submenu>
            <el-submenu index="15">
                <section slot="title">动态图</section>
                <el-menu-item index="/canvas1">动态图1</el-menu-item>
               
            </el-submenu>
            <el-submenu index="16">
                <section slot="title">列表</section>
                <el-menu-item index="/list1">列表1</el-menu-item>
            </el-submenu>
            <el-submenu index="17">
                <section slot="title">地图</section>
                <el-menu-item index="171">three.js地图</el-menu-item>
                <el-menu-item index="171">svg地图</el-menu-item>
            </el-submenu>
            <el-submenu index="18">
                <section slot="title">视频</section>
                <el-menu-item index="181">视频1</el-menu-item>
            </el-submenu>
             <el-submenu index="19">
                <section slot="title">弹窗</section>
                <el-menu-item index="/popup1">弹窗1</el-menu-item>
            </el-submenu>
            <el-submenu index="20">
                <section slot="title">表格</section>
                <el-menu-item index="/table1">表格1</el-menu-item>
            </el-submenu>
            <el-menu-item-group>
              <el-menu-item index="/iconSvg">图标</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
  </section>
</template>

<script>
export default {
  data () {
    return {
      defaultActive: '/guide/install'
    }
  },
  created () {
    const path = this.$route.fullPath
    this.defaultActive = path == '/' ? '/guide/install' : path
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
