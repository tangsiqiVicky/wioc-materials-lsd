<template lang="html">
    <div class="shujuzhili-middle">
        <div class="universe" >
            <h1></h1>
            <!--<div class="universe" @mouseenter="mouseIn" @mouseleave="mouseOut">-->
            <ul class="wave">
                <li v-for="count in 4"></li>
            </ul>
            <ul class="firefly">
                <li v-for="count in 20"></li>
            </ul>
            <div class="title">
                <b></b><i></i>
                <h4>{{midList.title}}</h4>
            </div>
            <ul class="view">
                <li v-for="midItem in midList.arr">
                    <h4><strong>{{midItem.num}}</strong>{{midItem.unit}}分</h4>
                    <h5>{{midItem.name}}</h5>
                </li>
            </ul>
        </div>
        <!-- <ul class="bottom-view">
           <li v-for="midItem in midList.bottom">
             <h4><strong>{{midItem.num}}</strong>{{midItem.unit}}</h4>
             <h4>{{midItem.name}}</h4>
           </li>
         </ul>-->
    </div>
</template>

<script>
    export default {
        name: "typeA",
        props: ["midList"],
        components: {
        },
        data() {
            return {
                ster: null,
                /*midList:
                    {
                        title:"title",
                        top:[{num:'1',unit:'分',name:'topname'},
                            {num:'2',unit:'分',name:'topname'},
                            {num:'3',unit:'分',name:'topname'},
                            {num:'4',unit:'分',name:'topname'},
                            {num:'5',unit:'分',name:'topname'},
                            {num:'6',unit:'分',name:'topname'},
                            {num:'7',unit:'分',name:'topname'},
                        ],
                        // bottom:[{num:'98',unit:'个',name:'bottomname'}],
                    }*/
            }
        },
        mounted(){
        },
        methods: {
            universeToggle(){
                let $li = $(".shujuzhili-middle .universe .view li:first");
                $li.appendTo($(".shujuzhili-middle .universe .view"));
            },
            mouseIn(){
                clearInterval(this.ster);
            },
            mouseOut(){
                let _this = this;
                this.ster = setInterval(function(){
                    _this.universeToggle();
                },5000);
            }
        },
        created(){
            let _this = this;
            this.ster = setInterval(function(){
                _this.universeToggle();
            },5000);
        },
        destroyed() {
            clearInterval(this.ster);
        }
    }
</script>

<style lang="less"> //1rem=100px
    .shujuzhili-middle{
        position: relative;
        animation: cwAnm2 1.5s linear;
        @keyframes cwAnm2{
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
        .universe{
            position: relative;
            width: 23rem;
            height: 13rem;
            margin: 0 auto;
            .wave{
                position: absolute;
                top: 7.5rem;
                left: 50%;
                li{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    &:before{
                        display: block;
                        content: "";
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                        border: rgba(40,65,131,.5) 0.12rem solid;
                        border-radius: 22rem;
                    }
                    &:nth-child(1){
                        width: 22rem;
                        height: 22rem;
                        transform: translate(-50%,-50%) perspective(40rem) rotatex(77.5deg);
                        &:before{
                            box-shadow: 0 0 0.1rem #00367a, 0 0 0.1rem #00367a inset;
                            animation: unWave 5s linear infinite;
                        }
                    }
                    &:nth-child(2){
                        width: 21.20rem;
                        height: 21.20rem;
                        transform: translate(-50%,-50%) perspective(40rem) rotatex(77deg);
                        &:before{
                            border-color: rgba(255,255,255,.5);
                            box-shadow: 0 0 0.1rem #fff, 0 0 0.1rem #fff inset;
                            animation: unWave 5s linear infinite 1s;
                        }
                    }
                    &:nth-child(3){
                        width: 16.6rem;
                        height: 16.6rem;
                        transform: translate(-50%,-50%) perspective(40rem) rotatex(77.5deg);
                        &:before{
                            box-shadow: 0 0 0.1rem #00367a, 0 0 0.1rem #00367a inset;
                            animation: unWave 5s linear infinite 2s;
                        }
                    }
                    &:nth-child(4){
                        width: 15.8rem;
                        height: 15.8rem;
                        transform: translate(-50%,-50%) perspective(40rem) rotatex(77deg);
                        &:before{
                            border-color: rgba(255,255,255,.5);
                            box-shadow: 0 0 0.1rem #fff, 0 0 0.1rem #fff inset;
                            animation: unWave 5s linear infinite 3s;
                        }
                    }
                }
                @keyframes unWave{
                    0% {
                        opacity: 0;
                        transform: scale(.7);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(1.1);
                    }
                }
            }
            .firefly{
                position: absolute;
                top: 7.5rem;
                left: 50%;
                li{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0.1rem;
                    height: 0.1rem;
                    margin: -0.05rem 0 0 -0.05rem;
                    background: #2691ff;
                    border-radius: 0.1rem;
                    box-shadow: 0 0 0.1rem #2691ff;
                    &:nth-child(even){
                        background: #a4d7ff;
                    }
                    &:nth-child(1){
                        animation: fireflyFrames 2s linear infinite,fireflyFro1 4s linear infinite;
                    }
                    &:nth-child(2){
                        animation: fireflyFrames 2s linear infinite,fireflyFro2 5s linear infinite;
                    }
                    &:nth-child(3){
                        animation: fireflyFrames 2s linear infinite,fireflyFro3 6s linear infinite;
                    }
                    &:nth-child(4){
                        animation: fireflyFrames 2s linear infinite,fireflyFro4 7s linear infinite;
                    }
                    &:nth-child(5){
                        animation: fireflyFrames 2s linear infinite,fireflyFro5 8s linear infinite;
                    }
                    &:nth-child(6){
                        animation: fireflyFrames 2s linear infinite,fireflyFro6 4s linear infinite;
                    }
                    &:nth-child(7){
                        animation: fireflyFrames 2s linear infinite,fireflyFro7 5s linear infinite;
                    }
                    &:nth-child(8){
                        animation: fireflyFrames 2s linear infinite,fireflyFro8 6s linear infinite;
                    }
                    &:nth-child(9){
                        animation: fireflyFrames 2s linear infinite,fireflyFro9 7s linear infinite;
                    }
                    &:nth-child(10){
                        animation: fireflyFrames 2s linear infinite,fireflyFro10 8s linear infinite;
                    }
                    &:nth-child(11){
                        animation: fireflyFrames 2s linear infinite,fireflyFro11 4s linear infinite;
                    }
                    &:nth-child(12){
                        animation: fireflyFrames 2s linear infinite,fireflyFro12 5s linear infinite;
                    }
                    &:nth-child(13){
                        animation: fireflyFrames 2s linear infinite,fireflyFro13 6s linear infinite;
                    }
                    &:nth-child(14){
                        animation: fireflyFrames 2s linear infinite,fireflyFro14 7s linear infinite;
                    }
                    &:nth-child(15){
                        animation: fireflyFrames 2s linear infinite,fireflyFro15 8s linear infinite;
                    }
                    &:nth-child(16){
                        animation: fireflyFrames 2s linear infinite,fireflyFro16 4s linear infinite;
                    }
                    &:nth-child(17){
                        animation: fireflyFrames 2s linear infinite,fireflyFro17 5s linear infinite;
                    }
                    &:nth-child(18){
                        animation: fireflyFrames 2s linear infinite,fireflyFro18 6s linear infinite;
                    }
                    &:nth-child(19){
                        animation: fireflyFrames 2s linear infinite,fireflyFro19 7s linear infinite;
                    }
                    &:nth-child(20){
                        animation: fireflyFrames 2s linear infinite,fireflyFro20 8s linear infinite;
                    }
                }
                @keyframes fireflyFrames {
                    0%,100% {
                        transform: scale(.4);
                    }
                    50% {
                        transform: scale(1);
                    }
                }
                @keyframes fireflyFro1 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -6rem;
                        left: -3rem;
                    }
                }
                @keyframes fireflyFro2 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0.1rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -6rem;
                        left: -4rem;
                    }
                }
                @keyframes fireflyFro3 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: -0.1rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -6rem;
                        left: 4.5rem;
                    }
                }
                @keyframes fireflyFro4 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0.15rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -6rem;
                        left: -5rem;
                    }
                }
                @keyframes fireflyFro5 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -6rem;
                        left: -1rem;
                    }
                }
                @keyframes fireflyFro6 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -5.5rem;
                        left: 1rem;
                    }
                }
                @keyframes fireflyFro7 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0.05rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -6rem;
                        left: 2rem;
                    }
                }
                @keyframes fireflyFro8 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0.05rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -4rem;
                        left: 5rem;
                    }
                }
                @keyframes fireflyFro9 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: -0.15rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -4.5rem;
                        left: -5rem;
                    }
                }
                @keyframes fireflyFro10 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: -0.2rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -4rem;
                        left: -6rem;
                    }
                }
                @keyframes fireflyFro11 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: -0.1rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -3rem;
                        left: -6rem;
                    }
                }
                @keyframes fireflyFro12 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0.1rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -3rem;
                        left: 5.5rem;
                    }
                }
                @keyframes fireflyFro13 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0.05rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -3.5rem;
                        left: 5rem;
                    }
                }
                @keyframes fireflyFro14 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: -0.1rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -3.8rem;
                        left: -5rem;
                    }
                }
                @keyframes fireflyFro15 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: -0.1rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -5.1rem;
                        left: 3.5rem;
                    }
                }
                @keyframes fireflyFro16 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: -0.1rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -3.80rem;
                        left: -3.00rem;
                    }
                }
                @keyframes fireflyFro17 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0.05rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -6rem;
                        left: 0.2rem;
                    }
                }
                @keyframes fireflyFro18 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: -0.05rem;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -6rem;
                        left: -0.4rem;
                    }
                }
                @keyframes fireflyFro19 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -3rem;
                        left: -0.30rem;
                    }
                }
                @keyframes fireflyFro20 {
                    0% {
                        opacity: 0;
                        top: 0;
                        left: 0;
                    }
                    5% {
                        opacity: 1;
                    }
                    95% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                        top: -3rem;
                        left: 0.3rem;
                    }
                }
            }
            .title{
                position: absolute;
                top: 1.8rem;
                left: 50%;
                z-index: 10;
                margin-left: -3.60rem;
                width: 7.20rem;
                height: 7.2rem;
                background: url(../img/canvas1/shujuzhili-universe-title.png) no-repeat center;
                background-size: 7.2rem 7.2rem;
                animation: shujuzhiliTitle 3s ease-in infinite;
                @keyframes shujuzhiliTitle{
                    0%,100% {
                        margin-top: 0;
                    }
                    50% {
                        margin-top: 0.2rem;
                    }
                }
                &:before{
                    display: block;
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 10;
                    margin: -3.15rem 0 0 -3.15rem;
                    width: 6.30rem;
                    height: 6.30rem;
                    background: url(../img/canvas1/shujuzhili-universe-wball1.png) no-repeat right 0.2rem;
                    background-size: 2.32rem 5.68rem;
                    animation: unAroundr 30s linear infinite;
                }
                &:after{
                    display: block;
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    z-index: 10;
                    margin: -2.90rem 0 0 -2.90rem;
                    width: 5.80rem;
                    height: 5.80rem;
                    background: url(../img/canvas1/shujuzhili-universe-wball2.png) no-repeat center;
                    background-size: 5.8rem 5.8rem;
                    animation: unAroundl 30s linear infinite;
                }
                b{
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 20;
                    width: 100%;
                    height: 100%;
                    &:before{
                        display: block;
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        z-index: 20;
                        margin: -2.08rem 0 0 -2.08rem;
                        width: 4.16rem;
                        height: 4.16rem;
                        background: url(../img/canvas1/shujuzhili-universe-ball1.png) no-repeat center;
                        background-size: 4.16rem 4.16rem;
                        animation: unAroundr 20s linear infinite;
                    }
                    &:after{
                        display: block;
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        z-index: 20;
                        margin: -1.77rem 0 0 -1.77rem;
                        width: 3.54rem;
                        height: 3.54rem;
                        background: url(../img/canvas1/shujuzhili-universe-ball2.png) no-repeat center;
                        background-size: 3.54rem 3.54rem;
                        animation: unAroundl 10s linear infinite;
                    }
                }
                i{
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 30;
                    width: 100%;
                    height: 100%;
                    &:before{
                        display: block;
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        z-index: 30;
                        margin: -2.48rem 0 0 -2.48rem;
                        width: 4.96rem;
                        height: 4.96rem;
                        background: url(../img/canvas1/shujuzhili-universe-bod.png) no-repeat center;
                        background-size: 4.96rem 4.96rem;
                        animation: unAroundz 10s linear infinite;
                    }
                    &:after{
                        display: block;
                        box-sizing: border-box;
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        z-index: 30;
                        margin: -1.6rem 0 0 -1.6rem;
                        width: 3.2rem;
                        height: 3.2rem;
                        background: rgba(32,19,126,.3);
                        border: #55abfd 0.02rem solid;
                        border-radius: 3.2rem;
                        box-shadow: 0 0 0.8rem #2580eb, 0 0 0.5rem #2580eb, 0 0 0.3rem #2580eb;
                    }
                }
                @keyframes unAroundr{
                    0% {
                        transform:rotate(0deg);
                    }
                    100% {
                        transform:rotate(360deg);
                    }
                }
                @keyframes unAroundl{
                    0% {
                        transform:rotate(0deg);
                    }
                    100% {
                        transform:rotate(-360deg);
                    }
                }
                @keyframes unAroundz{
                    0% {
                        transform:rotate(0deg);
                    }
                    5% {
                        transform:rotate(180deg);
                    }
                    50% {
                        transform:rotate(180deg);
                    }
                    55%,100% {
                        transform:rotate(360deg);
                    }
                }
                h4{
                    position: absolute;
                    margin: 0;
                    top: 50%;
                    left: 50%;
                    z-index: 40;
                    transform: translate(-50%,-50%);
                    font-size: 0.48rem;
                    color: #fff;
                    line-height: 1rem;
                    text-align: center;
                }
            }
            .view{
                li{
                    position: absolute;
                    z-index: 5;
                    margin-left: -2.78rem;
                    width: 5.56rem;
                    height: 3.79rem;
                    transition: all .5s;
                    background: url(../img/canvas1/shujuzhili-universe-view.png) no-repeat center;
                    background-size: 5.55rem 3.79rem;
                    &:nth-child(1){
                        top: 8.2rem;
                        left: 11.5rem;
                        z-index: 50;
                        &:before{
                            opacity: 1;
                            animation: shujuzhiliViewLight 2s linear, shujuzhiliViewLight2 2s linear infinite;
                            @keyframes shujuzhiliViewLight{
                                0% {
                                    left: -1rem;
                                    opacity: 0;
                                }
                                70% {
                                    left: 1.5rem;
                                }
                                100% {
                                    left: 0.7rem;
                                    opacity: 1;
                                }
                            }
                            @keyframes shujuzhiliViewLight2{
                                0%,100% {
                                    opacity: 0;
                                }
                                50% {
                                    opacity: 1;
                                }
                            }
                        }
                        &:after{
                            width: 1.72rem;
                            animation: shujuzhiliViewLine2 2s linear;
                            @keyframes shujuzhiliViewLine2{
                                0%,50% {
                                    width: 0.08rem;
                                }
                                90% {
                                    width: 1.8rem;
                                }
                                100% {
                                    width: 1.72rem;
                                }
                            }
                        }
                    }
                    &:nth-child(2){
                        top: 7.2rem;
                        left: 17.3rem;
                        transform: scale(.8);
                    }
                    &:nth-child(3){
                        top: 4.7rem;
                        left: 21.5rem;
                        transform: scale(.7);
                    }
                    &:nth-child(4){
                        top: 3.5rem;
                        left: 17.2rem;
                        transform: scale(.5);
                    }
                    &:nth-child(5){
                        top: 3.5rem;
                        left: 5.8rem;
                        transform: scale(.5);
                    }
                    &:nth-child(6){
                        top: 4.7rem;
                        left: 1.56rem;
                        transform: scale(.7);
                    }
                    &:nth-child(7){
                        top: 7.20rem;
                        left: 5.70rem;
                        transform: scale(.8);
                        animation: shujuzhiliView7 .5s;
                        @keyframes shujuzhiliView7{
                            0% {
                                top: 8.20rem;
                                left: 11.50rem;
                                transform: scale(1);
                            }
                            100% {
                                top: 7.20rem;
                                left: 5.70rem;
                                transform: scale(.8);
                            }
                        }
                        &:before{
                            opacity: 0;
                            animation: shujuzhiliViewLightb .5s linear;
                            @keyframes shujuzhiliViewLightb{
                                0% {
                                    left: 0.7rem;
                                    opacity: 1;
                                }
                                100% {
                                    left: -1rem;
                                    opacity: 0;
                                }
                            }
                        }
                        &:after{
                            width: 0.08rem;
                            animation: shujuzhiliViewLine2b .5s linear;
                            @keyframes shujuzhiliViewLine2b{
                                0% {
                                    width: 1.72rem;
                                }
                                100% {
                                    width: 0.08rem;
                                }
                            }
                        }
                    }
                    h4{
                        font-size: 0.6rem;
                        margin: 0;
                        font-weight: normal;
                        color: #16d7fb;
                        line-height: 1rem;
                        text-align: center;
                        padding-top: 1rem;
                        strong{
                            font-size: 0.80rem;
                            margin-right: 0.20rem;
                        }
                    }
                    h5{
                        font-size: 0.48rem;
                        font-weight: normal;
                        color: #16d7fb;
                        line-height: 1rem;
                        text-align: center;
                    }
                    &:before{
                        display: block;
                        content: "";
                        position: absolute;
                        bottom: -0.33rem;
                        left: 0.7rem;
                        width: 2.12rem;
                        height: 0.70rem;
                        background: url(../img/canvas1/shujuzhili-universe-light.png) no-repeat center;
                        background-size: 2.12rem 0.7rem;
                        opacity: 0;
                    }
                    &:after{
                        display: block;
                        content: "";
                        position: absolute;
                        right: 0;
                        bottom: 0;
                        width: 0.08rem;
                        height: 0.1rem;
                        background: url(../img/canvas1/shujuzhili-universe-line.png) no-repeat left center;
                        background-size:1.72rem 0.1rem ;
                    }
                }
            }
        }
        .bottom-view{
            text-align: center;
            padding-top: 0.5rem;
            li{
                display: inline-block;
                box-sizing: border-box;
                width: 3.98rem;
                height: 2.83rem;
                background: url(../img/canvas1/shujuzhili-mid-box.png) no-repeat center;
                background-size: 3.98rem 2.83rem;
                margin: 0 0.40rem;
                padding-top: 0.60rem;
                h4{
                    font-size: 0.48rem;
                    font-weight: normal;
                    color: #fff;
                    line-height: 0.80rem;
                    text-align: center;
                    strong{
                        font-size: 0.56rem;
                        margin-right: 0.20rem;
                    }
                }
            }
        }
    }


</style>
