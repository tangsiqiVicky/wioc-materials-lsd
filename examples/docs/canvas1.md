<script>
export default {
  data () {
    return {
      midList: [{
          name : "hhh" ,
          num : 1 ,
      },{
          name : "www" ,
          num : 2,
      },{
          name : "www" ,
          num : 3 ,
      },{
          name : "www" ,
          num : 4 ,
      },{
          name : "www" ,
          num : 5 ,
        }],
      overviewList: {
          total: 269,
          name:"中心办理事项",
          unit:"项",
          dataUnit:"位",
          data: [{
             name: "当前工作人员",
              num: 108
          },{
              name: "当前开放工位",
              num: 126
          },{
              name: "中心工作人员",
              num: 175
          },{
              name: "中心工位数",
              num: 111
          }]
      }
    }
  },
  methods: {

  }
}
</script>
## canvas1
介绍canvas1的使用,当鼠标放在图形的位置里面，图形的旋转会停止，此时鼠标会变成手指样式，离开后继续旋转。
:::demo
``` html
<template>
<wioc-canvas2 class="zoom" :mid-list="midList" ></wioc-canvas2>
</template>
<script>
export default {
  data () {
    return {
      midList: [{
          name : "hhh" ,
          num : 1 ,
      },{
          name : "www" ,
          num : 2,
      },{
          name : "www" ,
          num : 3 ,
      },{
          name : "www" ,
          num : 4 ,
      },{
          name : "www" ,
          num : 5 ,
        }],
    overviewList: {
      total: 269,
      name:"中心办理事项",
      unit:"项",
      dataUnit:"位",
      data: [{
         name: "当前工作人员",
          num: 108
      },{
          name: "当前开放工位",
          num: 126
      },{
          name: "中心工作人员",
          num: 175
      },{
          name: "中心工位数",
          num: 111
      }]
  }
    }
  },
  methods: {

  }
}
</script>
```
:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| midList | 传输数据 | Array | - | - |
| overviewList | 传输数据 | Array | - | - |
| type | 选择图形类型 | String | ballFirst/ballSecond | ballFirst |

