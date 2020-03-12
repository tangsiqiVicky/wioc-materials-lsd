<template>
    <ul class="shujuzhili-follow-card">
        <li v-for="(followItem,index) in followList"
            :class="{view : viewNow == index, next : viewNext == index, next2nd : viewNext2nd == index, prev : viewPrev == index, prev2nd : viewPrev2nd == index}">
            <b>{{index+1 | cal}}</b>
            <table >
                <tr>
                    <!--<th>{{followItem.tit1}}：</th>
                    <td>{{followItem.name}}</td>-->
                    <th>{{followItem.num}}：</th>
                    <td>{{followItem.name}}</td>
                </tr>
                <tr>
                   <!-- <th>{{followItem.tit2}}：</th>
                    <td>{{followItem.num1}}</td>-->
                    <th>{{followItem.num2}}：</th>
                    <td>{{followItem.name2}}</td>

                </tr>
                <tr>
                    <!--<th>{{followItem.tit3}}：</th>
                    <td>{{followItem.num2}}</td>-->
                    <th>{{followItem.num3}}：</th>
                    <td>{{followItem.name3}}</td>
                </tr>
            </table>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "typeB",
        props: ["followList"],
        components: {
        },
        data() {
            return {
                viewNow: 0,
                viewNext: 1,
                viewNext2nd: 2,
                viewPrev: 0,
                viewPrev2nd: 0,
                ster: "",
               /* followList:[
                    {tit1:'title',name:'name',tit2:'tit1',num1:'num1',tit3:'tit3',num2:'num2'},
                    {tit1:'title2',name:'name2',tit2:'tit1',num1:'num1',tit3:'tit3',num2:'num2'},
                    {tit1:'title3',name:'name3',tit2:'tit1',num1:'num1',tit3:'tit3',num2:'num2'},
                    {tit1:'title4',name:'name4',tit2:'tit1',num1:'num1',tit3:'tit3',num2:'num2'},
                    {tit1:'title5',name:'name5',tit2:'tit1',num1:'num1',tit3:'tit3',num2:'num2'}
                ]*/
            }
        },
        filters: {
            cal(value) {
                if(value<10){
                    return '0' + value;
                }else{
                    return value;
                }
            }
        },
        mounted(){

        },
        methods: {
//          checkNow(index) {
//              this.viewNow = index;
//          }
        },
        created(){
            this.viewPrev = this.followList.length-1;
            this.viewPrev2nd = this.viewPrev-1;

            let _this = this;
            this.ster = setInterval(function(){
                _this.viewNow++;
                if(_this.viewNow > _this.followList.length-1){
                    _this.viewNow = 0;
                }
            }, 5000);
        },
        destroyed() {
            clearInterval(this.ster);
        },
        watch: {
            viewNow(val) {
                this.viewNext = val+1;
                this.viewNext2nd = val+2;
                this.viewPrev = val-1;
                this.viewPrev2nd = val-2;
                if(val == this.followList.length-2){
                    this.viewNext2nd = 0;
                }
                if(val == this.followList.length-1){
                    this.viewNext = 0;
                    this.viewNext2nd = 1;
                }
                if(val == 1){
                    this.viewPrev2nd = this.followList.length-1;
                }
                if(val == 0){
                    this.viewPrev = this.followList.length-1;
                    this.viewPrev2nd = this.followList.length-2;
                }
            }
        }
    }
</script>

<style lang="less">//1rem=40px
    .shujuzhili-follow-card{
        position: relative;
        width: 27.5rem;
        height: 22.5rem;
        margin: 0 auto;
        li{
            position: absolute;
            top: -5rem;
            left: 2.125rem;
            z-index: 20;
            width: 23.35rem;
            height:13.825rem;
            background: url(../img/canvas1/follow-card.png) no-repeat center;
            background-size: 23.35rem 13.875rem;
            transform: scale(0.1);
            opacity: 0;
            cursor: pointer;
            transition: all .5s;
            &.view{
                top: 8.25rem;
                left: 2.075rem;
                z-index: 50;
                transform: scale(1);
                opacity: 1;
            }
            &.prev,&.next,&.prev2nd,&.next2nd{
            }
            &.prev,&.next{
                z-index: 40;
                top: 1.75rem;
                transform: scale(.55);
                opacity: .7;
            }
            &.prev{
                left: -5rem;
            }
            &.next{
                left: 9.25rem;
            }
            &.prev2nd,&.next2nd{
                z-index: 30;
                top: -1.5rem;
                transform: scale(.5);
                opacity: .4;
            }
            &.prev2nd{
                left: -4rem;
            }
            &.next2nd{
                left: 8.25rem;
            }
            b{
                position: absolute;
                right: 2.5rem;
                bottom: 1.25rem;
                font-size: 1rem;
                color: #ffd200;
                line-height: 1.75rem;
            }
            table{
                width: 80%;
                margin: 1.5rem auto 0 auto;
                th{
                    width: 40%;
                    font-size: 0.9rem;
                    font-weight: normal;
                  //  color: #fff;
                    color: blue;
                    line-height: 1.35rem;
                    text-align: right;
                    padding: 0.75rem 0.25rem;
                    vertical-align: top;
                }
                td{
                    width: 60%;
                    font-size: 0.9rem;
                    color: #ffd200;
                    line-height:1.35rem;
                    white-space: normal;
                    padding: 0.75rem 0.25rem;
                    vertical-align: top;
                }
            }
        }
    }
</style>
