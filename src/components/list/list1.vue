<template>
    <div class="wioc-list">

        <!--listOne-->
        <ul class="list-progress" v-if="type=='listFirst'">
            <li v-for="(listItem,index) in ListFirst">
                <h4>NO.{{index+1}} {{listItem.name}}</h4>
                <h5>
                    <el-progress :stroke-width="12" :show-text="false" :percentage="listItem.progress" />
                </h5>
                <h6>{{listItem.num}}</h6>
            </li>
        </ul>

        <!--listTwo-->
        <ul class="ranking-view lozenge" v-if="type=='listTwo'">
            <li v-for="(listItem,index) in ListTwo.head" class="">
                <i></i>
                <h4>NO.{{index+1}}</h4>
                <a @mouseover="pMouseIn($event)" @mouseleave="pMouseOut($event)">{{listItem.context}}</a>
                <h5>{{listItem.state}} {{ListTwo.unit}}</h5>
            </li>
        </ul>

        <!--listThree-->
        <table  class="table-ranking" cellspacing="0" v-if="type=='listThree'" >
            <thead>
            <tr>
                <th v-for="tableItem in ListThree.head" :width="tableItem.width" class="hasTips">
                    {{tableItem.name}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tableItem,index) in ListThree.body">
                <td>{{index+1}}</td>
                <td class="hasTips">{{tableItem.dep}}</td>
                <td>{{tableItem.score}}</td>
                <td :class="{rankUp : index+1-tableItem.rt < 0,rankUnchanged : index+1-tableItem.rt == 0,rankDown : index+1-tableItem.rt > 0}">
                    {{Math.abs(index+1-tableItem.rt)}}
                </td>
            </tr>
            </tbody>
        </table>

        <!--listFour-->
        <table class="table-top5-progress" cellspacing="0" v-if="type=='listFour'">
            <thead>
            <tr>
                <th v-for="tableItem in ListFour.head" :width="tableItem.width" class="hasTips">
                    {{tableItem.name}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tableItem,index) in ListFour.body">
                <td>
                    <b>{{index+1}}</b>
                </td>
                <td class="hasTips">{{tableItem.dep}}</td>
                <td>
                    <el-progress :stroke-width="15" :show-text="false" :percentage="tableItem.progress" />
                </td>
                <td class="hasTips">{{tableItem.num}}</td>
            </tr>
            </tbody>
        </table>

        <!--listFive-->
        <div class="ListFive" v-if="type=='listFive'">
                <table cellspacing="0">
                    <tr>
                        <th v-for="(item,index) in ListFive.head">{{item}}</th>
                    </tr>
                    <tr v-for="(item,index) in ListFive.body">
                        <td><b>{{index + 1}}</b></td>
                        <td v-for="it in item.slice(0,item.length-1)">{{it}}</td>
                        <td>
                            <div class="per-axis" v-for="it in item.slice(item.length-1,item.length)">
                                <div class="exp"><i :style="'width: '+ it +';'"></i></div>
                                <div class="tet">{{it}}</div>
                            </div>
                        </td>
                    </tr>
                </table>
        </div>

        <!--listSix-->
        <table class="Listsix" cellspacing="0" v-if="type=='listSix'">
            <thead v-if="ListSix.head">
            <tr>
                <th v-for="tableItem in ListSix.head">
                    {{tableItem}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(tableItem,index) in ListSix.body">
                <td><i>{{index+1}}</i></td>
                <td v-for="tableTd in tableItem">{{tableTd}}</td>
            </tr>
            </tbody>
        </table>

        <!--listSeven-->
        <div class="ListSeven" v-if="type=='listSeven'">
            <ul>
                <li v-for="(listItem,index) in ListSeven.slice(0,Math.ceil(ListSeven.length/2))"><!--前5个-->
                    <i>{{index+1}}</i>
                    <h4 class="hasTips">{{listItem.name}}</h4>
                    <h5><span>{{listItem.num}}</span>{{listItem.unit}}</h5>
                </li>
            </ul>
            <ul>
                <li v-for="(listItem,index) in ListSeven.slice(Math.ceil(ListSeven.length/2),ListSeven.length)"><!--后5个-->
                    <i>{{index+Math.ceil(ListSeven.length/2)+1}}</i>
                    <h4 class="hasTips">{{listItem.name}}</h4>
                    <h5><span>{{listItem.num}}</span>{{listItem.unit}}</h5>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "wioc-list1",
        props: {
            ListFirst:Array,
            type:{
                type: String,
                default:"listFirst",
            },
            ListTwo:Object,
            ListThree:Object,
            ListFour:Object,
            ListFive:Object,
            ListSix:Object,
            ListSeven:Array
        },
        data() {
            return {
                bHtml: "",
                rSwitch: true,
            };
        },
        methods: {
            pMouseIn($event){
                var clientWidth = $event.currentTarget.clientWidth;
                var scrollWidth = $event.currentTarget.scrollWidth;
                if(clientWidth<scrollWidth && this.rSwitch){
                    //alert("已省略……");
                    this.bHtml = $event.currentTarget.innerHTML;
                    var newdiv = document.createElement('div');
                    newdiv.setAttribute("class","extend");
                    newdiv.innerHTML = $event.currentTarget.innerHTML;
                    $event.currentTarget.appendChild(newdiv);
                    this.rSwitch = false;
                }
            },
            pMouseOut($event){
                var clientWidth = $event.currentTarget.clientWidth;
                var scrollWidth = $event.currentTarget.scrollWidth;
                if(clientWidth<scrollWidth){
                    $event.currentTarget.innerHTML = this.bHtml;
                    this.rSwitch = true;
                }
            }
        },
    mounted(){

    }
    }
</script>

<!--list1、2、3、4-->
<style lang="less">
    /*First图形*/
    .list-progress{
        background: linear-gradient(#06092c,#0a1438,#0a183d);
        width: 27rem;
        border-radius: .4rem;
        padding: .3rem 0 0 .1rem;
    li{
        width: 100%;
        position: relative;
        overflow: hidden;
        padding: 5px 0;
    h4{
        float: left;
        width: 100%;
        font-size: 1rem;
        font-weight: normal;
        color: #9fceff;
        line-height: 1rem;
    }
    h5{
        float: left;
        width: 70%;
    }
    h6{
        position: absolute;
        left: 72%;
        margin: 0px;
        bottom: 5px;
        font-size: 1rem;
        font-weight: normal;
        color: #9fceff;
        line-height: 1rem;
    }
    }
    .el-progress-bar__outer{
        background: rgba(39,53,82,.5);
    .el-progress-bar__inner{
        background: linear-gradient(to right,#017bff,#01fef9);
    }
    }
    }

    /*Two图形*/

    .ranking-view{
        position: relative;
        width: fit-content;
    li{
        position: relative;
        background: rgba(36, 205, 211, 0.1);
        height: 3rem;
        width: fit-content;
        margin: 1rem .2rem;
    &:before,&:after{
                  display: block;
                  content: "";
                  position: absolute;
                  top: 0;
                  width: 2rem;
                  height: 3rem;
                  background: url('img/ranking-bg.png') no-repeat center;
                  background-size: contain;
              }
    &:before{
         left: -15px;
     }
    &:after{
         right: -15px;
         transform: rotate(180deg);
     }
    i{
        float: left;
        width: 3rem;
        height: 3rem;
        background: url('img/yuan4.png') no-repeat center;
        margin-left: 1rem;
    }
    &:nth-child(1){
    i{
        background-image: url('img/yuan1.png');
    }
    h4{
        color: #f60;
    }
    }
    &:nth-child(2){
    i{
        background-image: url('img/yuan2.png');
    }
    h4{
        color: #f60;
    }
    }
    &:nth-child(3){
    i{
        background-image: url('img/yuan3.png');
    }
    h4{
        color: #f60;
    }
    }
    h4{
        float: left;
        width: 4rem;
        height: 3rem;
        font-size: 1rem;
        color: #2bb3e2;
        line-height: 3rem;
        margin: 0px 0px 0px 30px;
        transform: translate3d(0, 0, 0);
    }
    a{
        float: left;
        width: 12rem;
        height: 3rem;
        font-size: 1rem;
        color: black;
        line-height: 3rem;
        margin-left: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    h5{
        float: left;
        width: 7rem;
        height: 3rem;
        font-size: 1rem;
        font-weight: normal;
        color: #0ef1ff;
        line-height: 3rem;
        margin-left: 30px;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
    .extend{
        position: absolute;
        top: -5rem;
        left: 0px;
        background: rgba(1,7,12,.8);
        line-height: 70px;
        border: #00c8e0 1px solid;
        padding: 0 20px;
        box-shadow: 0 0 20px #0e93f4;
    }
    }
    &.lozenge{
    li{
    i{
        background-image: url('img/duobian4.png');
    }
    &:nth-child(1){
    i{
        background-image: url('img/duobian1.png');
    }
    }
    &:nth-child(2){
    i{
        background-image: url('img/duobian2.png');
    }
    }
    &:nth-child(3){
    i{
        background-image: url('img/duobian3.png');
    }
    }
    }
    }
    &.diamond{
    li{
    i{
        background-image: url('img/zuan4.png');
    }
    &:nth-child(1){
    i{
        background-image: url('img/zuan1.png');
    }
    }
    &:nth-child(2){
    i{
        background-image: url('img/zuan2.png');
    }
    }
    &:nth-child(3){
    i{
        background-image: url('img/zuan3.png');
    }
    }
    }
    }
    }




    /*Three图形*/
    .table-ranking{
        width: 100%;
        table-layout: fixed;
    thead{
    th{
        text-align: center;
        height: 3rem;
        background: rgba(255,255,255,.05);
        font-size: 1rem;
        font-weight: normal;
        color: black;
    }
    }
    tbody{
    tr{
        font-size: 1rem;
    td{
        height: 3rem;
        color: #9fceff;
        text-align: center;
        border-top: #0090ff 1px dashed;
    &:first-child{
         color: #de8d05;
     }
    }
    &:first-child{
    td{
        border-top: 0;
    }
    }
    }
    }
    &.small{
    thead{
    th{
        height: 74px;
        line-height: 74px;
    }
    }
    tbody{
    tr{
    td{
        height: 84px;
        line-height: 84px;
    }
    }
    }
    }
    .rankUp,.rankUnchanged,.rankDown{
    &:after{
         display: inline-block;
         content: "";
         width: 30px;
         height: 30px;
         background: no-repeat center;
         background-size: 0.5rem;
         vertical-align: middle;
         margin: -5px 0 0 0;
     }
    }
    .rankUp{
    &:after{
         background-image: url(img/rank1.png);
     }
    }
    .rankUnchanged{
    &:after{
         background-image: url(img/rank2.png);
     }
    }
    .rankDown{
    &:after{
         background-image: url(img/rank3.png);
     }
    }
    }


    /*Four图形*/

    .table-top5-progress{
        width: 100%;
        table-layout: fixed;
    thead{
    th{
        text-align: center;
        height: 3rem;
        background: rgba(255,255,255,.05);
        font-size: 1rem;
        font-weight: normal;
    }
    }
    tbody{
    tr{
        font-size: 1rem;
    td{
        height: 3rem;
        color: #9fceff;
        text-align: center;
    b{
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        font-size: 1rem;
        border: #2facd8 1px solid;
        border-radius: 50%;
    }
    }
    }
    }
    .el-progress-bar__outer{
        background: rgba(39,53,82,.5);
    .el-progress-bar__inner{
        background: linear-gradient(to right,#017bff,#01fef9);
    }
    }
    }

</style>

<!--list5、6、7-->
<style lang="less">
    /*第五个*/
    .ListFive{
        th,td{
            text-align: center;
        }
        .per-axis{
            width: 10rem;
            display: inline-flex;
        }
        .exp{
            width: 4rem;
            height: 1rem;
            i{
                float: left;
                display: inline-block;
                height: 100%;
                background: cornflowerblue;
            }
        }
        .tet{
            margin-left:.6rem ;
            font-size: 1rem;
            line-height: 1rem;
        }

    }
    /*第六个*/
    .Listsix{
        width: 100%;
    th{
        height: 3rem;
        font-size: 1rem;
        font-weight: normal;
        color: #339fe3;
        text-align: center;
        padding: .3rem;
    }
    td{
        height: 3rem;
        background: rgba(50,105,199,.1);
        font-size: 1rem;
        color: #fff;
        padding: .3rem;
        text-align: center;
    i{
        display: inline-block;
        width: 2rem;
        height: 2rem;
        background: #4d9ae9;
        font-size: 1rem;
        font-style: normal;
        line-height: 2rem;
        border-radius: 50%;
    }
    }
    tr{
    &:nth-child(odd){
    td{
        background: rgba(50,105,199,.2);
    }
    }
    &:nth-child(1){
    i{
        background: #e94d4d;
    }
    }
    &:nth-child(2){
    i{
        background: #d67b2a;
    }
    }
    &:nth-child(3){
    i{
        background: #e5c554;
    }
    }
    }
    }

    /*第7个*/
    .ListSeven{
        overflow: hidden;
    ul{
        float: left;
        width: 50%;
    li{
        box-sizing: border-box;
        position: relative;
        height: 4rem;
        background: rgba(50, 105, 199, 0.1);
        border: #4b5d87 1px solid;
        border-radius: 1.3rem 1rem 2rem 2rem;
        margin: 2rem;
        padding: 0 7rem 0 5rem;
    i{
        display: block;
        position: absolute;
        top: 50%;
        left: 1rem;
        transform:translateY(-50%);
        z-index: 10;
        width: 2rem;
        height: 2rem;
        background: #4d9ae9;
        font-size: 1.4rem;
        font-style: normal;
        line-height: 2rem;
        text-align: center;
        border-radius: 50%;
    }
    h4{
        margin: 0px;
        position: relative;
        z-index: 10;
        width: 100%;
        font-size: 1.4rem;
        font-weight: normal;
        line-height: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    h5{
        position: absolute;
        top: 0;
        right: 4rem;
        z-index: 10;
        font-size: 1.4rem;
        font-weight: normal;
        line-height: 4rem;
        text-align: center;
    span{
        margin-right: 1rem;
    }
    }
    }
    &:first-child{
    li{
    &:nth-child(1){
    i{
        background: #e94d4d;
    }
    }
    &:nth-child(2){
    i{
        background: #d67b2a;
    }
    }
    &:nth-child(3){
    i{
        background: #e5c554;
    }
    }
    }
    }
    }
    }
</style>
