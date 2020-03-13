<template  lang="html">
<div>
  <!--数字文字结合类型1-->
  <wioc-card class="bevul" v-show="show" :typevalue="type" :title="title">
    <ul class="js-jinri-huanjing">
      <li>
        <div class="v-icon-jinri-huanjing1 v-icon"></div>
        <h4>
          <ICountUp
                  :endVal="parseInt(dagital)"
                  @ready="onReady"
          />
        </h4>
        <h4>{{text}}</h4>
      </li>
    </ul>
  </wioc-card>
  <!--数字文字结合类型2-->
  <wioc-card class="bevel"  v-show="notshow" :title="title" >
    <ul class="js-echarts-likes">
      <li>
        <h3 class="c3">
          <ICountUp
                  :endVal="parseInt(dagital)"
                  :key="Math.random()"
                  @ready="onReady"
          />
        </h3>
        <h4>{{text}}</h4>
      </li>
    </ul>
  </wioc-card>
</div>
</template>

<script>
    import ICountUp from 'vue-countup-v2'
export default {
  name: 'wioc-digital-text1',
  props:{
      "type": {
          type: String,
          default:""
      },
      "title":String,
      "dagital":String,
      "text":String
  },
   data(){
      return{
          show:true,
          notshow:false
      }
   },
    components:{
      ICountUp,
    },
    methods: {
        onReady: function(instance, CountUp) {
           // const that = this;
           // instance.update();
        },
        showfun:function () {
            if (this.type==""&&this.type!=null&&this.type=="typea"){
                this.show=true;
                this.notshow=false;
            } else if (this.type=="typeb"){
                this.show=false;
                this.notshow=true;
            } else {
                return false
            }
        }
    },
    mounted:function () {
            this.showfun()
    }
}
</script>

<style lang="less">//1rem=16px
  .js-jinri-huanjing{
    overflow: hidden;
    padding: 5rem 1.25rem 0 2.5rem;
  li{
    float: left;
    box-sizing: border-box;
    position: relative;
    width: 33.33%;
    padding: 1.25rem 0.625rem 1.25rem 8.75rem;
  .v-icon{
    position: absolute;
    top: 1.25rem;
    left: 0.625rem;
  }
  h4{
    font-size: 2.25rem;
    font-weight: normal;
    //color: #fff;
    color: black;
    line-height: 3.125rem;
  }
  }
  }
  .v-icon-jinri-huanjing1{
    width: 7.125rem;
    height: 7rem;
    background: url("img/digital-text1/icon-jinri-huanjing1.png") no-repeat;
    background-size: 6.5625rem 6.9375rem ;
  }
  .js-echarts-likes{
    overflow: hidden;
    text-align: center;
    padding: 0.3125rem 1.25rem;
    li{
      //float: left;
      display: inline-block;
      box-sizing: border-box;
      position: relative;
      //width: 25%;
      padding:0.9375rem 0;
      h3{
        width: 8rem;
        height: 8rem;
        font-size: 3rem;
       // color: #fff;
        color: black;
        line-height: 8rem;
        text-align: center;
        border: #fff 0.9375rem solid;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        margin: 0.9375rem auto;
        &.c1{
          border-color: #3fa1ff;
        }
        &.c2{
          border-color: #3ecbcb;
        }
        &.c3{
          border-color: #4ec879;
        }
        &.c4{
          border-color: #f9d345;
        }
        &.c5{
          border-color: #f2637b;
        }
        &.c6{
          border-color: #9260e2;
        }
      }
      h4{
        font-size: 2.25rem;
        font-weight: normal;
       // color: #fff;
        color: black;
        line-height: 2.5rem;
        text-align: center;
        margin-top: 0.9375rem;
        small{
          display: block;
          font-size: 1.75rem;
        }
      }
    }
  }
</style>
