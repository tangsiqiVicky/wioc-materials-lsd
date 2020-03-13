<template lang="html">
  <div id="topMenu1" class="mid-top-menu">
    <span></span>
    <ul>
      <li v-for="(topMenuItem,index) in topMenuList" :class="nowMenu == index ? 'active':''">{{topMenuItem.name}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'wioc-menu1',
  props: ['topMenuList'],
    data () {
        return {
            floatId:'1F',
            canvasId:'canvas1F',
            nowMenu:0,
            nowFloor:0,
           /* countHallWindow:{
                '1F':12,
                '2F':26,
                '3F':24,
            },*/
        }
    },
    mounted(){
        this.menuTopAct("#topMenu1",2);
    },
    methods: {
        menuTopAct(box,ratio){
            let __that = this;
            var startY,moveYin,moveY,scrollStart,scrollEnd,scrollMax,boxHeight,actNow;
            var movebox = $(box).children();
            var childbox = movebox.children();
            $(box).on("click", "li", function(){
                actNow = $(this).index();
                boxHeight = $(this).height();
                $(this).addClass("active").siblings().removeClass("active");
                movebox.stop(true,true).animate({marginTop:-boxHeight*actNow},500);
                __that.nowMenu = actNow;
                __that.nowFloor = 0;
                $(".map-bubble").fadeIn(200);
            });
            $(box).on("touchstart", function(e) {
                boxHeight = childbox.height();
                scrollMax = movebox.height() - $(this).height() + boxHeight*2.75;
                scrollStart = parseInt(movebox.css("marginTop"));
                startY = e.originalEvent.changedTouches[0].pageY;
            });
            $(box).on("touchmove", function(e) {
                moveYin = startY - e.originalEvent.changedTouches[0].pageY;
                moveY = moveYin*ratio;
                scrollEnd = scrollStart - moveY;
                if(scrollEnd >= -scrollMax){
                    movebox.css({marginTop:scrollEnd});
                }else{
                    movebox.css({marginTop:-scrollMax});
                }
                if(scrollEnd>boxHeight*0.75){
                    movebox.css({marginTop:boxHeight*0.75});
                }
            });
            $(box).on("touchend", function(e) {
                //      if (e.cancelable) {
                //          if (!e.defaultPrevented) {
                //              e.preventDefault();
                //          }
                //      }
                if(startY - e.originalEvent.changedTouches[0].pageY!=0){
                    actNow = Math.round(-scrollEnd/boxHeight);
                    if(actNow<0){
                        actNow = 0;
                    }
                    if(actNow>childbox.length-1){
                        actNow = childbox.length-1;
                    }
                    childbox.removeClass("active").eq(actNow).addClass("active");
                    movebox.stop(true,true).animate({marginTop:-boxHeight*actNow},500);
                    __that.nowMenu = actNow;
                    __that.nowFloor = 0;
                    $(".map-bubble").fadeIn(200);
                }
            });
        },
       /* checkWhole(index) {
            this.nowMenu = index;
            this.nowFloor = 0;
        },*/
       /* scrollAction(action){
            console.log('action',action);
                this.canvasId='canvas'+action
            this.floatId = action
            this.UPDATE_HALL_ID(action);
        },*/
    },
    watch:{
    }
}
</script>

<style lang="less">
  .mid-top-menu{ //1rem=40px
      position: relative;
    z-index: 100;
    overflow: hidden;
      width: 12.25rem;
      height: 9.45rem;
    &:before,
    &:after{
      display: block;
      content: "";
      position: absolute;
      top: 0;
        width: 1.175rem;
        height: 10rem;
        /*background: url("./img/mid-top-menu-line.png") no-repeat center ;*/
        background-size: 1.1rem 10rem;
    }
    &:before{
        left: 1rem;
    }
    &:after{
        right: 0.375rem;
    }
    ul{
      position: relative;
      z-index: 10;
        padding-top: 3.15rem;
      li{
          height: 3.15rem;
          /*background: url("./img/mid-top-menu-bg.png") no-repeat center;*/
          background-size: 11.6rem 2.825rem;
          font-size: 1rem;
        color: #fff;
        line-height: 3.15rem;
        text-align: center;
        margin-left: 0.5rem;
        cursor: pointer;
        opacity: .8;
        text-shadow: 0.05rem 0.05rem 0.08rem #031966;
        transform: skewX(-14deg) scale(.75,.75);
        transition: all .5s;
        &.active{
            /*background-image: url("./img/mid-top-menu-bgc.png");*/
            background-size: 11.6rem 2.825rem;
          margin: 0;
          cursor: default;
          opacity: 1;
          transform:skewX(0deg);
          &~li{
              margin-left: 0.25rem;
            transform: skewX(10deg) scale(.75,.75);
          }
        }
      }
    }
    &.s2{
      ul{
        li{
          &.active{
            box-sizing: border-box;
            background: rgba(20,100,170,.8);
              line-height: 2.65rem;
            border: rgba(20,100,170,.3) 10px solid;
            transform: skewX(0deg) scale(.75,.75);
              box-shadow: 0 0 0.75rem #3592df inset;
          }
        }
      }
    }
  }
</style>
