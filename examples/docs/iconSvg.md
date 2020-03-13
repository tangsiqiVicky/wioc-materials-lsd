<script>
    import './icon/iconfont.js';
	import './icon/self-icon.js';
	export default {
	  data(){
	    return {
	       
	    }
	  }
	}
</script>
<!--
注意：具有交互功能的说明文档，需要有<script></script>标签，在标签元素中定义需要导出的vue实例。
在:::demo ::: 代码块中定义的模版<template></template>会作为导出的vue实例的模版，但是在代码块中的<script></script>中的内容仅作为展示，需注意。
-->
## iconSvg
介绍iconSvg图标组件的使用，结合iconfont使用。首先引入Symbol文件中iconfont.js,self-icon.js
:::demo
``` html
<template>
    <wioc-icon-svg name="icondingyue" ></wioc-icon-svg>

</template>
<script>
import './icon/iconfont.js';
import './icon/self-icon.js';
export default {
  data () {
    return {
	
    }
  }
}
</script>
```

:::
### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name | icon Font Class / Symbol 设置名称| Number/String | - | - |

