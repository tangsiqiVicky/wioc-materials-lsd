<script>
export default {
  data () {
    return {
        title:"成功"
    }
  },
  methods: {
    click () {
          var popup=document.getElementsByClassName("Popup")[0];
          popup.style.display="block";
    }
  }
}
</script>
## Popup
介绍Popup的使用
:::demo
``` html
<template>
  <button @click="click">按钮</button> </template>
  <wioc-popup1 class="zoom":title="title"></wioc-popup1>
<script>
export default {
  data () {
    return {
        title:"成功"
    }
  },
  methods: {
    click () {
          var popup=document.getElementsByClassName("Popup")[0];
          popup.style.display="block";
    }
  }
}
</script>
```
:::
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| - | - | - | - | - |
