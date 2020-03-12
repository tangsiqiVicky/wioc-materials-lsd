// rows 对应坐标系的 x轴，对于echarts 来说就是 column
// columns 对应坐标系的 y轴
export function getChartData(chartConfig,chartOrigin) {
	
	let columnIndex = []
	let rowIndex = []
	let dataIndex = []
	let columns = [],
		rows = [],
		dataValue = []
	// 获取列所在的索引
	var getAllIndex = function() {
		chartOrigin.columnList.forEach((subItem) => {
			// 过滤列索引
			chartConfig.columns.forEach((item) => {
				if (subItem.name === item) {
					columnIndex.push(subItem.index)
				}
			})
			// 过滤列索引
			chartConfig.rows.forEach((item) => {
				if (subItem.name === item) {
					rowIndex.push(subItem.index)
				}
			})
			// 过滤值索引
			chartConfig.values.forEach((item) => {
				if (subItem.name === item) {
					dataIndex.push(subItem.index)
				}
			})
		})
	}

	var getNewIndex = function() {
		// 数据重新组装
		chartOrigin.data.forEach((item, index) => {
			let dataItem = {}
			// 组装列
			let columnName = ''
			columnIndex.forEach((i) => {
				columnName += item[i]
			})
			dataItem.columnName = columnName
			columns.push(columnName);

			// 组装行
			let rowName = ''
			rowIndex.forEach((i) => {
				rowName += item[i]
			})
			dataItem.rowName = rowName
			rows.push(rowName)

			// 组装对应数值
			dataItem.value = []
			dataIndex.forEach((i) => {
				dataItem.value.push(item[i])
			})
			dataValue.push(dataItem)
		})
	}
	// 重新组装数据
	var reBuildData = function() {
		console.log("columns",columns)
		console.log("rows",rows)
		console.log("dataValue",dataValue)
		
		// 去除重复数据
		columns = Array.from(new Set(columns))
		rows = Array.from(new Set(rows))
		
		// 取值
		let tempData = []
		columns.forEach((columnItem) => {
			let tempDataItem = {}
			tempDataItem.name = columnItem
			tempDataItem.data = []
			rows.forEach((rowItem) => {
				dataValue.forEach((valueItem) => {
					if (valueItem.columnName === columnItem && valueItem.rowName === rowItem) {
						tempDataItem.data.push({value:valueItem.value,name:rowItem})
					}
				})
			})
			tempData.push(tempDataItem)
		})
		return tempData
	}
	
	
	getAllIndex()
	getNewIndex()
	return reBuildData()
}


