<template>
    <div class="wioc-ball" >
        <!--球形图-->
        <div class="yiwang-middle" v-if="type=='ballFirst'" @mouseenter="mouseIn" @mouseleave="mouseOut" >
            <div class="bench" >
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
                <div class="circle5"></div>
                <ul>
                    <li v-for="midItem in midList">
                        <h4>{{midItem.name}}</h4>
                        <h5>{{midItem.num}}</h5>
                    </li>
                </ul>
            </div>
        </div>

        <!--球二-->
        <div class="yiwang-overview" v-if="type=='ballSecond'">
            <h4><strong>{{overviewList.total}}</strong>{{overviewList.unit}}</h4>
            <h5>{{overviewList.name}}</h5>
            <ul>
                <li v-for="overviewItem in overviewList.data">
                    <h6>{{overviewItem.name}}</h6>
                    <strong>{{overviewItem.num}}</strong>{{overviewList.dataUnit}}
                </li>
            </ul>
        </div>
        <div></div>
    </div>

</template>

<script>
    export default {
        name: "wioc-canvas2",
        props: {
            midList:Array,
            type :{
                type: String,
                default :"ballFirst",
            },
            overviewList:Object,
        },
        data() {
            return {
                ster: null,
            }
        },
        mounted(){

        },
        methods: {
            dataToggle(){
                let $li = $(".yiwang-middle ul li:first");
                $li.appendTo($(".yiwang-middle ul"));
            },
            mouseIn(){
                clearInterval(this.ster);
            },
            mouseOut(){
                let _this = this;
                this.ster = setInterval(function(){

                    _this.dataToggle();
                },2000);
            }
        },
        created(){
            if(this.type==='ballFirst'){
                let _this = this;
                this.ster = setInterval(function(){
                    _this.dataToggle();
                },2000);
            }
        },
        destroyed() {
            clearInterval(this.ster);
        }
    }
</script>
<style lang="less">

    .wioc-ball{
        background: #020322;
    }
    .yiwang-middle{
        cursor: pointer;
        position: relative;
        height: 26rem;
        width: 42rem;
        background: url(./img/canvas2/yiwang-mid-bg.png) no-repeat center bottom;
        background-size: 50rem;
        animation: cwAnm 1.5s linear;
    @keyframes cwAnm{
        0%,30% {
            transform: scale(.1);
            opacity: 0;
        }
        85% {
            transform: scale(1.1);
            opacity: 1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    .bench{
        position: absolute;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        width: 42.96rem;
        height: 18.32rem;
        background: url(./img/canvas2/yiwang-mid-plant.png) no-repeat center;
        background-size: 42.96rem;
    .circle1,.circle2,.circle3,.circle4,.circle5{
        position: absolute;
        top: 0;
        left: 50%;
        transform: perspective(80rem) rotatex(71.5deg);
    &:before{
         display: block;
         content: "";
         width: 100%;
         height: 100%;
         border-radius: 100%;
     }
    }
    .circle1{
        width: 38.76rem;
        height: 38.76rem;
        margin: -13.4rem 0 0 -19.38rem;
    &:before{
         background: url(./img/canvas2/yiwang-mid-circle1.png) no-repeat center;
         border: #1f9ebe 2px solid;
         background-size: 38rem;
         animation: circleReverse 40s linear infinite;
     }
    }
    .circle2{
        width: 31.64rem;
        height: 31.64rem;
        margin: -9.12rem 0 0 -15.5rem;
    &:before{
         background: url(./img/canvas2/yiwang-mid-circle2.png) no-repeat center;
         background-size: 29rem;
         animation: circleForward 10s linear infinite;
     }
    }
    .circle3{
        width: 20.52rem;
        height: 20.52rem;
        margin: -4rem 0 0 -10.2rem;
    &:before{
         background: url(./img/canvas2/yiwang-mid-circle3.png) no-repeat center;
         border: #1f9ebe 2px solid;
         background-size: 21rem;
         animation: circleForward 20s linear infinite;
     }
    }
    .circle4{
        width: 15.4rem;
        height: 15.4rem;
        margin: -1.6rem 0 0 -7.7rem;
    &:before{
         background: url(./img/canvas2/yiwang-mid-circle4.png) no-repeat left bottom;
         background-size: 10rem;
         animation: circleReverse 10s linear infinite;
     }
    }
    .circle5{
        width: 8.08rem;
        height: 8.08rem;
        margin: 1.8rem 0 0 -4rem;
    &:before{
         background: url(./img/canvas2/yiwang-mid-circle5.png) no-repeat center;
         animation: circleForward 10s linear infinite;
         background-size: 7rem;
     }
    &:after{
         display: block;
         content: "";
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         width: 9rem;
         height: 9rem;
         border: #fff 2px solid;
         border-radius: 50%;
     }
    }
    @keyframes circleForward{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes circleReverse{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
    ul{
    li{
        position: absolute;
        box-sizing: border-box;
        width: 10rem;
        height: 10rem;
        background: url(./img/canvas2/yiwang-mid-data-ball.png) no-repeat center;
        background-size: 100%;
        padding-top: 0px;
        transition: all .5s;
    &:nth-child(1){
         top: 4rem;
         left: 15rem;
         transform: scale(1);
         animation: yiwangDataSus 3s ease-in infinite;
    &:before{
         animation: yiwangData1 30s linear infinite;
    @keyframes yiwangData1{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    }
    &:after{
         animation: yiwangData2 40s linear infinite;
    @keyframes yiwangData2{
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
    }
    }
    &:nth-child(2){
         top: -1rem;
         left: 32rem;
         transform: scale(.8);
         animation: yiwangDataSus 3s ease-in infinite 1.5s;
     }
    &:nth-child(3){
         top: -7rem;
         left: 25rem;
         transform: scale(.6);
         animation: yiwangDataSus 3s ease-in infinite;
     }
    &:nth-child(4){
         top: -7rem;
         left: 9rem;
         transform: scale(.6);
         animation: yiwangDataSus 3s ease-in infinite 1.5s;
     }
    &:nth-child(5){
         top: -1rem;
         left: 1rem;
         transform: scale(.8);
         animation: yiwangData5 .5s,yiwangDataSus 3s ease-in infinite;
    @keyframes yiwangData5{
        0% {
            top: 4rem;
            left: 15rem;
            transform: scale(1);
            }
        100% {
            top: -1rem;
            left: 1rem;
            transform: scale(.8);
            }
    }
    }
    @keyframes yiwangDataSus{
        0%,100% {
            margin-top: 0;
        }
        50% {
            margin-top: 20px;
        }
    }
    &:before,&:after{
                  display: block;
                  content: "";
                  width: 9.5rem;
                  height: 9.5rem;
                  background: url(./img/canvas2/yiwang-mid-data-gear.png) no-repeat center/100%;
                  position: absolute;
                  background-size: 9rem;
                  top: 50%;
                  left: 50%;
              }
    &:before{
         width: 11rem;
         height: 11rem;
         margin: -5.5rem 0 0 -5.5rem;
         background-size: 11rem;
     }
    &:after{
         width: 410px;
         height: 410px;
         margin: -205px 0 0 -205px;
     }
    h4{
        font-size: 2rem;
        font-weight: normal;
        color: #fff;
        line-height: 7rem;
        text-align: center;
        text-shadow: 0 5px 5px #000;
        margin: 0px;
    }
    h5{
        font-size: 2rem;
        font-weight: normal;
        color: #fff;
        line-height: 0rem;
        text-align: center;
        text-shadow: 0 5px 5px #000;
    }
    }
    }
    }
    }



/*
*   球2
*/
    .yiwang-overview{
        position: relative;
        width: 38rem;
        height: 22rem;
        background: url(./img/canvas2/yiwang-overview-plate.png) no-repeat center 9rem;
        margin: 0 auto;
        padding-top: 3.5rem;
    h4{
        width: 10rem;
        height: 10rem;
        background: url(./img/canvas2/yiwang-overview-earth.png) no-repeat center 1rem;
        font-size: 2rem;
        background-size: 9rem;
        font-weight: normal;
        color: #fff;
        line-height: 12rem;
        text-align: center;
        text-shadow: 0 3px 2px #7fb1e4;
        margin: 2rem auto 0 auto;
        animation:  yiwangcircle2 3s ease-in infinite;
    strong{
        font-size: 2.3rem;
        margin-right: .3rem;
    }
    @keyframes yiwangcircle2{
        0%,100% {
            margin-top: 30px;
        }
        50% {
            margin-top: 50px;
        }
    }
    }
    h5{
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        font-size: 1.8rem;
        font-weight: normal;
        color: #fff;
        line-height: 5rem;
        text-align: center;
    }
    ul{
    li{
        position: absolute;
        font-size: 1.5rem;
        color: #fff;
        line-height: 0px;
    &:nth-child(1){
         top: 0.8rem;
         left: 4rem;
    &:before{
         top: 8.2rem;
         left: 6.5rem;
         animation: overviewLight 8s linear infinite;
     }
    }
    &:nth-child(2){
         top: 0.8rem;
         left: 29rem;
    &:before{
         top: 8rem;
         left: -2rem;
         animation: overviewLight 8s linear infinite 2s;
     }
    }
    &:nth-child(3){
         top: 10rem;
         left: -3.25rem;
    &:before{
         top: 8.4rem;
         left: 6rem;
         animation: overviewLight 8s linear infinite 4s;
     }
    }
    &:nth-child(4){
         top: 10rem;
         left: 36.8rem;
    &:before{
         top: 8.2rem;
         left: -2rem;
         animation: overviewLight 8s linear infinite 6s;
     }
    }
    @keyframes overviewLight{
        0%,25% {
            background-color: #76b9ff;
            transform: scale(1);
            box-shadow: 0 0 20px #9ac6ff;
        }
        12.5% {
            background-color: #fff;
            box-shadow: 0 0 20px #fff;
            transform: scale(1.5);
        }
    }
    &:before{
         display: block;
         content: "";
         position: absolute;
         width: 10px;
         height: 10px;
         background: #76b9ff;
         border: #0066e9 3px solid;
         border-radius: 10px;
         box-shadow: 0 0 20px #9ac6ff;
     }
    h6{
        font-size: 1.5rem;
        font-weight: normal;
        color: #fff;
        line-height: 5rem;
        white-space: nowrap;
        margin: 4rem 0px 0px;
    }
    strong{
        color: #00c3ff;
        margin-right: 10px;
    }
    }
    }
    }
</style>
