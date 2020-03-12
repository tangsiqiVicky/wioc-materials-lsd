<script>
export default {
  data () {
    return {
    markline:5,
    provideNumber:1,
    options:{
        top: '8%',
        right: '3%',
        left: '13%',
        bottom: '18%'
    },
    }
  },
  methods: {

  }
}
</script>
<!--
注意：具有交互功能的说明文档，需要有<script></script>标签，在标签元素中定义需要导出的vue实例。
在:::demo ::: 代码块中定义的模版<template></template>会作为导出的vue实例的模版，但是在代码块中的<script></script>中的内容仅作为展示，需注意。
border: solid angle radius none
-->
## word 词云
将信息聚合在卡片容器中展示。
### 词云基础用法
:::demo
``` html
<template>
 <h4>chart 词云</h4>
 <chart-word-cloud></chart-word-cloud>
</template>
<style lang="css">

</style>
```
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="css">

</style>
:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 设置标题| string| — | - |
| border | 设置边框显示时机 | string| none / solid / radius / angule  | solid |
| titpos | 设置阴影显示时机 | - | - |
| shadow | 设置阴影显示时机 | string | insetshadow / outshadow  | - |
