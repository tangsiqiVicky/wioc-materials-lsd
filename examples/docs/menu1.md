<script>
export default {
  data () {
    return {
      topmenulist:[{name:'全区'},{name:'行政服务中心'},{name:'南京西路街道'},{name:'宝山路街道'}],
    }
  },
}
</script>
## Menu（滚轮菜单）
将菜单信息聚合到菜单容器中展示
:::demo
``` html
<template>
  <wioc-menu1 class="zoom" :top-menu-list="topmenulist"> </wioc-menu1>
</template>
<script>
export default {
  data () {
    return {
      topmenulist:[{name:'全区'}，{name:'行政服务中心'}，{name:'南京西路街道'}，{name:'宝山路街道'}]
    }
  }
}
</script>
```
:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| topmenulist |绑定数据| array| - | - |

### top-menu-list
| 属性      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name |菜单名称| string| - | - |
