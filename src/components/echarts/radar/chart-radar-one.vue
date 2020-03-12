<template >
    <chart-base @change="change" :options="chartOptions" style="height:300px"></chart-base>
</template>

<script>
import chartBase from '../base/chart-base'
export default {
    name: "chart-radar-one",
    components: {
        chartBase
    },
    props: ['componentParams',"dyResultData","chartOrigins"],
    data() {
        return {
            chartOrigin: {
                columns: [],
                list: [
                    {
                        name: "预算 vs 开销（Budget vs spending）",
                        data: [
                            {
                                value: [1, 3, 11, 12, 40],
                                name: ""
                            }
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
                tempSeries.push( {
                        name: item.name,
                        type: "radar" /*为雷达图坐标系*/,
                        itemStyle: {
                            /*图形样式*/
                            normal: {
                                color: "#4ba0f3",
                                lineStyle: {
                                    width: 7,
                                    opacity: 0.75
                                }
                            }
                        },
                        data: item.data,
                        areaStyle: {
                            /*图形区域样式*/
                            normal: {
                                opacity: 0.8,
                                color: "#c9e2fb"
                            }
                        }
                    });
            });

            // 图表个性化参数
            let options = {
                title: {
                    show: false
                },
                tooltip: {},
                legend: {},
                radar: {
                    shape: "circle",
                    name: {
                        textStyle: {
                            fontFamily: 'PingFangSC-Regular',
                            fontSize: 13,
                            color: '#9FA9BA'
                        }
                    },
                    indicator: [
                        { name: "一级 2", max: 2 },
                        { name: "二级 3", max: 3 },
                        { name: "三级 19", max: 19 },
                        { name: "四级 18", max: 18 },
                        { name: "五级 58", max: 58 }
                    ],
                    splitLine: {
                        /*分割线*/
                        lineStyle: {
                            /*分割线样式*/
                            color: "rgba(0, 0, 0, .4)",
                            type: "dashed",
                            width: 2
                        }
                    },
                    splitArea: {
                        /*分割区域*/
                        show: false
                    }
                },
                series: tempSeries
            }

            this.chartOptions = options
        }
    }
};
</script>



