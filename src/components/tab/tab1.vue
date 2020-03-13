<template>
    <ul class="tabs-bar">
        <li v-for="(tabsItem,index) in tabsList" :class="indexValue == index ? 'active':''" @click="checkNow(index, tabsItem)">
            <span class="v-icon" :class="tabsItem.icon" v-if="tabsItem.icon"></span>
            <span>{{tabsItem.name}}</span>
        </li>
    </ul>
</template>
<style lang="less">
    .tabs-bar {
        display: inline-block;
        position: relative;
        height: 1.6875rem;
        background-color: rgba(36, 123, 184, .3);
        border-radius: 1.6875rem;
        padding: 0 0.844rem;
        vertical-align: middle;
        margin-top: -0.156rem;
        li {
            float: left;
            position: relative;
            z-index: 50;
            height: 1.6875rem;
            font-size: 0.875rem;
            color: #a5d9fe;
            line-height: 1.6875rem;
            margin-left: 0.844rem;
            padding: 0 0.844rem;
            list-style: none;
            cursor: pointer;
            transition: color .5s;
            &.active {
                background-color: #247bb8;
                color: #fff;
                cursor: default;
                &:before,
                &:after {
                    display: block;
                    content: "";
                    position: absolute;
                    top: 0;
                    width:0.844rem;
                    height: 1.6875rem;
                    background-color: #247bb8;
                }
                &:before {
                    left: -0.8125rem;
                    border-top-left-radius: 1.6875rem;
                    border-bottom-left-radius: 1.6875rem;
                }
                &:after {
                    right: -0.8125rem;
                    border-top-right-radius: 1.6875rem;
                    border-bottom-right-radius: 1.6875rem;
                }
            }
        }
        li:first-child {
            margin-left: 0;
        }
        li:hover {
            color: #fff;
        }
        &.bflx{
            height: 1.3125rem;
            background: #0c1a3d;
            border-radius: 0.156rem;
            padding: 0;
            float: right;
            margin-top: 0.625rem;
            border: 0.0625rem solid #3a8bef;
            overflow: hidden;
            li{
                float: left;
                display: inline-block;
                line-height: 1.3125rem;
                height: 1.3125rem;
                padding: 0 0.3125rem;
                font-size: 0.9375rem;
                color: #29aafb;
                margin: 0;
                &.active{
                    color: #000;
                    background: #43d5ff;
                    &:before,
                    &:after{
                        display: none;
                    }
                }
            }
        }
        &.blfx{
            height: 1.3125rem;
            background: #0c1a3d;
            border-radius: 0.156rem;
            padding: 0;
            float: left;
            margin-top: 0.625rem;
            margin-left: 5rem;
            border: 0.0625rem solid #3a8bef;
            overflow: hidden;
            li{
                float: left;
                display: inline-block;
                line-height: 1.3125rem;
                height: 1.3125rem;
                padding: 0 0.3125rem;
                font-size: 3.75rem;
                color: #29aafb;
                margin: 0;
                &.active{
                    color: #000;
                    background: #43d5ff;
                    &:before,
                    &:after{
                        display: none;
                    }
                }
            }
        }
        &.hkzw {
            background-color: inherit;
            margin-top: 0;
            li {
                border:0.0625rem solid #59bfba;
                border-radius: 70.46875rem;
                font-size: 1.094rem;
                &.active {
                    background-color: inherit;
                    border:0.0625rem solid #76d542;
                    color: #76d542;
                    &:before,
                    &:after {
                        display: none;
                        content: "";
                    }
                }
            }
        }
        &.vertical{
            background-color: inherit;
            margin-top: 0;
            height: inherit;
            padding: inherit;
            li {
                width: 14.71875rem;
                height: 2.625rem;
                /*background-image: url("./img/matter-tab.png");*/
                text-align: center;
                line-height: 2.625rem;
                color: #61cfca;
                margin-top: 1.875rem;
                cursor: pointer;
                float: inherit;
                padding: inherit;
                margin-left: 0;
                font-size: 1.125rem;
                &.active {
                    background-color: inherit;
                    color: #76d542;
                    &:before,
                    &:after {
                        display: none;
                        content: "";
                    }
                }
            }
        }
        &.hkwmb{
            background-color: inherit;
            margin-top: 0;
            height: 3.46875rem;
            li {
                margin: inherit;
                font-size: 1.25rem;
                line-height:3.46875rem;
                width: 9.375rem;
                height: 3.46875em/16;
                box-sizing: border-box;
                &.active {
                    background-color: inherit;
                    &:before{
                        width: 11.1875rem;
                        height: 3.46875rem;
                        /*background-image: url(./img/top-tab.png);*/
                        background-repeat: no-repeat;
                        z-index:-1;
                        border-top-left-radius:inherit;
                        border-bottom-left-radius: inherit;
                        background-color: inherit;
                        margin-left: -1rem;
                    }
                    &:after {
                        display: none;
                        content: "";
                    }
                }
                span{
                    &:nth-child(1){
                        margin-top: -0.5rem;
                    }
                }
            }
        }
        &.hkwmb-time-subindex{
            background-color: inherit;
            margin-top: 0;
            height: 3.46875rem;
            li {
                margin: inherit;
                font-size: 1.5625rem;
                line-height:4.03rem;
                width:19.625rem;
                height: 4.03rem;
                box-sizing: border-box;
                text-align: center;
                font-weight:bold;
                color: #feff8a;
                &.active {
                    background-color: inherit;
                    &:before{
                        width: 19.625rem;
                        height: 4.03rem;
                        background-repeat: no-repeat;
                        z-index:-1;
                        border-top-left-radius:inherit;
                        border-bottom-left-radius: inherit;
                        background-color: inherit;
                        margin-left: 0.8125rem;
                    }
                    &:after {
                        display: none;
                        content: "";
                    }
                }
                span{
                    &:nth-child(1){
                        margin-top: -0.5rem;
                    }
                }
            }
        }

        &.hkwmb-time-subindex-tab{
            background-color: inherit;
            margin-top: 0;
            height: auto;
            overflow: hidden;
            li {
                display: block;
                width: 8.125rem;
                height: 2.8125rem;
                line-height: 2.8125rem;
                text-align: center;
                font-size: 1.25rem;
                color: white;
                margin-left:inherit;
                &.active {
                    background-color: #000;
                    box-shadow:-0.0625rem 0rem 0.3125rem rgba(28,133,230,.2),   /*左边阴影*/
                        0rem -0.0625rem 0.3125rem rgba(28,133,230,.2),  /*上边阴影*/
                    0.0625rem 0rem 0.3125rem rgba(28,133,230,.2),  /*右边阴影*/
                    0rem 0.0625rem 0.3125rem rgba(28,133,230,.2); /*下边阴影*/
                    &:before,
                    &:after {
                        display: none;
                        content: "";
                    }
                }
            }
        }
    }
</style>
<script>
    export default {
        name: 'wioc-tab1',
        props: {
            tabsList: {
                type: Array,
                default: function () {
                    return [{
                        name: '日'
                    },{
                        name: '月'
                    },{
                        name: '年'
                    }]
                }
            }},
        data() {
            return {
                indexValue:0,
            }
        },
        mounted(){
//            this.$nextTick(()=>{
//                Bus.$on('on', (indexValue) => {
//                    debugger
//                    this.indexValue = indexValue
//                })
//            });
//            console.log(this.indexValue)
        },
        methods: {
            checkNow(index, tabsItem) {
                this.indexValue = index;
                this.$emit("ontabclick",tabsItem);
                // this.$emit("ontabclick",this.indexValue);
            }

        },
        watch:{
            tabsList(){
                this.indexValue = 0;
            }
        }
    };
</script>
