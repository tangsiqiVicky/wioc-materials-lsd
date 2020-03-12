
//==============echart tool 工具方法     start==========================
import echarts from 'echarts'

//获得默认 option对象
export function getDefaultOption() {
    var option = {};
    return option;
}


/**
 * echarts 实例化方法
 * @param element  生成图表的dom元素
 * @param option   echarts插件所用option
 */
export function initEcharts(element, option){
	var chartContent = echarts.getInstanceByDom(element);
	if (chartContent == null) {
	    chartContent = echarts.init(element);
	}
	chartContent.clear();
	chartContent.setOption(option);
	return chartContent;
}


/**
 * 格式化数字，三位一逗号
 * @param num
 * @returns {string}
 */
export function fnToThousands(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    return result;
}

//==============echart tool 工具方法     end==========================
