<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
import chartBase from '../base/chart-base'
export default {
    name: "chart-bar-line-four",
    components: {
        chartBase
    },
    props: ['componentParams',"dyResultData","chartOrigins"],
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
    data() {
        return {
            chartOrigin: {
                columns: ["01月", "02月", "03月", "04月", "05月", "06月", "07月"],
                list: [
                    {
                        name: "帮扶人数",
                        type: "bar",
                        data: [10, 52, 180, 300, 120, 250, 150]
                    },
                    {
                        name: "帮扶资金",
                        type: "line",
                        data: [10, 60, 210, 334, 135, 330, 170],
                    },
                    {
                        name: "人均帮扶资金",
                        type: "line",
                        data: [250, 280, 250, 300, 290, 280, 240]
                    }
                ]
            },
            chartOptions: {}
        };
    },

    methods: {
        change(params) {
            this.$emit("change", params);
        },
        setChartOptions(renderData) {
            // 获取数据操作
            let legendData = [];
            let tempSeries = [];
            renderData.list.forEach((item, index) => {
                legendData.push(item.name);
                tempSeries.push(
                    {
                        name: item.name,
                        type: item.type,
                        symbol: "none",
                        data: item.data,
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    width: 3
                                }
                            }
                        }
                    }
                );
            });
            // 图表个性化参数
            var option = {
                title: {
                    text: "人均帮扶资金",
                    textStyle: {
                        fontFamily:'PingFangSC-Regular',
                        fontSize: 13,
                        color: '#9FA9BA',
                        letterSpacing: 0.1,
                        lineHeight:20
                    }
                },
                color: ["#5eaef7", "#f3cd52", "#74d6a2"],
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        // 坐标轴指示器，坐标轴触发有效
                        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    padding:28,
                    icon: "react",
                    itemWidth: 11, // 设置宽度
                    itemHeight: 11, // 设置高度
                    left: "right",
                    textStyle:{
                        fontSize:'11',
                        fontFamily: 'PingFangSC-Regular',
                        color: '#979797'
                    },
                    data: legendData
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                xAxis: [
                    {
                        type: "category",
                        data: renderData.columns,
                        axisTick: {
                            alignWithLabel: true
                        },
                        splitLine: {
                            show: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#b8b8b8"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                fontSize: "11",
                                fontFamily: "PingFangSC-Regular",
                                color: "#979797",
                                lineHeight:15
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: "value",
                        show: false
                    }
                ],
                series:tempSeries
            };

            this.chartOptions = option
        }
    }
};
</script>

<style scoped>
.chartClass {
    height: 300px !important;
    width: 100%;
}
</style>
