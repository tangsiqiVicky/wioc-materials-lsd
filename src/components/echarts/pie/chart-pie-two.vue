<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
  import chartBase from '../base/chart-base'
    import  echarts from 'echarts'
    export default {
        name: "chart-pie-two",
        data() {
            return {
                chartOrigin: {
                    columns:  ['党工委党工委党工委','社区党委社区党委社区党委','行政党组行政党组行政党组','党建中心党建中心党建中心'],
                    list: [{
                        "name": "1",
                        "data": 2522,
                    },{
                        "name": "2",
                        "data": 666,
                    },{
                        "name": "3",
                        "data": 333,
                    },{
                        "name": "4",
                        "data": 522,
                    },{
                        "name": "5",
                        "data": 666,
                    },{
                        "name": "6",
                        "data": 333,
                    },{
                        "name": "7",
                        "data": 522,
                    },{
                        "name": "8",
                        "data": 3000,
                    }
                    ],
                    pingandata:{
                        'month':'12月',
                        'data':'80%',
                    }
                },
                chartOptions:{},
                pingandata:{
                    'month':'12月',
                    'data':'80%',
                }
            }
        },
        props: ['componentParams',"dyResultData","chartOrigins"],
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
                let colorList = ["#6dd400","#f7b500","#008ffd",'#32c5ff', '#44d7b6', '#6d7278', '#fa6400', '#db5555']
                let  legendData = [];
                let tempSeries = [];

                var placeHolderStyle = {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        color: 'rgba(0,0,0,0)'
                    }
                };
                console.log(renderData.list);
                renderData.list.forEach(
                    (item, index) => {
                        legendData.push(item.name)
                        tempSeries.push(
                            {
                                name: 'Line '+index,
                                type: 'pie',
                                clockWise: false,
                                hoverAnimation: false,
                                radius: [40+index*7+'%', 47+index*7+'%'],
                                itemStyle:{
                                    normal: {
                                        label: {
                                            show: false
                                        },
                                        labelLine: {
                                            show: false
                                        },
                                         color:colorList[index%8],
                                        borderWidth:3
                                    }
                                },
                                data: [{
                                    value: item.data,
                                    name:item.name
                                }, {
                                    value: 1000,
                                    name: '总数',
                                    tooltip: {
                                        show: false
                                    },
                                    itemStyle: placeHolderStyle
                                }
                                ],
                            }
                        )
                        console.log(tempSeries);
                    }
                )
                //图表个性化参数
                let  option = {
                    color: ["#6dd400","#f7b500","#008ffd",'#32c5ff', '#44d7b6', '#6d7278', '#fa6400', '#db5555'],
                    tooltip : {
                        show: true,
                        formatter: "{b} : {c}"
                    },
                    title: {

                       text: this. chartOrigin.pingandata.data,
                        subtext: '平安指数\n'+
                            this. chartOrigin.pingandata.month,
                        x: 'center',
                        y: '32%',
                        textStyle: {
                            fontSize:28,
                            fontWeight:'normal',
                            color: ['#e02020'],
                        },
                        subtextStyle: {
                            color: '#595959',
                            fontWeight:'bold',
                            fontSize: 16,
                        },
                        borderWidth:1,
                        borderRadius:500,
                        padding:18,
                        boxShadow: '0 0 1 #e9e6e6',
                        backgroundColor:'#ffffff'
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
