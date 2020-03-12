<template >
    <chart-base @change="change" :options="chartOptions" style="height:250px"></chart-base>
</template>

<script>
import chartBase from '../base/chart-base'
export default {
    name: "chart-pie-one",
    components: {
        chartBase
    },
  /*  props: {
        type: {
            type: String,
            default: "circle"
        }
    },*/
    props: ['componentParams',"dyResultData","chartOrigins"],
    data() {
        return {
            chartOrigin: {
                columns: [],
                list: [
                    {
                        name: "访问来源",
                        data: [
                             { value: 335, name: "直接访问" },
                            { value: 310, name: "邮件营销" },
                            { value: 234, name: "联盟广告" },
                            { value: 135, name: "视频广告" },
                            { value: 1548, name: "搜索引擎" }
                        ]
                    }
                ]
            },
            chartOptions: {}
        };
    },
    watch: {
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
    mounted() {
        if (this.chartOrigins) {
            this.setChartOptions(this.chartOrigins)
        }else{
            this.setChartOptions(this.chartOrigin)
        }
    },
    methods: {
        change(params){
            this.$emit("change",params)
        },
        setChartOptions(renderData) {
            // 获取数据操作
            let legendData = [];
            let tempSeries = [];
            let doubleY = false;
            renderData.list.forEach((item, index) => {
                tempSeries.push({
                        name: item.name,
                        type: "pie",
                        radius: ["60", "80"],
                        center: ["40%", "50%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: "left"
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: item.data
                    });
            });

            // 图表个性化参数
            let options = {
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    x: "right",
                    y: "center",
                    itemWidth:13,
                    itemHeight:13,
                    icon:'circle',
                    textStyle: {
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: 13,
                        color:'#9FA9BA'
                    }
                },
                series: tempSeries
            }

            this.chartOptions = options
        }
    }
};
</script>



