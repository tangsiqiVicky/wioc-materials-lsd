<template>
    <chart-base @change="change" :options="chartOptions" class="chartClass"></chart-base>
</template>

<script>
import chartBase from '../base/chart-base'
import echarts from "echarts";
export default {
    name: "chart-bar-ten",
    data() {
        return {
            chartOrigin: {
                columns: ["预约户数统计"],
                list: [
                    {
                        name: "预约户数",
                        data: [212131]
                    },
                    {
                        name: "常住人口户数",
                        data: [441296]
                    }
                ]
            },
            chartOptions: {}
        };
    },
    props: {
        componentParams: {
            type: Object
        },
        dyResultData: {
            type: Object
        },
        chartOrigins: {
            type: Object
        },
        colorList: {
            type: Array,
            default() {
                return ["#4BA0F3", "#FA6400"];
            }
        },
        provideNumber: {
            type: Number,
            default: 6
        },
        options: {
            type: Object
        }
    },
    components: {
        chartBase
    },
    mounted() {
        if (this.chartOrigins) {
            this.setChartOptions(this.chartOrigins);
        } else {
            this.setChartOptions(this.chartOrigin);
        }
    },
    watch: {
        chartOrigins: {
            handler() {
                this.setChartOptions(this.chartOrigins);
            },
            deep: true
        },
        dynamicDataResult: {
            handler() {
                this.setChartOptions(this.dynamicDataResult.data);
            },
            deep: true
        },
        title: {
            handler() {
                this.setChartOptions(this.chartOrigins);
            },
            deep: true
        }
    },
    methods: {
        change(params) {
            this.$emit("change", params);
        },
        setChartOptions(renderData) {
            let _that = this;
            let colorList = this.colorList;
            let tempSeries = [];
            let op = {
                top: "8%",
                right: "3%",
                left: "13%",
                bottom: "8%"
            };
            this.options ? this.options : op;

            tempSeries = [
                {
                    name: "预约户数",
                    type: "bar",
                    barWidth: 16,
                    stack: "st",
                    label: {
                        normal: {
                            borderWidth: 10,
                            distance: 20,
                            align: "center",
                            verticalAlign: "middle",
                            borderRadius: 1,
                            borderColor: "#52DAFF",
                            backgroundColor: "#52DAFF",
                            show: true,
                            position: "top",
                            formatter: "{c}",
                            color: "#000"
                        }
                    },
                    itemStyle: {
                        color: "#52DAFF"
                    },
                    data: [
                        {
                            value: renderData.list[0].data[0],
                            itemStyle: {
                                normal: {
                                    color: {
                                        type: "bar",
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: "#52DAFF" // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: "#52DAFF" // 100% 处的颜色
                                            }
                                        ],
                                        globalCoord: false // 缺省为 false
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    name: "预约户数三角形",
                    type: "line",
                    barWidth: 0,
                    markPoint: {
                        symbol: "triangle",
                        symbolRotate: "180",
                        itemStyle: {
                            color: {
                                type: "linear",
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "#52DAFF" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#52DAFF" // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        symbolSize: [6, 5], // 容器大小
                        symbolOffset: [0, -15], //位置偏移
                        data: [
                            {
                                coord: [renderData.list[0].data[0] / 2]
                            }
                        ],
                        label: {
                            normal: {
                                show: false
                            },
                            offset: [0, 0]
                        }
                    }
                },
                {
                    name: "常住人口户数",
                    type: "bar",
                    barWidth: 16,
                    stack: "st",
                    itemStyle: {
                        color: "#FBD200"
                    },
                    label: {
                        normal: {
                            borderWidth: 10,
                            distance: 20,
                            align: "center",
                            verticalAlign: "middle",
                            borderRadius: 1,
                            borderColor: "#FBD200",
                            backgroundColor: "#FBD200",
                            show: true,
                            position: "top",
                            formatter: "{c}",
                            color: "#000"
                        }
                    },
                    data: [
                        {
                            value: renderData.list[1].data[0],
                            itemStyle: {
                                normal: {
                                    color: {
                                        type: "bar",
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: "#FBD200" // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: "#FBD200" // 100% 处的颜色
                                            }
                                        ],
                                        globalCoord: false // 缺省为 false
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    name: "常住人口户数三角形",
                    type: "line",
                    barWidth: 0,
                    markPoint: {
                        symbol: "triangle",
                        symbolRotate: "180",
                        itemStyle: {
                            color: {
                                type: "linear",
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "#FBD200" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "#FBD200" // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            }
                        },
                        symbolSize: [6, 5], // 容器大小
                        symbolOffset: [0, -15], //位置偏移
                        data: [
                            {
                                coord: [renderData.list[0].data[0] + renderData.list[1].data[0]/ 2]
                            }
                        ],
                        label: {
                            normal: {
                                show: false
                            },
                            offset: [0, 0]
                        }
                    }
                }
            ];

            //图表个性化参数
            let option = {
                color: colorList,
                title: {
                    text: ""
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    itemWidth: 10,
                    itemHeight: 10,
                    x: "right",
                    textStyle: {
                        color: "#979797",
                        fontSize: "11",
                        fontFamily: "PingFangSC-Regular"
                    },
                    data:[{
                        name :'预约户数'
                    },
                    {
                        name :'常住人口户数'
                    }]
                },
                grid: this.options,
                yAxis: [
                    {
                        type: "category",
                        color: "#b8b8b8",
                        data: renderData.columns,
                        axisPointer: {
                            type: "line"
                        },
                        axisTick: {
                            //是否显示刻度
                            show: false
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#b8b8b8"
                            }
                        }
                    }
                ],
                xAxis: {
                    show: true,
                    splitLine: {
                        //分割线
                        show: false
                    },
                    axisLabel: {
                        //是否显示刻度标签
                        show: false
                    },
                    axisLine: {
                        //是否显示线
                        show: false
                    },
                    axisTick: {
                        //是否显示刻度
                        show: false
                    }
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
    height: 200px !important;
    width: 100%;
}
</style>
