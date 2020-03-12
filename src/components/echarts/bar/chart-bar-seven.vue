<template>
    <chart-base @change="change" :options="chartOptions"  class="chartClass"></chart-base>
</template>

<script>
  import chartBase from '../base/chart-base'
    import  echarts from 'echarts'
    export default {
        name: "chart-bar-seven",
        data() {
            return {
                chartOrigin: {
                    "columns": ["徐家汇街道", "天平街道", "湖南街道", "枫林街道", "斜土街道", "田林街道", "长桥街道", "虹梅街道", "康健街道", "龙华街道", "凌云街道", "漕河泾街道", "华泾镇"],
                    "list": [{
                        "name": "口罩领取",
                        "data": [746, 356, 336, 946, 531, 865, 1020, 281, 688, 761, 773, 786, 578]
                    }, {
                        "name": "口罩预约",
                        "data": [15198, 8962, 4361, 14200, 9536, 15545, 20454, 5617, 19923, 12423, 16023, 18787, 12429]
                    }]
                },

//
//                    {
//                    columns:  ['党工委党工委党工委','社区党委社区党委社区党委','行政党组行政党组行政党组','党建中心党建中心党建中心'],
//                    list: [{
//                        "name": "组织分布",
//                        "data": [6, 20, 7, 30, 20],
//                    },{
//                        "name": "组织分布2",
//                        "data": [6, 20, 7, 30, 20],
//                    },{
//                        "name": "组织分布3",
//                        "data": [6, 20, 7, 30, 20],
//                    }]
//                },
                chartOptions:{}
            }
        },
        props: {
            'componentParams': {
                type: Object
            },
            'dyResultData': {
                type: Object
            },
            'chartOrigins': {
                type: Object
            },
            'colorList': {
                type: Array,
                default(){
                    return ["#50a2f0","#66b997","#fcac53",'#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c']
                }
            },
            "provideNumber":{
                type:Number,
                default:6
            },
            "options":{
                type: Object
            }
        },
        components:{
            chartBase
        },
        mounted() {
            if (this.chartOrigins) {
                this.setChartOptions(this.chartOrigins)
            }else{
                this.setChartOptions(this.chartOrigin)
            }
        },
        watch:{
            chartOrigins:{
                handler() {
                    this.setChartOptions(this.chartOrigins)
                },
                deep: true
            },
            dynamicDataResult: {
                handler() {
                    this.setChartOptions(this.dynamicDataResult.data);
                },
                deep: true
            },
            title:{
                handler() {
                    this.setChartOptions(this.chartOrigins)
                },
                deep: true
            }
        },
        methods: {
            change(params){
                this.$emit("change",params)
            },
            setChartOptions(renderData)  {
                let _that = this
                let colorList = this.colorList
                let legendData = [];
                let tempSeries = [];
                let op = {
                    top: '8%',
                    right: '3%',
                    left: '13%',
                    bottom: '8%'
                }
                this.options?this.options:op
                if(renderData.list){
                    renderData.list.forEach(
                        (item, index) => {
                            legendData.push(item.name)
                            tempSeries.push({
                                name: item.name,
                                type: 'bar',
                                barWidth: '15px',
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: [0, 15, 15, 0],
                                    }
                                },
                                data: item.data
                            })
                        }
                    )
                }


                //图表个性化参数
                let  option = {
                    color:colorList,
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        itemWidth:10,
                        itemHeight:10,
                        x: 'right',
                        textStyle:{
                            color:'#979797',
                            fontSize:'11',
                            fontFamily: "PingFangSC-Regular",
                        }
                    },
                    grid: this.options,
                    yAxis: [{
                        type: 'category',
                        color: '#b8b8b8',
                        data: renderData.columns,
                        axisPointer: {
                            type: 'line'
                        },
                        axisTick:{        //是否显示刻度
                            show:false,
                        },
                        axisLine: {
                            show:false,
                            lineStyle: {
                                color: '#b8b8b8'
                            }
                        },
                        axisLabel: {
                            interval:0,
                            color: '#b8b8b8',
                            textStyle: {
                                fontSize: 11
                            },
                            formatter:function(params){
                                if(params != null){
                                    var newParamsName = "";// 最终拼接成的字符串
                                    var paramsNameNumber = params.length;// 实际标签的字数
                                    var provideNumber = _that.provideNumber;// 每行能显示的字的个数
                                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                                    // 条件等同于rowNumber>1
                                    if (paramsNameNumber > provideNumber) {
                                        for (var p = 0; p < rowNumber; p++) {
                                            var tempStr = "";// 表示每一次截取的字符串
                                            var start = p * provideNumber;// 开始截取的位置
                                            var end = start + provideNumber;// 结束截取的位置
                                            // 此处特殊处理最后一行的索引值
                                            if (p == rowNumber - 1) {
                                                // 最后一次不换行
                                                tempStr = params.substring(start, paramsNameNumber);
                                            } else {
                                                // 每一次拼接字符串并换行
                                                tempStr = params.substring(start, end) + "\n";
                                            }
                                            newParamsName += tempStr;// 最终拼成的字符串
                                        }
                                    } else {
                                        // 将旧标签的值赋给新标签
                                        newParamsName = params;
                                    }//将最终的字符串返回
                                    return newParamsName
                                }
                                //  console.log(params);
                                return params
                            }
                        },

                    }],
                    xAxis: {
                        show:true,
                        splitLine:{        //分割线
                            show:false,
                        },
                        axisLabel:{       //是否显示刻度标签
                            show:false,
                        },
                        axisLine:{        //是否显示线
                            show:false,
                        },
                        axisTick:{        //是否显示刻度
                            show:false,
                        }
                    },
                    series:tempSeries
                }
                this.chartOptions = option
            }
        }
    }
</script>

<style scoped>
    .chartClass{
        height: 500px !important;
        width: 100%
    }
</style>
