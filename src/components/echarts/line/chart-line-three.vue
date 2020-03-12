<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
    import chartBase from '../base/chart-base'
    import  echarts from 'echarts'
    export default {
        name: "chart-line-three",
        data(){
            return {
                chartOrigin:{
                    columns: ['01月', '02月', '03月', '04月', '05月', '06月', '07月'],
                    list:[{
                        "name":"干垃圾",
                        "data":[80, 58, 40, 70, 90, 85, 65]
                    },{
                        "name":"湿垃圾",
                        "data":[80, 60, 43, 72, 94, 87, 70]
                    },{
                        "name":"餐厨垃圾",
                        "data": [80, 68, 41, 81, 100, 97, 96]
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
                let areaStyleList=[
                    {
                        origin:'start',
                        color:'#5eaef7',
                       // origin:'start',
                        normal: {
                        }
                    },
                    {
                        origin:'start',
                        color:'#f2cd51',
                        normal: {
                            opacity: "0.2",
                        }
                    },
                    {
                        origin:'start',
                        color:'#74d6a2',
                        normal: {
                            opacity: "0.1",
                        }
                    },
                ];
                let legendData = [];
                let tempSeries = [];
                renderData.list.forEach((item,index)=>{
                    legendData.push(item.name)
                    tempSeries.push(
                        {
                            name:item.name,
                            type: 'line',
                            symbolSize: 8,
                            itemStyle:{normal: {
                                    lineStyle:{
                                        width:3,
                                    }}},
                            areaStyle: areaStyleList[index],
                            data: item.data
                        }
                    )
                })
                // 图表个性化参数
                let option = {
                    title:{
                     text:"区垃圾分类情况",
                        textStyle:{
                            fontFamily: 'PingFangSC-Semibold',
                            fontSize:16,
                            color: '#595959',
                            letterSpacing: -0.07
                        }
                   },
                    color: ["#5eaef7", "#f2cd51", "#74d6a2"],
                    tooltip: {
                        trigger: 'axis',
                    },
                    legend: {
                        //y:"2%",
                        y:30,
                        show:true,
                        icon:'react',
                        lineHeight:20,
                        itemWidth: 11,  // 设置宽度
                        itemHeight: 11, // 设置高度
                        itemGap: 10,// 设置间距
                       left:'right',
                        textStyle:{
                            fontSize:'11',
                            fontFamily: 'PingFangSC-Regular',
                            color: '#979797'
                        },
                        data:legendData
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisTick:{show:false},
                        axisLine:{show:false},
                        axisLabel: {
                            textStyle:{
                                fontSize: "11",
                                fontFamily: "PingFangSC-Regular",
                                color: "#979797",
                                lineHeight:15
                            },
                            formatter:function(params){
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
                            }
                        },
                        data:renderData.columns
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel:{show:false},
                        axisLine:{show:false},
                        axisTick:{show:false},
                        splitLine:{show:true},
                    },
                    series:tempSeries
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
