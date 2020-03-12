
let colorList = ["#3F99FF", "#FFB84A", "#08FBF5", '#FF6080','#9FD330', '#00d488', '#3feed4', '#3bafff', '#f1bb4c']
/* 色值列表 */
export function getColorList(){
	return colorList
}

/* 获取x 轴配置 */
export function getXAxis(data){
	/* x 轴配置 */
	let xAxis = [
		{
			name: '',
			nameTextStyle: {
				color: "#fff",
				fontSize: 24
			},
			type: 'category',
			axisLine: {
				lineStyle: {
					color: '#64a5e5',
					width: 2,
					type: "solid"
				}
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: "#758897",
					fontSize: 24
				},
				formatter:function(value,index) {
					//一行显示几个字
					var provideNumber = 5
					// 少于标准直接取原始字符
					if(value.length <= provideNumber){
						return value
					}
					var params = value
					// 存在简称取简称
					if(data[index].short){
						params = data[index].short
					}
					var newParamsName = "";
					var paramsNameNumber = params.length;
					
					var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
					if (paramsNameNumber > provideNumber) {
						for (var p = 0; p < rowNumber; p++) {
							var tempStr = "";
							var start = p * provideNumber;
							var end = start + provideNumber;
							if (p == rowNumber - 1) {
								tempStr = params.substring(start, paramsNameNumber);
							} else {
								tempStr = params.substring(start, end) + " \n";
							}
							newParamsName += tempStr;
						}
					} else {
						newParamsName = params;
					}
					return newParamsName
				},
				rotate: 50
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#346690'
				}
			},
			// boundaryGap: false,
			data:data
		}
	]
	return xAxis
}
/* 获取图表 grid 配置 */
export function getChartGrid(){
	let grid = {
		left: '3%',
		right: '10%',
		top:'25%',
		bottom: '3%',
		containLabel: true
	}
	return grid
}

export function getSeriesStyle(type,item,index){
	switch(type){
		case "line":
			return {
				name: item.name,
				type: type,
				yAxisIndex:item.yAxisIndex ? item.yAxisIndex : 0,
				symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						color: colorList[index],
						lineStyle: {
							color: colorList[index],
							width: 7
						}
					}
				},
				markPoint : {
					data : [
						{type : 'max', name : '最大值'},
						{type : 'min', name : '最小值'}
					],
					symbolSize: 88,
					label:{
						fontSize:28
					},
					itemStyle:{
						color:colorList[index]
					}
				},
				markLine : {
					data : [
						{type : 'average', name : '平均值'}
					],
					label:{
						fontSize:26
					},
				},
				data:item.data
			}
		case "bar":
			return {
				name: item.name,
				type: type,
				yAxisIndex:item.yAxisIndex ? item.yAxisIndex : 0,
				barWidth: '15%',//柱图宽度
				barMinHeight:10,
				barMaxWidth:45,
				itemStyle: {
					normal: {
						color: colorList[index],
						lineStyle: {
							color: colorList[index],
							width: 7
						}
					}
				},
				data:item.data
			}
	}
	return {}
}
