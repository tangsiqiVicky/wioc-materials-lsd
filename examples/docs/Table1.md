<script>
	export default {
	  data(){
	    return {
	       tablelist:{
				head: [{
					name: "办件编号",
					width: 110
				}, {
					name: "环节名称",
					width: 110
				}, {
					name: "办理人",
					width: 70
				}, {
					name: "办理时间",
					width: 80
				}, {
					name: "意见",
					width: 180
				}],
				body: [{
					num: "201909161025",
					name: "办理企业注册",
					poser: "周林",
					time: "2019/09/16",
					opinion: "意见"
				}, {
					num: "201909161026",
					name: "办理企业注册",
					poser: "周林",
					time: "2019/09/16",
					opinion: "意见"
				}]
			}
	    }
	  }
	}
</script>
<!--
注意：具有交互功能的说明文档，需要有<script></script>标签，在标签元素中定义需要导出的vue实例。
在:::demo ::: 代码块中定义的模版<template></template>会作为导出的vue实例的模版，但是在代码块中的<script></script>中的内容仅作为展示，需注意。
-->
## Table 表格
将信息聚合在卡片容器中展示。
### Table基础用法
:::demo
``` html
<template>
  <wioc-table1 class="zoom" :tablelist="tablelist" :tableclass="'odd'" :scroll="false"></wioc-table1>
</template>
<script>
	export default {
	  data(){
	    return {
	       tablelist:{
				head: [{
					name: "办件编号",
					width: 110
				}, {
					name: "环节名称",
					width: 110
				}, {
					name: "办理人",
					width: 70
				}, {
					name: "办理时间",
					width: 80
				}, {
					name: "意见",
					width: 180
				}],
				body: [{
					num: "201909161025",
					name: "办理企业注册",
					poser: "周林",
					time: "2019/09/16",
					opinion: "意见"
				}, {
					num: "201909161025",
					name: "办理企业注册",
					poser: "周林",
					time: "2019/09/16",
					opinion: "意见"
				}, {
					num: "201909161025",
					name: "办理企业注册",
					poser: "周林",
					time: "2019/09/16",
					opinion: "意见"
				}, {
					num: "201909161025",
					name: "办理企业注册",
					poser: "周林",
					time: "2019/09/16",
					opinion: "意见"
				}, {
					num: "201909161025",
					name: "办理企业注册",
					poser: "周林",
					time: "2019/09/16",
					opinion: "意见"
				}, {
					num: "201909161025",
					name: "办理企业注册",
					poser: "周林",
					time: "2019/09/16",
					opinion: "意见"
				}, {
					num: "201909161025",
					name: "办理企业注册",
					poser: "周林",
					time: "2019/09/16",
					opinion: "意见"
				}, {
					num: "201909161025",
					name: "办理企业注册",
					poser: "周林",
					time: "2019/09/16",
					opinion: "意见"
				}]
			}
	    }
	  }
	}
</script>
<style lang="css">

</style>
```

:::

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| tablelist | 表格内容包括head属性，body属性| Object| — | - |
| tableclass | 设置表格各层显示 | string| odd / even | -|
| scroll | 设置是否滚动 | Boolean | true/false |false |

### 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 点击行触发事件| 目前的选中值 |

