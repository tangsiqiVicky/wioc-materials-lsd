<template >
    <chart-base @change="change" :options="chartOptions" style="height:200px"></chart-base>
</template>


<script>
import chartBase from '../base/chart-base'
export default {
    name: "chart-rose",
    components:{
        chartBase
    },
    props: ['componentParams',"dyResultData","chartOrigins"],
    data() {
        return {
//            chartOrigin: {
//                columns: [],
//                list: [
//                    {
//                        name: "访问来源",
//                        data: [
//                            { value: 335, name: "直接访问" },
//                            { value: 310, name: "邮件营销" },
//                            { value: 274, name: "联盟广告" },
//                            { value: 235, name: "视频广告" },
//                            { value: 400, name: "搜索引擎" }
//                        ]
//                    }
//                ]
//            },
            chartOrigin: {
                "columns": [],
                "list": [{
                    "name": "固有风险",
                    "data": [{
                        "value": "3",
                        "name": "高风险"
                    }, {
                        "value": "6",
                        "name": "较大风险"
                    }, {
                        "value": "4",
                        "name": "一般风险"
                    }, {
                        "value": "27",
                        "name": "低风险"
                    }]
                }]
            },
            chartOptions: {}
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
                        radius: [30,80],
                        center: ["40%", "50%"],
                        data: item.data,
                        roseType: "radius",
                        label: {
                            normal: {
                                show:false,
                                emphasis:{
                                  show:true
                                },
                                textStyle: {
                                    color: "rgba(0, 0, 0, 0.6)"
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: "rgba(0, 0, 0,0.6)"
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                shadowBlur: 200,
                                shadowColor: "rgba(0, 0, 0, 0)"
                            }
                        },
                        color: [
                            "#FB497C",
                            "#FFC760",
                            '#4FCCFF',
                            "#6FE621",
                            "#4B7AF2",
                            "#19418B",
                            "#63BA96"
                        ],
                        animationType: "scale",
                        animationEasing: "elasticOut",
                        animationDelay: function(idx) {
                            return Math.random() * 200;
                        }
                    });
            });

            // 图表个性化参数
            let options = {
                color: [
                    "#FB497C",
                    "#FFC760",
                    '#4FCCFF',
                    "#6FE621",
                    "#4B7AF2",
                    "#19418B",
                    "#63BA96"
                ],
                title: {
                    left: "center",
                    top: 20,
                    textStyle: {
                        color: "#ccc"
                    }
                },

                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },

                legend: {
                    orient: "vertical",
                    x: "right",
                    y: "center",
                    icon: "circle",
                    itemWidth:13,
                    itemHeight:13,
                        textStyle: {
                            fontFamily: 'PingFangSC-Regular',
                            fontSize: 13,
                            color:'#9FA9BA'
                        },
                    //itemGap: 20
                },

//                visualMap: {
//                    show: false,
//                    min: 80,
//                    max: 600,
//                    inRange: {
//                        colorLightness: [0, 1]
//                    }
//                },
                series: tempSeries
            }

            this.chartOptions = options
        }
    }
};
</script>



