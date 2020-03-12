<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
  import chartBase from '../base/chart-base'
    import  echarts from 'echarts'
    export default {
        name: "chart-line-one",
        data() {
            return {
                chartOrigin: {
                    columns:  ['0:00','6:00','12:00','18:00','24:00'],
                    list: [{
                        "name": "2019年5月",
                        "data": [6, 20, 7, 30, 20],
                    }, {
                        "name": "2019年6月",
                        "data":[10, 7, 8, 25, 20],
                    }]
                },
                chartOptions:{}
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
                let colorList = ["#187bfd","#e8a637","#52abb7",'#afa3f5', '#00d488', '#3feed4', '#3bafff', '#f1bb4c']
                let legendData = [];
                let tempSeries = [];
               renderData.list.forEach(
                   (item, index) => {
                       legendData.push(item.name)
                       tempSeries.push({
                           name: item.name,
                           type: 'line',
                           lineStyle:{
                               width:3,
                           },
                           symbol:'circle',
                           smooth:true,       //是否是曲线
                           showSymbol: false,  //是否显示曲线中的点
                           data: item.data
                       })
                   }
               )

           //图表个性化参数
              let  option = {
                    color:["#61b1f8","#edca57"],
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        //y:'25',
                        icon:'rectangle',//设置形状
                        left:'right',
                        itemWidth:11,
                        itemHeight:11,
                        textStyle:{
                            color:'#979797',
                            fontSize:'11',
                            fontFamily: "PingFangSC-Regular",
                        }
                    },
                    grid: {
                        left: '2%',
                        right: '1%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: renderData.columns,
                        lineStyle:{
                         color:'#b8b8b8'
                        },
                        splitLine:{   //网格线
                            show:true,
                            interval:function(index,value){
                                if(index=3&&value=='12:00'){
                                    return true;
                                }
                                return false
                            },
                        },
                        axisLine:{
                            lineStyle:{
                                color:'#b8b8b8'
                            }
                        },
                        axisLabel:{
                            //X轴刻度配置
                            interval:1,//0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                            textStyle:{
                                fontSize: "11",
                                fontFamily: "PingFangSC-Regular",
                                color: "#979797",
                            }
                        }
                    },
                    yAxis: {
                        show:true,
                        splitLine:{        //分割线
                            show:true,
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
