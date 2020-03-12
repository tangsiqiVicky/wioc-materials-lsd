<template >
  <div>
  <Typea v-if="showa" :typevalue="type" :midList="datalist"></Typea>
  <Typeb v-else-if="showb" :followList="datalist.arr"></Typeb>
  <Typec v-else-if="showc" :title="datalist.title" :infoHallWindow="datalist.arr" ></Typec>
  </div>
</template>

<script>

  import Typea from './canvas1/canvas1-itemA'
  import Typeb from './canvas1/canvas1-itemB'
  import Typec from './canvas1/canvas1-itemC'
    export default {
        name: "wioc-canvas1",
        props:{
            "type": {
                type: String,
                default:""
            },
           "datalist":{

           }
        },
        data(){
            return{
                showa:true,
                showb:false,
                showc:false,
            }
        },
        methods:{
            showfun:function () {
                if (this.type==""&&this.type!=null&&this.type=="typea"){
                    this.showa=true;
                } else if (this.type=="typeb"){
                    this.showa=false;
                    this.showb=true;
                } else if(this.type=="typec") {
                    this.showa=false
                    this.showc=true;

                }else {
                    return false
                }
            }
        },
        mounted:function () {
            this.showfun()
        },
        components: {
            Typea,
            Typeb,
            Typec
        },

    }
</script>

<style lang="less">
</style>

