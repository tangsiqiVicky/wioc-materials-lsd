<!--
注意：具有交互功能的说明文档，需要有<script></script>标签，在标签元素中定义需要导出的vue实例。
在:::demo ::: 代码块中定义的模版<template></template>会作为导出的vue实例的模版，但是在代码块中的<script></script>中的内容仅作为展示，需注意。
-->
<script>
export default {
  data () {
    return {
      ListFirst: [
      {
          name:"公安局",
          num:10,
          progress:10,
      },
      {
          name:"民政局",
          num:12,
          progress:20,
      },
      {
          name:"卫生所",
          num:13,
          progress:100,
      }],
    ListTwo:{
    unit:"件",
    head:[
        {context:"警告",state:"22"},
        {context:"处分",state:"11"},
        {context:"好处",state:"11"},
        {context:"坏处",state:"11"}]
    },
    ListThree:{
        head:[{name:"排名",width:200},{name:"排名",width:200},
        {name:"排名",width:200},
        {name:"排名",width:200}],
        body:[{dep:1111,score:1111,rt:1111}]
    },
    ListFour:{
        head:[{name:"排名",width:200},
        {name:"排名",width:200},
        {name:"排名",width:200},
        {name:"排名",width:200}],
        body:[{dep:1111,progress:10,num:1111}]
    },
    ListFive:{
        head:["名次","网格名称","上报数"],
        body:[["社会管理","100%"],["成功","90%"],["社会管理","20%"]]
    },
    ListSix:{
        head:["名次","网格名称","上报数"],
        body:[["社会管理","934"],["社会管理","934"],["社会管理","934"]]
    },
    ListSeven:[
        {name:"排名",num:1,unit:"件"},
        {name:"排名",num:1,unit:"件"},
        {name:"排名",num:1,unit:"件"},
    ]
    }
  }
}
</script>

<style>
    .wioc-list{
    margin-top:.5rem;
    }
    h2:not(:first-child){
        margin-top:4rem;
    }
</style>

## List
介绍List列表的使用
:::demo
``` html
<template>
  <h2>ListFirst</h2>
  <wioc-list class="zoom" :list-first="ListFirst" ></wioc-list>
  <h2>listTwo</h2>
  <wioc-list class="zoom" :list-two="ListTwo" type='listTwo' ></wioc-list>
  <h2>listThree</h2>
  <wioc-list class="zoom" :list-three="ListThree" type='listThree' ></wioc-list>
  <h2>listFour</h2>
  <wioc-list class="zoom" :list-four="ListFour" type='listFour' ></wioc-list>
  <h2>listFive</h2>
  <wioc-list class="zoom" :list-five="ListFive" type='listFive' ></wioc-list>
  <h2>listSix</h2>
  <wioc-list class="zoom" :list-six="ListSix" type='listSix' ></wioc-list>
  <h2>listSeven</h2>
  <wioc-list class="zoom" :list-seven="ListSeven" type='listSeven' ></wioc-list>
</template>
<script>
export default {
  data () {
    return {
      ListFirst: [
      {
          name:"公安局",
          num:10,
          progress:10,
      },
      {
          name:"民政局",
          num:12,
          progress:20,
      },
      {
          name:"卫生所",
          num:13,
          progress:100,
      }],
    ListTwo:{
    unit:"件",
    head:[
        {context:"警告",state:"22"},
        {context:"处分",state:"11"},
        {context:"好处",state:"11"},
        {context:"坏处",state:"11"}]
    },
    ListThree:{
        head:[{name:"排名",width:200},{name:"排名",width:200},
        {name:"排名",width:200},
        {name:"排名",width:200}],
        body:[{dep:1111,score:1111,rt:1111}]
    },
    ListFour:{
        head:[{name:"排名",width:200},
        {name:"排名",width:200},
        {name:"排名",width:200},
        {name:"排名",width:200}],
        body:[{dep:1111,progress:10,num:1111}]
    },
    ListFive:{
        head:["名次","网格名称","上报数"],
        body:[["社会管理","100%"],["成功","90%"],["社会管理","20%"]]
    },
    ListSix:{
        head:["名次","网格名称","上报数"],
        body:[["社会管理","934"],["社会管理","934"],["社会管理","934"]]
    },
    ListSeven:[
        {name:"排名",num:1,unit:"件"},
        {name:"排名",num:1,unit:"件"},
        {name:"排名",num:1,unit:"件"},
    ]
    }
  }
}
</script>

```
:::



### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| ListFirst | 图一数据 | Object | - | - |
| ListTwo | 图二数据 | String | - | - |
| ListThree | 图三数据 | String | - | - |
| ListFour | 图四据 | String | - | - |
| ListFive | 图五据 | String | - | - |
| ListSix | 图六数据 | String | - | - |
| ListSeven | 图七数据 | String | - | - |
| type | 选择图形类型 | String | listFirst/ListTwo/ListThree/listFour/listFive/listSix/listSeven | listFirst |
