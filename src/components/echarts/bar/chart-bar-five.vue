<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
    import chartBase from '../base/chart-base'
    import  echarts from 'echarts'
    export default {
        name: "chart-bar-five",
        props: ['componentParams',"dyResultData","chartOrigins"],
        data(){
            return {
                chartOrigin:{
                    columns: ["其 他 ","五乱管理","绿化管理","占用公共场所","违法建筑","市民诉讼","施工管理","业 主 "],
                    //columns:[],
                    list:[{
                        "name":"",
                        "data":[45,45,70,40,100,50,40,30]
                    }]
                },
                chartOptions:{}
            }
        },
        components:{
            chartBase
        },
        mounted(){
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
        methods:{
            change(params){
                this.$emit("change",params)
            },
            setChartOptions(renderData){
                // 获取数据操作
                let colorList = [
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                        {offset: 0, color: '#469bf6'},
                        {offset: 1, color: '#84cdfa'},
                    ])
                ];
                let legendData = [];
                let tempSeries = [];
                renderData.list.forEach((item,index)=>{
                    legendData.push(item.name)
                    tempSeries.push(
                        {// 辅助系列
                            type: 'bar',
                            silent: true,
                            yAxisIndex: 1,
                            itemStyle: {
                                normal: {
                                    color: '#c9e2fb'
                                }
                            },
                            barWidth: 30,
                            data: item.data.map(function (val) {
                                return 0.1;
                            })
                        },
                        {   name:item.name,
                            type: 'bar',
                            data: item.data,
                            barWidth: 30,
                            itemStyle: {
                                normal: {
                                    color: colorList[index],
                                }
                            }
                        }
                    )
                })
                // 图表个性化参数
               let option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    xAxis: {
                        show:false
                    },
                    yAxis: [
                        {
                          data:renderData.columns,
                            axisLabel: {
                            textStyle: {
                                fontSize: "11",
                                fontFamily: "PingFangSC-Regular",
                                color: "#979797",
                                lineHeight:15,
                                paddingLeft:10
                            },
                          /*  formatter:function(params){
                                if(params != null){
                                    var newParamsName = "";// 最终拼接成的字符串
                                    var paramsNameNumber = params.length;// 实际标签的字数
                                    var provideNumber = 2;// 每行能显示的字的个数
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
                            }*/
                        },
                            axisLine:{
                                lineStyle:{
                                    color:'#C4C6CF',
                                    width:1
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                        axisTick:{
                            show:false
                        },
                        splitLine: {
                            show: false
                        }},
                        {
                        // 辅助 x 轴
                        show: false,
                       // data:["其他","五乱管理","绿化管理","占用公共场所","违法建筑","市民诉讼","施工管理","业主"]
                        data:this.chartOrigin.columns,
                    }],
                    series: tempSeries
                }
              this.chartOptions=option
            }
        }
    }
</script>

<style scoped>
 .chartClass{
     height: 750px !important;
     width: 100%
 }
</style>
