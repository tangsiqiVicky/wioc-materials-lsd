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
介绍canvas1的使用,动态图表使用
:::demo
``` html
<template>

</template>
<script>
export default {
  data () {
    return {

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

