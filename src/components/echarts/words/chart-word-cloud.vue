<template >
    <chart-base @change="change" :options="chartOptions" style="height:200px"></chart-base>
</template>


<script>
import chartBase from '../base/chart-base'
import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
    name: "chart-word-cloud",
    components:{
        chartBase
    },
    props: ['componentParams',"dyResultData","chartOrigins"],
    data() {
        return {
            chartOrigin: {
                columns: [],
                list: [
                    {
                        name: "",
                        data: [
                            {
                                name: "幼儿园",
                                value: 29
                            },
                            {
                                name: "台风",
                                value: 22
                            },
                            {
                                name: "政务",
                                value: 25
                            },
                            {
                                name: "缓行",
                                value:20
                            },
                            {
                                name: "海关",
                                value: 23
                            },{
                                name: "垃圾分类",
                                value: 15
                            },{
                                name: "罚款",
                                value: 16
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
            deep: true,
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
                    type: "wordCloud",
                    gridSize: 40,
                    shape: "line",
                    rotationRange: [0, 0], //数据翻转范围
                    sizeRange: [11, 30], //画布范围，如果设置太大会出现少词（溢出屏幕）设置文字大小范围
                  //  left: "center",
                    drawOutOfBound:false,
                    top: "center",
                  //  right: null,
                  //  bottom: null,
                    width: '100%',
                    height: 150,
                    textStyle: {
                        normal: {
                            color: function() {
                                return (
                                    "rgb(" +
                                    [
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160),
                                        Math.round(Math.random() * 160)
                                    ].join(",") +
                                    ")"
                                );
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: "#333"
                        }
                    },
                    data: item.data
                });
            });
            // 图表个性化参数
            let options = {
                tooltip: {
                    show: true
                },
                series: tempSeries
            };
            this.chartOptions = options
        }
    }
};
</script>



