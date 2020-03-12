<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
    import chartBase from '../base/chart-base'
    import  echarts from 'echarts'
    export default {
        name: "chart-line-four",
        data(){
            return{
                chartOrigin:{
                    "columns": [
                        "1月",
                        "2月",
                        "3月",
                        "4月",
                        "5月",
                        "6月",
                        "7月",
                        "8月",
                        "9月",
                        "10月"
                    ],
                    "list": [{
                        "name": "规模以上工业产值",
                        "data": [
                            "64.15",
                            "105.9",
                            "162.69",
                            "215.87",
                            "253.92",
                            "297.72",
                            "341.53",
                            "398.11",
                            "462.2",
                            "513.8"
                        ]
                    },
                        {
                            "name": "商品销售额",
                            "data": [
                                "610.72",
                                "959.64",
                                "444.29",
                                "594.63",
                                "551.54",
                                "3102.74",
                                "3630.77",
                                "4110.25",
                                "4647.3",
                                "5133.7"
                            ]
                        },
                        {
                            "name": "现代服务业营收",
                            "data": [
                                "0",
                                "372.37",
                                "613.41",
                                "840.59",
                                "1083.01",
                                "1363.57",
                                "1623.88",
                                "1870.45",
                                "2130.45",
                                "2399.0"
                            ]
                        },
                        {
                            "name": "商品房成交额",
                            "data": [
                                "41.88",
                                "67.92",
                                "119.8",
                                "171.87",
                                "239.44",
                                "304.71",
                                "374.11",
                                "443.30",
                                "--"
                            ]
                        },
                        {
                            "name": "消费品零售额",
                            "data": [
                                "67.55",
                                "115.74",
                                "165.18",
                                "216.05",
                                "276.54",
                                "324.7",
                                "362.71",
                                "425.72",
                                "504.2",
                                "585.8"
                            ]
                        }
                    ]
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
                let colorList = [
                     new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                    {offset: 0, color: '#74a8eb'},
                    {offset: 1, color: '#4ba0f3'},
                ]),
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                        {offset: 0, color: '#80dbaa'},
                        {offset: 1, color: '#61ce96'},
                    ]),
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                        {offset: 0, color: '#fed144'},
                        {offset: 1, color: '#e8c95c'},
                    ]),
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                        {offset: 0, color: '#fe7fa1'},
                        {offset: 1, color: '#f0487d'},
                    ]),
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                    {offset: 0, color: '#4c5af7'},
                    {offset: 1, color: '#80adfd'},
                ]),
                ];
                let legendData = [];
                let tempSeries = [];
                renderData.list.forEach((item,index)=>{
                    legendData.push(item.name)
                    tempSeries.push(
                        {   name:item.name,
                            type:'line',
                            symbol:'none',
                            itemStyle:{normal: {
                                    lineStyle:{
                                        width:3,
                                        color: colorList[index],
                                    }}},
                            data:item.data
                        },
                    )
                })
                // 图表个性化参数
                let option = {
                    color:['#6ebcf8','#80dbaa','#fed144','#f0487d','#4c5af7'],
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                       // x:'10%',
                     //   width:"65%",
                        itemHeight:11,
                        itemWidth:11,
                        textStyle:{
                            color:'#979797',
                            fontSize:'11',
                            fontFamily: "PingFangSC-Regular",
                        },
                        icon:'react',
                        data:legendData
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'category',
                        boundaryGap: true,
                        axisLine:{
                            lineStyle:{
                                color:'#e5e6ea',
                                width:3
                            }
                        },
                        axisLabel:{
                            textStyle:{
                                fontSize: "11",
                                fontFamily: "PingFangSC-Regular",
                                color: "#979797",
                                lineHeight:15,
                            }
                        },
                        axisTick:{
                            show:false
                        },
                        data: renderData.columns
                    },
                    xAxis: {
                        type: 'value',
                        axisLabel:{
                            show:false
                        },
                        axisLine:{
                            show:false
                        },
                        axisTick:{
                            show:false
                        },
                        splitLine:{
                            show:false
                        }
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
        height: 500px!important;
        width:100%
    }
</style>
