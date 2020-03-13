<template>
    <wioc-card class="multilateral bga"  title="" style="width: 26rem;height: 13.95rem;;position: inherit;bottom: 0rem;right: 26%;">
        <div class="thistitl">{{title}}</div>
        <!--<div class="f-top c-blue wd-tc">{{$store.state.bounceArea}}</div>
        <div class="f-middle c-yellow wd-tc">{{infoHallWindow1F[$store.state.bounceArea].name}}</div>-->
        <div class="f-top c-blue wd-tc" >{{infoWindow.num}}</div>
        <div class="f-middle c-yellow wd-tc">{{infoWindow.name}}
            <div class="f-bottom c-blue wd-tc"></div>
            <p>受理时间：{{todayDay}}</p>
            <p> {{todayTime}}</p>
        </div>
    </wioc-card>
</template>

<script>

    export default {
        name: 'typeC',
        components: {
        },
        props:["title","infoHallWindow"],
        data () {
            return {
                todayTime:"" ,
                todayDay:"",
                infoWindow: this.infoHallWindow[0]
                /*  infoHallWindow: [
                                     {
                                        no: 'A00',
                                        name: '备用窗口'
                                    },
                                     {
                                        no: 'A01',
                                        name: '数字证书'
                                    },
                                     {
                                        no: 'A02',
                                        name: '数字证书'
                                    },
                                     {
                                        no: 'A03',
                                        name: '数字证书'
                                    },
                                    {
                                        no: 'A04',
                                        name: '数字证书'
                                    },
                                   {
                                        no: 'C26',
                                        name: '一口发证'
                                    }
                                ],*/
            }
        },
        mounted:function(){
            var _this = this;

            var flag = 1;
            $(".multilateral.bga").click(function(){
                $(this).addClass("antm");
                var len = _this.infoHallWindow.length;
                if(flag < len ){
                    _this.infoWindow = _this.infoHallWindow[flag];
                   // console.log("ssssssss"+infoWindow);
                    flag ++ ;
                }else{
                   flag = 0;
                }
                setTimeout(function(){
                    $(".multilateral.bga").removeClass("antm");
                },300);
            });
            this.getNowTime();
        },
        methods: {
            getNowTime() {
                var date = new Date();
                var year = date.getFullYear(); // 年
                var month = date.getMonth() + 1; // 月
                var day  = date.getDate(); // 日
                var hour = date.getHours(); // 时
                var minutes = date.getMinutes(); // 分
                var seconds = date.getSeconds(); //秒
                // 给一位数数据前面加 “0”
                if (month >= 1 && month <= 9) {
                    month = "0" + month;
                }
                if (day >= 0 && day <= 9) {
                    day = "0" + day;
                }
                if (hour >= 0 && hour <= 9) {
                    hour = "0" + hour;
                }
                if (minutes >= 0 && minutes <= 9) {
                    minutes = "0" + minutes;
                }
                var currentdate = year + "年" + month + "月" + day + "日";
                var currenttime  = hour + ":" + minutes ;
                this.todayTime = currenttime;
                this.todayDay = currentdate;
            },

        },
        watch: {
            '$store.state.bounceArea': function () {
//        	    console.info('areaDataMain',$store.state.areaDataMain)
//                $(".multilateral.bga").animate(
//                    {
//                        right:-20,
//                        top:219,
//                        opacity: 1
//                    },
//                    2600);
                $(".multilateral.bga").addClass("antm");
                setTimeout(function(){
                    $(".multilateral.bga").removeClass("antm");
                },300);
            }
        },
    }

</script>
<style lang="less"> //1rem=40px
    .multilateral{

        &.bga{
            background: url(../img/canvas1/min-card.png) no-repeat center/27.5rem;
        }
        .thistitl{
            font-size: 1rem;
            color: #fff;
            line-height: 1.5rem;
            padding-left: 3.25rem;
            padding-top: 0.5rem;
        }
        .f-top{
            font-size: 1rem;
            line-height: 2rem;
            padding-top: 0.5rem;
        }
        .f-middle{
            font-size: 1.3rem;
            line-height: 2.5rem;
        }
        .f-bottom{
            line-height: 2.5rem;
            p{
                display: inline-block!important;
                font-size: 1rem;
            }
        }
        &.antm{
          //  position: absolute;
            animation:antm .3s ease-in;
        }
        @keyframes antm{
            0% {
                opacity: 0;
                transform: scale(.1,.1);
            }
            100% {
                opacity: 1;
                transform: scale(1,1);
            }
        }
    }
</style>
