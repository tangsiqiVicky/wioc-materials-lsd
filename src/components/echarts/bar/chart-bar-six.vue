<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
  import chartBase from '../base/chart-base'
    import  echarts from 'echarts'
    export default {
        name: "chart-bar-six",
        data() {
            return {
                chartOrigin: {
                    columns:  ['党工委党工委党工委','社区党委社区党委社区党委','行政党组行政党组行政党组','党建中心党建中心党建中心'],
                    list: [{
                        "name": "组织分布",
                        "data": [6, 20, 7, 30, 20],
                    }]
                },
                chartOptions:{}
            }
        },
        props: ['componentParams',"dyResultData","chartOrigins","options","provideNumber"],
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
            }
        },
        methods: {
            change(params){
                this.$emit("change",params)
            },
            setChartOptions(renderData)  {
                let _that = this
                let colorList = ["#50a2f0","#66b997","#fcac53",'#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c']
                let op = {
                    top: '8%',
                    right: '3%',
                    left: '3%',
                    bottom: '12%'
                }
                this.options?this.options:op

                let legendData = [];
                let tempSeries = [];
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
                                        barBorderRadius: [15, 15, 0, 0],
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
                        textStyle:{
                            color:'#979797',
                            fontSize:'11',
                            fontFamily: "PingFangSC-Regular",
                        }
                    },
                    grid: this.options,
                    xAxis: [{
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
                                    var provideNumber = _that.provideNumber || '6';// 每行能显示的字的个数
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
                    yAxis: {
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
        height: 300px !important;
        width: 100%
    }
</style>
