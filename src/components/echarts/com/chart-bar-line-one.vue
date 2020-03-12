<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
    import chartBase from '../base/chart-base'
    import  echarts from 'echarts'
    export default {
        name: "chart-bar-line-one",
        data(){
            return{
                chartOrigin:{
                    columns: ['12月','11月','10月','09月','08月'],
                    list:[{
                        "name":"火情数",
                        "type":"bar",
                        "data":[45, 70,75,80,100],
                    },{
                        "name":"火灾数",
                        "type":"line",
                        "data":[25,35,60,55,70],
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
            getSeriesStyle(type,item,index){
                switch(type){
                    case "line":
                        return {
                            name: item.name,
                            data: item.data,
                            type: 'line',
                            symbol: "none",
                            itemStyle:{
                                normal: {
                                    lineStyle:{
                                        width:3,
                                    }
                                }
                            }
                        }
                    case "bar":
                        return {
                            name:item.name,
                            type: 'bar',
                            data: item.data,
                            barWidth:30,  //设置柱子的宽度
                            barGap:30,
                            itemStyle:{
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                                        {offset: 0, color: '#479bf5'},
                                        {offset: 1, color: '#84cefa'},
                                    ]),
                                    //  opacity:0.8,
                                }}
                        }
                }
                return {}
            },
            setChartOptions(renderData){
                // 获取数据操作
                let colorList = [
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                        {offset: 0, color: '#3977E6'},
                        {offset: 1, color: '#37BBF8'}
                    ]),
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                        {offset: 0, color: '#eaca5c'},
                        {offset: 1, color: '#fed145'}
                    ]),
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                        {offset: 0, color: '#62cf96'},
                        {offset: 1, color: '#7fdba9'}
                    ]),
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [  //柱子颜色渐变
                        {offset: 0, color: '#ef447b'},
                        {offset: 1, color: '#fd7d9f'}
                    ])
                ];
                let legendData = [];
                let tempSeries = [];
                renderData.list.forEach((item,index)=>{
                    legendData.push(item.name)
                    tempSeries.push(
                        this.getSeriesStyle(item.type ? item.type : "bar",item,index)
                    )
                })
                // 图表个性化参数
                let option = {
                    color:["#f5ce4e"],
                    title: {
                        text: '',
                        subtext: ''
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        y:'30',
                        icon:'react',
                        itemWidth: 11,  // 设置宽度
                        itemHeight: 11, // 设置高度
                        itemGap: 10,// 设置间距
                        left:'right',
                        textStyle:{
                            color:'#979797',
                            fontSize:'11',
                            fontFamily: "PingFangSC-Regular",
                        },
                        data: legendData
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        show:false
                    },
                    yAxis: {
                        axisLabel: {
                            show: true,
                            //height:10,
                            textStyle:{
                                fontSize: "11",
                                fontFamily: "PingFangSC-Regular",
                                color: "#979797",
                                lineHeight:15
                            },
                           /* formatter:function(params){
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
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        type: 'category',
                        data: renderData.columns
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
