<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
  .aa{
      display: inline-block;
  }
</style>
## Dagataltext(数字文字结合)
将数字文字的信息聚合到容器中进行展示
:::demo
``` html
<template>
  <wioc-digital-text1 class="zoom"  title="今日环境" dagital="40" text="PM2.5"></wioc-digital-text1>
  <wioc-digital-text1 class="zoom" title="社会治理" type="typeb" dagital="0" text="待处理"></wioc-digital-text1>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>

</style>
```
:::


### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 设置标题| string| - | - |
| type | 设置显示类型 | string| typea/typeb|typa|
| dagital | 设置显示数字 | string | -|-|
| text | 设置显示文字 | string | -| - |
