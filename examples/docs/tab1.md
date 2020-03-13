## Tab 选项卡
选项卡的类型和使用展示
### Tab基础用法
:::demo
``` html
<template>
<wioc-tab1 class="tab zoom" :tabsList="datalist">
</wioc-tab1>

</template>
<script>
export default {
  data () {
    return {
     datalist:[{name:"年"},{name:"月"},{name:"日"}]
    }
  }
}
</script>
<style lang="css">
.tab{padding-top:30px}
</style>
```
<script>
export default {
  data () {
    return {
     datalist:[
     {name:"年"},{name:"月"},{name:"日"}
     ]
    }
  }
}
</script>
<style lang="css">
.tab{padding-top:30px}
</style>
:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| tabs-list | 选项卡中选项信息| array| - | - |
| type | 设置选项卡的类型 | string| bar / arrow / poly/radius / switch  | bar |

### tabs-list
| 属性      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|name | 选项名字| string| - | - |
