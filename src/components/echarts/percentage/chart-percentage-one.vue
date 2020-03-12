<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass" ></chart-base>
</template>

<script>
    import chartBase from '../base/chart-base'
    import  echarts from 'echarts'
    export default {
        name: "chart-percentage-one",
        props: ['componentParams',"dyResultData","chartOrigins"],
        data(){
            return {
                chartOrigin:[{
                    name: '装备制造',
                    total: 1000,
                    value: 0,
                    fenzi: 100,
                    color: '#D8D8D8',
                    wcolor: '#389af4',
                    pcolor: '#D8D8D8',
                    tcolor: '#595959',
                    tip: '户',
                    left:'50%',
                    top:'27%'
                }],
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
                console.log("123456"+params);
            },
            setChartOptions(renderData){

                var titleArr = [],
                    seriesArr = [];
                renderData.forEach(function(item, index) {
                    item.value = 100 - item.fenzi/item.total * 100;
                    titleArr.push({
                        text: item.name,
                        left: item.left?item.left:'49.5%',
                        top: item.top?item.top:'27%',
                        textAlign: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: '12',
                            color: item.color,
                            textAlign: 'center',
                        },
                    });
                    seriesArr.push({
                        name: item.name,
                        type: 'pie',
                        clockWise: false,
                        radius: [60, 70],
                        itemStyle: {
                            normal: {
                                color: item.pcolor,
                                shadowColor: item.pcolor,
                                shadowBlur: 0,
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                },
                            }
                        },
                        hoverAnimation: false,
                        center: ['50%', '50%'],
                        data: [{
                            value: item.value,
                            label: {
                                normal: {
                                    formatter: function(params) {
                                        return item.fenzi + item.tip;
                                    },
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '13',
                                        fontWeight: 'bold',
                                        color: item.tcolor
                                    }
                                }
                            },
                        }, {
                            value: 100 - item.value,
                            name: 'invisible',
                            itemStyle: {
                                normal: {
                                    color: item.wcolor
                                },
                                emphasis: {
                                    color: item.wcolor
                                }
                            }
                        }]
                    })
                });


                // 图表个性化参数
                 let option = {
                     title: titleArr,
                     series: seriesArr
                }
                 this.chartOptions=option
                }
            }

    }
</script>


<style scoped>
  .chartClass{
      height: 200px !important;
      width: 100%
  }
</style>
