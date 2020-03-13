<template  lang="html">
<div>

  <!--数字文字结合类型2-->
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
