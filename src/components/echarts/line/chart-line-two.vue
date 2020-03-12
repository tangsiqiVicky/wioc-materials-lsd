<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
    import chartBase from '../base/chart-base'
    import  echarts from 'echarts'
    export default {
        name: "chart-line-two",
        data(){
            return {
                chartOrigin:{
                    columns: [ '10:00', '11:00', '12:00', '13:00', '14:00'],
                    list:[{
                        "name":"干垃圾",
                        "data":[ 80, 58, 40, 70, 90]
                    }]
                },
                chartOptions:{}
            }
        },
        props: ['componentParams',"dyResultData","chartOrigins"],
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
                let legendData = [];
                let tempSeries = [];
                renderData.list.forEach((item,index)=>{
                    legendData.push(item.name)
                    tempSeries.push(
                        {
                            name:item.name,
                            type: 'line',
                            symbolSize: 8,
                            smooth:true,
                            itemStyle:{normal: {
                                    lineStyle:{
                                        width:3,
                                    }}},
                            areaStyle: {
                                color:'#5eaef7',
                                origin:'start',
                                normal: {
                                }
                            },
                            data:item.data
                        },
                    )
                })
                // 图表个性化参数

                 let option = {
                    color: ["#5eaef7"],
                    tooltip: {
                        trigger: 'axis',
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        axisTick:{
                            show:false,
                            alignWithLabel: true
                        },
                        axisLine:{
                          show:false
                        },
                        axisLabel: {
                            textStyle:{
                                fontSize: "11",
                                fontFamily: "PingFangSC-Regular",
                                color: "#979797",
                            },
                        },
                        data: [ '10:00', '11:00', '12:00', '13:00', '14:00']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel:{show:false},
                        axisLine:{show:false},
                        axisTick:{show:false},
                        splitLine:{show:true},
                    },
                    series: tempSeries
                }
               this.chartOptions=option
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
