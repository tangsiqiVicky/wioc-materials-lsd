<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
import chartBase from '../base/chart-base'
import echarts from "echarts";
export default {
    name: "chart-bar-line-three",
    data() {
        return {
            chartOrigin: {
                columns: ["05月", "04月", "03月", "02月", "01月"],
                list: [
                    {
                        name: "内资企业",
                        type: "bar",
                        data: [70, 50, 90, 80, 100]
                    },
                    {
                        name: "私营企业",
                        type: "bar",
                        data: [30, 40, 20, 50, 40]
                    },
                    {
                        name: "外资企业",
                        type: "bar",
                        data: [20, 45, 30, 85, 55]
                    },
                    {
                        name: "内资企业",
                        type: "line",
                        data: [70, 50, 90, 80, 100]
                    },
                    {
                        name: "私营企业",
                        type: "line",
                        data: [30, 40, 20, 50, 40]
                    },
                    {
                        name: "外资企业",
                        type: "line",
                        data: [20, 45, 30, 85, 55]
                    }
                ]
            },
            styleList: [
                {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            //柱子颜色渐变
                            { offset: 0, color: "#3977E6" },
                            { offset: 1, color: "#37BBF8" }
                        ])
                    }
                },
                {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            //柱子颜色渐变
                            { offset: 0, color: "#eaca5c" },
                            { offset: 1, color: "#fed145" }
                        ])
                    }
                },
                {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            //柱子颜色渐变
                            { offset: 0, color: "#62cf96" },
                            { offset: 1, color: "#7fdba9" }
                        ])
                    }
                },
                {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            //柱子颜色渐变
                            { offset: 0, color: "#ef447b" },
                            { offset: 1, color: "#fd7d9f" }
                        ])
                    }
                }
            ],
            chartOptions: {}
        };
    },
    props: ['componentParams',"dyResultData","chartOrigins"],
    components: {
        chartBase
    },
    mounted() {
        if (this.chartOrigins) {
            this.setChartOptions(this.chartOrigins)
        }else{
            this.setChartOptions(this.chartOrigin)
        }
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
    methods: {
        change(params) {
            this.$emit("change", params);
        },
        getSeriesStyle(type, item, index) {
            switch (type) {
                case "line":
                    return {
                        name: item.name,
                        type: type,
                        data: item.data,
                        symbol: "none",
                        itemStyle: this.styleList[index],
                        barGap: 0
                    };
                case "bar":
                    return {
                        name: item.name,
                        type: type,
                        data: item.data,
                        barWidth: 30, //设置柱子的宽度
                        itemStyle: this.styleList[index],
                        barGap: 0
                    };
            }
        },
        setChartOptions(renderData) {
            // 获取数据操作
            let legendData = [];
            let tempSeries = [];
            renderData.list.forEach((item, index) => {
                legendData.push(item.name);
                tempSeries.push(
                    this.getSeriesStyle(
                        item.type ? item.type : "bar",
                        item,
                        index
                    )
                );
            });
            // 图表个性化参数
            let option = {
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow"
                    }
                },
                legend: {
                   // y: "25",
                    padding:20,
                    left: "right",
                    itemGap: 10,
                    itemWidth: 11, // 设置宽度
                    itemHeight: 11, // 设置高度
                    data: legendData,
                    textStyle: {
                        fontFamily: 'PingFangSC-Regular',
                        fontSize: 11,
                        color: '#979797'
                    }
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: {
                    show: false
                },
                yAxis: {
                    axisLabel: {
                        show: true,
                       //height: 10,
                        textStyle: {
                            fontSize: "11",
                            fontFamily: "PingFangSC-Regular",
                            color: "#979797",
                            lineHeight:15
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#C4C6CF",
                            width: 1
                        }
                    },
                    splitLine: { show: false },
                    axisTick: { show: false }, //取消刻度线
                    type: "category",
                    data: renderData.columns
                },
                series: tempSeries
            };

            this.chartOptions = option;
        }
    }
};
</script>

<style scoped>
.chartClass {
    height: 800px !important;
    width: 100%;
}
</style>
