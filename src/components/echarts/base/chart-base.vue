<template>
	<div ref="charObj" class="chartbase"></div>
</template>
<style scoped>
	.chartbase{
		height:100px;
		/*height: 500px;*/
	}
</style>
<script>
	import { initEcharts } from './chart-tool.js'
	export default {
		name: 'chart-base',
		data() {
			return {
				chartObj: null,
				timeOutObj:null
			}
		},
		props: {
			'options': {
				type: Object
			},
			'autoRefresh': {
				type: Boolean,
				default: false
			},
			'duration': {
				type: Number,
				default: 1000 * 60
			}
		},
		destroyed(){
			this.removeTimeout()
		},
		watch:{
			options(val){
				if(!this.chartObj){
					this.chartObj = initEcharts(this.$refs.charObj, val);
				}

				if(val){
					this.reFreshData(false)
				}
			}
		},
		methods: {
			removeTimeout(){
				if(this.timeOutObj){
					clearTimeout(this.timeOutObj)
				}
			},
			initChart() {
				if(this.options){
					this.chartObj = initEcharts(this.$refs.charObj, this.options);
					this.chartObj.on('click', (params) => {
					    // 触发事件修改
					    this.$emit("change",params)
					});
					this.reFreshData(true)
				}
			},
			renderData(options){
				this.chartObj.clear();
				this.chartObj.setOption(options);
			},
			reFreshData(skip) {
				this.removeTimeout()

				if(this.chartObj && !skip){
					this.renderData(this.options)
				}

				if (this.autoRefresh) {
					this.timeOutObj = setTimeout(this.reFreshData, this.duration);
				}
			}
		}
	}
</script>
